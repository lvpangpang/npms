import React from 'react';
import { Link } from 'react-router-dom';
import './index.styl';

function Index(props) {
  return (
    <div className='order-box'>
      <header className='header'>订单</header>
      <button onClick={() => {
        props.history.goBack(-3)
      }}>回首页</button>
    </div>
  );
}
export default Index;