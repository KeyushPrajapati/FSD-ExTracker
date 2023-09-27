import React  from 'react'
import { useAuth } from "./AuthContext";
import axios from "axios";
import { Link,useNavigate } from "react-router-dom";

const Header = () => {

  const navigate = useNavigate();
  const { isLoggedIn, setIsLoggedIn } = useAuth();
  // useEffect(() => {
  //   if (user) {
  //     setUser(false);
  //   } else if (!user) {
  //     setUser(true);
  //   }
  //   // console.log(isLoggedIn)
  //   // console.log(useAuth())
  // }, []);
  async function handlelogout() {
    await axios.get("http://localhost:3004/api/auth/logout").then((res) => {
      console.log(res.data.message);
      setIsLoggedIn(false);
      navigate("/login");
    });
    // 
  }


  return (
    <>
    <nav style={{display:'flex', gap:'10px'}}>
      <ul style={{display:'flex', gap:'10px',listStyle:'none'}}>

      <li><a href="/home">Home</a></li>
        {isLoggedIn ? 
        (<>
          <li><Link to="/analysis">Analysis</Link></li>
          <li><Link to="/expenses">Expenses</Link></li>
          <li><Link onClick={handlelogout}>Logout</Link></li>
        </>):(
        
        <>
          <li><a href="/login">Login</a></li>
          <li><a href="/signup">Sign-Up</a></li>
        </>)}
      </ul>
       
    </nav>
    </>
  )
}

export default Header