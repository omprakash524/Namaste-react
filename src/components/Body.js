import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";


const Body = () => {
    // state variable - super powerful variable 
    const [listOfRestaurants, setlistOfRestaurants] = useState(resList);
   
    useEffect(()=>{
      fetchData();
    }, []);

    const fetchData = async () =>{
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );

      const json = await data.json();
      console.log(json);
      
      setlistOfRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    };






    // Normal javascript variable
    let listOfRestaurantsJS = [
    {
            data: {
              id: '121603',
              name: 'Kannur Food Point',
              cloudinaryImageId: '37df381734b24f138af4a84fd7e4d4ec1716558578.jpeg',
              cuisines: ['Kerala', 'Chinese'],
              costForTwo: 30000,
              deliveryTime: 24,
              avgRating: '3.9',
          },
    },
    {
        data: {
          id: '229',
          name: 'Meghana Foods',
          cloudinaryImageId: 'd0bd7c9405ac87f6aa65e31fe55800941632716575.png',
          cuisines: [
            'Biryani',
            'Andhra',
            'South Indian',
            'North Indian',
            'Chinese',
            'Seafood',
          ],
          costForTwo: 50000,
          deliveryTime: 16,
          avgRating: '4.4',
      },
    },
    {
        data: {
          id: '428',
          name: 'Biryani Pot',
          cloudinaryImageId: '8dc39742916ddc369ebeb91928391b931632716660.png',
          cuisines: ['North Indian', 'Biryani'],
             costForTwo: 50000,
          deliveryTime: 19,
          avgRating: '3.9',
        },
        subtype: 'basic',
    },
    {
        data: {
          id: '223',
          name: 'Truffles',
          cloudinaryImageId: '37df381734b24f138af4a84fd7e4d4ec1716558578.jpeg',
          cuisines: ['American', 'Continental', 'Desserts', 'Italian'],
          costForTwo: 45000,
          deliveryTime: 30,
          avgRating: '4.4',
        },
      },
      {
        data: {
          id: '425',
          name: 'Hotel Empire',
          cloudinaryImageId: '52eb9796bb9bcf0eba64c643349e97211634401116.png',
          cuisines: ['North Indian', 'Kebabs', 'Biryani'],
          costForTwo: 45000,
          deliveryTime: 23,
          
          avgRating: '4.1',
        },
      },
      {
        data: {
          id: '201224',
          name: 'Asha tiffins',
          cloudinaryImageId: 'e444ade83eb22360b6ca79e6e777955f1632716661.png',
          cuisines: ['Indian', 'South Indian', 'Beverages'],
          costForTwo: 20000,
          deliveryTime: 26,
          avgRating: '4.4',
        },
      },
      {
        data: {
          id: '59593',
          name: 'Al Daaz',
          cloudinaryImageId: '8dc39742916ddc369ebeb91928391b931632716660.png',
          cuisines: [
            'American',
            'Arabian',
            'Chinese',
            'Desserts',
            'Mughlai',
            'North Indian',
          ],
          costForTwo: 40000,
          deliveryTime: 36,
          avgRating: '4.3',
        },
      },
      {
        data: {
          id: '56589',
          name: 'Roti-Wala',
          cloudinaryImageId: 'e1b5ebed94e25d832f8dea96824537521678798686.png',
          cuisines: [
            'North Indian',
            'Home Food',
            'Thalis',
            'Chinese',
            'Punjabi',
            'South Indian',
            'Ice Cream',
          ],
          costForTwo: 20000,
          deliveryTime: 37,
          avgRating: '4.2',
        },
      },
      {
        data: {
          id: '560153',
          name: 'Rice Bowl',
          cloudinaryImageId: '52eb9796bb9bcf0eba64c643349e97211634401116.png',
          cuisines: ['North Indian', 'South Indian'],
          costForTwo: 30000,
          deliveryTime: 22,
          avgRating: '4.1',
        },
      },
      {
        data: {
          id: '337335',
          name: 'Kannur food kitchen',
          cloudinaryImageId: 'e444ade83eb22360b6ca79e6e777955f1632716661.png',
          cuisines: ['Kerala', 'Biryani', 'Beverages'],
          costForTwo: 20000,
          deliveryTime: 24,
          avgRating: '3.8',
        },
      },
      {
        data: {
          id: '601',
          name: 'Litti Twist',
          cloudinaryImageId: 'e1b5ebed94e25d832f8dea96824537521678798686.png',
          cuisines: ['North Indian'],
          costForTwo: 25000,
          deliveryTime: 28,
          avgRating: '4.2',
        },
      },
      {
        data: {
          id: '256957',
          name: 'Shanmukha Restaurant',
          cloudinaryImageId: 'd0bd7c9405ac87f6aa65e31fe55800941632716575.png',
          cuisines: [
            'Hyderabadi',
            'Andhra',
            'North Indian',
          ],
          costForTwo: 30000,
          deliveryTime: 36,
          avgRating: '4.1',
        },
      },
      {
        data: {
          id: '642459',
          name: 'Malnad Donne Biryani MDB',
          cloudinaryImageId: 'e444ade83eb22360b6ca79e6e777955f1632716661.png',
          cuisines: ['Biryani', 'South Indian', 'Kebabs'],
          costForTwo: 25000,
          deliveryTime: 36,
          avgRating: '3.9',
        },
      },
      {
        data: {
          id: '27643',
          name: 'Ultimate Parathas',
          cloudinaryImageId: '8dc39742916ddc369ebeb91928391b931632716660.png',
          cuisines: ['Bihari', 'North Indian', 'Desserts'],
          costForTwo: 25000,
          deliveryTime: 29,
          avgRating: '4.2',
        },
      },
      {
        data: {
          id: '42294',
          name: 'Udupi Palace',
          cloudinaryImageId: '37df381734b24f138af4a84fd7e4d4ec1716558578.jpeg',
          cuisines: [
            'Beverages',
            'Biryani',
            'Chinese',
            'Desserts',
            'North Indian',
            'South Indian',
          ],
          costForTwo: 15000,
          deliveryTime: 30,
          avgRating: '4.2',
        },
      },


];


    return (
      <div className="body">
        
        <div className="all-buttons">
        <div className="search-container">
          <input type="text" className="searchbtninput" placeholder="Search Food or Restaurant" />
          <button className="searchbtn">Search</button>
        </div>

        <div className="filter">
            <button className="filter-btn" onClick={()=>{
                // filter logic
                const filteredList = listOfRestaurants.filter(
                    (res)=> res.data.avgRating >= 4.4
                );
                setlistOfRestaurants(filteredList);

            }}> Top 4.4 Rated Restaurants</button>

            <button className="filter-btn2" onClick={()=>{
              // filter logic
              const filteredList2 = listOfRestaurants.filter(
                (rest)=>rest.data.avgRating >= 3 && rest.data.avgRating <= 4
              );
              setlistOfRestaurants(filteredList2);
            }}>3-4 Rated Restaurants</button>

            <button className="filter-btn3" onClick={()=>{
              // filter logic
              const filteredData = listOfRestaurants.filter(
              (listRes)=>listRes.data.avgRating >= 1 && listRes.data.avgRating <= 3.8 
              );
              setlistOfRestaurants(filteredData);
            }}>1-3.8 Rater Restaurants</button>

            <button className="filter-btn4" onClick={()=>{
              const filterD = listOfRestaurants.filter(
                (listt)=> listt.data.costForTwo > 35000 && listt.data.costForTwo <= 50000
              );
              setlistOfRestaurants(filterD);
            }}>Cost between 350 to 500</button>

          
            
        </div>
        </div>

        <div className="res-container">
          {/* <RestaurantCard resData={resList[0]} />
          <RestaurantCard resData={resList[1]} />
          <RestaurantCard resData={resList[2]} />
          <RestaurantCard resData={resList[3]} />
          <RestaurantCard resData={resList[4]} />
          <RestaurantCard resData={resList[5]} />
          <RestaurantCard resData={resList[6]} />
          <RestaurantCard resData={resList[7]} />
          <RestaurantCard resData={resList[8]} />
          <RestaurantCard resData={resList[9]} />
          <RestaurantCard resData={resList[10]} />
          <RestaurantCard resData={resList[11]} />
          <RestaurantCard resData={resList[12]} /> */}
  
          {/* // * looping through the <RestaurentCard /> components Using Array.map() method */}
  
          {listOfRestaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.data.id}  resData={restaurant} />
          ))}

  
          {/* // * or */}
  
          {/* // * We can also use index as the key to the JSX child elemnt - which is the 2nd parameter of the map() method, but is not a recommended practice - react official Docs declared this/}
  
          {resList.map((restaurant, index) => (
            <RestaurantCard key={index} resData={restaurant} />
          ))}
  
          {/* // * Why should we provide key property to the child elements - When creating a list in the UI from an array with JSX, you should add a key prop to each child and to any of its' children. React uses the key prop create a relationship between the component and the DOM element. The library uses this relationship to determine whether or not the component should be re-rendered.
           */}
        </div>
      </div>
    );
  };


  export default Body;