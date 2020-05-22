import React from 'react';
import { Link } from 'react-router-dom';
import './index.styl';

function Index() {
  return (
    <div className='details-box'>
      <header className='header'>详情</header>
      <Link to='/order'>订单</Link>
    </div>
  );
}
export default Index;