import "@/app/globals.css";
import { FaGithub, FaGoogle, FaFacebook, FaApple, FaMicrosoft } from "react-icons/fa";
import Image from "next/image";
import SignupForm from "../components/forms/signupForm";
const Page = () => {
  return (
    <div className="signupPage">
      <div className="signupContainer p- bg-black">
        {/* <div className="signup_upper">

          <div className="signupButtons">
            <button className="signupButton">Sign Up</button>
            <button className="loginButton">Login</button>
          </div>
        </div> */}

        <div className="signup_lower">
          <div className="signupForm">
            <SignupForm />

          </div>

          <div className="continue_with_Buttons">
            <p style={{ color: "black", fontSize: "", marginLeft: "8.5rem" }}>Or</p>
            <button className="continue_with_google">
              <FaGoogle style={{ height: "20px", width: "20px" }} />
              Continue with Google
            </button>
            <button className="continue_with_github">
              <FaGithub style={{ height: "24px", width: "24px" }} />
              Continue with Github
            </button>

            <button className="continue_with_apple">
              <FaApple style={{ height: "24px", width: "24px" }} />
              Continue with Apple
            </button>
            <button className="Continue_with_microsoft bg-blue-600 text-white">
              <FaMicrosoft style={{ height: "24px", width: "24px" }} />
              Continue with Microsoft
            </button>
          </div>

          <div className="lower_text">
            <p>
              Already have an account? <a href="/login">Login</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page; // Export the component as default
