import {BrowserRouter,  Route, Routes } from 'react-router-dom'
import Login from './components/Login';
import Register from './components/Register';

const App = () => {
  return (
    <BrowserRouter>
    <div>hi</div>
    <Routes>
      <Route path='/register' Component={Register}/>
      <Route path='/login' Component={Login} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
