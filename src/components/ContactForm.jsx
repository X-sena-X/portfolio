import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import { styled } from "@mui/material/styles";
import FilledInput from "@mui/material/FilledInput";
import "./ContactForm.css";
import Button from '@mui/material/Button';
export default function ContactForm() {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const MyTextField = styled(TextField)({
    backgroundColor: "#0000",
  });
  const inputProps = {
    background: "primary",
  };
  return (
    <>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "300px" },
          "& .MuiButtonBase-root":{m:1,width:"500px"}
        }}
        noValidate
        autoComplete="off"
      >
        <div className="input flex items-center justify-center">
          <div className="fade-in-section grid  grid-cols-1  md:grid-cols-2 lg:grid-cols-2  grid-flow-row  gap-4">
            <TextField
              required
              id="filled-required"
              defaultValue=""
              variant="filled"
              placeholder="First Name"
            />
            <TextField
              id="out"
              variant="filled"
              defaultValue=""
              placeholder="Last Name"
              color="secondary"
              inputProps={{ className: "muiTextBox" }}
              InputLabelProps={{ className: "muiTextBox" }}
            />
            <TextField
              required
              id="filled-number"
              label="Email"
              type="email"
              variant="filled"
              inputProps={{ className: "muiTextBox" }}
              InputLabelProps={{
                shrink: true,
                className: "muiTextBox",
              }}
            />
            <TextField
              required
              id="filled-number"
              label="Number"
              type="number"
              InputLabelProps={{
                shrink: true,
                className: "muiTextBox",
              }}
              variant="filled"
              inputProps={{ className: "muiTextBox" }}
            />
            <div className="col-span-2">
                 <TextField
                required
                id="filled-number"
                label="Number"
                type="number"
                InputLabelProps={{
                    shrink: true,
                    className: "muiTextBox",
                }}
                variant="filled"
                inputProps={{ className: "muiTextBox"}}
                />
            </div>
           
          </div>
        </div>
        
            <Button variant="contained" className="SubmitButton">Contained</Button>
        
      </Box>
    </>
  );
}
