import  {increaseCounter,decreaseCounter} from '../actions/counterActions';

let initialState={
    count:0
}

let counterReducer =(state=initialState,action)=>{

    switch(action.type){
        case "Increase_Counter":
        return{
            count:state.count+1
        }
        case "Decrease_Counter":
            if(state.count!==0){ 
            return{
                count:state.count-1
            }
        }
        else{
            alert('Counter Does Not Contains Negative Value')
        }
        case "Reset_Counter":
            return{
                count:0
            }
            default: return state;
    }
}

export {counterReducer}