import React from 'react';
import { Link } from 'react-router-dom';
import './index.styl';

function Index() {
  return (
    <div className='list-box'>
      <header className='header'>列表</header>
      <Link to="/details">详情</Link>
    </div>
  );
}
export default Index;