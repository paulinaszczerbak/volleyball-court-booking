export default (state, action) => {
    switch (action.type){
        case 'SIMPLE_ACTION':
        return {
            result: action.payload
        }
        case 'ADD':
        console.log("DUDUDUDPAAAAAAAAAAAAAAAAAA");
        return {
            ...state, startDate: state.startDate
        };
        default:
            return state
    }
}