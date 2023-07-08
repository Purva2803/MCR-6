import React from 'react'
import { useParams } from 'react-router-dom'
import { restaurantsData } from './data'
export const SinglePage = () => {

    const {id }= useParams();
    console.log(id);
    const findRestaurant = restaurantsData.find((restaurant) => restaurant.id == id);
    console.log(findRestaurant);


    return (
        <>
            <h1>Single Page</h1>
            <div className="restaurant" key={findRestaurant.id}>
                <h1>{findRestaurant.name}</h1>
                <h1>{findRestaurant.address}</h1>
                <h1>{findRestaurant.phone}</h1>
                <button>Add Review</button>
                <div className="menu">
                    {findRestaurant.menu.map((item) => (
                        <div className="card" key={item.id}>
                            <img src={item.imgSrc} alt={item.name} />
                            <p>{item.name}</p>
                            <p>{item.price}</p>
                            <p>{item.qty}</p>
                        </div>
                    ))}
                </div>
                <div>
                    {findRestaurant.reviews.map((review) => (
                        <div className="review" key={review.id}>
                            <p>{review.name}</p>
                            <p>{review.review}</p>


                            </div>
                    ))} 
                </div>
            </div>



          
        </>
    )
}

