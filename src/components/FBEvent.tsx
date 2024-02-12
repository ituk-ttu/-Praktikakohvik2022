import facebookLogo from '../assets/img/svg/facebook.svg'
import FBEventImage from '../assets/img/png/FBEvent.png'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'

const FBEvent = () => {
    const { t } = useTranslation()

    return (
        <EventContainer>
            <div className='title'>
                <img className='logo' src={ facebookLogo } alt='Facebook logo'/>
                <h2>{t('FBlink.title')}</h2>
            </div>
            <a href='https://fb.me/e/205JLCuhO' rel='noreferrer' target='_blank'>
                <img src={ FBEventImage } alt='Facebook event link'></img>
            </a>
        </EventContainer>
    )
};

export default FBEvent;

const EventContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    padding-top: 40px;

    .title {
        padding-left: 25%;
        margin-bottom: 20px;
        display: flex;
    }

    .title h2 {
        font-size: 22px;
        width: 150px;
        text-align: left;
        line-height: 1.1;
    }

    .logo {
        width: 38px;
        padding-right: 10px;
    }

    a {
        margin-left: auto;
        margin-right: auto;
        width: 60%;
        max-width: 500px;
        height: auto;
    }

    a img {
        width: 100%;
        height: auto;
        transition: 0.1s;
        box-shadow: #0000005e 0px 8px 24px;
        border: 3px solid #0000001a;
    }

    a img:hover {
        border-color: #ff6776;
        box-shadow: #ff6776 0px 8px 24px;
    }

    @media all and (max-width: 700px){
        .title {
            padding-left: 0;
        }

        a {
            width: 100%;
            max-width: 300px;
        }

        a img {
            border: none;
        }
        
        a img:hover {
            border-color: none;
            box-shadow: #0000005e 0px 8px 24px;
        }
    }
`