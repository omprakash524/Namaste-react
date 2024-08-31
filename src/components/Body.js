import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import Shimmer from "./Shimmer";

const Body = () => {
  // State variable - super powerful variable 
  const [listOfRestaurants, setListOfRestaurants] = useState(resList);

  useEffect(() => {
    console.log("useEffect called om");
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/mapi/homepage/getCards?lat=17.4357403&lng=78.4401809"
    );

    const json = await data.json();
    console.log(json);
    setListOfRestaurants(json?.data?.success?.cards);
    
 };

 if(listOfRestaurants.length === 0){
  return(<Shimmer/>)
 }

  return (
    <div className="body">
      <div className="all-buttons">
        <div className="search-container">
          <input type="text" className="searchbtninput" placeholder="Search Food or Restaurant" />
          <button className="searchbtn">Search</button>
        </div>

        <div className="filter">
          <button className="filter-btn" onClick={() => {
            // filter logic
            const filteredList = listOfRestaurants.filter(
              (res) => res.data.avgRating >= 4.4
            );
            setListOfRestaurants(filteredList);
          }}>Top 4.4 Rated Restaurants</button>

          <button className="filter-btn2" onClick={() => {
            // filter logic
            const filteredList2 = listOfRestaurants.filter(
              (rest) => rest.data.avgRating >= 3 && rest.data.avgRating <= 4
            );
            setListOfRestaurants(filteredList2);
          }}>3-4 Rated Restaurants</button>

          <button className="filter-btn3" onClick={() => {
            // filter logic
            const filteredData = listOfRestaurants.filter(
              (listRes) => listRes.data.avgRating >= 1 && listRes.data.avgRating <= 3.8
            );
            setListOfRestaurants(filteredData);
          }}>1-3.8 Rated Restaurants</button>

          <button className="filter-btn4" onClick={() => {
            const filterD = listOfRestaurants.filter(
              (listt) => listt.data.costForTwo > 35000 && listt.data.costForTwo <= 50000
            );
            setListOfRestaurants(filterD);
          }}>Cost between 350 to 500</button>
        </div>
      </div>

      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
