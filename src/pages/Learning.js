import React from "react";
import { Helmet } from "react-helmet";
import Layout from "../components/Layout";
import { Link } from "gatsby";
import styled from "styled-components";
import { breakpoints } from "../components/Media";
import Logo from "../components/Logo";
import Heading from "../components/Heading";
import Paragraph from "../components/Paragraph";
import Footer from "../components/footer";
import "../index.css";
import Learning1 from "../images/Learning1.jpg";
import StartupThumb from "../images/StartupThumb.jpg";
import Groceries1 from "../images/Groceries1.jpg";
import Groceries2 from "../images/Groceries2.jpg";

import Learning2 from "../images/Learning2.png";
import Learning3 from "../images/Learning3.jpg";
import LearningStack from "../images/LearningStack.png";

const LayoutAlt = styled(Layout)`
  margin-bottom: 0;
`;

const Container = styled.div`
  margin: 50px 0 0 0;
  width: 100%;
  height: auto;
  align-items: center;
  h1 {
    font-size: 30px;
  }

  @media (min-width: ${breakpoints.mobileMax}) {
    margin: 100px 0 0 0;
  }
`;

const TextContent = styled.div`
  max-width: 800px;
  margin-top: 40px;

  @media (min-width: ${breakpoints.mobileMax}) {
    margin-top: 100px;
  }
  :nth-child(1) {
    ${Heading} {
      font-size: 40px;

      @media (min-width: ${breakpoints.mobileMax}) {
        font-size: 60px;
      }
    }
  }
`;

const Image = styled.img`
  margin: 50px 0 20px 0;
  width: 100%;
  height: auto;
  border-radius: 4px;
  transform: scale(1);
  transition: transform 0.3s ease-in-out;
  @media (min-width: ${breakpoints.mobileMax}) {
    height: auto;
    margin: 100px 0 50px 0;
  }
`;

const ProjectLink = styled(Paragraph)`
  font-weight: 700;
  font-size: 14px;
  line-height: 163.19%;
  display: inline;
  color: black;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  border-bottom: 2px solid white;
  transition: border-bottom 0.3s ease-in-out;

  :hover {
    border-bottom: 2px solid black;
  }

  span {
    font-size: 20px;
  }
`;

const LinkSet = styled.div`
  :hover {
    ${Image} {
      transform: scale(1.02);
    }
    ${ProjectLink} {
      border-bottom: 2px solid black;
    }
  }
`;

const WebStack = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media (min-width: ${breakpoints.mobileMax}) {
    flex-wrap: nowrap;
    align-items: center;
    margin: 100px 0;
  }
`;

const LeftContent = styled.div`
  width: 100%;
  height: 300px;
  background-image: url(${LearningStack});
  background-repeat: no-repeat;
  background-position: center;

  @media (min-width: ${breakpoints.mobileMax}) {
    width: 55%;
  }
`;
const RightContent = styled.div`
  width: 100%;

  @media (min-width: ${breakpoints.mobileMax}) {
    width: 45%;
  }
`;

const DuoImages = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media (min-width: ${breakpoints.mobileMax}) {
    flex-wrap: nowrap;
    align-items: center;
    margin: 100px 0;
  }
`;

const LeftImage = styled.div`
  width: 100%;
  height: 450px;
  margin-right: 0;
  margin-bottom: 50px;
  background-image: url(${Learning2});
  background-size: contain;
  background-position-x: center;
  background-repeat: no-repeat;

  @media (min-width: ${breakpoints.mobileMax}) {
    width: 45%;
    margin-bottom: 0px;
    margin-right: 10%;
    height: 650px;
    background-position-x: left;
  }
`;
const RightImage = styled.div`
  width: 100%;
  height: 450px;
  margin-bottom: 50px;
  background-image: url(${Learning3});
  background-size: contain;
  background-position-x: center;

  background-repeat: no-repeat;

  @media (min-width: ${breakpoints.mobileMax}) {
    width: 45%;
    margin-bottom: 0;
    background-position-x: right;

    height: 650px;
  }
`;

const DuoText = styled.div`
  display: flex;
  flex-wrap: nowrap;

  @media (min-width: ${breakpoints.mobileMax}) {
    flex-wrap: nowrap;
    align-items: center;
    margin: 300px 0 0 0;
  }
`;

