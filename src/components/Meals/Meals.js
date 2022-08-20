import MealsSummary from './MealsSummary'
import AvailableMeals from './AvailableMeals'
import { Fragment } from 'react'

const Meals = (props) => {
    return <Fragment>
        <MealsSummary></MealsSummary>
        {props.isAuth && <AvailableMeals></AvailableMeals>}
    </Fragment>
}

export default Meals;