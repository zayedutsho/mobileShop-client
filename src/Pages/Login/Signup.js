import React, { useContext, useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";

const Signup = () => {
  const [error, setError] = useState("");
  const { signIn } = useContext(AuthContext);
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const { providerLogin } = useContext(AuthContext);

  const googleProvider = new GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    providerLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((error) => console.error(error));
  };

  const from = location.state?.from?.pathname || "/";

  const handleSignupSubmit = (event) => {
    setError("");
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const role = form.role.value;
    // console.log(name, email, password);
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setError("");
        form.reset();
        saveUser(email, role);
        // handleUpdateUserProfile(name, photoURL);
      })
      .catch((e) => {
        console.error(e);
        setError(e.message);
      });
  };

  //   const handleUpdateUserProfile = (name, photoURL) => {
  //     const profile = {
  //       displayName: name,
  //       photoURL: photoURL,
  //     };
  //     updateUserProfile(profile)
  //       .then(() => {})
  //       .catch((error) => console.error(error));
  //   };

  const saveUser = (email, role) => {
    const user = { email, role };
    fetch("https://phonehaat-server-ten.vercel.app/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        navigate(from, { replace: true });
      });
  };

  return (
    <section class="h-screen">
      <div class=" h-1/2 text-gray-800">
        <div class="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
          <div class="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 md:mb-0">
            <form onSubmit={handleSignupSubmit}>
              <div class="flex flex-row items-center justify-center lg:justify-start">
                <p class="text-lg mb-0 mr-4">Sign up with: </p>
                <button
                  onClick={handleGoogleSignIn}
                  type="button"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                  class="inline-block p-3 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mx-1"
                >
                  <FaGoogle></FaGoogle>
                </button>
              </div>

              <div class="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
                <p class="text-center font-semibold mx-4 mb-0">Or</p>
              </div>

              <div class="mb-6">
                <input
                  type="email"
                  name="email"
                  class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="exampleFormControlInput1"
                  placeholder="Email address"
                />
                <p className="text-red-600">{error}</p>
              </div>

              <div class="mb-6">
                <input
                  type="password"
                  name="password"
                  class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="exampleFormControlInput2"
                  placeholder="Password"
                />
                <p className="text-red-600">{error}</p>
              </div>
              <div className="w-full py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding">
                <div className="mb-6">
                  <label htmlFor="role">Signup as: </label>
                  <select id="role">
                    <option value="User" selected>
                      User
                    </option>
                    <option value="Seller">Seller</option>
                  </select>
                </div>
              </div>

              <div class="text-center lg:text-left">
                <button
                  type="submit"
                  class="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                >
                  Signup
                </button>
                <p class="text-sm font-semibold mt-2 pt-1 mb-0">
                  Already have an account? &nbsp;
                  <Link
                    to="/login"
                    href="#!"
                    class="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out"
                  >
                    Login
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
