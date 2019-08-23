import React from 'react';
import './css/Home.css';
import Header from '../Header';
import Nav from '../Nav';
import Article from './Article';
import Footer from '../Footer';

function Home() {
  return (
    <div className="home_blog">
        <Header/>
        <Nav/>
        <Article/>
        <Footer/>
    </div>
  );
}
 
export default Home;

