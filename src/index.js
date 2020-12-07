import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {createStore} from 'redux';
import './index.css';
import Counter from '../src/container/counterContainer';


const store = createStore(
    (value = 0, action) => {
        switch (action.type) {
            case 'INCREMENT_TEN':
                return value + 10 ;
             case 'INCREMENT':
                 return value + 1;
             case 'DECREMENT':
                 return value - 1;
             case 'DECREMENT_TEN':
                 return value - 10;
             case 'REFRESH' :
                 return 0;
            default:
                return 0
        }
    }
);

render(
    <Provider store={store}>
        <div className="App">
            <header className="App-header">
                <Counter/>
            </header>
        </div>
    </Provider>, document.getElementById('root')
);