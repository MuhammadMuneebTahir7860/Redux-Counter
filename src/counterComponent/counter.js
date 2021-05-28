import './style.css';
import {useDispatch,useSelector} from 'react-redux';
import { increaseCounter,decreaseCounter, resetCounter } from '../redux/actions/counterActions';

export default function Counter(){
    let viewCounter = useSelector(store => store);
    let dispatch =useDispatch();
     
    let decreaseBtn=() =>{
        dispatch(decreaseCounter())
    }
    let increaseBtn=() =>{
        dispatch(increaseCounter())
    }
    let resetBtn=()=>{
        dispatch(resetCounter())
    }
    return(
        <>
        <div className='counterDiv'>
            <div className='zeroSection'>
                <p>
                    {viewCounter.counterReducer.count}
                </p>
            </div>
            <div className='decButton'>
                <button onClick={decreaseBtn}>-</button>
            </div>
            <div className='incButton'>
                <button onClick={increaseBtn}>+</button>
            </div>
        </div>
        <div className='resetButton'>
        <button onClick={resetBtn}>Reset</button>
        </div>
        </>
    )
}