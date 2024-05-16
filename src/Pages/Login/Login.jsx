import React, { useState } from "react";

function Login() {
  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
    username: "",
    phone: "",
  });
  const [showJson, setShowJson] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userDetails);
    setShowJson(true)
  };
  const handleInputChange = (e) => {
    userDetails[e.target.name] = e.target.value;
    setUserDetails({ ...userDetails });
  };

  const handleReset = () => {
    setUserDetails({
      email: "",
      password: "",
      username: "",
      phone: "",
    });
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3 login-form">
            <h2 className="text-center">Login </h2>
            <form>
              <div className="form-group mb-3">
                <label htmlFor="email">Email address:</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter email"
                  value={userDetails.email}
                  onChange={handleInputChange}
                  name="email"
                  required
                />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="password">Password:</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Enter password"
                  value={userDetails.password}
                  name="password"
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="username">username:</label>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  placeholder="Enter username"
                  name="username"
                  value={userDetails.username}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="phone">Phone:</label>
                <input
                  type="text"
                  className="form-control"
                  id="phone"
                  placeholder="Enter phone"
                  name="phone"
                  value={userDetails.phone}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <button
                className="btn btn-primary btn-block "
                onClick={handleSubmit}
                
              >
                Login
              </button>
              <button
                type="reset"
                onClick={handleReset}
                className="btn btn-warning"
              >
                Reset
              </button>
              {showJson && <pre>
                <code>{JSON.stringify(userDetails, null, 2)}</code>
              </pre>}
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
