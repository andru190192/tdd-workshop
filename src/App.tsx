import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { add } from "./match";
import { getUserProfile } from "./services/user.service";
import { UserInfoInterface } from "./services/interfaces/user.interface";

function App() {
  const [result, setResult] = useState(0);
  const [user, setUser] = useState<UserInfoInterface | null>(null);

  const hanlderAdd = () => {
    setResult(add([3, 5]));
  };

  const getUserInfo = async () => {
    const userData = await getUserProfile("andru190192");
    setUser(userData);
  };

  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <h1>3 + 5</h1>
      <h1>{result}</h1>
      <div className="card">
        <button onClick={hanlderAdd}>Sumar</button>
      </div>
      <div className="card">
        <button onClick={getUserInfo}>Ver Perfil GitHub</button>
      </div>
      {user && (
        <div>
          <img
            className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
            src={user.avatar_url}
            alt=""
          />
          <p>{user.name}</p>
          <p>{user.location}</p>
        </div>
      )}
    </div>
  );
}

export default App;
