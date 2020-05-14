import axios from "axios"

export const fetchInsult = () => {
    return dispatch => {
        dispatch({type: 'FETCHING_START'})
        axios.get(`https://baconipsum.com/api/?type=meat-and-filler`)
            .then(response=>{
                dispatch({type: 'FETCHING_DONE', payload: response.data[0]})
            })
            .catch(error=>console.log(error))
    }
}