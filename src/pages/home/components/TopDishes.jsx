import React, { useEffect, useState } from 'react'
import axiosClient from '../../../api/axios';
import DishCart from './DishCart';

const TopDishes = () => {
  const [topDishes, setTopDishes] = useState([]);

  useEffect(()=>{
    const fetchData = async ()=>{
        try{
            const response = await axiosClient.get('/api/menu/top_three_pizza');
            setTopDishes(response.data);
        }
        catch(e){
            console.log(e);
        }
    }

    fetchData();
  },[]);
 
  return (
    <section className='py-10'>
        <div className="container">
            <h2 className='text-center text-auxiliary font-baskerville_b text-2xl mb-[5rem] md:text-4xl'>Experience The Great Food</h2>
            <div className='flex flex-col items-center md:gap-10 lg:flex-row lg:items-center lg:justify-between lg:gap-10'>
                {topDishes.length != 0 && topDishes.map(item => <DishCart key={item.id} dish={item}/>)}
            </div>
        </div>
    </section>
  )
}

export default TopDishes