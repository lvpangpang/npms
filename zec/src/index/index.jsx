import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

function Index() {
  return (
    <div className='index-box'>
      <header className='header'>吕肥肥</header>
      <header className='name'>王大熊</header>
      <Link to='/list'>列表</Link>
    </div>
  );
}
export default Index;