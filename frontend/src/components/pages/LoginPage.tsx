import React from "react";
// import cmLogo from "./../../assets/images/authen_header.jpg";
import cmLogo from "@/assets/images/authen_header.png";

type Props = {};

export default function LoginPage({}: Props) {
  return (
    <div>
      LoginPage
      <img src={cmLogo} alt="" className="w-[300px]" />
    </div>
  );
}
