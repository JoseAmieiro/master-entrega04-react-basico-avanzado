import React from "react";
import { createEmptyFormData, FormData } from "./login.vm";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

interface Props {
  onSubmit: (user: string, password: string) => void;
}

export const Login: React.FC<Props> = (props) => {
  const { onSubmit } = props;


  const [formData, setFormData] = React.useState<FormData>(
    createEmptyFormData()
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(formData.username, formData.password);
  };

  const handleChange =
  (field: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [field]: e.target.value,
    });
  };

  return (
    <>     
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <div>
              <div>
                <TextField
                  label="Username"
                  value={formData.username}
                  onChange={handleChange("username")}
                  sx={{ mb: 2 }} 
                />
              </div>
              <div>
                <TextField
                  label="Password"
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleChange("password")}
                />
              </div>
            </div>
          </CardContent>
          <CardActions>
            <Button variant="contained" type="submit">
              Login
            </Button>
          </CardActions>
        </Card>
      </form>
    </>
  );
};


