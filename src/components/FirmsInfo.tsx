import placeholder from '../assets/img/png/placeholder.png'
import { baseAddress } from '../helpers/BaseAddress'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import { Firm } from '../models/Firm'
import { useState } from 'react'

const FirmsInfo = (firm: Firm) => {
    const [ imageLoading, setImageLoading] = useState(true)
    const { t, i18n } = useTranslation()

    return (
		<InfoContainer>
			<div className={ imageLoading ? 'image-container loading' : 'image-container' }>
				<img 
					style={ imageLoading ? { display: 'block' } : { display: 'none' } } 
					src={ placeholder } alt='Firms logo'/>
				<img
					src={ baseAddress + 'firms/' + firm.id + '/image/1' }
					style={ imageLoading ? { display: 'none' } : { display: 'block' } }
					onLoad={ () => setImageLoading(false) }
					alt='Firms logo'
				/>
			</div>
			<p className='firms-text'>
				{
					(i18n.language === 'et' 
						? firm.estonianDescription ?? firm.englishDescription
						: firm.englishDescription ?? firm.estonianDescription) 
						?? t('firmList.Guide')
				}
			</p>
		</InfoContainer>
    )
};

export default FirmsInfo;

const InfoContainer = styled.div`
    .firms-text {
        padding-left: 2px;
        padding-right: 2px;
        text-align: left;
        white-space: pre-wrap;
        word-wrap: break-word;
        text-overflow: ellipsis; 
    }

    .image-container {
        border-radius: 7px;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 20px;
        width: 100%;
        max-width: 300px;
        aspect-ratio: 3.5 / 1;
        border: solid;
        border-left: solid 15px;
        border-right: solid 15px;
        border-color: white;
        background-color:  white;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .loading {
        border-color: transparent;
        animation: skeleton-loading 1s linear infinite alternate;
    }

    @keyframes skeleton-loading {
        0% {
            background-color: hsl(0, 0%, 76%);
        }
        100% {
            background-color: hsl(0, 0%, 100%);
        }
    }

    img {
        max-width: 100%;
        max-height: 100%;
        height: auto;
    }

    @media all and (max-width: 700px) {
        h2 {
            text-align: left;
            font-size: 15px;
        }

        .firms-text {
            word-break: break-word;
        }

        .image-container {
            width: auto !important;
            max-width: 200px;
            aspect-ratio: 3.5 / 1;
        }
    }
`
