import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Login.css";
import { clearErrors, login } from "../../actions/userActions";
import Button from "../Components/Button";

const Login = ({ history }) => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const dispatch = useDispatch();

  const { error, loading, isAuthenticated } = useSelector(
    (state) => state.user
  );

  console.log("loginEmail", loginEmail);

  useEffect(() => {
    if (error) {
      console.log(error);
      dispatch(clearErrors());
    }

    if (isAuthenticated) {
      history.push("/home");
    }
  }, [dispatch, error, isAuthenticated]);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("login form submitted");
    dispatch(login(loginEmail, loginPassword));
  };
  console.log(loading, isAuthenticated, "in login form");
  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : (
        !isAuthenticated && (
          <>
            <div class="">
              <div class="grid grid-cols-3 place-content-center place-items-center min-h-screen">
                <div class="col-span-2">
                  <img
                    width={700}
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                    class="img-fluid"
                    alt="Phone "
                  />
                </div>
                <div class="bg-white min-h-screen w-full flex items-center justify-center">
                  <form className="w-3/5 mx-auto" onSubmit={submitHandler}>
                    <div className="pb-5 text-center">
                      <div className="text-3xl font-black">Login</div>
                      <div className="py-2">
                        hey, enter your details to get sign in to your account.
                      </div>
                    </div>
                    <div className="mb-2">
                      <div className="form-label">Email address</div>
                      <div className="pt-2">
                        <input
                          type="email"
                          className="form-field"
                          value={loginEmail}
                          onChange={(e) => setLoginEmail(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="mb-5">
                      <div className="form-label">Password</div>
                      <div className="pt-2">
                        <input
                          type="password"
                          className="form-field"
                          value={loginPassword}
                          onChange={(e) => setLoginPassword(e.target.value)}
                        />
                      </div>
                    </div>
                    {/* <div class="flex justify-between items-center mb-4">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value="0"
                        id="form1Example3"
                      />
                      <label class="form-check-label" for="form1Example3">
                        Remember me{" "}
                      </label>
                    </div>
                     <a href="#!">Forgot password?</a> 
                  </div> */}
                    <Button
                      type="submit"
                      className="primary-button w-full"
                      text={"Sign in"}
                    />
                    {/* <div class="divider flex items-center my-4">
              <p class="text-center fw-bold mx-3 mb-0 text-muted">OR</p>
            </div>

            <a
              class="btn btn-primary btn-lg btn-block"
              style={{ backgroundColor: "#3b5998" }}
              href="#!"
              role="button"
            >
              <i class="fab fa-facebook-f me-2"></i>Continue with Facebook
            </a>
            <a
              class="btn btn-primary btn-lg btn-block"
              style={{ backgroundColor: "#55acee" }}
              href="#!"
              role="button"
            >
              <i class="fab fa-twitter me-2"></i>Continue with Twitter
            </a> */}
                  </form>
                </div>
              </div>
            </div>
          </>
        )
      )}
    </>
  );
};

export default Login;
