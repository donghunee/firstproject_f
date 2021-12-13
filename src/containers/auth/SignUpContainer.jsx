import React, { useState } from "react";
import SignUpComponent from "../../components/auth/SignUpComponent";

function SignUpContainer() {
  const [userInfo, setUserInfo] = useState({
    email: "",
  });

  const onChangeInput = (e) => {
    const { name, value } = e.target;

    setUserInfo({
      ...userInfo,
      [name]: value,
    });
  };
  return <SignUpComponent />;
}

export default SignUpContainer;