import React from "react";
import { useState } from "react";
import { cuisinesData } from "./data";
import { restaurantsData } from "./data";
import { NavLink, Routes,Route } from "react-router-dom";
import { SinglePage } from "./singlePage";
import "./App.css"




export const NewComponent = () => {
    const [restaurant, setRestaurant] = useState([]);
    const [cuisineClicked, setCuisineClicked] = useState(false);
  
    const selectRestaurant = (id) => {
      const newRestaurant = restaurantsData.filter(
        (restaurant) => restaurant.cuisine_id === id
      );
      setRestaurant(newRestaurant);
      setCuisineClicked(true);
    };
  
    return (
      <>
        <h1 className="restaurants">Food Ordering App</h1>
        <h2 className="restaurants">Select your cuisine</h2>
  
        <div className="cuisines">
          {cuisinesData.map((cuisine) => (
            <div className="cuisine" key={cuisine.id}>
              <button onClick={() => selectRestaurant(cuisine.id)}>
                {cuisine.name}
              </button>
            </div>
          ))}
        </div>
  
        {cuisineClicked && <h2 className="restaurants">Restaurants</h2>}
  
        <div className="restaurants">
          {restaurant.map((restaurant) => (
            <div className="restaurant" key={restaurant.id}>
              <h1>{restaurant.name}</h1>
              <NavLink to={`rest/${restaurant.id}`}>
                <div className="menu">
                  {restaurant.menu.map((item) => (
                    <div className="card" key={item.id}>
                      <img src={item.imgSrc} alt={item.name} />
                      <p>{item.name}</p>
                      <p>{item.price}</p>
                      <p>{item.qty}</p>
                    </div>
                  ))}
                </div>
              </NavLink>
            </div>
          ))}
        </div>
      </>
    );
  };
  