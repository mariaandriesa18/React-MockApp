import {BrowserRouter, Link, Route, Switch} from 'react-router-dom';

import CardList from './components/Card/CardList';
import Header from './components/Header/Header';
import React ,{useState, useEffect}from 'react';
import logo from './logo.svg';
import './App.css';
import BlogPage from './components/BlogPage';
import DisplayInfo from './components/DisplayInfo';
import Card from './components/Card/Card';

let arr = [
  {
    id: 1,
    image:"https://giantbomb1.cbsistatic.com/uploads/square_medium/16/164924/3051086-5388492257-latest",
    name:"Kurapika",
    age: "20",
    hobby : "Hunter",
    country: "Russia"
  },
  {
    id : 2,
    image: "https://images.8tracks.com/cover/i/009/197/813/tumblr_nnyeawjpUp1unb2d3o1_540-9920.gif?rect=45,0,450,450&q=98&fm=jpg&fit=max",
    name:"Killua",
    age: "15",
    hobby : "Hunter & Assasin",
    country: "Japan"
  },
  {
    id : 3,
    image: "https://pbs.twimg.com/profile_images/1054094416011505664/tfAnn_OL.jpg",
    name:"Gon",
    age: "15",
    hobby : "Hunter & Happy",
    country : "Switzerland"
  }
] 

function App() {
  return (
    <div>
    <BrowserRouter>

      <Header/>
         
      {/* <Link to={{
        pathname: "/card",
        state: arr.name
      }}><CardList data={arr}/></Link>   */}
      
      <Switch>
        <Route path="/blog" component={BlogPage}/>
        <Route path="/displayInfo/:country" component={DisplayInfo}></Route>
        <Route path="/" ><CardList data={arr}/></Route>
      </Switch>
    </BrowserRouter>
     </div>
  );
}

export default App;