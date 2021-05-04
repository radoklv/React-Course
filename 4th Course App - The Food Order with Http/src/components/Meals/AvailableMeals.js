import classes from './AvailableMeals.module.css';
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import { useState, useEffect } from 'react';
import useHttp from '../../hooks/use-http';

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const { sendRequest, isLoading, error } = useHttp();

  useEffect(() => {
    const mapData = (payload) => {
      let mealsData = [];

      for (const key in payload) {
        const newMeal = {
          id: key,
          name: payload[key].name,
          description: payload[key].description,
          price: payload[key].price,
        };

        mealsData.push(newMeal);
      }

      setMeals(mealsData);
    };
    sendRequest(
      { url: 'https://angular-b8cd9.firebaseio.com/meals.json' },
      mapData
    );
  }, [sendRequest]);

  let mealsList = meals.map((meal) => {
    return <MealItem meal={meal} key={meal.id}></MealItem>;
  });

  return (
    <section className={classes.meals}>
      <Card>
        {isLoading && !error && <h2>Loading...</h2>}
        {!isLoading && error && <h2>{error}</h2>}
        {!isLoading && !error && <ul>{mealsList}</ul>}
      </Card>
    </section>
  );
};

export default AvailableMeals;
