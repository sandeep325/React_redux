import './App.css';
import {incNumber,decNumber} from './Actions/index'
// dispatch is use for triger the action 
// selector is use for accress a global store data
import {useSelector,useDispatch} from "react-redux";

const  App = () =>{
  // access global state/store
  // const GlobalState = useSelector((state)=> state.changeTheNumber);
  const GlobalState = useSelector((state)=> state.performer);
const dispatch = useDispatch();
  return (
   <>
   <div className="App-header">
   <h4>redux</h4>
       <div>
       <a className="minus" onClick={()=>{ dispatch(decNumber(5))}}><span>-</span></a>
      <input name="counter" type="text" value={GlobalState}/>
     <a className="plus" onClick={()=> dispatch(incNumber(5)) }><span>+</span></a>
      </div>
   </div>
   </>
  );
}

export default App;
