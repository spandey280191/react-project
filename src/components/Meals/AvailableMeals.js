import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card.js";
import MealItem from "./MealItem/MealItem";
import { useEffect, useState } from "react";

/*
const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Paneer Butter Masala",
    description: "A twist to all time classic panner butter masala",
    price: 270,
  },
  {
    id: "m2",
    name: "Veg Kofta",
    description: "Mixed vegetables & minced cottage cheese cooked in an onion and tomato gravy",
    price: 250,
  },
  {
    id: "m3",
    name: "Veg Jalfreji",
    description: "Mixed long cut vegetable in rich gravy",
    price: 240,
  },
  {
    id: "m4",
    name: "Kashmiri Aloo",
    description: "Suffet potatos with all dry nuts in rich tomato gravy",
    price: 180,
  },
];
*/
const AvailableMeals = () => {

  const [meals, setMeals] = useState([]);
  const [isLoadingState, setIsLoadingState] = useState(true);
  const [httpError, setHttpError] = useState();
 
  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch("http://localhost:8080/meals");
      if(!response.ok){
        throw new Error("Something went wrong!");
      }
      const data = await response.json();
      console.log(data);
      setMeals(data);
      setIsLoadingState(false);
    };

    
      fetchMeals().then().catch((error) => {
        setIsLoadingState(false);
        setHttpError(error.message);
      });


  },[]);
  

  if(isLoadingState) {
    return <section className={classes.MealsLoading}>Loading....</section>
  }

  if(httpError){
    return <section className={classes.MealsError}><p>{httpError}</p></section>
  }

  const mealsList = meals.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      price={meal.price}
      description={meal.description}
    />
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
