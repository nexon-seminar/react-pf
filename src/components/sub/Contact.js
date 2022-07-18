import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "./Layout";
import Location from "../common/Location";
import ContactForm from "./item/ContactForm";

const Contact = () => {
  const contactList = {
    location: [
      "1634 East Cesar Chavez Street Austin, TX 78702 United States",
      "9, Chemin des Délices 1006 Lausanne Switzerland",
    ],
    email: ["Neige@mainNeige.com", "Neige@branchNeige.com"],
    call: ["(+33) 050-2684-5803", "(+33) 050-1848-2584"],
  };
  const { location, email, call } = contactList;
  const depthTwo = [
    { name: "Contact Us", path: "/contact" },
    { name: "Main Blog", path: "blog" },
    { name: "SNS", path: "sns" },
  ];
  const subTxt =
    "Didn't find what you are looking for? Don't worry, we can help you.";
  return (
    <>
      <Layout
        name={"Contact"}
        title={"Contact Us"}
        depthTwo={depthTwo}
        subTxt={subTxt}
      >
        <ContactForm />
        <Location />
        <article className="contactWrap">
          <h3 className="contactTitle">Quick Contact</h3>
          <p className="contactTxt">
            Please contact us through the list below.
          </p>
          <div className="support">
            <div className="supportWrap">
              <div className="svg">
                <svg viewBox="0 0 455 455">
                  <g>
                    <polygon points="60,134.911 60,380.089 196.194,257.5 	" />
                    <polygon points="318.806,257.5 455,380.089 455,134.911 	" />
                    <polygon points="257.5,272.318 432.579,114.729 82.421,114.729 	" />
                    <polygon points="257.5,312.682 218.615,277.681 82.421,400.271 432.579,400.271 296.385,277.681 	" />
                    <polygon points="395,54.729 0,54.729 0,340.271 30,340.271 30,84.729 395,84.729 	" />
                  </g>
                </svg>
              </div>
              <h4 className="supportTitle">Email Us</h4>
              <ul className="list email">
                {email.map((item, idx) => {
                  return (
                    <li key={idx}>
                      <Link
                        to="javascript:void(0)"
                        onClick={() => (window.location = `mailto:${item}`)}
                      ></Link>
                      {item}
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="supportWrap">
              <div className="svg">
                <svg viewBox="0 0 347.969 347.969">
                  <path
                    d="M6.054,0v287.381h161.331l57.679,60.588l57.692-60.588h59.158V0H6.054z M244.995,204.064l-9.353,7.361
	c-0.025,0.016-0.049,0.029-0.071,0.045c-13.662,10.664-33.021,11.076-54.54,1.203c-18.37-8.418-36.96-23.805-52.347-43.328
	c-15.387-19.504-26.012-41.184-29.917-61.01c-4.522-22.951,0.241-41.496,13.407-52.357c0.092-0.072,9.622-7.6,9.622-7.6
	c4.307-3.396,10.542-2.642,13.938,1.65l24.277,30.803c3.395,4.301,2.652,10.541-1.65,13.926l-9.352,7.385
	c-4.305,3.395-10.224,20.684,8.509,44.478c18.746,23.76,37.247,21.826,41.557,18.412l9.351-7.361
	c4.311-3.389,10.548-2.662,13.943,1.65l24.273,30.783C250.036,194.416,249.299,200.648,244.995,204.064z"
                  />
                </svg>
              </div>
              <h4 className="supportTitle">Call Us</h4>
              <ul className="list call">
                {call.map((item, idx) => {
                  return <li key={idx}>{item}</li>;
                })}
              </ul>
            </div>
            <div className="supportWrap">
              <div className="svg">
                <svg viewBox="796 796 200 200">
                  <path
                    d="M970.135,870.134C970.135,829.191,936.943,796,896,796c-40.944,0-74.135,33.191-74.135,74.134
	c0,16.217,5.221,31.206,14.055,43.41l-0.019,0.003L896,996l60.099-82.453l-0.019-0.003
	C964.912,901.34,970.135,886.351,970.135,870.134z M896,900.006c-16.497,0-29.871-13.374-29.871-29.872s13.374-29.871,29.871-29.871
	s29.871,13.373,29.871,29.871S912.497,900.006,896,900.006z"
                  />
                </svg>
              </div>
              <h4 className="supportTitle">Location Us</h4>
              <ul className="list contLocation">
                {location.map((item, idx) => {
                  return <li key={idx}>{item}</li>;
                })}
              </ul>
            </div>
          </div>
        </article>
      </Layout>
    </>
  );
};

export default Contact;
