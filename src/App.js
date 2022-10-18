import './App.css';
import { Route, Routes } from 'react-router-dom';
import Patient from './components/Patient';
import Home from './components/Home';
import UpdatePatient from './components/UpdatePatient';
import ViewProfile from './components/ViewProfile';
import Login from './components/Login';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/patient" element={<Patient />} />
        <Route path="/patient/updatePatient/:id" element={<UpdatePatient />} />
        <Route path="/patient/ViewProfile/:id" element={<ViewProfile />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </>
  );
}
export default App;
