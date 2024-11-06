import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "../../components/Loading";
import { AuthContext } from "../../context/AuthContext";
import { auth } from "./firebase";
import Nav from "../../components/navigator/Nav";
import Button from "../../components/buttons/Button";
import { FaEnvelope, FaUser } from "react-icons/fa";
import { IoLogOutOutline } from "react-icons/io5";
import { PiUserCircleCheckThin } from "react-icons/pi";
import { IMGS } from "../../utilities/Imgs";

function Profile() {
  const { user, loading } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await auth.signOut();
      navigate("/");
      console.log("User logged out successfully!");
    } catch (error) {
      console.error("Error logging out:", error.message);
    }
  };

  if (loading) {
    return <Loading />;
  }

  if (!user) {
    navigate("/auth/login");
    return null;
  }

  return (
    <div className="flex min-h-screen">
      <Nav dark={true} className=" absolute" />
      <div
        className="hidden md:flex md:w-1/2 bg-cover bg-center"
        style={{
          backgroundImage: `url(${IMGS.profile})`,
        }}
      />

      <div className="w-full md:w-1/2 flex items-center justify-center bg-white">
        <div className="w-full max-w-md p-8 rounded-lg ">
          <PiUserCircleCheckThin className=" text-9xl text-primary md:mb-10 mb-5 m-auto" />
          <h2 className="md:text-4xl text-2xl font-semibold md:mb-10 mb-5 font-serif">
            PROFILE
          </h2>
          <div className=" flex flex-row gap-2 items-center md:mb-6 mb-3 ml-1">
            <FaUser className=" text-primary/70" />
            <p className="md:text-lg text-sm text-black/50"> {user.name}</p>
          </div>
          <div className=" flex flex-row gap-2 items-center md:mb-10 mb-5 ml-1">
            <FaEnvelope className=" text-primary/70" />
            <p className="md:text-lg text-sm text-black/50"> {user.email}</p>
          </div>
          <Button
            title="LOG OUT"
            onClick={handleLogout}
            className="w-full py-3 px-4 bg-primary text-white font-semibold shadow-sm focus:outline-none  "
            icon={<IoLogOutOutline />}
          />
        </div>
      </div>
    </div>
  );
}

export default Profile;
