import logo from './logo.svg';
import './App.css';

// 
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import * as action from './redux/action/index';
// 
import Header from './components/Header';
import HomePage from './pages/HomePage';


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
    <div className='App'>
      <Header />
      <HomePage />
    </div>
  );
}

export default App;
