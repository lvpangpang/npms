import React from 'react';
import { Link } from 'react-router-dom';

import { Button } from 'antd-mobile';

const promise = new Promise((resolve, reject) => {
  resolve('吕肥肥886')
});

async function hello() {
  return await Promise.resolve('王大熊');
};

hello().then((data) => {
  console.log(data);
});

function Index(props) {
  return (
    <div className='home-box'>
      我是首页
      <Link to={'/detail'}>去详情</Link>
      <div>
        <Button type='primary'>点我</Button>
      </div>
    </div>
  )
}

export default Index;