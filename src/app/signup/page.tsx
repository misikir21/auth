"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { Axios } from "axios";
function signup() {
  const [user, setuser] = React.useState({
    email: "",
    password: "",
    username: "",
  });
  const onSignup = async () => {};

  return (
    <div className="flex">
      <h1 className="text-center text-white">sign up</h1>;
    </div>
  );
}

export default signup;
