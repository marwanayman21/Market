import React, { useState } from "react";
import Button from "../../components/buttons/Button";
import { Link, useNavigate } from "react-router-dom";
import Joi from "joi";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";
import { toast } from "react-toastify";
import { IMGS } from "../../utilities/Imgs";

const schema = Joi.object({
  email: Joi.string()
    .email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net"] },
    })
    .required(),
  password: Joi.string()
    .pattern(new RegExp("^(?=.*[A-Z])(?=.*[a-zA-Z]).{7,30}$"))
    .required(),
});

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validateForm = () => {
    const { error } = schema.validate({ email, password });
    if (error) {
      const newErrors = {};
      error.details.forEach(({ path, message }) => {
        if (path[0] === "password") {
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
        await signInWithEmailAndPassword(auth, email, password);
        toast.success("logged in Successfully", {
          position: "top-center",
        });
        navigate("/");
      } catch (error) {
        toast.error("Invalid E-mail or Password", {
          position: "top-center",
        });
      }
    }
  };

  return (
    <div className="flex min-h-screen">
      <div
        className="hidden md:flex md:w-1/2 bg-cover bg-center"
        style={{
          backgroundImage: `url(${IMGS.login})`,
        }}
      >
        <img src={IMGS.darkLogo} className="w-24 h-12 mt-5 ml-5" alt="Logo" />
      </div>

      <div className="w-full md:w-1/2 flex items-center justify-center bg-white">
        <div className="w-full max-w-md p-8 rounded-lg">
          <h2 className="md:text-4xl text-2xl font-semibold md:mb-6  mb-3 font-serif">
            LOG IN
          </h2>
          <form onSubmit={handleSubmit}>
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
                className={`mt-1 block w-full md:px-3 md:py-2 p-1 md:text-base text-xs border 
                ${errors.email ? "border-red-500" : "border-black"}
                shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:sm:text-sm text-[8px]`}
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
            <Button
              title="LOG IN"
              className="w-full py-3 px-4 bg-primary text-white font-semibold shadow-sm focus:outline-none "
            />
          </form>
          <div className="mt-4 text-center capitalize text-black/60 font-serif sm:text-sm text-xs flex justify-center items-center gap-1">
            <p className="">Don't have an account?</p>
            <Link
              to="/auth/signup"
              className="hover:text-primary hover:underline"
            >
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
