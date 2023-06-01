import { useState } from "react";
import axios from "axios";
import backgroundImage from '../Components/16.jpg';
import { Link, useNavigate } from "react-router-dom";
import validator from "validator";

function Register() {
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [delivery_address, setDeliveryAddress] = useState("");
  const [phone_number, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validateForm = () => {
    const errors = {};

    if (validator.isEmpty(first_name)) {
      errors.first_name = "First name is required";
    }

    if (validator.isEmpty(last_name)) {
      errors.last_name = "Last name is required";
    }

    if (!validator.isEmail(email)) {
      errors.email = "Invalid email address";
    }

    if (!validator.isMobilePhone(phone_number)) {
      errors.phone_number = "Invalid phone number";
    }

    if (validator.isEmpty(delivery_address)) {
      errors.delivery_address = "Delivery address is required";
    }

    if (validator.isEmpty(password)) {
      errors.password = "Password is required";
    } else if (!validator.isLength(password, { min: 8 })) {
      errors.password = "Password should be at least 8 characters long";
    }

    return errors;
  };

  async function save(event) {
    event.preventDefault();

    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    try {
      await axios.post("http://localhost:5000/api/v1/addcustomer", {
        first_name: first_name,
        last_name: last_name,
        email: email,
        password: password,
        delivery_address: delivery_address,
        phone_number: phone_number
      });
      alert("Account created Successfully");
      navigate('/');
    } catch (err) {
      alert(err);
    }
  }

  return (
    <div
      className="container"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        minWidth: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Link to='/'>
        <b>
          <h3 className="text-primary" style={{ marginTop: '-400px', marginLeft: '-400px' }}>
            <button className="btn btn-dark">Login</button>
          </h3>
        </b>
      </Link>

      <form>
        <h1><b>SIGN UP</b></h1>
        <table className="table-sm table-hover">
          <tr>
            <th>
              <label><b>First Name:</b></label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter First Name"
                size="30"
                value={first_name}
                onChange={(event) => {
                  setFirstName(event.target.value);
                }}
              />
              {errors.first_name && <p className="text-danger">{errors.first_name}</p>}
            </th>
          </tr>

          <tr>
            <th>
              <label><b>Last Name:</b></label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Last Name"
                value={last_name}
                onChange={(event) => {
                  setLastName(event.target.value);
                }}
              />
              {errors.last_name && <p className="text-danger">{errors.last_name}</p>}
            </th>
          </tr>

          <tr>
            <th>
              <label><b>Email:</b></label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter Email"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />
              {errors.email && <p className="text-danger">{errors.email}</p>}
            </th>
          </tr>

          <tr>
            <th>
              <label><b>Phone Number:</b></label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Phone Number"
                value={phone_number}
                onChange={(event) => {
                  setPhoneNumber(event.target.value);
                }}
              />
              {errors.phone_number && <p className="text-danger">{errors.phone_number}</p>}
            </th>
          </tr>

          <tr>
            <th>
              <label><b>Address:</b></label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Delivery Address"
                value={delivery_address}
                onChange={(event) => {
                  setDeliveryAddress(event.target.value);
                }}
              />
              {errors.delivery_address && <p className="text-danger">{errors.delivery_address}</p>}
            </th>
          </tr>

          <tr>
            <th>
              <label><b>Password:</b></label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter Password"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
              />
              {errors.password && <p className="text-danger">{errors.password}</p>}
            </th>
          </tr>

          <br />
          <tr>
            <th colSpan={2}>
              <Link to="/">
                <button
                  type="submit"
                  value="Login"
                  className="form-control btn btn-primary rounded submit px-3 btn-dark text-white"
                  onClick={save}
                >
                  <b>Register</b>
                </button>
              </Link>
            </th>
          </tr>
        </table>
      </form>
    </div>
  );
}

export default Register;
