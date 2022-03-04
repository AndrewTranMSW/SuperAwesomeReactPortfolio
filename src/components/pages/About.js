import React from "react";
import "../../styles/About.css";
import Profile from "../../assets/images/profilePic.jpg";
import moment from "moment";
import { Container } from "react-bootstrap";
function About() {
  const currentAge = moment().format("YYYY") - 1991;
  return (
    <div>
      <Container className="section">
        <img
          src={Profile}
          alt="profile photo of me"
          className="profilePhoto"
        ></img>
        <h2>About Me</h2>
        <p className="aboutText">
          Hello! My name is Andrew Tran and I have been a Seattlite for all{" "}
          <span>{currentAge} </span> years of my existence. I graduated from the
          University of Washington in 2013 with two bachelor's degrees, one in
          Psychology and the other in Sociology. I then pursued a master's
          degree in social work and graduated as Andrew Tran, MSW with a
          concentration on integrated health and clinical social work in 2016.
        </p>
        <p className="aboutText">
          My path lead me to a career working with the most vulnerable
          populations where I helped those in need. Prior to pursuing my
          aspirations of becoming a developer, I was the COVID unit and
          pediatric social worker for my hospital during the peak of the
          pandemic. My duties were to provide safe discharge plans for my
          patients as well as help the kids I was working with find safe homes
          away from their neglect. Throughout my six years as a clinical social
          worker, I had always pondered about a career change to development due
          to my hobby of building computers and my ongoing admiration for the
          field of technology and it's growth. I finally made that leap in late
          2021, resigned from my job, and devoted myself to full-time growth and
          learning in full-stack development.
        </p>
        <p className="aboutText">
          In my spare time, I like to hang out with my spouse and two dogs. I am
          a very avid Magic: The Gathering player (my favorite tribe is vampires
          and I typically am drawn toward Dimir and Rakdos decks), I build PCs
          for fun, I am a mechanical keyboard geek, I love riding and working on
          my motorcycle, and I have been a professional wedding photographer for
          the past 9 years.
        </p>
      </Container>
    </div>
  );
}

export default About;