const DuoTextAlt = styled.div`
  display: flex;
  flex-wrap: nowrap;

  @media (min-width: ${breakpoints.mobileMax}) {
    flex-wrap: nowrap;
    align-items: center;
    margin: 100px 0 0 0;
  }
`;

const LeftText = styled.div`
  width: 100%;
  height: 650px;
  margin-right: 0;
  margin-bottom: 50px;
  background-size: contain;
  background-position-x: center;
  background-repeat: no-repeat;

  ${Heading} {
    font-size: 40px;
  }

  @media (min-width: ${breakpoints.mobileMax}) {
    width: 45%;
    margin-bottom: 0px;
    margin-right: 10%;
    height: 650px;
    background-position-x: left;
  }
`;
const RightText = styled.div`
  width: 50%;
  height: 450px;
  margin-bottom: 50px;
  background-image: url(${Groceries1});
  background-size: contain;
  background-position-x: center;
  background-repeat: no-repeat;
  transform: translateY(50px);

  @media (min-width: ${breakpoints.mobileMax}) {
    width: 45%;
    margin-bottom: 0;
    background-position-x: right;
    height: 650px;
    transform: translateY(-100px);
  }
`;

const RightTextAlt = styled(RightText)`
  background-image: url(${Groceries2});

  @media (min-width: ${breakpoints.mobileMax}) {
    background-position-x: left;
  }
`;

const CenterText = styled.div`
  width: 100%;
  padding-top: 30px;
  text-align: center;

  @media (min-width: ${breakpoints.mobileMax}) {
    padding-top: 120px;
  }

  ${Heading} {
    font-size: 40px;
  }

  ${Paragraph} {
    max-width: 700px;
    margin: 30px auto;
  }
`;

const CenterTextAlt = styled(CenterText)`
  width: 90%;
  padding: 10px;
  @media (min-width: ${breakpoints.mobileMax}) {
    padding: 30px;
  }
  a {
    font-weight: 700;
    font-size: 14px;
    line-height: 163.19%;
    display: inline;
    color: black;
    text-decoration: none;
    letter-spacing: 0.03em;
    border-bottom: 2px solid transparent;
    transition: border-bottom 0.3s;

    :hover {
      border-bottom: 2px solid black;
    }

    span {
      font-size: 20px;
    }
  }
`;

const DuoLinks = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  margin: 0 auto;
  margin-bottom: 50px;
  flex-wrap: wrap;

  @media (min-width: ${breakpoints.mobileMax}) {
    flex-wrap: nowrap;
    margin-bottom: 150px;

    width: 60%;
  }
`;

const LinkLeft = styled.div`
  width: 100%;
  margin: 10px auto;
  text-align: center;

  @media (min-width: ${breakpoints.mobileMax}) {
    width: unset;
    text-align: left;
    margin: unset;
  }
