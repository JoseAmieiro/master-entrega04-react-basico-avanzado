import React from "react";
import { Login } from "./login.component";

interface Props {
  onLogin: (userName: string) => void;
}

export const LoginContainer: React.FC<Props> = (props) => {
  const { onLogin } = props;

  const handleSubmit = (username: string, password: string) => {
    if (username === "admin" && password === "test") {
      onLogin(username);
    } else {
      alert("User / password not valid, psst... admin / test");
    }
  };

  return <Login onSubmit={handleSubmit} />;
};
