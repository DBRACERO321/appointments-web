// src/pages/Login.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/auth/AuthContext';
import ErrorMessageForm from '../../components/messages/ErrorMessageForm';
import useForm from '../../hooks/forms/useForms';

const Login: React.FC = () => {
  const { login } = useAuth();
  const navigate = useNavigate(); 
  const { values, handleChange } = useForm(
    {
      username:'',
      password:''
    }
  );
  const [error, setError] = useState<string | null>(null); // Estado para errores

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    // Simulación de autenticación
    if (values.username === 'admin' && values.password === '1234') {
      const sesionJWT = 'asdasdasdasdasdasd';

      login(sesionJWT);  
      navigate('/dashboard');
    } else {
      setError('Usuario o contraseña incorrectos'); 
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white shadow-md rounded">
        <h2 className="text-2xl font-semibold mb-6 text-center">Iniciar Sesión</h2>

        {error && (
         <ErrorMessageForm error={error}/>          
        )}

        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">
              Usuario
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={values.username as string}
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={values.password as string}
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
          >
            Iniciar Sesión
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
