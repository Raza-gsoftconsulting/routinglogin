import React from 'react'
import {Link} from 'react-router-dom'

const Dashboard = ({user}) => {
  return (
    <section>
      <h4>Hi GSoft this is Dashboard, {user.email}</h4>  <br></br>
      <img className='image0' src='https://cars.usnews.com/pics/size/776x517/images/Auto/izmo/i4771/2014_audi_r8_dashboard.jpg' alt=''></img> <br></br>
      <Link to='/Product' className='btn'>Product Page</Link>
    </section>
  );
};

export default Dashboard
