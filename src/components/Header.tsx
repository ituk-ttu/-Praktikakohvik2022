import logo from '../assets/img/svg/pk_logo.svg'
import BG from '../assets/img/png/PK2023_0.jpg'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'

const Header = () => {
    const { t } = useTranslation();

    return (
        <HeaderContainer>
            <div className='header-bg'>
                <div id='img-filter'></div>
                <img src={ BG } alt='Event' />
            </div>
            <header>
                <img src={ logo } alt='PK Logo' id='pk-logo' />
                <h3 id='header-date'>{t('header.date')}</h3>
                
                <section className='countdown'>
                    <div className='container-day'>
                        <h1 className='dayNr'>0</h1>
                        <h3>{t('countDown.day')}</h3>
                    </div>
                    <div className='container-hour'>
                        <h1 className='hourNr'>0</h1>
                        <h3>{t('countDown.hour')}</h3>
                    </div>
                    <div className='container-minute'>
                        <h1 className='minuteNr'>0</h1>
                        <h3>{t('countDown.minute')}</h3>
                    </div>
                    <div className="container-second">
                        <h1 className="secondNr">0</h1>
                        <h3>{t('countDown.second')}</h3>
                    </div>
                </section>
            </header>
        </HeaderContainer>
    )
};

export default Header;

const HeaderContainer = styled.div`
    .header-bg {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 80vh;
        max-height: 800px;
        overflow: hidden;
        object-fit: cover;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .header-bg img {
        position: absolute;
        min-width: 100%;
        min-height: 100%;
    }

    #pk-logo {
        position: relative;
        left: -30px;
        width: 620px;
        height: auto;
    }

    #img-filter {
        height: 100%;
        width: 100%;
        z-index: 1;
        background: rgb(255,158,56);
        background: linear-gradient(0deg, rgba(255,158,56,1) 10%, rgba(255,103,118,0.633578431372549) 100%);
    }

    header {
        position: relative;
        z-index: 5;
        height: 80vh;
        max-height: 800px;
        display: flex;
        justify-content: center;
        flex-direction: column;
    }

    #header-title {
        letter-spacing: 8px;
    }

    #header-date {
        margin: 15px 0;
        padding-left: 5px;
        font-size: 25px;
    }

    .countdown {
        display: flex;
        text-align: center;
        padding-left: 5px;
    }

    .countdown div {
        border: 1px solid #ffffff48;
        background-color: rgba(255, 255, 255, 0.1);
        border-bottom: 4px solid #FFFFFF;
        margin-right: 10px;
        width: 110px;
        height: 105px;
    }

    .countdown div h3 {
        font-size: 13px;
    }

    .countdown div h1 {
        padding-top: 25px;
        font-size: 45px;
        letter-spacing: normal;
    }

    @media all and (max-width: 900px){
        #pk-logo {
            left: 10px;
        }
    }

    @media all and (max-width: 700px){
        #pk-logo {
            left: 0;
            width: 300px;
        }

        #header-title {
            font-size: 45px;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.521);
        }

        #header-date {
            font-size: 15px;
        }

        header, .header-bg {
            height: 300px;
        }

        .header-bg img {
            height: 100%;
        }

        .countdown div{
            width: 56px;
            height: 56px;
            box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.521);
        }

        .countdown div h1 {
            padding-top: 10px;
            font-size: 27px;
        }

        .countdown div h3 {
            font-size: 10px;
        }

        .header-bg {
            align-items: center;
            justify-content: center;
        }
    }
`