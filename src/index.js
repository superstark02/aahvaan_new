import React from 'react';
import {render} from 'react-dom';
import App from './App';
import TeamForm from './components/TeamForm'
import SingleForm from './components/SingleForm'
import Confirm from './components/Confirm'
import TokenDisplay from './components/TokenDisplay'
import {Route, HashRouter as Router} from 'react-router-dom'

const routing = (
    <Router basename="/">
      <div>
        <Route exact path="/" component={App} />
        <Route path="/single" component={SingleForm} />
        <Route path="/team" component={TeamForm} />
        <Route path="/confirm" component={Confirm} />
        <Route path="/success" component={TokenDisplay} />
      </div>
    </Router>
)

render(routing, document.getElementById("root"))

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}