import * as React from 'react';
import "../../styles/Header/Header.css";
import {useHistory} from "react-router-dom";

const Header = () => {
    let history = useHistory();
    return (
        <div className="header-up">
            <h1 >HUNTER X HUNTER</h1>
           
           <button className="my-btn" onClick = {(e) => {
                console.log('BLOG button clicked');
                history.push('/blog');
           
           }}>BLOG</button>
        </div>
    );
}

export default Header;
