import React from 'react';

import BurgerIngredients from './BurgerIngredients/BurgerIngredients';
import classes from'./Burger.css';

const burger = (props) => {

    const transformedIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            return[...Array(props.ingredients[igKey])].map((_,i)=>{ // transform key value pairs to array
                return <BurgerIngredients key={igKey + i} type={igKey}/>;
            }); //array with 2 elements
        });

    return(
        <div className = {classes.Burger}>
            <BurgerIngredients type="bread-top"/>
            {transformedIngredients}
            <BurgerIngredients type="bread-bottom"/>
        </div>
    );
};

export default burger;