import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { searchRestaurant } from '../redux/restaurantSlice';
import { useDispatch } from 'react-redux';

function Header() {
  const dispatch = useDispatch();
  return (
    <>
       <Navbar variant='dark'>
        <Container>
            <Link to='/' style={{textDecoration:'none'}}>
            <div>
            <Navbar.Brand href="#home">
            <img
              alt=""
              src="https://cdn-icons-png.freepik.com/256/6643/6643359.png?semt=ais_hybrid"
              width="30"
              height="30"
              className="d-inline-block align-top me-3"
            />{' '}
           FOOD <span className='text-warning'>CIRCLE</span>
          </Navbar.Brand>
          <input onChange={(e)=>dispatch(searchRestaurant(e.target.value))} type='text' className='form-control' placeholder='search by neighbourhood'></input>
            </div>
            

            </Link>
      
        </Container>
      </Navbar>
    
    </>
  )
}

export default Header