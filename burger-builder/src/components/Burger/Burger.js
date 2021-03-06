import React from 'react';
import { withRouter } from 'react-router-dom';

import BurgerIngredients from './BurgerIngredients/BurgerIngredients';
import classes from './Burger.css';

const burger = (props) => {
    console.log(props);
    // transform key value pairs to array
    let transformedIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])].map((_, i) => {
                return <BurgerIngredients key={igKey + i} type={igKey} />;
            }); //array with 2 elements
        })
        .reduce((arr, el) => {
            return arr.concat(el)
        }, []);

    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>Please start adding ingredients!</p>
    }

    return (
        <div className={classes.Burger}>
            <BurgerIngredients type="bread-top" />
            {transformedIngredients}
            <BurgerIngredients type="bread-bottom" />
        </div>
    );
};

export default withRouter(burger);