`;
const LinkRight = styled(LinkLeft)``;

function Learning() {
  return (
    <>
      <Helmet
        title="Archer Zou - Learning"
        meta={[
          { name: "Archer Zou", content: "Portfolio - Archer Zou" },
          {
            name: "Archer Zou",
            content: "Archer Zou - Software Developer"
          }
        ]}
      >
        <html lang="en" />
      </Helmet>
      <LayoutAlt>
        <Link to="/">
          <Logo />
        </Link>
        <Container>
          <TextContent>
            <Heading>Learning in spare time</Heading>
            <Paragraph>
              Nothing can stop me from becoming a developer as long as I have a
              computer and a strong drive to learn. I was really enjoying to learn
              knowledge following the tendency and practice with different projects
              after my work. It was very coincident for me to join the Discord 
              group of {" "} <a href="https://zerotomastery.io/">ZTM</a>, a promoting
              online community for learning to code. That was an amazing roadmap from
              where I was able to learn alongside senior Developers and experienced 
              Designers to build multiple powerful projects. <br /> <br />
              Throughout recent years I was pushed and challenged in every aspect
              of my skills and walked away as a much more refined developer.
            </Paragraph>
          </TextContent>
          <Image src={Learning1} alt="Learning's Office" />
          <TextContent>
            <Heading>Goal of Career</Heading>
            <Paragraph>
              After I have learned the Javascript, I set some personal goals for
              myself so that I had clear objectives on what I wanted to improve
              on and accomplish. Of these goals, my main priority involved improving
              my abilities with React and Redux, more specifically, my comprehension
              of React Hooks.
              <br /> <br />
              Another specific goal I had for my next step was enhancing my abilities
              through some big projects with many partners in a team. I wanted to 
              cooperate with team members abd understand how every phase of the development
              process works, from ideation to launch. This included grasping more advanced
              concepts of git, such as rebasing, checkouts, and reverting.
            </Paragraph>
          </TextContent>
          <WebStack>
            <LeftContent></LeftContent>
            <RightContent>
              <Heading>Personal Challenges and Growth</Heading>
              <Paragraph>
                After I used Figma to design my own project, I was eager to go forward and
                convert the schema into real wrold mobile application. So React Native would
                be one of the most challenging and rewarding experiences in future. I would
                practice more on designing and hope to create more professional products.
              </Paragraph>
              <Paragraph>
                I hope to be a developer with integrity and a valuable member of a team. Working
                alongside extremely talented developers inspired me and pushed my bounds of what
                I believed any developer can do. Besides, I have also learned a ton about Python
                for several years, and prepare to go into advanced topics and different fields 
                in Python so that I can get real life practice and be ready for the real data 
                science world.
              </Paragraph>
            </RightContent>
          </WebStack>
          <DuoImages>
            <LeftImage></LeftImage>
            <RightImage></RightImage>
          </DuoImages>
          <CenterText>
            <Heading>Coding Challenge</Heading>
            <Paragraph>
              For Hacktoberfest, I completed building a group project for the Keiko Corp
              startup, with Figma to form integrated version of a mobile-first, responsive website, 
              and then use vanilla javascript with modern CSS, Flexbox and Grid. If you'd like to 
              learn more about this project, I attached the linked below.
            </Paragraph>
          </CenterText>
          <LinkSet>
            <Link title="Startup Project">
              <Image src={StartupThumb} alt="Startup Project" />
              <DuoLinks>
                <LinkLeft>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    title="Github Code"
                    href="https://archer-startup.netlify.app/"
                  >
                    <ProjectLink>
                      Visit the website alive <span>&#8250;</span>
                    </ProjectLink>
                  </a>
                </LinkLeft>
              </DuoLinks>
            </Link>
          </LinkSet>
          <TextContent>
            <Heading>My Notes</Heading>
            <Paragraph>
              This was the project I spent the majority of my sapre time working
              on. I worked under the guidelines of mobile designer, to create
              a full experience on the landing page of technology Startup.
              <br /> <br />
              This was one of my first template websites with Figma, here I was able to 
              use the Figma file to come up with my own styling and version that's
              easy to use, yet modern and pleasing to look at.
            </Paragraph>
          </TextContent>
          <DuoText>
            <LeftText>
              <Heading>Online Groceries</Heading>
              <Paragraph>
                Another project I worked on was Online Groceries, an iPhone & 
                Android Application built with React Native. This project was for a
                friend that wanted to help users discover organic food in their area.
                <br /> <br />I was able to gain some valuable experience with React
                Native, and was able to work freshly in a mobile applicaiton. I also
                had the opportunity to discuss changes and planning directly with my Client.
              </Paragraph>
            </LeftText>
            <RightText></RightText>
          </DuoText>
          <DuoTextAlt>
            <RightTextAlt></RightTextAlt>
            <LeftText>
              <Heading>Notes</Heading>
              <Paragraph>
                For this project, I have built out some components such as
                search result interface, gallery and product view. I was amazed
                by how easily one can transition from React to React Native, and
                loved the use of Figma to generate CSS style and layout easily.{" "}
                <br /> <br />
                I will continue to work on this project and hope to launch on the APP
                Store or Google Store soon later, and many people are going to buy 
                organic food at home easily.
              </Paragraph>
            </LeftText>
          </DuoTextAlt>
        </Container>
      </LayoutAlt>
      <CenterTextAlt>
        <Heading>Overview</Heading>
        <Paragraph>
          My experience on learning will be something I remember forever, and I
          want to thank the instructors at ZTM for the courses they created teaching me
          so many new lessons and showing me the direction on moving forward. An extra
          big thank you to{" "}
          <a href="https://twitter.com/AndreiNeagoie/">
            Andrei Neagoie
          </a>
          , who spent countless hours explaining Javascript and React concepts online.
        </Paragraph>
      </CenterTextAlt>
      <Footer projectDisplay="block" />
    </>
  );
}

export default Learning;
