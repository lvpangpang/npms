import React from 'react';
import { Link } from 'react-router-dom';

function Index(props) {
  return (
    <div className='home-box'>
      我是详情
      <Link to={'/'}>去首页</Link>
    </div>
  )
}

export default Index;