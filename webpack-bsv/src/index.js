import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'antd-mobile'

function App() {
  return <div>
    <Button onClick={() => {console.log(process.env.NODE_ENV)}}>点击</Button>
  </div>;
}

ReactDOM.render(<App />, document.querySelector('#root'));