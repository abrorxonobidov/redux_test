import React, {Component} from 'react';

class Counter extends Component {
    render() {
        const {value, increment, incrementTen, decrement, decrementTen, refresh} = this.props;
        return (
            <div className="App">
                <div>{value}</div>
                <button onClick={decrementTen}>-10</button>
                <button onClick={decrement}>-1</button>
                <button onClick={refresh}>♻</button>
                <button onClick={increment}>+1</button>
                <button onClick={incrementTen}>+10</button>
            </div>
        );
    }
}

export default Counter;