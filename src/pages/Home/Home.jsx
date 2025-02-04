import React, { useState } from 'react'
import './Home.css'
import Header from '../../compenents/Header/Header'
import ExploreMenu from '../../compenents/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../compenents/FoodDisplay/FoodDisplay'
import AppDownload from '../../compenents/AppDownload/AppDownload'
const Home = () => {
    const [category,setCategory]=useState("All");
  return (
    <div>
        <Header/>
        <ExploreMenu category={category} setCategory={setCategory}/>
        <FoodDisplay category={category}/>
        <AppDownload/> 
    </div>
  )
}

export default Home