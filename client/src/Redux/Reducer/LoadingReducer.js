const LoadingReducer = (state = false, actions)=>{
    switch(actions.type){
        case 'LOADING':
            return !state
        default:
            return state
    }
}

export default LoadingReducer