import React, { useState } from "react";
import InputField from "../../components/InputField";
import OrderSummary from "./shared/OrderSummary";
import Stepper from "./shared/Stepper";
import Nav from "../../components/navigator/Nav";
import Button from "../../components/buttons/Button";
import { useLocation, useNavigate } from "react-router-dom";
import Joi from "joi";

const schema = Joi.object({
  cardholderName: Joi.string().required().messages({
    "any.required": "Cardholder name is required.",
  }),
  cardNumber: Joi.string()
    .pattern(new RegExp("^[0-9]{16}$"))
    .required()
    .messages({
      "string.pattern.base": "Card number must be 16 digits.",
      "any.required": "Card number is required.",
    }),
  expirationDate: Joi.string()
    .pattern(new RegExp("^(0[1-9]|1[0-2])/[0-9]{2}$"))
    .required()
    .messages({
      "string.pattern.base": "Expiration date must be in MM/YY format.",
      "any.required": "Expiration date is required.",
    }),
  cvv: Joi.string().pattern(new RegExp("^[0-9]{3,4}$")).required().messages({
    "string.pattern.base": "CVV must be 3 or 4 digits.",
    "any.required": "CVV is required.",
  }),
});

export default function Payment() {
  const location = useLocation();
  const { selectedCompany } = location.state || {};
  const [formData, setFormData] = useState({
    cardholderName: "",
    cardNumber: "",
    expirationDate: "",
    cvv: "",
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
      navigate("/success");
    }
  };

  return (
    <div>
      <Nav dark={true} />
      <div className="md:grid grid-cols-8">
        <div className="col-span-5 mt-10">
          <Stepper num={3} />

          <form
            className="md:p-10 p-2 mt-5 flex flex-col md:gap-6 gap-4"
            onSubmit={handleSubmit}
          >
            <h2 className="md:text-2xl text-lg -mb-1 uppercase font-semibold">
              Payment
            </h2>
            <InputField
              type="text"
              label="Cardholder Name"
              name="cardholderName"
              placeholder="Eg: John Doe"
              value={formData.cardholderName}
              onChange={handleInputChange}
              error={errors.cardholderName}
            />
            <InputField
              type="text"
              label="Card Number"
              name="cardNumber"
              placeholder="Eg: 1234 5678 9012 3456"
              value={formData.cardNumber}
              onChange={handleInputChange}
              error={errors.cardNumber}
            />
            <div className="grid grid-cols-2 gap-6">
              <InputField
                type="text"
                label="Expiration Date"
                name="expirationDate"
                placeholder="MM/YY"
                value={formData.expirationDate}
                onChange={handleInputChange}
                error={errors.expirationDate}
                className="w-full"
              />
              <InputField
                type="number"
                label="CVV"
                name="cvv"
                placeholder="CVV"
                value={formData.cvv}
                onChange={handleInputChange}
                error={errors.cvv}
                className="w-full"
              />
            </div>

            <Button
              title="Buy Now"
              className="md:w-1/3 w-full self-end"
              type="submit"
            />
          </form>
        </div>

        <div className="col-span-3">
          <OrderSummary />
          <span className="md:block hidden">+</span>
          <div className="md:flex hidden justify-between font-semibold mr-10  text-lg">
            <p>Shipping</p>
            <p>${selectedCompany.price}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
