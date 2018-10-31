
export const simpleAction = () => dispatch => {
    dispatch({
        type: 'ADD',
        startDate: 'dupa'
    })
    // dispatch({
    //     type: 'SIMPLE_ACTION',
    //     payload: 'result_of_simple_action'
    // })
}

