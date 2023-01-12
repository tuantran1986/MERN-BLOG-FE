import logo from './logo.svg';
import './App.css';

// 
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import * as action from './redux/action/index';


function App() {

  // 1.lấy DATA - từ REDUCER về COMPONENT = useSelector
  const postList = useSelector(state => state.postReducer.postList);
  console.log('...run useSelector: postList = ', postList);

  // 2. thực hiện CALL API = useDispatch
  const dispatch = useDispatch();

  
  useEffect(() => {    
    console.log('1...run dispatch: GET_ALL_POSTS');
    dispatch(action.getAllPosts());
  }, [])
  




  // RENDER:
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          TUANTRAN - CODE
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
