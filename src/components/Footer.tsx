import ITUKandTalTechLogo from '../assets/img/svg/ituktaltechlogo.svg'
import locationLogo from '../assets/img/svg/geo-alt-fill.svg'
import instagramLogo from '../assets/img/svg/instagram.svg'
import facebookLogo from '../assets/img/svg/facebook.svg'
import envelopeLogo from '../assets/img/svg/envelope.svg'
import ITUKLogo from '../assets/img/svg/ituk.svg'
import styled from 'styled-components'

const Footer = () => {
    return (
        <FooterrContainer>
			<section>
				<img src={ ITUKandTalTechLogo } alt='ITÜK Logo' id='logo'/>
				<div id='contact'>
					<img src={ envelopeLogo } alt='email'/>
					<img src={ locationLogo } alt='location' id='location'/>
					<h3 id='meil'>kontakt@ituk.ee</h3>
					<h3 id='loc'>Akadeemia tee 15a,<br/>ICT-361</h3>
				</div>
				<div id='links'>
					<a href='https://www.facebook.com/ituk.taltech/' rel='noreferrer' target='_blank'><img src={ facebookLogo } alt='ITÜK Facebook'/></a>
					<a href='https://www.instagram.com/ituk.taltech/?hl=en' rel='noreferrer' target='_blan'><img src={instagramLogo} alt='ITÜK Instagram'/></a>
					<a href='https://ituk.ee/' rel="noreferrer" target='_blank'><img src={ITUKLogo} alt='ITÜK Veebileht'/></a>
				</div>
			</section>
			<hr/>  
			<h3 id='copyright'>© { new Date().getFullYear() } ITÜK. All rights reserved.</h3>
		</FooterrContainer>
    )
};

export default Footer;

const FooterrContainer = styled.footer`
    section {
        padding: 25px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
    }

    div {
        margin: 10px;
    }

    #logo {
        width: 250px;
    }

    #contact {
        display: grid;
    }

    #location {
        grid-row: 2;
        grid-column: 1;
    }

    #meil {
        padding-left: 5px;
        grid-row: 1;
        grid-column: 2;
    }

    #loc {
        padding-left: 5px;
        grid-row: 2;
        grid-column: 2;
    }

    hr {
        margin-top: 0;
        height:2px;
        width: 90%;
        border-width:0;
        background-color:white;
    }

    #copyright {
        padding-top: 25px;
        padding-bottom: 25px;
        text-align: center;
    }

    #links {
        display: flex;
        justify-content: center;
        width: 200px;
    }

    #links a {
        display: block;
        height: 30px;
        width: 30px;
        margin: 0 5px;
        padding: 0;
        border: 2px solid transparent;
        border-radius: 30px;
    }

    #links a:hover {
        border-color: #ff6776;
        box-shadow: #ff6776 0 0 15px;
    }

    @media all and (max-width: 700px) {
        section {
            flex-direction: column;
        }

        #links a {
            border: none;
        }
        
        #links a:hover {
            border: none;
        }
    }
`