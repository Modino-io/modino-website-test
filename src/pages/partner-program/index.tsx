import React, { useState } from "react";
import { HeadFC, Link, PageProps } from "gatsby";
import Seo from "../../components/seo.component";
import Layout from "../../components/layout/layout.component";

import { Button } from "@rmwc/button";
import { Checkbox } from "@rmwc/checkbox";
import { TextField } from "@rmwc/textfield";
import { Snackbar } from "@rmwc/snackbar";

import * as styles from "./index.module.scss";

const PartnerProgram = ({ data }: PageProps) => {
  const [email, setEmail] = useState("");
  const [isEmailInputValid, setIsEmailInputValid] = useState(true);
  const [emailValidationMessage, setEmailValidationMessage] = useState(
    "Field can't be empty"
  );
  const [isSubmitButtonDisabled, setIsSubmitButtonDisabled] = useState(false);
  const [isSnackbarOpened, setIsSnackbarOpened] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState(
    "The request has been sent"
  );

  const validateEmail = (emailAddress: string) => {
    const re = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/;
    return re.test(emailAddress);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setEmailValidationMessage("Incorrect email format");
      setIsEmailInputValid(false);
      return;
    } else {
      setIsEmailInputValid(true);
    }

    setIsSubmitButtonDisabled(true);

    fetch(
      "https://script.google.com/macros/s/AKfycbwdQy0uzWFohLgBtHwjY9kL7uhGlgmvx8VTzyQPha6lnTPrcCVVjxEHlTmtGUkEpCTglw/exec",
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
    <Layout>
      <main className="m-main">
        <section className={`m-section ${styles.mShapeFuture}`}>
          <div className="m-section__content">
            <div className={styles.mShapeFutureContent}>
              <div>
                <h1 className="m-section__header">
                  Shape the future together&nbsp;-
                  <br />
                  <span className="highlight">Become Our Partner</span>
                </h1>
                <p>
                  If you want to make a meaningful impact, become a Modino
                  Partner. You'll have the opportunity to share your expertise,
                  collaborate with our team, and contribute to innovative
                  solutions.
                </p>
                <p>
                  Join us on this exciting journey as we work together to make a
                  difference.
                </p>
              </div>
              <img src="/img/shape-the-future-hero.svg" alt="" />
            </div>
          </div>
        </section>
        <section className={`m-section ${styles.mPartnerProgram}`}>
          <h2 className="m-section__header">What is Modino Partner Program?</h2>
          <div className="m-section__content">
            <div className={styles.mPartnerProgramContent}>
              <div className={styles.mProgramTile}>
                <div className={styles.mProgramTileTitle}>
                  <img src="/img/program-illustration-1.svg" alt="" />
                </div>
                <div className={styles.mProgramTileText}>
                  With your feedback we can grow faster and in a more tailored
                  way. Creating intuitive solutions that can be easily
                  integrated into your environment.
                </div>
              </div>
              <div className={styles.mProgramTile}>
                <div className={styles.mProgramTileTitle}>
                  <img src="/img/program-illustration-2.svg" alt="" />
                </div>
                <div className={styles.mProgramTileText}>
                  A place where you can have a direct impact on how our
                  innovation will be shaped. We’re looking forward for your
                  experiences and domain expertise to pursue the innovation
                  together, to create a product tailored to users needs. Your
                  needs.
                </div>
              </div>
              <div className={styles.mProgramTile}>
                <div className={styles.mProgramTileTitle}>
                  <img src="/img/program-illustration-3.svg" alt="" />
                </div>
                <div className={styles.mProgramTileText}>
                  Let us know about your needs and pain points, so we can find a
                  solution for those. Nothing is impossible – even if it seems
                  that way.
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={`m-section ${styles.mBenefits}`}>
          <div className="m-section__content">
            <div className={styles.mBenefitsContent}>
              <h2 className="m-section__header">
                Benefits of joining the Program
              </h2>
              <img
                src="/img/checklist.svg"
                alt=""
                className={styles.mBenefitsImage}
              />
              <div className={styles.mBenefitsText}>
                <ul>
                  <li>
                    <img
                      className={styles.mBenefitsListItemCounter}
                      src="/img/checklist-item.svg"
                      alt="list item icon"
                    />
                    <p>
                      You will help shape the future of Modino.io in a way, that
                      you can benefit most from.
                    </p>
                  </li>
                  <li>
                    <img
                      className={styles.mBenefitsListItemCounter}
                      src="/img/checklist-item.svg"
                      alt="list item icon"
                    />
                    <p>
                      You will get a sneak peek into new features. To make sure
                      they are matching your needs and addressing the pain
                      points.
                    </p>
                  </li>
                  <li>
                    <img
                      className={styles.mBenefitsListItemCounter}
                      src="/img/checklist-item.svg"
                      alt="list item icon"
                    />
                    <p>
                      Your voice will be heard and may affect our roadmap.
                      Nothing makes us happier than satisfied clients.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className={`m-section ${styles.mHowWorks}`}>
          <h2 className="m-section__header">How it works?</h2>
          <div className="m-section__content">
            <div className={styles.mHowWorksContent}>
              <p className={styles.mHowWorksText}>
                Engage in 1-2 hours of activities every month:
              </p>
              <div className={styles.mHowWorksSteps}>
                <div className={styles.mHowWorksStep}>
                  <img src="/img/icons/fact_check.svg" alt="" />
                  <p>Usability tests</p>
                </div>
                <div className={styles.mHowWorksStep}>
                  <img src="/img/icons/forum.svg" alt="" />
                  <p>Initial design consultations</p>
                </div>
                <div className={styles.mHowWorksStep}>
                  <img src="/img/icons/handshake.svg" alt="" />
                  <p>In-depth interviews</p>
                </div>
                <div className={styles.mHowWorksStep}>
                  <img src="/img/icons/diversity_3.svg" alt="" />
                  <p>Participation in workshops</p>
                </div>
                <div className={styles.mHowWorksStep}>
                  <img src="/img/icons/contract_edit.svg" alt="" />
                  <p>Surveys</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={`m-section ${styles.mJoinGrow}`}>
          <h2 className="m-section__header">Join, Engage, Grow</h2>
          <div className="m-section__content">
            <div className={styles.mJoinGrowDescription}>
              Ready to empower your influence? Join our partner program and be
              part of a network that fosters growth and innovation.
            </div>

            <div className={styles.mJoinGrowContent}>
              <div className={styles.mJoinGrowText}>
                <ol>
                  <li>
                    Apply and and get verified
                    <p className={styles.mJoinGrowPointText}>
                      After applying to the Partner Program we will verify you
                      and get to know you more.
                    </p>
                  </li>
                  <li>
                    Sign the agreement
                    <p className={styles.mJoinGrowPointText}>
                      We need to prepare the legal, it might take a while.
                    </p>
                  </li>
                  <li>
                    Wait for an invite
                    <p className={styles.mJoinGrowPointText}>
                      Get ready for a message from us, providing you access to
                      special benefits.
                    </p>
                  </li>
                  <li>
                    Your time, your terms
                    <p className={styles.mJoinGrowPointText}>
                      Participation is free of charge and it is up to you how
                      much time you would like to invest.
                    </p>
                  </li>
                  <li>
                    No strings attached
                    <p className={styles.mJoinGrowPointText}>
                      You can resign at any time, whenever you choose.
                    </p>
                  </li>
                </ol>
              </div>
              <div className={styles.mJoinGrowJoinForm}>
                <img
                  src="/img/meeting_join.svg"
                  alt=""
                  className={styles.mJoinGrowImage}
                />
                <p>
                  Enter your email below to receive an exclusive invitation to
                  our partner program.
                </p>
                <form
                  id="partner-program-form"
                  onSubmit={(e) => {
                    handleSubmit(e);
                  }}
                >
                  <div className={styles.mJoinGrowJoinFormFieldWrapper}>
                    <TextField
                      outlined
                      label="Email"
                      required
                      autoComplete="off"
                      onChange={(e: any) =>
                        setEmail(e.nativeEvent.target.value)
                      }
                      helpText={{
                        validationMsg: true,
                        children: emailValidationMessage,
                      }}
                      value={email}
                      invalid={!isEmailInputValid}
                      name="email"
                    />
                  </div>
                  <div className={styles.mJoinGrowJoinFormFieldWrapper}>
                    <div className={styles.mJoinGrowJoinFormCheckbox}>
                      <Checkbox required>
                        I have read and agree to the{" "}
                        <Link className="m-link" to="/privacy-policy">
                          Privacy Policy
                        </Link>{" "}
                        and{" "}
                        <Link className="m-link" to="/terms-of-service">
                          Terms of Service
                        </Link>
                      </Checkbox>
                    </div>
                  </div>

                  <Button
                    unelevated
                    type="submit"
                    disabled={isSubmitButtonDisabled}
                  >
                    Apply
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
        <section className={`m-section ${styles.mProgramPresentation}`}>
          <div className="m-section__content">
            <div className={styles.mProgramPresentationText}>
              Get a closer look to our Partner Program and download our
              presentation to explore all the program details, benefits, and
              opportunities.
            </div>
            <a
              className={styles.mProgramPresentationLink}
              href="/files/Modino Partner Program.pdf"
              target="_blank"
              rel="noopener"
            >
              <img src="/img/icons/pdf.svg" alt="pdf icon" /> Modino Partner
              Program.pdf
            </a>
          </div>
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
    </Layout>
  );
};

export default PartnerProgram;

export const Head: HeadFC = () => (
  <Seo
    pageTitle="Modino.io - shaping cybersecurity with a partner program"
    description="Become part of the Modino Partner Program. Learn more about how we can collaborate and shape the future of cybersecurity."
    link="https://modino.io/partner-program"
  />
);
