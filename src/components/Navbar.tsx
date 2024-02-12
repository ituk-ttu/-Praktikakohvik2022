import enFlag from '../assets/img/svg/en_lipp.svg'
import etFlag from '../assets/img/svg/et_lipp.svg'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'

const Navbar = () => {
    const { t, i18n } = useTranslation()

    return (
        <NavContainer>
            <img alt='flag' 
                src={(i18n.language === 'en') ? enFlag : etFlag} 
                onClick={ () => (i18n.language === 'en') ? i18n.changeLanguage('et') : i18n.changeLanguage('en') }
            >
            </img>
            <nav>
                <h1 id='nav-header'>PRAKTIKAKOHVIK</h1>
                <div className='container-countdown'>
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
                    <div className='container-second'>
                        <h1 className='secondNr'>0</h1>
                        <h3>{t('countDown.second')}</h3>
                    </div>
                </div>
            </nav>
        </NavContainer>
    )
};

export default Navbar;

window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    if (Math.ceil(scrolled) < 350) {
        document.querySelector('nav')!.style.top = '-65px';
    } else {
        document.querySelector('nav')!.style.top = '0px';
    }
})

const NavContainer = styled.div`
    nav {
        height: 60px;
        width: 100%;
        top: -65px;
        padding: 0 50px 0 50px;
        box-sizing: border-box;
        background: rgb(255,158,56);
        background: linear-gradient(90deg, rgba(255,158,56,1) 10%, rgba(255,103,118,1) 100%);
        position: fixed;
        z-index: 100;
        transition: top 0.5s;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    #nav-header {
        font-size: 28px;
        line-height: 24px;
        padding: 15px 0;
        margin-left: 20px;
    }

    nav .container-countdown {
        float: right;
        display: flex;
    }

    nav .container-countdown div {
        width: 75px;
        text-align: center;
    }

    nav .container-countdown h3 {
        font-size: 13px;
    }

    nav .container-countdown h1 {
        padding-top: 3px;
        font-size: 30px;
        letter-spacing: normal;
    }

    img {
        cursor: pointer;
        position: fixed;
        top: 14px;
        left: 25px;
        z-index: 101;
        width: 30px;
        height: auto;
    }

    @media all and (max-width: 900px){
        img {
            left: auto;
            right: 20px;
        }
    }

    @media all and (max-width: 700px){
        nav {
            height: 65px;
            flex-direction: column;
            justify-content: center;
        }
        
        #nav-header {
            margin: 0;
            font-size: 20px;
            padding-top: 0;
            padding-bottom: 1px;
        }

        img {
            top: 17px;
        }

        nav .container-countdown div {
            width: 50px;
        }

        nav .container-countdown h3 {
            font-size: 8px;
        }
        
        nav .container-countdown h1 {
            font-size: 20px;
            padding-top: 0;
        }
    }
`