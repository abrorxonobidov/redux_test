import {connect} from 'react-redux'
import Counter from '../component/counter'

const mapStateToProps = (state) => {
    return state
};

const mapDispatchToProps = (dispatch) => {
    return {
        increment: () => dispatch({
            type: 'INCREMENT',
            payload: 'increment'
        }),
        incrementTen: () => dispatch({
            type: 'INCREMENT_TEN',
            payload: 'increment_ten'
        }),
        decrement: () => dispatch({
            type: 'DECREMENT',
            payload: 'decrement'
        }),
        decrementTen: () => dispatch({
            type: 'DECREMENT_TEN',
            payload: 'decrement_ten'
        }),
        refresh: () => dispatch({
            type: 'REFRESH',
            payload: 'refresh'
        })
    }
};

export default connect(mapStateToProps, mapDispatchToProps)
(Counter);