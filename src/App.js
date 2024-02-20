import './App.css';
import Navbar from './component/Navbar';
import Footer from './component/footer';
import Home from './component/home';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import Contact from './component/Contact';
import About from './component/about';
import Videos from './component/videos';
import ProtectedRoute from './component/ProtectedRoutes';
import Login from './component/Login';
import CustomWedding from './component/customwedding';
import CustomEvents from './component/customevent';
import UserProvider from './component/Providers/UserProvider';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Gallary from './pages/Gallary';
import Photos from './pages/Photos';
import Packages from './component/Packages';
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
        <Route path="/packages/custom/events" element={
        <ProtectedRoute>

        <CustomEvents/>
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