import './Firms.css';
import { useContext, useState } from "react";
import { srcContext } from "../SrcContext.js";

const Firms = () => {
    const { language } = useContext(srcContext);
    const [firmsText, setFirmsText] = useState('Guide');

    const [borderStyle, setBorderStyle] = useState({border: "2px", borderStyle: "dashed", borderColor: "white", marginTop: "25%"});
    const [textStyle, setTextStyle] = useState({textAlign: "center", fontSize: "25px", paddingTop: "50px"});
    const [logosStyle, setLogosStyle] = useState({height: "0px", visibility: "hidden"});

    function click(clickedButton) {
		var firmsName = clickedButton.currentTarget.classList.value;
		firmsName.length === 1 ? setFirmsText("Undefined") : setFirmsText(firmsName);
		RemoveStyles(setBorderStyle, setTextStyle, setLogosStyle);
		clickedButton.currentTarget.style.backgroundColor = '#FF0063';
    }

    return (
        <div className="container-firms">
            <section className="firms-list">
				<h3>{language.firms.firmsTitle}</h3>
				<ul>
					<li><button onClick={(e) => click(e)} className="A_dcash"><h2>Adcash</h2></button></li>
				    <li><button onClick={(e) => click(e)} className="ArtecDesign"><h2>Artec Design</h2></button></li>
				    <li><button onClick={(e) => click(e)} className="BaitPartner"><h2>Bait Partner OÜ</h2></button></li>
					<li><button onClick={(e) => click(e)} className="Cybernetica"><h2>Cybernetica AS</h2></button></li>
				    <li><button onClick={(e) => click(e)} className="Devtailor"><h2>Devtailor</h2></button></li>
					<li><button onClick={(e) => click(e)} className="EestiEnergia"><h2>Eesti Energia</h2></button></li>
					<li><button onClick={(e) => click(e)} className="Eleport"><h2>Eleport</h2></button></li>
					<li><button onClick={(e) => click(e)} className="Finestmedia"><h2>Finestmedia</h2></button></li>
					<li><button onClick={(e) => click(e)} className="Fujitsu"><h2>Fujitsu Estonia</h2></button></li>
					<li><button onClick={(e) => click(e)} className="Itestra"><h2>Itestra</h2></button></li>
				    <li><button onClick={(e) => click(e)} className="LumavCommerce"><h2>Lumav Commerce OÜ</h2></button></li>
					<li><button onClick={(e) => click(e)} className="PowerUp"><h2>Power Up Fuel Cells OÜ</h2></button></li>
					<li><button onClick={(e) => click(e)} className="SEB"><h2>SEB Pank</h2></button></li>
					<li><button onClick={(e) => click(e)} className="SpinTEK"><h2>Spin TEK</h2></button></li>
					<li><button onClick={(e) => click(e)} className="Statistikaamet"><h2>Statistikaamet</h2></button></li>
				    <li><button onClick={(e) => click(e)} className="Swedbank"><h2>Swedbank</h2></button></li>
					<li><button onClick={(e) => click(e)} className="Telia" id='Added'><h2>Telia ({language.firms.new})</h2></button></li>
				    <li><button onClick={(e) => click(e)} className="R"><h2>...</h2></button></li>
					<li><button onClick={(e) => click(e)} className="S" id='firstFade'><h2>...</h2></button></li>
					<li><button onClick={(e) => click(e)} className="T" id='secondFade'><h2>...</h2></button></li>
				</ul>
			</section>

			<div className="container-grid">
				<img src={require("../img/png/" + language.firms.map + ".png")} id='map' alt="Aula"/>
				
				<section style={borderStyle} className="firms-info">
					<div style={logosStyle} className='image-container'>
						<img src={require("../img/firms/" + (firmsText === 'Guide' ? 'Undefined' : firmsText) + "-logo.png")} alt="firmsLogo"/>
					</div>
					<h2 style={textStyle}>{language.firmList[firmsText].replaceAll('\\n', '\n')}</h2>
				</section>
			</div>
        </div>
    )
};

export default Firms;

function RemoveStyles(setBorderStyle, setTextStyle, setLogosStyle) {
	var arrayOfFirmNameButtons = document.getElementsByTagName("UL")[0];
	for (let i = 0; i < arrayOfFirmNameButtons.getElementsByTagName("BUTTON").length; i++) {
		arrayOfFirmNameButtons.getElementsByTagName("BUTTON")[i].style.cssText = '';
	}
	setBorderStyle({border: '', borderStyle: '', borderColor: '', marginTop: ''});
	setTextStyle({textAlign: '', fontSize: '', paddingTop: ''});
	setLogosStyle({height: '', visibility: ''});
}