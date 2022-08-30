import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import { Avatar } from '@mui/material';

const Nav = () =>{
    
    return(  
        <StyledNav>
            <ul> 
                <li>
                    <Border><Avatar sx={{ width: 110, height:110 }}>H</Avatar></Border>
                </li>
                <li>
                    <Link to="/profile">Profile</Link>
                </li>
                <li>
                    <Link to="/clubs">Clubs</Link>
                </li>
            </ul>
        </StyledNav>
    );
};

//Styles

const StyledNav = styled.nav`
    position: absolute;
    text-align: center;
    align-items: center;
    margin-top: 6rem;
    min-height: 80vh;
    min-width: 15vh;
    margin-right: 170vh;
    justify-content: space-around;
    border-radius: 20px;
    /* padding: 1rem 10rem; */
    background-color: #282828;
    box-shadow:  20px 20px 60px #222222,
             -20px -20px 60px #2e2e2e;
    a{
        color: white;
        text-decoration: none;
        font-size: 1.5rem;
    }

    li a{
        background: 
            linear-gradient(to right, #282828, #282828),
            linear-gradient(to right, rgba(255, 0, 0, 1), rgba(255, 0, 180, 1), rgba(0, 100, 200, 1));
        background-size: 100% 0.1em, 0 0.1em;
        background-position: 100% 100%, 0 100%;
        background-repeat: no-repeat;
        transition: background-size 400ms;
    }

    li a:hover,
    li a:focus {
        background-size: 0 0.1em, 100% 0.1em;
    }

    ul{
        margin-top: 2rem;
        position: relative;
        align-items: center;
        justify-content: space-around;
        list-style: none; 
    }

    li{
        padding: 30px 40px 30px 30px;
    }
`;

const Border = styled.div`
    margin: 0px;
    justify-content:space-around;
    display: flex;
	align-content: center;
	align-items: center;
    width: 130px;
    height: 130px;
    :hover{
	border: 5px solid transparent;
    border-radius: 50%;
	background-origin: border-box;
	background-clip: content-box, border-box;
    background-size: cover;
	box-sizing: border-box;
    background-image: 
            linear-gradient(50deg, #282828, #282828),
            linear-gradient(50deg, rgba(255, 0, 0, 1), rgba(255, 0, 180, 1), rgba(0, 100, 200, 1)); 
      background-repeat: no-repeat;
      background-size: 100% 100%, 100% 200%;
      background-position: 0 0, 0 100%;      
      animation: highlight 5s infinite alternate;
      @keyframes highlight {
      50% {
        background-position: 0 0, 0 0;
      }
    }
        }
    
`;


export default Nav;