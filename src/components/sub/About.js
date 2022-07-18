import React from "react";
import Layout from "./Layout";
import {
  aboutList,
  aboutSubTitle,
  aboutExplanTitle,
  aboutExplan,
  aboutExplanList,
  aboutExplanLastList,
  aboutExplanTitleLast,
} from "../../asset/data";

const About = () => {
  const depthTwo = [
    { name: "About Us", path: "/about" },
    { name: "Our Team", path: "/about/team" },
  ];

  return (
    <Layout
      name={"About"}
      title={"A DESIGN STUDIO RESEARCH STRATEGY"}
      depthTwo={depthTwo}
    >
      <article className="info">
        <div className="infoSubTxt">
          <strong className="ani-content2">Neige</strong>
          <span className="ani-content2">About Us</span>
          <ul className="ani-content2">
            {aboutSubTitle.map((item, idx) => {
              return <li key={idx}>{item}</li>;
            })}
          </ul>
          <span className="ani-content2">Thinking</span>
        </div>
        <div className="infoWrap ani-content">
          <div className="pic">
            <img
              src="https://images.unsplash.com/photo-1633904275835-4e0e2b7e0a49?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80"
              alt="about visual"
            />
          </div>
        </div>
        <div className="infoTxt">
          <ul className="txt ani-content">
            {aboutList.map((item, idx) => {
              return (
                <li key={idx} className={`list${idx}`}>
                  <h3 className="title">{item.title}</h3>
                  <p>{item.txt}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </article>
      <article className="infoExplan">
        <h3 className="title ani-content">{aboutExplanTitle}</h3>
        <div className="infoTxt">
          <ul className="txt ani-content">
            {aboutExplan.map((item, idx) => {
              return (
                <li key={idx} className={`list${idx}`}>
                  <h3 className="title">{item.title}</h3>
                  <p>{item.txt}</p>
                </li>
              );
            })}
          </ul>
          <div className="pic ani-content">
            <img
              src="https://images.unsplash.com/photo-1629948618343-0d33f97a3091?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80"
              alt="about visual"
            />
          </div>
        </div>
      </article>
      <article className="infoExplan">
        <h3 className="title ani-content">{aboutExplanTitleLast}</h3>
        <div className="infoTxt2">
          <ul className="txt ani-content">
            {aboutExplanList.map((item, idx) => {
              return (
                <li key={idx} className={`list${idx}`}>
                  <h3 className="title">{item.title}</h3>
                  <p>{item.txt}</p>
                </li>
              );
            })}
          </ul>
          <div className="pic ani-content">
            <img
              src="https://images.unsplash.com/photo-1618004912476-29818d81ae2e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80"
              alt="about visual"
            />
          </div>
        </div>
        <div className="infoTxt3 ani-content">
          <ul className="txt">
            {aboutExplanLastList.map((item, idx) => {
              return (
                <li key={idx} className={`list${idx}`}>
                  <p>{item.txt}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </article>
    </Layout>
  );
};

export default About;
