// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation, Link} from "react-router-dom";
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import Login from './Login/Login';
import Register from './Register/Register';
import PageNotFound from './PageNotFound/PageNotFound';

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <TransitionGroup>
      <CSSTransition key={location.key} timeout={200} classNames="fade">
      <Routes location={location}>
          <Route path='/' element={<Login />}></Route>
          <Route path='/Register' element={<Register />}></Route>
          {/* 404 page */}
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
};

function App() {
  return (
    <>
      <Router>
        
        <AnimatedRoutes/>
      </Router>
    </>
  );
}

export default App; 