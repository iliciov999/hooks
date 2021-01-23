import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  return(
    <div>
        <HookSwitcher />
    </div>
  );
};

const HookSwitcher = () =>{


  return(
    <div style={{ padding: '10px', 
                  backgroundColor: color, 
                  fontSize: `${fontSize}px`}}>

        <h2>commit on 23.01.2021</h2>
dsdsd
    </div>
);

};

ReactDOM.render(<App/>, document.getElementById('root'));
