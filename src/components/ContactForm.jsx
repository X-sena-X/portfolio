import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import { styled } from "@mui/material/styles";
import FilledInput from "@mui/material/FilledInput";
import "./ContactForm.css";
import Button from "@mui/material/Button";
import { useForm, ValidationError } from "@formspree/react";
/*export default function ContactForm() {
  const [formDetails, setFormDetails] = useState([]);

  

  const submitHandler = (event) => {
    event.preventDefault();
    const config = {
      SecureToken: "d733961d-0309-4ff4-b8a5-15b74e34e49a",
      To: "creatorsenaabhishek@gmail.com",
      From: "senaabhisheksvs@gmail.com",
      Subject: "This is the subject",
      Body: "And this is the body",
    };
    if (window.Email) {
      window.Email.send(config).then(() => alert("email  sent"));
    }
  };

  
  const [state, handleSubmit] = useForm("xqkvzolq");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }

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
          "& .MuiButtonBase-root": { m: 1, width: "500px" },
        }}
        noValidate
        autoComplete="off"
      >
        <form onSubmit={handleSubmit}>
          <div className="input flex items-center justify-center">
            <div className="fade-in-section grid  grid-cols-1  md:grid-cols-2 lg:grid-cols-2  grid-flow-row  gap-4">
            <label htmlFor="email">Email</label>
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
                id="filled-number email"
                label="Email "
                type="email"
                variant="filled"
                inputProps={{ className: "muiTextBox" }}
                InputLabelProps={{
                  shrink: true,
                  className: "muiTextBox",
                }}
                name="email"
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
                <textarea
                  rows="10"
                  cols="70"
                  name="message"
                  placeholder="Write your thoughts..."
                  className="px-2 py-2"
                  id="message"
                />
                
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="SubmitButton c "
            disabled={state.submitting}
            onSubmit={(e) => e.preventDefault()}
          >
            Submit
          </button>
        </form>
      </Box>
    </>
  );
  
}
*/

export default function ContactForm() {
  const [state, handleSubmit] = useForm("xqkvzolq");

  return (
    <form onSubmit={handleSubmit} className="mb-20">
      
      <div className="input flex items-center justify-center">
        <div className="fade-in-section grid  grid-cols-1  md:grid-cols-2 lg:grid-cols-2  grid-flow-row  gap-4">
          <TextField
            required
            id="firstname"
            defaultValue=""
            variant="filled"
            placeholder="First Name"
            name="firstname"
          />
          <ValidationError
              prefix="FirstName"
              field="firstname"
              errors={state.errors}
            />
          <TextField
            id="Lastname"
            variant="filled"
            defaultValue=""
            placeholder="Last Name"
            color="secondary"
            inputProps={{ className: "muiTextBox" }}
            InputLabelProps={{ className: "muiTextBox" }}
            name="Lastname"
          />
           <ValidationError
              prefix="LastName"
              field="Lastname"
              errors={state.errors}
            />
          <TextField
            required
            id="filled-number email"
            label="Email "
            type="email"
            variant="filled"
            inputProps={{ className: "muiTextBox" }}
            InputLabelProps={{
              shrink: true,
              className: "muiTextBox",
            }}
            name="email"
          />
          <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          <TextField
            required
            id="number"
            label="Number"
            type="number"
            InputLabelProps={{
              shrink: true,
              className: "muiTextBox",
            }}
            variant="filled"
            inputProps={{ className: "muiTextBox" }}
            name="number"
          />
          <ValidationError
              prefix="PhoneNO"
              field="number"
              errors={state.errors}
            />

          <div className="col-span-2">
            <textarea
              rows="10"
              cols="70"
              placeholder="Write your thoughts..."
              className="px-2 py-2"
              id="message"
              name="message"
            />

            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
        </div>
      </div>

      <button
        type="submit"
        disabled={state.submitting}
        className="w-48 h-20 mt-4 SubmitButton"
      >
        Submit
      </button>
    </form>
  );
}
