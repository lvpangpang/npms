import React from 'react';
import { Link } from 'react-router-dom';
import { observer, useLocalStore } from 'mobx-react';

import { Button } from 'antd-mobile';

import store from '@/store';
import Style from './index.less';


const promise = new Promise((resolve, reject) => {
  resolve('吕肥肥886')
});

async function hello() {
  return await Promise.resolve('王大熊');
};

hello().then((data) => {
  console.log(data);
});

function Index() {
  const homeStore = useLocalStore(() => store.homeStore);
  return (
    <div className='home-box'>
      <div className={Style.text}>{`首页数据: ${homeStore.num}`}</div>
      <div>
        <Button type='primary' onClick={homeStore.setNum}>点我</Button>
      </div>
      <br/>
      <Button type='primary'>
        <Link to={'/detail'}>去详情</Link>
      </Button>
    </div>
  )
}

export default observer(Index);