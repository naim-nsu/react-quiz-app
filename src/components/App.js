import { AuthProvider } from "../contexts/AuthContext";
import "../styles/App.css";
import Layout from "./Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";
import Signup from "./pages/Signup";
import PrivateOutlet from "./PrivateOutlet";
import PublicOutlet from "./PublicOutlet";

import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <AuthProvider>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/*" element={<PublicOutlet />}>
                <Route path="signup" element={<Signup />} />
                <Route path="login" element={<Login />} />
              </Route>
              <Route path="/*" element={<PrivateOutlet />}>
                <Route path="quiz/:id" element={<Quiz />} />
                <Route path="result/:id" element={<Result />} />
              </Route>
            </Routes>
          </Layout>
        </AuthProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
