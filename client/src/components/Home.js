import React, { useEffect, useContext } from "react";
import AuthContext from "../context/auth/authContext";

const Home = props => {
  const authContext = useContext(AuthContext);
  const { isAuthenticated } = authContext;

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push("/home");
    }
  });

  return (
    <div id="showcase" style={{ margin: "0 -1rem" }}>
      <div className="card-container valign-wrapper white-text center">
        <div className="card transparent">
          <div className="card-content center">
            <h2 className="">
              OrderMeal <span className="amber-text text-lighten-4">Daily</span>
            </h2>
            <p className="flow-text cyan-text">Best food to eat</p>
            <p className="lead">
              Order now and get tasty home made taste food to your! </p>
          </div>
          <div className="card-action">
            <div className="card-links">
              <a
                href="/register"
                className="btn btn-large waves-effect waves-light teal darken-3"
              >
                Register
              </a>
              <a
                href="/login"
                className="btn btn-large waves-effect teal darken-3"
              >
                Login
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
