import React from 'react';
const Home = React.lazy(() => import('@/pages/home'));
const Detail = React.lazy(() => import('@/pages/detail'));

const RoutesConfig = [
  {
    path: '/', 
    auth: true,
    component: Home
  },
  {
    path: '/detail',
    auth: true,
    component: Detail
  }
];

export default RoutesConfig;