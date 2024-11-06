import React, { useState } from "react";
import Button from "../../components/buttons/Button";
import { Link, useNavigate } from "react-router-dom";
import Joi from "joi";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "./firebase";
import { setDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify";
import { IMGS } from "../../utilities/Imgs";

const schema = Joi.object({
  name: Joi.string().alphanum().min(3).max(30).required(),
  email: Joi.string()
    .email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net"] },
    })
    .required(),
  password: Joi.string()
    .pattern(new RegExp("^(?=.*[A-Z])(?=.*[a-zA-Z]).{7,30}$"))
    .required(),
  confirmPass: Joi.ref("password"),
});

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validateForm = () => {
    const { error } = schema.validate({ name, email, password, confirmPass });
    if (error) {
      const newErrors = {};
      error.details.forEach(({ path, message }) => {
        if (path[0] === "confirmPass") {
          newErrors.confirmPass = "Passwords must match";
        } else if (path[0] === "password") {
          newErrors.password =
            "Password must be at least 7 characters long and include at least one uppercase letter";
        } else {
          newErrors[path[0]] = message;
        }
      });
      setErrors(newErrors);
      return false;
    }
    setErrors({});
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        await createUserWithEmailAndPassword(auth, email, password);
        const user = auth.currentUser;
        console.log(user);
        if (user) {
          await setDoc(doc(db, "Users", user.uid), {
            email: user.email,
            name: name,
            photo: "",
          });
        }
        console.log("User Registered Successfully!!");
        toast.success("User Registered Successfully!!", {
          position: "top-center",
        });
        navigate("/");
      } catch (error) {
        error.message === "Firebase: Error (auth/email-already-in-use)."
          ? toast.error("Email Already In Use", {
              position: "bottom-center",
            })
          : console.log(error.message);
      }
    }
  };

  return (
    <div className="flex min-h-screen">
      <div className="w-full md:w-1/2 flex items-center justify-center bg-white">
        <div className="w-full max-w-md p-8 rounded-lg">
          <h2 className="md:text-4xl text-2xl font-semibold md:mb-6  mb-3 font-serif">
            SIGN UP
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block sm:text-sm text-[8px] text-gray-700 uppercase"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={`mt-1 block w-full md:px-3 md:py-2 p-1 md:text-base text-xs border ${
                  errors.name ? "border-red-500" : "border-black"
                } shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:sm:text-sm text-[8px]`}
              />
              {errors.name && (
                <p className="mt-2 sm:text-sm text-[8px] text-red-600">
                  {errors.name}
                </p>
              )}
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block sm:text-sm text-[8px] text-gray-700 uppercase"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`mt-1 block w-full md:px-3 md:py-2 p-1 md:text-base text-xs border ${
                  errors.email ? "border-red-500" : "border-black"
                } shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:sm:text-sm text-[8px]`}
              />
              {errors.email && (
                <p className="mt-2 sm:text-sm text-[8px] text-red-600">
                  {errors.email}
                </p>
              )}
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block sm:text-sm text-[8px] text-gray-700 uppercase"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={`mt-1 block w-full md:px-3 md:py-2 p-1 md:text-base text-xs border ${
                  errors.password ? "border-red-500" : "border-black"
                } shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:sm:text-sm text-[8px]`}
              />
              {errors.password && (
                <p className="mt-2 sm:text-sm text-[8px] text-red-600">
                  {errors.password}
                </p>
              )}
            </div>
            <div className="mb-4">
              <label
                htmlFor="confirmPass"
                className="block sm:text-sm text-[8px] text-gray-700 uppercase"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPass"
                name="confirmPass"
                value={confirmPass}
                onChange={(e) => setConfirmPass(e.target.value)}
                className={`mt-1 block w-full md:px-3 md:py-2 p-1 md:text-base text-xs border ${
                  errors.confirmPass ? "border-red-500" : "border-black"
                } shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:sm:text-sm text-[8px]`}
              />
              {errors.confirmPass && (
                <p className="mt-2 sm:text-sm text-[8px] text-red-600">
                  {errors.confirmPass}
                </p>
              )}
            </div>
            <Button
              title="SIGN UP"
              className="w-full py-3 px-4 bg-primary text-white font-semibold shadow-sm focus:outline-none "
            />
          </form>
          <div className="mt-4 text-center capitalize text-black/60 font-serif sm:text-sm text-xs flex justify-center items-center gap-1">
            <p className="">Already have an account?</p>
            <Link
              to="/auth/login"
              className="hover:text-primary hover:underline"
            >
              Log in
            </Link>
          </div>
        </div>
      </div>
      <div
        className="hidden md:flex justify-end md:w-1/2 bg-cover bg-center"
        style={{
          backgroundImage: `url(${IMGS.signup})`,
        }}
      >
        <img src={IMGS.logo} className="w-24 h-12 mt-5 mr-5" alt="Logo" />
      </div>
    </div>
  );
}
