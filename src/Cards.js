import React from 'react';

const Cards = ({ name, email, id }) => {
		return (
			<div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-2'>
				<img alt='robot' src={`https://robohash.org/${name}?150x150`}/>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		)
}

export default Cards;