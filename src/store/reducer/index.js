const defaultState ={
    num: 10000
}

export default(state = defaultState,action) =>{
    console.log(state.num); //num:10000
    // console.log(action);
    let newState = JSON.parse(JSON.stringify(state))
    if(action.type === "add"){
        newState.num += action.unit
        return newState
    }
    return state
}