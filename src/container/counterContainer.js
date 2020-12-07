import {connect} from 'react-redux'
import Counter from '../component/counter'

const mapStateToProps = (value) => {
    return {
        result: value
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        increment: () => dispatch({type: 'INCREMENT'}),
        incrementTen: () => dispatch({type: 'INCREMENT_TEN'}),
        decrement: () => dispatch({type: 'DECREMENT'}),
        decrementTen: () => dispatch({type: 'DECREMENT_TEN'}),
        refresh: () => dispatch({type: 'REFRESH'})
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);