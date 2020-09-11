import * as React from 'react';
import './../../styles/Card/Card.css';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import DisplayInfo from "../DisplayInfo";
import {useHistory} from "react-router-dom";

const Card = (props) => {
    console.log('props is');
    console.log(props);

    let history = useHistory();
    
    return (
       
             <div className="cute" onClick ={(e) => {
                console.log('CARD  clicked');
                history.push('/displayInfo' + props.data.country);
             }}>
                <ul className="kura" >
                    <li><img src={props.data.image}/></li>
                    <li >Name : {props.data.name} </li>
                    <li >Age : {props.data.age}</li>
                    <li >Hobbies : {props.data.hobby}</li>
                    <li>Country : {props.data.country}</li>
                </ul>
            </div>
        
    );
}

export default Card;