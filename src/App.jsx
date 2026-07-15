import { useState } from "react";
import Login from "./components/Login";
import Signup from "./components/Signup";

function App() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <>
      {isLogin ? (
        <Login onSignupClick={() => setIsLogin(false)} />
      ) : (
        <Signup onLoginClick={() => setIsLogin(true)} />
      )}
    </>
  );
}

export default App;