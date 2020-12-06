import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../components/Layout';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { breakpoints } from '../components/Media';
import Logo from '../components/Logo';
import Heading from '../components/Heading';
import Paragraph from '../components/Paragraph';
import Footer from '../components/footer';
import '../index.css';
import Grades1 from '../images/Grades1.jpg';
import Grades2 from '../images/Grades2.jpg';
import Grades3 from '../images/Grades3.jpg';

import MoviesLogic from '../images/MoviesLogic.jpg';
import MoviesComp from '../images/MoviesComp.jpg';
import GradesStack from '../images/GradesStack.png';

const Container = styled.div`
    margin: 50px 0;
    width: 100%;
    height: auto;
    align-items: center;

    h1 {
        font-size: 30px;
    }

    @media (min-width: ${breakpoints.mobileMax}) {
        margin: 100px 0;
    }
`;

const TextContent = styled.div`
    max-width: 800px;
    margin-top: 40px;

    @media (min-width: ${breakpoints.mobileMax}) {
        margin-top: 100px;
    }

    :nth-child(1) > ${Heading} {
        font-size: 40px;

        @media (min-width: ${breakpoints.mobileMax}) {
            font-size: 60px;
        }
    }
`;

const ProjectTable = styled.table`
    width: 100%;
    text-align: left;

    th {
        width: 33%;
        font-style: normal;
        font-weight: 900;
        text-transform: uppercase;
        font-size: 12px;
        line-height: 129.69%;
        letter-spacing: 0.03em;
        padding-bottom: 20px;

        @media (min-width: ${breakpoints.mobileMax}) {
            width: auto;
        }
    }

    td {
        width: 100px;
        font-size: 14px;
        line-height: 184.69%;
        letter-spacing: 0.03em;
    }
`;

const Bold = styled.td`
    a {
        font-size: 16px;
        line-height: 184.69%;
        letter-spacing: 0.03em;
        font-weight: 900;
        color: #dd7834;
        border-bottom: 2px solid transparent;
        transition: 0.3s;
        padding-bottom: 3px;

        :hover {
            border-bottom: 2px solid #dd7834;
        }
    }
`;

const Image = styled.img`
    margin: 50px 0 20px 0;
    width: 105%;
    transform: translatex(-2.5%);
    height: auto;
    border-radius: 4px;

    @media (min-width: ${breakpoints.mobileMax}) {
        height: auto;
        margin: 50px 0 50px 0;
    }
`;

const WebStack = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 30px 0;

    @media (min-width: ${breakpoints.mobileMax}) {
        flex-wrap: nowrap;
        align-items: center;
        margin: 100px 0;
    }
`;
const LeftContent = styled.div`
    width: 100%;
    height: 320px;
    background-image: url(${GradesStack});
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
    height: 350px;
    margin-right: 0;
    margin-bottom: 50px;
    background-image: url(${MoviesLogic});
    background-size: contain;
    background-position-x: center;
    background-repeat: no-repeat;

    @media (min-width: ${breakpoints.mobileMax}) {
        width: 45%;
        margin-bottom: 0px;
        margin-right: 10%;
        background-position-x: left;

        height: 350px;
    }
`;
const RightImage = styled.div`
    width: 100%;
    height: 350px;
    margin-bottom: 0px;
    background-image: url(${MoviesComp});
    background-size: contain;
    background-position-x: center;
    background-repeat: no-repeat;

    @media (min-width: ${breakpoints.mobileMax}) {
        width: 45%;
        background-position-x: right;
    }
`;

const CenterText = styled.div`
    width: 100%;
    padding: 50px 0;
    text-align: center;

    ${Paragraph} {
        max-width: 700px;
        margin: 30px auto;
    }
`;

const DuoLinks = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    margin: 0 auto;
    margin-bottom: 150px;
    flex-wrap: wrap;

    @media (min-width: ${breakpoints.mobileMax}) {
        flex-wrap: nowrap;
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

const ProjectLink = styled(Paragraph)`
    font-weight: 700;
    font-size: 14px;
    line-height: 163.19%;
    display: inline;
    color: black;
    letter-spacing: 0.03em;
    text-transform: uppercase;
    border-bottom: 2px solid white;
    transition: border-bottom 0.2s;

    :hover {
        border-bottom: 2px solid black;
    }

    span {
        font-size: 20px;
    }
