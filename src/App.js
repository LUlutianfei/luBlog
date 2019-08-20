import React from 'react';
import './css/App.css';
import Header from './Header';
import Nav from './Nav';
import Article from './Article';
import Footer from './Footer';

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

