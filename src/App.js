import logo from './logo.svg';
import './App.css';

// 
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import * as action from './redux/action/index';
// 
import Header from './components/Header';
import HomePage from './pages/HomePage';
import { selectPostList } from './redux/selector';


function App() {

  // 1.lấy DATA - từ REDUCER về COMPONENT = useSelector
    // CLEAN CODE = "lấy - postList trực tiếp - từ component: PostList"
  const postList = useSelector(selectPostList);
    // const postList = useSelector(state => state.postReducer.postList);
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
      <HomePage postList={postList} />
    </div>
  );
}

export default App;
