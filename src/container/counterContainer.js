import {connect} from 'react-redux'
import Counter from '../component/counter'

const mapStateToProps = (state) => {
    return state
};

const mapDispatchToProps = (dispatch) => {
    console.log('dispatch');

    return {
        increment: () => dispatch({type: 'INCREMENT'}),
        incrementTen: () => dispatch({type: 'INCREMENT_TEN'}),
        decrement: () => dispatch({type: 'DECREMENT'}),
        decrementTen: () => dispatch({type: 'DECREMENT_TEN'}),
        refresh: () => dispatch({type: 'REFRESH'})
    }
};

export default connect(mapStateToProps, mapDispatchToProps)
(Counter);