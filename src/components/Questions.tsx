import praktikakohvik2022 from '../assets/img/png/PK2022_1.jpg'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'

const Questions = () => {
    const { t } = useTranslation();

    return (
        <QuestionsContainer>
            <div className='text'>
                <h2>{t('questions.questionTitle')}</h2>
                <p>{t('questions.questionContent')}</p>
                <ul>
                    <li>{t('questions.question1')}</li>
                    <li>{t('questions.question2')}</li>
                    <li>{t('questions.question3')}</li>
                    <li>{t('questions.question4')}</li>
                    <li>{t('questions.question5')}</li>
                    <li>{t('questions.question6')}</li>
                </ul>
            </div>
            <div className='image'>
                <img src={ praktikakohvik2022 } alt='Praktikakohvik 2022'/>
            </div>
        </QuestionsContainer>
    )
};

export default Questions;

const QuestionsContainer = styled.div`
    display: flex;
    justify-content: center;

    .image {
        width: 400px;
        height: 279px;
        overflow: hidden;
        object-fit: cover;
        display: flex;
        align-items: center;
        border-radius: 10px;
    }

    img {
        height: 100%;
        border-radius: 10px;
    }

    ul {
        margin: 0;
        padding-left: 25px;
    }

    .text {
        width: 670px;
        margin-right: 50px;
        display: flex;
        flex-direction: column;
        white-space: pre-wrap;
    }

    .text h2 {
        text-align: left;
    }

    @media all and (max-width: 983px){
        .image {
            display: none;
        }

        .text {
            width: auto;
            margin-right: 0;
        }
    }
`
