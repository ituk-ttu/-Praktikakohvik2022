import './FirmsMap.css';
import { useContext } from "react";
import { srcContext } from "../SrcContext.js";

const FirmsMap = ({ selectedFirm, firms, clickFunction }) => {
    const { language } = useContext(srcContext);

    return (
		<>
			<img 
				src=
				{
					firms.filter(function(firm) {
							return firm.gridMapColumn != null || firm.gridMapRow != null
						}).length === 0 
						? require("../img/png/" + language.firms.map + "_empty.png") 
						: require("../img/png/" + language.firms.map + "_filled.png")
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
