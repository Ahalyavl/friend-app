import logo from './logo.svg';
import './App.css';
import AddFriend from './components/AddFriend';
import SearchFriend from './components/SearchFriend';
import DeleteFriend from './components/DeleteFriend';
import ViewFriend from './components/ViewFriend';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div >
    <BrowserRouter>
    <Routes>
      <Route path='/' element ={<AddFriend/>}/>
      <Route path='/search' element ={<SearchFriend/>}/>
      <Route path='/delete' element ={<DeleteFriend/>}/>
      <Route path='/viewfriend' element ={<ViewFriend/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
