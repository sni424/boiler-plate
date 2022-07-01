import { Route, Routes} from 'react-router-dom';
import LadingPage from './components/views/LandingPage';
import LoginPage from './components/views/LoginPage';
import RegisterPage from './components/views/RegisterPage/idex';

const App = () =>{
  return (
<Routes>
  <Route path="/" element={<LadingPage />} />
  <Route path="/login" element={<LoginPage />} />
  <Route path="/register" element={<RegisterPage />} />
</Routes>
  );
}

export default App;
