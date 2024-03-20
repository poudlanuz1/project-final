import './App.css';
import Navbar from './component/Navbar';
import Footer from './component/footer';
import Home from './component/home';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import Contact from './component/Contact';
import About from './component/about';
import Videos from './component/Videos';
import ProtectedRoute from './component/ProtectedRoutes';
import Login from './component/Login';
import CustomWedding from './component/CustomWedding';
import CustomEvent from './component/CustomEvent';
import UserProvider from './component/Providers/UserProvider';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Gallary from './pages/Gallary';
import Photos from './pages/Photos';
import Packages from './component/Packages';
import Profile from './pages/Profile';
const App = () => {
  return (
    <BrowserRouter>
    <UserProvider>

        <Navbar/>
        <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/gallery" element={<Gallary/>} />
        

        <Route path="/packages" element={
          
          <ProtectedRoute>

            <Packages/>
          </ProtectedRoute>
        } />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/about-us" element={<About/>} />
        <Route path="/gallery/photos/:category" element={<Photos/>} />
        <Route path="/gallery/videos" element={<Videos/>} />
        <Route path="/packages/custom/wedding" element={
          <ProtectedRoute>

        <CustomWedding/>
          </ProtectedRoute>
        
        } />
        <Route path="/my-profile" element={
          <ProtectedRoute>

        <Profile/>
          </ProtectedRoute>
        
        } />
        <Route path="/packages/custom/events" element={
        <ProtectedRoute>

        <CustomEvent/>
        </ProtectedRoute>
      } 
        />
        
        </Routes>
        <Footer/>
        <ToastContainer
        position='top-center'
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        />
        </UserProvider>
    </BrowserRouter>
  );
};
export default App;