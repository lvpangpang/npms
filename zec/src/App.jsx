import React from 'react';
import { BrowserRouter, withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import routerConfig from '@/router';

import './App.styl';

const ANIMATION_MAP = {
  PUSH: 'forward',
  POP: 'back'
}

const Routes = withRouter(({location, history}) => {
  return (
    <TransitionGroup 
      className='router-wrapper'
      childFactory={child => React.cloneElement(
        child,
        {classNames: ANIMATION_MAP[history.action]}
      )}
    >
      <CSSTransition
        timeout={300}
        key={location.pathname}
      >
        { routerConfig }
      </CSSTransition>
    </TransitionGroup>
  );
});

export default function App() {
  return (
    <BrowserRouter>
      <Routes/>
    </BrowserRouter>
  )
}