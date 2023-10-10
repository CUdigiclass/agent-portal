import { Routes, Route } from 'react-router-dom';
import './App.css';
import AgentLoginForm from './component/AgentLoginForm';
import Home from './component/Home/Home';
import Navbar from './component/Navbar/Navbar';
import AdminDashBoard from './component/AdminDashboard/AdminDashboard';
import Agent from './component/Agent/Agent';
// import Sildebar from './component/Sidebar/Sildebar';


function App() {
  return (
    <div className="App">

      <Navbar />
      <Routes>
        {/* <Route path="/" element={<Sidebar />} /> */}
        <Route path="/dashboard" element={<AdminDashBoard />} />
        {/* <Route path="/login" element={<AgentLoginForm />} /> */}
        <Route  path="/create-agent"  element={ <Agent /> }   />
         

      </Routes>
    </div>
  );
}

export default App;
