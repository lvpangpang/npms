import React from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import './index.styl';

function Index() {
  return (
    <>
      <header className='header'>吕肥肥</header>
      <header className='name'>王大熊</header>
      <Link to='/list'>列表</Link>
      {/* <img src={img1} /> */}
    </>
  );
}
export default Index;