`;

function Grades(props) {
    return (
        <>
            <Helmet
                title='Archer Zou - Grades for Analysis'
                meta={[
                    {
                        name: 'Archer Zou',
                        content: 'Portfolio - Archer Zou'
                    },
                    {
                        name: 'Archer Zou',
                        content:
                            'Archer Zou - Software Developer'
                    }
                ]}
            >
                {' '}
                <html lang='en' />
            </Helmet>
            <Layout>
                <Link to='/'>
                    <Logo />
                </Link>
                <Container>
                    <TextContent>
                        <Heading>Grades for Analysis</Heading>
                        <Paragraph>
                            Grades for Analysis is an online web Application 
                            with MERN Stack, which allows teachers and students
                            to keep track of student's grades. MERN stack is the
                            idea of using Javascript/Node for fullstack web 
                            development. I built this project from scratch 
                            using a number of open source projects and plugins 
                            to work properly. To satisfy different visual experiences,
                            I also brought Material UI and Recharts into this application
                            so that the user can easily switch to various themes and charts. 
                        </Paragraph>
                        <ProjectTable>
                            <tbody>
                                <tr>
                                    <th>Type</th>
                                    <th>Stack</th>
                                    <th>Live</th>
                                </tr>
                                <tr>
                                    <td>Fullstack</td>
                                    <td>MongoDB</td>

                                    <Bold>
                                        <a href='https://archer-grades.herokuapp.com/'>
                                            View Site
                                        </a>
                                    </Bold>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>Expressjs</td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>React/Redux</td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>Nodejs</td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>Heroku</td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </ProjectTable>
                    </TextContent>
                    <Image
                        src={Grades1}
                        alt='Grades Dashboard Overall'
                    />
                    <TextContent>
                        <Heading>Project Purpose and Goal</Heading>
                        <Paragraph>
                            The main purpose of this project is to extend stills
                            and cover more features of MERN fullstack web application.
                            In the backend, I used faker npm package to auto generate 
                            some dummy users, lessons and grades. And Postman is really 
                            a good collaboration platform for API development. While, in
                            the frontend, I joined the Material UI and Recharts together
                            to show the dashboard which the teacher can analyze the student's
                            grades from the overall.<br />
                            <br />I found that the structure and logic of Redux are more 
                            important than code itself. Before coding, I spent a lot of time on
                            making clear the Flux architecture and then render content conditionally.
                        </Paragraph>
                    </TextContent>
                    <WebStack>
                        <LeftContent></LeftContent>
                        <RightContent>
                            <Heading>Web Stack and Explanation</Heading>
                            <Paragraph>
                                MongoDB Atlas made the developers easy to manipulate
                                the data for web application because it only required
                                a URL to connect to Cloud service very smoothly. 
                                The expressJS was chosen because of the ability for 
                                developer to control robust routing without any complex
                                coding knowledge.
                            </Paragraph>
                            <Paragraph>
                                React hooks and Redux for state management are also used
                                throughout the project to maintain the user create, read,
                                update and delete(CRUD) the data consistently. Heroku is also an
                                obvious choice for fullstack deployment because of its easy deploying 
                                and reliability.
                            </Paragraph>
                        </RightContent>
                    </WebStack>
                    <Image
                        src={Grades2}
                        alt='Grades image with manipulate the data'
                    />
                    <CenterText>
                        <Heading>Problems and Thought Process</Heading>
                        <Paragraph>
                            Unlike other samll projects, I ran into a few bumps along the
                            way, one particularly difficult area was organization and 
                            structure of the code. Because of this project's size, I realized
                            how important maintaining an organized structure would be.
                            <br /> <br /> I worked hard to keep components as reusable as 
                            possible and utilized props for many
                            slight variations. I also used Material UI library,
                            because the palette feature enables me to modify the color of the 
                            components to suit my theme much clearer and prevents overrides.
                        </Paragraph>
                    </CenterText>
                    <Image
                        src={Grades3}
                        alt='Grades image with differing theme style'
                    />
                    <TextContent>
                        <Heading>Lessons Learned</Heading>
                        <Paragraph>
                            Building complicated things would push me boundaries,
                            beyond what I already known, which was really uncomfortable
                            and more headaches. To better organize the code structure
                            for React and Redux, I had to google some articles to 
                            refactoring and improving every line I code I write.

                            Another one I have lessoned is to learning continuously.
                            The More mistakes you have made, the more impressive you can understand
                            the programming. I hope to write good code in the process of learning 
                            new knowledge, but also practice informed decision-making with pros and cons.

                            
                        </Paragraph>
                    </TextContent>
                </Container>
            </Layout>
            <Footer projectDisplay='block' />
        </>
    );
}

export default Grades;
