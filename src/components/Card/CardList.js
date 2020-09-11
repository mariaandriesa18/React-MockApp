import * as React from 'react';
import Card from './Card';
import '../../styles/Card/CardList.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
  } from "react-router-dom";
  
import '../DisplayInfo';
import DisplayInfo from '../DisplayInfo';

const CardList = (props) => {


    return (
        <div className="orice">
            {
                props.data.map(info => {
                    return(
                        
                        <div >
                            
                                <Card  data={info} key={info.id}/>
                            
                        </div>
                        
                    );
                })
            }
        </div>
    );
}

export default CardList;