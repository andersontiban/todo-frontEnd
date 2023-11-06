import logo from './logo.svg';
import './App.css';
import DataFetchComponent from './components/DataFetchComponent';
import Login from './components/auth/Login';
import Dashboard from './components/DashBoard';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from "react-router-dom";
import AddTodo from './components/AddTodo';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/add" element={<AddTodo />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
