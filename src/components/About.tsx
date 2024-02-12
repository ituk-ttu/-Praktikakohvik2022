import { useTranslation } from 'react-i18next'
import styled from 'styled-components'

const About = () => {
    const { t } = useTranslation();

    return (
        <AboutContainer>
            <h2>{t('about.aboutTitle')}</h2>
			<p>{t('about.aboutContent')}</p>
        </AboutContainer>
    )
};

export default About;

const AboutContainer = styled.div`
    display: flex;
    flex-direction: column;

    p {
        column-count: 2;
        white-space: pre-wrap;
    }

    @media all and (max-width: 700px){
         p {
            column-count: 1;
        }
    }
`
