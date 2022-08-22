import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = ({ setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [allEntry, setAllEntry] = useState([]);

  const navigate = useNavigate();

  const submitForm = (e) => {
    e.preventDefault();
    const newEntry = { email: email, password: password };
    setAllEntry([...allEntry, newEntry]);
    if ( !email || !password ) return;
    setUser({ email: email, password: password });
    navigate("/Dashboard");
  };

  const handle = () => {
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
  };

  return (
    <div className="container">
      <div className="box">
        <div className="box2">
          <div className="box2-text1">
            <h2>Report Login Form</h2>
          </div>
          <form action="" onSubmit={submitForm}>
            <div className="box3">
              <section className="sec1">
                <h2 className="box3-text1">Login Form</h2>
                <div>
                  <label
                    htmlFor=""
                    className="box3-text2"
                    placeholder="user Name"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <br />
                </div>
                <div>
                  <label htmlFor="password" className="box3-text2">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <br />
                </div>
                <button type="submit" className="btn" onClick={handle}>
                  Login
                </button>
                <div>
                  <div>{localStorage.getItem(email)}</div>
                  <div>{localStorage.getItem(password)}</div>
                </div>
              </section>
              <section className="sec2">
                <img
                  src="https://png.pngtree.com/png-vector/20191003/ourmid/pngtree-user-login-or-authenticate-icon-on-gray-background-flat-icon-ve-png-image_1786166.jpg"
                  alt=""
                />
              </section>
            </div>
          </form>
          <div className="box2-text1">
            <h6>
              2022 Report Login Form. All rights reserved | Design by GSoft
              Consulting.
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
