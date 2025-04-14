import React, { useRef, useState } from "react";
import "../assets/styles/Contact.scss";
// import emailjs from '@emailjs/browser';
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import TextField from "@mui/material/TextField";
import CircularProgress from "@mui/material/CircularProgress";
import axios from "axios";
import toast from "react-hot-toast";

function Contact() {
  const [sendmailSpinner, setSendmailSpinner] = useState<boolean>(false);
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [phone, setPhone] = useState<string>("");

  const [firstNameError, setFirstNameError] = useState<boolean>(false);
  const [LastNameError, setLastNameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<boolean>(false);
  const [phoneError, setPhoneError] = useState<boolean>(false);

  const form = useRef(null);

  const sendEmail = async (e: any) => {
    e.preventDefault();
    setSendmailSpinner(true);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const frenchPhoneRegex = /^(?:\+33|0)[67]\d{8}$/;

    // Validate first
    const firstNameValid = firstName.trim() !== "";
    const lastNameValid = lastName.trim() !== "";
    const emailValid = emailRegex.test(email);
    const messageValid = message.trim() !== "";
    const phoneValid = frenchPhoneRegex.test(phone);

    // Update the errors based on validation
    setFirstNameError(!firstNameValid);
    setLastNameError(!lastNameValid);
    setEmailError(!emailValid);
    setMessageError(!messageValid);
    setPhoneError(!phoneValid);

    // Only proceed if all fields are valid
    if (
      firstNameValid &&
      lastNameValid &&
      emailValid &&
      messageValid &&
      phoneValid
    ) {
      try {
        console.log("test 1")
        const apiUrl = import.meta.env.VITE_API_URL;
        await axios.post(`${apiUrl}/mailing`, {
          email: email,
          name: `${firstName} ${lastName}`,
          message: message,
          phoneNumber: phone
        })
        console.log("test 1")
        toast.success("Email sent successfully", { duration: 2000 });
      } catch (error) {
        console.log(error)
        toast.error("Something went wrong, please try again later !", {
          duration: 2000,
        });
      }
    }

    setSendmailSpinner(false);
  };

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact Me</h1>
          <Box
            ref={form}
            component="form"
            noValidate
            autoComplete="off"
            className="contact-form"
          >
            <div className="form-flex">
              <TextField
                required
                id="outlined-required"
                label="First Name"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
                error={firstNameError}
                helperText={
                  firstNameError ? "Please enter your first name" : ""
                }
              />
              <TextField
                required
                id="outlined-required"
                label="Last Name"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
                error={LastNameError}
                helperText={LastNameError ? "Please enter your last name" : ""}
              />
            </div>
            <div className="form-flex">
              <TextField
                required
                id="outlined-required"
                label="Email"
                placeholder="Email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                error={emailError}
                helperText={emailError ? "Please enter a valid email" : ""}
              />
              <TextField
                required
                id="outlined-required"
                label="Phone"
                placeholder="Phone"
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
                error={phoneError}
                helperText={
                  phoneError
                    ? "Please enter a valid phone number (e.g. 0699999999 or +33799999999)"
                    : ""
                }
              />
            </div>
            <TextField
              required
              id="outlined-multiline-static"
              label="Message"
              placeholder="Message"
              multiline
              rows={10}
              className="body-form"
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              error={messageError}
              helperText={messageError ? "Please enter the message" : ""}
            />
            {sendmailSpinner ? (
              <CircularProgress style={{ float: "right" }} />
            ) : (
              <Button
                variant="contained"
                endIcon={<SendIcon />}
                onClick={sendEmail}
              >
                Send
              </Button>
            )}
          </Box>
        </div>
      </div>
    </div>
  );
}

export default Contact;
