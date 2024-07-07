"use client";
import Link from "next/link";
import "./Signup.css";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import signUphandler from "./signupAction";
const Signup = () => {
  const router = useRouter();
  return (
    <div className="signup">
      <Link href="/">
        <img
          className="signup__image"
          src="http://pngimg.com/uploads/amazon/amazon_PNG21.png"
          alt="amazon"
        />
      </Link>
      <div className="signup__container">
        <h1>Create Account</h1>
        <form
          action={async (formdata) => {
            const res = await signUphandler(formdata);
            console.log(res);

            if (res) {
              toast.success("Signed Up successfully!");
              router.push("/login");
            } else toast.error("Error while Signing up");
          }}
        >
          <h5 className="signup__label">Name</h5>
          <input
            type="text"
            // value={userEmail}
            // onChange={(e) => setUserEmail(e.target.value)}
            name="name"
            id=""
          />
          <h5 className="signup__label">Email</h5>
          <input
            type="email"
            // value={userPassword}
            // onChange={(e) => setUserPassword(e.target.value)}
            name="email"
            id=""
          />
          <h5 className="signup__label">Password</h5>
          <input type="password" name="password" id="" />
          <button type="submit" className="signup__signupButton">
            Sign up
          </button>
        </form>
        <p className="signup__terms">
          ℹ Passwords must be at least 6 characters.
        </p>
      </div>
      <div className="signup__login">
        <p>Already have an account?</p>
        <Link href="/login">
          <button className="signup__loginButton">Sign in</button>
        </Link>
      </div>
    </div>
  );
};

export default Signup;
