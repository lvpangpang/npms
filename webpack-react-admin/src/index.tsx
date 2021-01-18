import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


var obj = {
  name: '吕肥肥'
};

Object.defineProperty(obj, 'name', {
  get: function() {
    console.log('get', name);
    return name;
  },
  set: function(val:any) {
    name = val;
    console.log('set', val);
  }
});
obj.name = '王大熊';

function getName() {
  console.log('哈哈')
}

const DataContext = React.createContext()
ReactDOM.render(<DataContext.Provider value='吕肥肥'><App /></DataContext.Provider>, document.querySelector('#root'));