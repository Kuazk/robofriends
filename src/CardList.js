import React from 'react';
import Card from './Card';


const CardList = ({robots}) => {
    const cardComponent = robots.map(item => {
        return (<Card 
            key = {robots.indexOf(item)}
            id={item.id} name={item.name} 
            email={item.email}/>)
    })
    return (
        <div> 
           {cardComponent}
        </div>
    );
}

export default CardList;