import React, { useState } from 'react'
import '../App.css'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset,incrementByAmount } from '../redux/counterSlice'
const Counter = () => {
  const [amount,setAmount] = useState(0)
  const handleIncrementAmount =()=>{
    if(amount){
      dispatch(incrementByAmount(Number(amount)))
    }else{
      alert("Please enter the amount to be incremented!!!")
    }
  }
  const dispatch = useDispatch()
  // state here indicate store
  const {count} = useSelector(state=>state.counterReducer)
  return (
    <div>
      <h1 style={{textAlign:'center'}}>Counter App</h1>
      <div className='counter-container'>
      <div className='counter-name'>{count}</div>
      <div className='buttons'>
      <button onClick={()=>dispatch(decrement())} className='bn' style={{backgroundColor:'yellow',marginRight:'60px',color:'black'}}>DECREMENT</button>
      <button onClick={()=>dispatch(reset())} className='bn' style={{backgroundColor:'red',marginRight:'60px'}}>RESET</button>
      <button onClick={()=>dispatch(increment())} className='bn' style={{backgroundColor:'green'}}>INCREMENT</button>
      </div>
      <div className='input-button'>
        <input onChange={e=>setAmount(e.target.value)} type="text" placeholder='Incremented counter amount' className='form-control' />
        <button onClick={handleIncrementAmount} className='btn-info'>INCREMENT BY <br />AMOUNT</button>
      </div>
      </div>
    </div>
  )
}

export default Counter
