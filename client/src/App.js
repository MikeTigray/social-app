import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";

import Home from "pages/Home/Home";
import Login from "pages/Login/Login";
import Profile from "pages/Profile/Profile";
function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/profile/:userId" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
