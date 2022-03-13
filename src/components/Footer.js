import './Footer.css';
import ITUKandTalTechLogo from '../img/svg/ituktaltechlogo.svg';
import envelopeLogo from '../img/svg/envelope.svg';
import locationLogo from '../img/svg/geo-alt-fill.svg';
import facebookLogo from '../img/svg/facebook.svg';
import instagramLogo from '../img/svg/instagram.svg';
import ITUKLogo from '../img/svg/ituk.svg';

const Footer = () => {
    return (
        <footer>
			<section>
				<img src={ITUKandTalTechLogo} alt="Footer Logo" id="logo"/>
				<div id="contact">
					<img src={envelopeLogo} alt="envelope" id="envelope"/>
					<img src={locationLogo} alt="location" id="location"/>
					<h2 id="meil">kontakt@ituk.ee</h2>
					<h2 id="loc">Akadeemia tee 15a,<br/>ICT-361</h2>
				</div>
				<div id="links">
					<a href="https://www.facebook.com/ituk.taltech/" target="_blank"><img src={facebookLogo} alt="ITÜK Facebook"/></a>
					<a href="https://www.instagram.com/ituk.taltech/?hl=en" target="_blank"><img src={instagramLogo} alt="ITÜK Instagram"/></a>
					<a href="https://ituk.ee/" target="_blank"><img src={ITUKLogo} alt="ITÜK Veebileht"/></a>
				</div>
			</section>
			<hr/>  
			<h2 id="footer">© 2022 ITÜK. All rights reserved.</h2>
		</footer>
    )
};

export default Footer;