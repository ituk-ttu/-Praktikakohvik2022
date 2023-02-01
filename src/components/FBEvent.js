import './FBEvent.css';
import FBEventImage from "../img/png/FBEvent.PNG"
import facebookLogo from '../img/svg/facebook.svg';
import { useContext } from "react";
import { srcContext } from "../SrcContext.js";

const FBEvent = () => {
    const { language } = useContext(srcContext);

    return (
        <div className='container-fb'>
            <div className='title'>
                <img className='logo' src={facebookLogo} alt="ITÜK Facebook"/>
                <h2>{language.FBlink.title}</h2>
            </div>
            <a href="https://fb.me/e/2kBO1xmGZ" rel="noreferrer" target="_blank">
                <img src={FBEventImage} alt='FB link'></img>
            </a>
        </div>
    )
};

export default FBEvent;