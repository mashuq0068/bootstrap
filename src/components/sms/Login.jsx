const Login = () => {
  return (
    <div
      style={{ height: "100vh" }}
      className="d-flex container justify-content-center align-items-center"
    >
      <div className=" p-3 shadow-lg ">
        <h3 className="text-center mb-3 ">Sign <span className="text-primary">in</span></h3>
        <form className="addUserForm    d-flex justify-content-center align-items-center">
          <div className=" d-flex custom-width  justify-content-center  flex-column gap-3 ">
            {/* email */}
            <label htmlFor="email">
              Email <span className="text-danger">*</span>
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              autoComplete="off"
              placeholder="Enter your Email"
            />
            {/* password */}
            <label htmlFor="Password">
              Password <span className="text-danger">*</span>
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              autoComplete="off"
              placeholder="Enter your Password"
            />
            {/* confirm password */}
            <label htmlFor="confirmPassword">
              Confirm Password <span className="text-danger">*</span>
            </label>
            <input
              type="confirmPassword"
              className="form-control"
              id="confirmPassword"
              name="confirmPassword"
              autoComplete="off"
              placeholder="Confirm your password"
            />
            {/* submit button  */}
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </div>
        </form>
        <div className="d-flex justify-content-center gap-2 align-items-center">
          <p className="text-center mt-3">Don not have Account? </p>
          <span className="text-primary">Sign Up</span>
        </div>
      </div>
    </div>
  );
};

export default Login;
