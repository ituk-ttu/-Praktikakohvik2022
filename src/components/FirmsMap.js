import './FirmsMap.css';
import { useContext, useEffect } from "react";
import { srcContext } from "../SrcContext.js";
import aulaEmpty from '../img/png/aula_empty.png';
import aulaFilled from '../img/png/aula_filled.png';
import hallEmpty from '../img/png/hall_empty.png';
import hallFilled from '../img/png/hall_filled.png';

const FirmsMap = ({ selectedFirm, firms, clickFunction }) => {
    const { value } = useContext(srcContext);

	useEffect(() => {
		preloadImages([ aulaEmpty, aulaFilled, hallEmpty, hallFilled ]);
    }, []);

    return (
		<>
			<img 
				src=
				{
					firms.filter(function(firm) {
							return firm.gridMapColumn != null || firm.gridMapRow != null
						}).length === 0 
						? (value === 'et' ? aulaEmpty : hallEmpty)
						: (value === 'et' ? aulaFilled : hallFilled)
				} 
				alt="Aula"
			/>
			<div className='aspect-ratio-box'>
				<div className="container-map">
					{
						firms.filter(function(firm) {
							return firm.gridMapColumn != null || firm.gridMapRow != null
						}).map((firm) => (
							<li 
								key={firm.name} 
								style={{gridColumn: firm.gridMapColumn, gridRow: firm.gridMapRow}}
							>
								<button 
									className={selectedFirm.name === firm.name ? 'active' : ''}
									onClick={() => clickFunction(firm)}
								>
									{firm.shortName}
								</button>
							</li>
						))
					}
				</div>
			</div>
		</>
    )
};

export default FirmsMap;

let images = []
const preloadImages = async (sources) => {
	const promises = sources.map(i => preloadImage(i))
	await Promise.all(promises)
}

function preloadImage(src) {
	images.push(new Image().src = src);
}
