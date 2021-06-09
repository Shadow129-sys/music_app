import React from "react";
import "./Lowerproduct.css";
import products from "./data/productImage";

const Lowerproduct = () => {
	return (
		<div className='Lproduct-card'>
			{products.map((product, index) => {
				return <Card key={index} {...product} />;
			})}
		</div>
	);
};

const Card = ({ img, backstyle, buttonStyle, description }) => {
	return (
		<div
			className='l-card'
			style={{
				backgroundImage: backstyle,
			}}>
			<img src={img} alt='card' className='imageHead' />
			<div
				className='card-back'
				style={{
					backgroundImage: backstyle,
				}}></div>
			<div className='card-back2'></div>
			<div className='desc-layer'>
				<div className='card-desc-about'>{description}</div>
				<div className='button'>
					<p className='product-card-text'>
						<p className='buy-now'>Buy Now</p>
						<div
							className='hover-back2'
							style={{
								backgroundImage: buttonStyle,
							}}></div>
					</p>
					<div
						className='hover-back'
						style={{
							backgroundImage: buttonStyle,
						}}></div>
				</div>
			</div>
		</div>
	);
};

export default Lowerproduct;
