import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import Discount from '../../components/Discount/Discount'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import DrinkDisplay from '../../components/DrinkDisplay/DrinkDisplay'

const Home = () => {
  const [category,setCategory] = useState("All");
  return (
    <div>
           <Discount/>
        <Header/>
        <ExploreMenu category={category} setCategory={setCategory} />
        <DrinkDisplay category={category} />
        
    </div>
  )
}

export default Home