import React from 'react'
import RestCard from '../components/RestCard'
import { Col, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { fetchRestaurant } from '../redux/restaurantSlice'
import { useEffect } from 'react'

function Home() {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(fetchRestaurant())
  },[])
  const allrestaurant = useSelector((state)=>state.restaurantSlice.allRestaurant.restaurants )
  console.log('1');
  console.log(allrestaurant);
  
  
  return (
  <>
  <Row className='mt-3'>
    {
      allrestaurant?.length > 0?
      allrestaurant.map((restaurant)=>(
    <Col sm={6} md={4} lg={3} className='px-5 py-3' >
    <RestCard restaurant = {restaurant}/>
    </Col>
    )) :
    <p>No item found</p>
    }
 
  </Row>
 
  </>
  )
}

export default Home