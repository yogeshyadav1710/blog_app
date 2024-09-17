import { useEffect, useState } from "react";
import "./App.css";
import authService from "./appwrite/accountServices";
import { useDispatch } from "react-redux";
import { login, logout } from "./redux/authSlice";
import { Footer, Header } from "./components";
import { Outlet } from "react-router-dom";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          console.log("userData", userData);
          dispatch(login(userData));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => setLoading(false));
  }, []);

  return !loading ? (
    <div className="min-h-screen flex flex-wrap content-between bg-gray-400">
      <div className="w-full block">
        <Header />
        <main>
          BLOGS: <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  ) : (
    "loading..."
  );
}

export default App;
