
let increaseCounter =()=>{
    return{
        type:"Increase_Counter",
        payload:"increase"
    }
}

let decreaseCounter =()=>{
    return{
        type:"Decrease_Counter",
        payload:"decrease"
    }
}
let resetCounter =()=>{
    return{
        type:"Reset_Counter",
        payload:"reset"
    }
}

export {increaseCounter,decreaseCounter,resetCounter}