import React from 'react';
import './css/App.css';
import Header from 'Header.js';
import Nav from 'Nav.js';
import Article from 'Article.js';
import Footer from 'Footer.js';

function App() {
  return (
    <div className="blog">
      <Header/>
      <Nav/>
      <Article/>
      <Footer/>
    </div>
  );
}
 
export default App;

