import React from 'react';
import Cards from './Cards';

const CardList = ({ robots }) => {
  return (
	  <div>
		  { 
		  robots.map((user, i) => {
		  	return (
		  		<Cards 
			  		key={i} 
			  		name={robots[i].name} 
			  		email={robots[i].email} 
			  		id={robots[i].id}/>
		  			);
		 })
	  }
	  </div>
  );
}

export default CardList;