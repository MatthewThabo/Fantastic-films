import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import {FaBars } from "react-icons/fa";
import {FaRegTimesCircle } from "react-icons/fa";
import classes from './MainNavigation.module.css';

function MainNavigation() {
    const [clicked, setClicked] = useState(false);
    const handleClick = () => {
        setClicked(!clicked);
    }
    return ( <header className={classes.header}>
        <div className={classes.container}>
        <div className={classes.logo}>Fantastic films</div>
        {/* <span>films</span>        */}
        </div>
        <nav>
            <ul>
                <li>
                <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/popular-films'>Popular films</Link>
                </li>
                <li>
                    <Link to='/about'>About the developer</Link>
                </li>
            </ul>
        </nav>
        <div className={classes.menuicon} onClick={handleClick}>
                {clicked ? <FaRegTimesCircle className={classes.cross}/> : <FaBars className={classes.bars}/>}
        </div>
    </header>
    );
}

export default MainNavigation;