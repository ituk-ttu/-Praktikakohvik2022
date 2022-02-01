import './About.css';
import { useContext } from "react";
import { srcContext } from "../SrcContext.js";

const About = () => {
    const { language } = useContext(srcContext);

    return (
        <div className='container-about'>
            <h3>{language.about.aboutTitle}</h3>
			<h2>{language.about.aboutContent.firstHalf}<br/><br/>{language.about.aboutContent.secondHalf}</h2>
        </div>
    )
};

export default About;