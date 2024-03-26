
import './App.css';
import { useReducer } from 'react';

const reducer=(prevState, action)=>{
    switch(action.type){
      case 'change':
        return{text:action.playload}
      case 'uppercase':
        return{text: prevState.text.toUpperCase()}
      case 'lowercase':
        return{text: prevState.text.toLowerCase()}
      case 'remove':
        return{text:action.playload}
      case 'trim':
        return{text:prevState.text.trim()}
      default:
        return prevState
    }
}



function App() {

  const initialState={
    text:""
  }
  const [state,dispatch]=useReducer(reducer, initialState)

  return (
    <div className='textDiv'>
      <h1 style={{textAlign:"center"}}>Enter Your Text Here:</h1><br/>
      <input type='text' onChange={(e)=>{dispatch({type:"change",playload: e.target.value})}}/>
      <div className='btn'>
      <button onClick={()=>{dispatch({type:"uppercase"})}}>To Upper Case</button>
      <button onClick={()=>{dispatch({type:"lowercase"})}}>To Lower Case</button>
      <button onClick={()=>{dispatch({type:"remove",playload:""})}}>clear</button>
      <button onClick={()=>{dispatch({type:"trim"})}}>Trim</button>
      </div>
      <p>No of Words: {state.text.split(" ").length}</p>
      <p>No of Charecters: {state.text.split("").length}</p>
      <p>Reading Time: {state.text.split("").length/200}</p>
      <h2 style={{textAlign:"center"}}>Text Previwe</h2>
      <p className='textarea'>{state.text}</p>
    </div>

  );
}

export default App;
