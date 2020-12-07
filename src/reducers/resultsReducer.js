
const resultsReducer = (value = 0, action) => {
    switch (action.type) {
        case 'INCREMENT_TEN':
            return value + 10;
        case 'INCREMENT':
            return value + 1;
        case 'DECREMENT':
            return value - 1;
        case 'DECREMENT_TEN':
            return value - 10;
        case 'REFRESH' :
            return 0;
        default:
            return value
    }
};

export default resultsReducer