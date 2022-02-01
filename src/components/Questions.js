import './Questions.css';
import praktikakohvik2019 from '../img/png/praktikakohvik2019.jpg';
import { useContext } from "react";
import { srcContext } from "../SrcContext.js";

const Questions = () => {
    const { language } = useContext(srcContext);

    return (
        <div className='boxedd'>
            <img src={praktikakohvik2019} alt="praktikakohvik 2019"/>
			<h3>{language.questions.questionTitle}</h3>
			<h2>
				<br/>{language.questions.questionContent.info}
				<br/>{language.questions.questionContent.Question1}
				<br/>{language.questions.questionContent.Question2}
				<br/>{language.questions.questionContent.Question3}
				<br/>{language.questions.questionContent.Question4}
				<br/>{language.questions.questionContent.Question5}
				<br/>{language.questions.questionContent.Question6}
				<br/>{language.questions.questionContent.Question7}
			</h2>
        </div>
    )
};

export default Questions;