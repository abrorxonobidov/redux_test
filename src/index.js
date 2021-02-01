import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {createStore} from 'redux';
import './redux-style.css';
import Counter from '../src/container/counterContainer';
import Click from "../src/container/clickContainer";

const initialState = {
    value: 0,
    click: 0
};

const reducerCounter = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT_TEN': {
            return {
                ...state,
                value: state.value + 10,
                click: state.click + 1
            };
        }
        case 'INCREMENT': {
            return {
                ...state,
                value: state.value + 1,
                click: state.click + 1
            };
        }
        case 'DECREMENT': {
            return {
                ...state,
                value: state.value + -1,
                click: state.click + 1
            };
        }
        case 'DECREMENT_TEN': {
            return {
                ...state,
                value: state.value - 10,
                click: state.click + 1
            };
        }
        case 'REFRESH' : {
            return {
                ...state,
                value: 0,
                click: state.click + 1
            };
        }
        case 'RESTART' :
            return {
                ...state,
                value: 0,
                click: 0
            };
        case 'SET_NULL' :
            return {
                ...state,
                click: 0
            };
        default: {
            return state;
        }
    }
};

const store = createStore(
    reducerCounter,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

render(
    <Provider store={store}>
        <div className="App">
            <header className="App-header">
                <Counter/>
                <Click/>
            </header>
        </div>
    </Provider>, document.getElementById('root')
);

['a', 'b', 'c', 'd', 'e'].reduce((accumulator, currentValue, currentIndex, array) => {
    console.log('accumulator=', accumulator, 'currentValue=', currentValue, 'currentIndex=', currentIndex, 'array=', array);
    return accumulator + currentValue
}, '');