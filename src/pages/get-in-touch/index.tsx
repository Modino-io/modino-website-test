import React, { useState } from "react";
import { HeadFC, Link } from "gatsby";
import Seo from "../../components/seo.component";

import { Button } from "@rmwc/button";
import { TextField } from "@rmwc/textfield";
import { Checkbox } from "@rmwc/checkbox";
import { Select } from "@rmwc/select";
import { Snackbar } from "@rmwc/snackbar";

import * as styles from "./index.module.scss";

const GetInTouch = () => {
  const [isEmailInputValid, setIsEmailInputValid] = useState(true);
  const [isSnackbarOpened, setIsSnackbarOpened] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState(
    "The request has been sent"
  );
  const [isSubmitButtonDisabled, setIsSubmitButtonDisabled] = useState(false);
  const [emailValidationMessage, setEmailValidationMessage] = useState(
    "Field can't be empty"
  );
  const [isLetMeKnowCheckboxChecked, setIsLetMeKnowCheckboxChecked] =
    useState(false);
  const [isTermsAcceptedChecked, setIsTermsAcceptedChecked] = useState(false);
  const [jobPosition, setJobPosition] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");

  const validateEmail = (emailAddress: string) => {
    const re = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/;
    return re.test(emailAddress);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setEmailValidationMessage("Incorrect e-mail format");
      setIsEmailInputValid(false);
      return;
    } else {
      setIsEmailInputValid(true);
    }

    setIsSubmitButtonDisabled(true);

    fetch(
      "https://script.google.com/macros/s/AKfycbyz_je21qcS1r4d8zHyfKcqqKLm9m8y87lZ5IAysnovd9CgVbYr-rPpXM9qvBUfe6bLDg/exec",
      {
        method: "POST",
        body: new FormData(e.target as HTMLFormElement),
      }
    )
      .then((res) => {
        if (res.status !== 200) {
          setSnackbarMessage("Unable to send the request. Try again.");
        }

        setIsSnackbarOpened(true);
        setIsSubmitButtonDisabled(false);
      })
      .catch((err) => console.log(err));
  };

  return (
    <main className={styles.mRequestMain}>
      <section className={styles.mFormSection}>
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
          className={styles.mForm}
          id="request-access-form"
        >
          <h1 className={styles.mFormTitle}>Get in touch</h1>
          <div className={styles.mFormFieldWrapper}>
            <TextField
              outlined
              label="Full name"
              required
              autoComplete="off"
              helpText={{
                validationMsg: true,
                children: "Field can't be empty",
              }}
              value={fullName}
              onChange={(e: any) => setFullName(e.nativeEvent.target.value)}
              name="fullname"
            />
          </div>
          <div className={styles.mFormFieldWrapper}>
            <TextField
              outlined
              label="E-mail"
              required
              autoComplete="off"
              helpText={{
                validationMsg: true,
                children: emailValidationMessage,
              }}
              value={email}
              onChange={(e: any) => setEmail(e.nativeEvent.target.value)}
              invalid={!isEmailInputValid}
              name="email"
            />
          </div>
          <div className={styles.mFormFieldWrapper}>
            <TextField
              outlined
              label="Phone (optional)"
              type="tel"
              pattern="[0-9]+"
              autoComplete="off"
              helpText={{
                validationMsg: true,
                children: "Incorrect format",
              }}
              value={phoneNumber}
              onChange={(e: any) => setPhoneNumber(e.nativeEvent.target.value)}
              name="phone"
            />
          </div>
          <div className={styles.mFormFieldWrapper}>
            <Select
              className={styles.mSelect}
              label="Company role (optional)"
              outlined
              options={[
                "Chief Executive Officer",
                "Chief Financial Officer",
                "Chief Technology Officer",
                "Developer",
                "DevOps",
                "Product Manager",
                "Product Owner",
                "Quality Assurance",
                "Other",
              ]}
              value={jobPosition}
              onChange={(val: any) => {
                setJobPosition(val.currentTarget.value);
              }}
              name="company_role"
            />
          </div>

          <div className={styles.mFormCheckboxContainer}>
            <Checkbox
              checked={isLetMeKnowCheckboxChecked}
              value={isLetMeKnowCheckboxChecked.toString()}
              onChange={(val: any) => {
                setIsLetMeKnowCheckboxChecked(!!val.currentTarget.checked);
              }}
              name="mailing_list"
            >
              Let me know about updates (optional)
            </Checkbox>
            <Checkbox
              required
              checked={isTermsAcceptedChecked}
              value={isTermsAcceptedChecked.toString()}
              onChange={(val: any) => {
                setIsTermsAcceptedChecked(!!val.currentTarget.checked);
              }}
              name="legal"
            >
              I have read and agree to the{" "}
              <a
                className={styles.mLink}
                href="/privacy-policy"
                target="_blank"
              >
                Privacy Policy
              </a>{" "}
              and{" "}
              <a
                className={styles.mLink}
                href="/terms-of-service"
                target="_blank"
              >
                Terms of Service
              </a>
            </Checkbox>
          </div>
          <Button unelevated type="submit" disabled={isSubmitButtonDisabled}>
            Get in touch
          </Button>
        </form>
      </section>
      <section className={styles.mImageSection}>
        <Link to="/">
          <img
            className={styles.mLogoImg}
            src="/img/MODINO-logo-full-white.svg"
            alt="modino logo"
          />
        </Link>
        <img
          className={styles.mRequestAccessImg}
          src="/img/modino-man-in-envelope.svg"
          alt="modino man in an envelope"
        />
      </section>
      <Snackbar
        open={isSnackbarOpened}
        message={snackbarMessage}
        timeout={5000}
        onClose={() => {
          setIsSnackbarOpened(false);
        }}
      ></Snackbar>
    </main>
  );
};

export default GetInTouch;

export const Head: HeadFC = () => (
  <Seo
    pageTitle="Modino.io - Let's keep your updates safe and secure"
    description="Interested in our technology? Let's get in touch and talk about how we can keep your IoT devices out of harm's way!"
    link="https://modino.io/get-in-touch"
  />
);
