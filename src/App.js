import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";


import Landing from './pages/landing';
import Signup from './pages/signup';
import Login from './pages/login';
import Preference from './pages/preference-setting';
import ForgetPassword from './pages/forget-password';
import UserLanding from './pages/UserLanding';
import CourseDetail from './pages/CourseDetail';
import CourseLecture from './pages/CourseLecture';
import Courses from './pages/Courses';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Wishlist from './pages/Wishlist';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' exact element={<Landing />} />
        <Route path='/signup' exact element={<Signup />} />
        <Route path='/login' exact element={<Login />} />
        <Route path='/preference-setting' exact element={<Preference />} />
        <Route path='/forget-password' exact element={<ForgetPassword />} />

        <Route path='/user-landing' exact element={<UserLanding />} />
        <Route path='/cart' exact element={<Cart />} />
        <Route path='/wishlist' exact element={<Wishlist />} />
        <Route path='/checkout' exact element={<Checkout />} />
        <Route path='/courses' exact element={<Courses />} />
        <Route path='/courses/:id' exact element={<CourseDetail />} />
        <Route path='/courses/watch' exact element={<CourseLecture />} />

      </Routes>
    </Router>
  );
}

export default App;
