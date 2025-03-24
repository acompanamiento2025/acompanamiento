import { useState } from "react";
import { auth, googleProvider } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup
} from "firebase/auth";
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const registrar = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Registro exitoso");
    } catch (err) {
      alert(err.message);
    }
  };

  const ingresar = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Bienvenido");
    } catch (err) {
      alert(err.message);
    }
  };

  const loginConGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      alert("Sesión iniciada con Google");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Iniciar sesión</h2>
        <input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="login-buttons">
          <button onClick={ingresar}>Ingresar</button>
          <button onClick={registrar}>Registrarse</button>
          <button onClick={loginConGoogle} className="google">Google</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
