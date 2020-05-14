const initialState={
    insult: 'hi',
}

export const reducer = (state=initialState, action)=>{
    switch(action.type){
        case 'FETCHING_START':
            return{
                ...state,
            }
        case 'FETCHING_DONE':
            return{
                ...state,
                insult: action.payload,
            }
        default:
            return state
    }
}