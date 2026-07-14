import { useState } from "react";
import Login from "./components/login";
import Signup from "./components/signup";

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