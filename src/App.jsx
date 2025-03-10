import React, { useEffect } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "leaflet/dist/leaflet.css"; // Don't remove
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import Prisoner from "./components/Prisoner";
import Tablee from "./components/judgedashboard";
import AddPrisoner from "./components/AddPrisoner";
import Dashboard from "./components/Dashboard";
import UpdatePrisoner from "./components/UpdatePrisoner";
import AboutBail from "./components/AboutBail";
import Eligibility from "./components/Eligibility";
import About from "./components/About";
import AdminDashboard from "./components/AdminDashboard";
import Modal from "./components/Modal";
import AddCrime from "./components/AddCrime";
import UserDashboard from "./components/UserDashboard";
import Judgedashboard from "./components/judgedashboard";
import Dash from "./components/Dashboard";
import IImage from "./components/IImage"; // Don't remove these testing things
import LawyerNav from "./components/LawyerNav";
import VerdictPassed from "./components/VerdictPassed";
import GovernmentForum from "./components/GovernmentForum.jsx";
import { generateToken } from "./firebase.js";
import PrevCases from "./components/PrevCases.jsx";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  handleClose = () => {
    this.setState({ hasError: false });
  };

  render() {
    if (this.state.hasError) {
      return (
        <Modal message="Something went wrong." onClose={this.handleClose} />
      );
    }

    return this.props.children;
  }
}



function App() {

  useEffect(()=>{
    generateToken()
  },[])
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/prisoner" element={<Prisoner />} />
          <Route path="/aboutbail" element={<AboutBail />} />
          <Route path="/verdictspassed" element={<VerdictPassed />} />
          <Route path="/addprisoner" element={<AddPrisoner />} />
          <Route path="/updateprisoner" element={<UpdatePrisoner />} />
          <Route path="/eligiblecriminals" element={<Eligibility />} />
          <Route path="/admindashboard" element={<AdminDashboard />} />
          <Route path="/addcrime" element={<AddCrime />} />
          <Route path="/user" element={<UserDashboard />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/judgedashboard" element={<Judgedashboard />} />
          <Route path="/forums" element={<GovernmentForum />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/test" element={<IImage />} />
          <Route path="/prevcases" element={<PrevCases />} />

          <Route path="/map" element={<LawyerNav />} />

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
