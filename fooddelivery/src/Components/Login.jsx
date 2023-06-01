import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import backgroundImage from '../Components/12.jpg';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  async function login(event) {
    event.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/v1/login', {
        email: email,
        password: password,
      });
      console.log(res.data);

      if (res.data.message === 'Email not exists') {
        alert('Email not exists');
      } else if (res.data.message === 'Login Success') {
        navigate('/home');
      } else {
        alert('Incorrect Email and Password not match');
      }
    } catch (err) {
      alert(err);
    }
  }

  return (
    <div
      className="container d-flex align-items-center justify-content-center flex-column"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
      }}
    >
      <Link to="/admin">
        <h3 className="text-primary mb-4">
          <button className="btn btn-dark">Admin</button>
        </h3>
      </Link>

      <table className="table-sm table-hover">
        <tbody>
          <tr>
            <th colSpan="2">
              <h1>Sign In</h1>
            </th>
          </tr>
          <tr>
            <td>
              <label htmlFor="email">
                <b>Email</b>
              </label>
            </td>
          </tr>
          <tr>
            <td>
              <input
                type="text"
                id="email"
                placeholder="Email"
                size="30"
                value={email}
                required
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
                className="form-control"
              />
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="password">
                <b>Password</b>
              </label>
            </td>
          </tr>
          <tr>
            <td>
              <input
                type="password"
                id="password"
                required
                placeholder="Password"
                size="30"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
                className="form-control"
              />
            </td>
          </tr>
          <tr>
            <th colSpan={2}>
              <input
                type="submit"
                value="Login"
                className="form-control btn btn-dark rounded submit px-3 text-white"
                onClick={login}
              />
            </th>
          </tr>
          <tr>
            <td colSpan="2">
              <label>
                <b>Not a member?</b>
              </label>
              <Link to="/register">
                <b>Sign Up</b>
              </Link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Login;
