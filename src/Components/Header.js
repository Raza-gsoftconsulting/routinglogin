import React from "react";
import { Link} from "react-router-dom"
import { useNavigate } from "react-router-dom";



const Header = ({user,setUser}) => {
  // const email = "";
  // const password = "";

  const navigation = useNavigate();

  const handle = () => {
    setUser(null)
    navigation('/');
    localStorage.removeItem("email");
    localStorage.removeItem("password");

  };

  return (
    <header className="nav1">
    <Link to="/" className= 'btn'>Home</Link>
    <Link to="/About" className='btn'>About</Link>
    {user!==null&&<Link to="/Product" className='btn'>Product</Link>}
    {user!==null&&<Link to="/Dashboard" className='btn'>Dashboard</Link>}
    {user!==null ?<Link to="/" className='btn2' onClick={handle}>Log Out</Link>: <Link to="/LoginPage" className='btn2'>Login</Link> }
    
   
    </header>
  );
};

export default Header;
