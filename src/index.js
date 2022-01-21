import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.js'
import '../src/components/forms/form.css'
import '../src/components/footer/footer.css'
import '../src/components/cities/cities.css'
import '../src/components/carousel/carousel.css'
import '../src/components/navbar/navbar.css'
import '../src/components/home/home.css'



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


