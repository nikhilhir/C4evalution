import { useContext } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { AuthContext } from "../context/AuthContext";



export const Navbar = () => {
  const { token } = useContext(AuthContext);
  // use token to chnage the text from Login to Logout once logged in successfully
  const NavPanel = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  font-size: 24px;
  background-color: pink;
  height: 50px;
`;

 
  return (
    <>
      <nav>
        {/* keep all the NavLinks here */}
        <NavPanel>
          <div>
            <NavLink to="home">Home</NavLink>
          </div>
          <div>
            <NavLink to="about">About</NavLink>
          </div>
          <div>
            <NavLink to="books">Books</NavLink>
          </div>
          <div>
            {token ? (
              <NavLink to="logout">Logout</NavLink>
            ) : (
              <NavLink to="login">Login</NavLink>
            )}
          </div>
        </NavPanel>
        
      </nav>
    </>
  );
};
