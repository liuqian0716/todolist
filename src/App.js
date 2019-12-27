import React, { Component } from 'react'
import Tododlist from './Todolist.js'
import { createStore } from 'redux';
import 'antd/dist/antd.css'

class App extends Component {
    render () {
        return (
            <div className="App">
              <header>
                主页面
              </header>
              <main>
                <Tododlist></Tododlist>
              </main>
            </div>
        );
    }
  
}

export default App;
