import React, { useState } from "react";
import InputField from "../../components/InputField";
import OrderSummary from "./shared/OrderSummary";
import Stepper from "./shared/Stepper";
import Nav from "../../components/navigator/Nav";
import Button from "../../components/buttons/Button";
import { useNavigate } from "react-router-dom";
import Joi from "joi";

const schema = Joi.object({
  name: Joi.string().required().messages({
    "any.required": "Name is required.",
  }),
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
    .required()
    .messages({
      "string.email": "Please enter a valid email address.",
      "any.required": "Email is required.",
    }),
  phone: Joi.string().required().messages({
    "any.required": "Phone number is required.",
  }),
  address: Joi.string().required().messages({
    "any.required": "Address is required.",
  }),
});

export default function PersonalInfo() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    const { error } = schema.validate(formData, { abortEarly: false });
    if (error) {
      const newErrors = {};
      error.details.forEach(({ path, message }) => {
        newErrors[path[0]] = message;
      });
      setErrors(newErrors);
      return false;
    }
    setErrors({});
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      navigate("/shipping");
    }
  };

  return (
    <div>
      <Nav dark={true} />
      <div className="md:grid grid-cols-8">
        <div className="col-span-5 mt-10">
          <Stepper num={1} />

          <form
            className="md:p-10 p-3 mt-5 flex flex-col md:gap-6 gap-4"
            onSubmit={handleSubmit}
          >
            <h2 className="md:text-2xl text-lg -mb-1 uppercase font-semibold">
              Contact Person
            </h2>
            <InputField
              type="text"
              label="Name"
              name="name"
              placeholder="Eg: John Doe"
              value={formData.name}
              onChange={handleInputChange}
              error={errors.name}
            />
            <InputField
              type="email"
              label="Email"
              name="email"
              placeholder="Eg: example@example.com"
              value={formData.email}
              onChange={handleInputChange}
              error={errors.email}
            />
            <InputField
              type="text"
              label="Phone"
              name="phone"
              placeholder="+20 111-222-33333"
              value={formData.phone}
              onChange={handleInputChange}
              error={errors.phone}
            />
            <InputField
              type="text"
              label="Address"
              name="address"
              placeholder="Eg: 123, Street Name, City, Country"
              value={formData.address}
              onChange={handleInputChange}
              error={errors.address}
            />
            <Button
              title="Continue to Shipping"
              className="md:w-1/3 w-full self-end"
              type="submit"
            />
          </form>
        </div>

        <div className="col-span-3">
          <OrderSummary />
        </div>
      </div>
    </div>
  );
}
