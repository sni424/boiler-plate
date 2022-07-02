import { Route, Routes, useNavigate } from 'react-router-dom';
import LadingPage from './components/views/LandingPage';
import LoginPage from './components/views/LoginPage';
import RegisterPage from './components/views/RegisterPage/idex';
import Auth from './hoc/auth';

const App = () => {
  const navi = useNavigate();
  const NewLandingPage = Auth(LadingPage, null);

  const NewLoginPage = Auth(LoginPage, false);

  const NewRegisterPage = Auth(RegisterPage, false);

  return (
    <Routes>
      <Route path="/" element={<NewLandingPage navi={navi} />} />
      <Route path="/login" element={<NewLoginPage navi={navi} />} />
      <Route path="/register" element={<NewRegisterPage navi={navi} />} />
    </Routes>
  );
};

export default App;
