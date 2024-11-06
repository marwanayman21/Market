import React from "react";
import { IMGS } from "../utilities/Imgs";

export default function Loading() {
  return (
    <img
      className="w-24 md:w-48 absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 "
      src={IMGS.loading}
    />
  );
}
