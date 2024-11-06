import React, { useState } from "react";
import Stepper from "./shared/Stepper";
import OrderSummary from "./shared/OrderSummary";
import Nav from "../../components/navigator/Nav";
import Button from "../../components/buttons/Button";
import { IoIosRadioButtonOff, IoIosRadioButtonOn } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const companies = [
  {
    id: 1,
    name: "jne",
    price: 120,
    logo: "https://th.bing.com/th/id/OIP.ClJAR7Q0jj8ZmLahMNTsnQHaHa?w=500&h=500&rs=1&pid=ImgDetMain",
  },
  {
    id: 2,
    name: "tiki",
    price: 150,
    logo: "https://static.wixstatic.com/media/1dfb56_7f0c5eef8f844474b6875fc7d7930485~mv2.png/v1/fill/w_980,h_980,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/1dfb56_7f0c5eef8f844474b6875fc7d7930485~mv2.png",
  },
  {
    id: 3,
    name: "j&t",
    price: 180,
    logo: "https://pkge.net/uploads/couriers/large/jtexpress@2x.png",
  },
];

export default function Shipping() {
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSelectCompany = (company) => {
    setSelectedCompany(company);
  };

  const handleContinue = () => {
    if (selectedCompany) {
      navigate("/payment", { state: { selectedCompany } });
    } else {
      setError("Please select a shipping company.");
    }
  };

  return (
    <div>
      <Nav dark={true} />
      <div className="md:grid grid-cols-8">
        <div className="col-span-5 mt-10">
          <Stepper num={2} />
          <div className="md:p-10 p-2 md:pr-24 mt-5 flex flex-col md:gap-6 gap-4">
            <h2 className="md:text-2xl text-lg -mb-1 uppercase font-semibold">
              Shipping Delivery
            </h2>
            <div className="flex flex-col gap-5 ">
              {companies.map((company) => (
                <div
                  key={company.id}
                  className={`flex justify-between items-center border-2 px-5 md:text-base text-[10px] ${
                    selectedCompany?.id === company.id ? "border-primary" : ""
                  }`}
                  onClick={() => handleSelectCompany(company)}
                >
                  <div className="flex items-center gap-5">
                    <button>
                      {selectedCompany?.id === company.id ? (
                        <IoIosRadioButtonOn className="text-primary" />
                      ) : (
                        <IoIosRadioButtonOff />
                      )}
                    </button>
                    <img
                      src={company.logo}
                      alt={company.name}
                      className="md:w-14 w-10 aspect-square object-cover rounded-full"
                    />
                    <p className="md:text-lg uppercase">{company.name}</p>
                  </div>
                  <p className="text-black/60">${company.price}</p>
                </div>
              ))}
            </div>
            {error && (
              <p
                className={`text-red-500 md:text-sm text-[8px] ${
                  selectedCompany && "hidden"
                }`}
              >
                {error}
              </p>
            )}

            <Button
              title="Continue to Payment"
              className="md:w-1/3 w-full self-end"
              onClick={handleContinue}
            />
          </div>
        </div>
        <div className="col-span-3">
          <OrderSummary />
        </div>
      </div>
    </div>
  );
}
