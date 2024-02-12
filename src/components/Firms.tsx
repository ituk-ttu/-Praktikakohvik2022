import FirmsInfoPlaceholder from './FirmsInfoPlaceholder'
import { baseAddress } from '../helpers/BaseAddress'
import usePreload from '../helpers/usePreload'
import { useTranslation } from 'react-i18next'
import { Response } from '../models/Response'
import { useState, useEffect } from 'react'
import useAPI from '../helpers/useAPI'
import styled from 'styled-components'
import { Firm } from '../models/Firm'
import FirmsInfo from './FirmsInfo'
import FirmsMap from './FirmsMap'

const Firms = () => {
    const [ selectedFirm, setSelectedFirm ] = useState<Firm>()
    const [ mapStatus, setMapStatus ] = useState(false)
    const [ firms, setFirms ] = useState<Firm[]>([])
    const [ clicked, setClicked ] = useState(false)
    const [ loading, setLoading ] = useState(true)
    const { preloadImages } = usePreload()
    const { getMethod } = useAPI()
    const { t } = useTranslation()

    useEffect(() => {
        const loadFirmsAndImages = async () => {
            try {
                const response: Response = await getMethod('firms')
                const sources = response.firms.map(firm => baseAddress + 'firms/' + firm.id + '/image/1')
                preloadImages(sources)
                setMapStatus(response.displayMap)
                setFirms(response.firms)
            } catch {
                setMapStatus(false)
                setFirms([])
            }
            setLoading(false)
        }
        loadFirmsAndImages()
    }, [])

    function click(firm: Firm) {
		setClicked(true)
		if (selectedFirm == undefined || firm.id !== selectedFirm.id)
		{
			const filteredFirm = firms.filter((x) => x.id === firm.id)[0]
			setSelectedFirm(filteredFirm)
		}
    }

    return (
        <FirmsContainer>
			<div className='container-grid'>
				<h2 id='firms-title'>{t('firms.firmsTitle')}</h2>
				<section className='firms-list'>
                    {
                        firms.length == 0 
                        ? <ul>
                            <li><button><h3>...</h3></button></li>
                            <li id='f2'><button><h3>...</h3></button></li>
                            <li id='f3'><button><h3>...</h3></button></li>
                        </ul>
                        : <ul>{
                            firms.map((firm:Firm) => (
                                <li key={firm.name}>
                                    <button className={selectedFirm != undefined && firm.name === selectedFirm.name ? 'active' : ''} onClick={() => click(firm)}>
                                        <h3>{firm.name}</h3>
                                    </button>
                                </li>
                            ))}
                        </ul>
                    }
				</section>

				<section className='firms-map'>
					{
						mapStatus
							?   <FirmsMap selectedFirm={selectedFirm!} firms={firms} clickFunction={click} />
							:	<FirmsMap selectedFirm={selectedFirm!} firms={[]} clickFunction={click} />
					}
				</section>
				
				<section className='firms-info'>
					{ 
						!clicked
							?   <FirmsInfoPlaceholder isLoading={loading} firmsCount={firms.length} mapStatus={mapStatus} />
							:   <FirmsInfo {...selectedFirm!} />  
					}
				</section>
			</div>
        </FirmsContainer>
    )
};

export default Firms;

const FirmsContainer = styled.div`
    width: 100%;
    margin: 60px 0;
    padding: 0 50px;

    .firms-list {
        float: left;
        max-width: 222px;
        margin: 0;
    }

    .firms-list li:hover{
        background-color: #ff6776;
        transition: 0.2s;
    }

    .firms-list button{
        cursor: pointer;
        background-color: transparent;
        border: none;
        width: 100%;
        padding: 1px 2px;
    }

    .firms-list .active{
        background-color: #ff6776;
    }

    .firms-list h3 {
        text-align: left;
        font-size: 17px;
        font-weight: 200;
        border-bottom: 1px solid #ff6776;
    }

    .firms-list h2{
        padding-left: 10px;
        padding-right: 0;
    }

    .firms-list ul {
        list-style-type: none;
        font-weight: bold;
        padding: 0;
    }

    #f2 {
        opacity: 0.5;
    }

    #f3 {
        opacity: 0.25;
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

    .container-grid {
        display: grid;
        grid-template-columns: 200px 45% auto;
        grid-template-rows: 70px auto;
        line-height: 1.1;
        align-items: start;
    }

    #firms-title {
        grid-column: 1;
        grid-row: 1;
    }
    .firms-list {
        grid-column: 1;
        grid-row: 2;
    }
    .firms-info {
        height: 100%;
        margin-left: 15px;
        grid-column: 2;
        grid-row: 1 / span 2;
    }
    .firms-map {
        grid-column: 3;
        grid-row: 1 / span 2;
        position: relative;
        height: 100%;
    }

    @media all and (max-width: 983px) {
        padding: 0;

        .container-grid {
            grid-template-columns: 150px 50% auto;
            grid-template-rows: auto auto;
        }
        #firms-title {
            grid-column: 1 / span 3;
            grid-row: 1;
        }
        .firms-list {
            grid-column: 1;
            grid-row: 2;
        }
        .firms-info {
            grid-column: 2;
            grid-row: 2;
        }
        .firms-map {
            grid-column: 3;
            grid-row: 2;
        }
    }

    @media all and (max-width: 700px) {
        .firms {
            margin-top: 30px;
            margin-bottom: 30px;
        }

        .firms-list {
            max-width: 100px;
        }

        .firms-list h3 {
            font-size: 12px;
        }

        .container-grid {
            grid-template-columns: 100px auto;
            grid-template-rows: auto auto auto auto auto;
        }
        #firms-title {
            grid-column: 1 / span 2;
            grid-row: 1;
        }
        .firms-list {
            grid-column: 1;
            grid-row: 2 / span 3;
        }
        .firms-info {
            margin-top: 0px;
            padding-top: 10px;
            margin-left: 5px !important;
            grid-column: 2;
            grid-row: 3;
        }
        .firms-map {
            grid-column: 2;
            grid-row: 2;
        }
    }
`
