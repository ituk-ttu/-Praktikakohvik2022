import { useTranslation } from 'react-i18next'
import { useState, useEffect } from 'react'
import styled from 'styled-components'

const FirmsInfoPlaceholder = ({ isLoading, firmsCount, mapStatus } : { isLoading:boolean, firmsCount:number, mapStatus: boolean }) => {
    const [ totalIntervalTime, setTotalIntervalTime] = useState(0)
    const [ loadingText, setLoadingText ] = useState('')
    const { t } = useTranslation()

    useEffect(() => {
		const interval = setInterval(function() {
			if (isLoading)
			{
				setLoadingText(() => loadingText === ' . . .' ? '' : loadingText + ' .')
				setTotalIntervalTime(setTotalIntervalTime => setTotalIntervalTime += 500)
			}
			else 
			{
				setLoadingText('')
				setTotalIntervalTime(0)
			}
		}, 500);
		return () => clearInterval(interval)
    });

    return (
		<PlaceholderContainer>
			<p>
				{
					isLoading
					?	t('firmList.Loading') + loadingText
					:	firmsCount === 0
						? 	t('firmList.Undefined')
						:	mapStatus ? t('firmList.GuideMap')  : t('firmList.Guide') 
				}
			</p>
			<h3>{totalIntervalTime >= 15000 ? t('firmList.Apology') : ''}</h3>
		</PlaceholderContainer>
    )
};

export default FirmsInfoPlaceholder;

const PlaceholderContainer = styled.section`
    border: 2px dashed #FFFFFF;
    height: 150px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    position: sticky;
    margin-top: 25%;
    margin-bottom: 20%;
    top: 45%;

    p {
        text-align: center;
        font-size: 20px;
        padding: 0px 70px;
    }

    h3 {
        text-align: center;
        font-size: 13px;
    }


    @media all and (max-width: 700px) {
        position: relative;
        top: 5%;
        margin-top: 0;
        margin-bottom: 0;

        p {
            padding: 0;
        }
    }
`
