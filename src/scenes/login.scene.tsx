import React from "react";
import { useNavigate } from "react-router-dom";
import { ProfileContext, routes } from "@/core"
import { CenteredLayout } from "@/layouts";

interface Props {
  onLogin: (username: string) => void;
}

export const LoginScene: React.FC<Props> = (props) => {
  const { onLogin } = props;
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleNavigation = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (username === "admin" && password === "test") {
      onLogin(username);
    } else {
      alert("User / password not valid, psst... admin / test");
    }
  };

  return (
    <CenteredLayout>
      <form onSubmit={handleNavigation}>
        <h2>Hello from login page</h2>

        <div>
          <div>
            <label>Username: </label>
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label>Password: </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>

        <button type="submit">Login</button>
      </form>
    </CenteredLayout>
  );
};
