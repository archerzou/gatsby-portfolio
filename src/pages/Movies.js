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
import Movies1 from '../images/Movies1.jpg';
import Movies2 from '../images/Movies2.jpg';
import MoviesLogic from '../images/MoviesLogic.jpg';
import MoviesComp from '../images/MoviesComp.jpg';
import MoviesStack from '../images/MoviesStack.jpg';

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
        font-style: normal;
        font-weight: 900;
        text-transform: uppercase;
        font-size: 12px;
        line-height: 129.69%;
        letter-spacing: 0.03em;
        padding-bottom: 20px;
    }

    td {
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
        margin: 100px 0 50px 0;
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
    width: 80%;
    height: 350px;
    background-image: url(${MoviesStack});
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
    padding-bottom: 50px;
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

function Movies(props) {
    return (
        <>
            <Helmet
                title='Archer Zou - Movies'
                meta={[
                    {
                        name: 'Archer Zou',
                        content: 'Portfolio - Archer',
                    },
                    {
                        name: 'Archer Zou',
                        content:
                            'Archer Zou - Software Developer',
                    },
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
                        <Heading>Movies</Heading>
                        <Paragraph>
                            Movies was a project I put together after learning
                            the basics of GraphQL. This application allowed 
                            users to discover thousands of movies using TMDB API, 
                            which also improved my understanding of making queries
                            and managing larger sets of data. 
                        </Paragraph>
                        <ProjectTable>
                            <tbody>
                                <tr>
                                    <th>Type</th>
                                    <th>Stack</th>
                                    <th>Code</th>
                                    <th>Live</th>
                                </tr>
                                <tr>
                                    <td>Personal</td>
                                    <td>React</td>

                                    <Bold>
                                        <a
                                            title='React Weather API'
                                            target='_blank'
                                            rel='noreferrer'
                                            href='https://github.com/archerzou/movie-library'
                                        >
                                            Repository
                                        </a>
                                    </Bold>

                                    <Bold>
                                        <a
                                            title='TMDB API'
                                            target='_blank'
                                            rel='noreferrer'
                                            href='https://archer-movies.netlify.app/'
                                        >
                                            View Site
                                        </a>
                                    </Bold>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>GraphQL</td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>SCSS</td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </ProjectTable>
                    </TextContent>
                    <Image
                        src={Movies1}
                        alt='Movies Application Work in Progress'
                    />
                    <TextContent>
                        <Heading>Project Purpose and Goal</Heading>
                        <Paragraph>
                            The main goal of this project was to help me better 
                            practice GraphQL and fetch the data from APIs with 
                            Axios. Besides this, I also wanted to create a movie
                            library that I would enjoy using, meaning it had to 
                            be responsive and allow the movie fans to see the 
                            trailer at a quick glance.
                        </Paragraph>
                    </TextContent>
                    <WebStack>
                        <LeftContent></LeftContent>
                        <RightContent>
                            <Heading>Web Stack and Explanation</Heading>
                            <Paragraph>
                                For this project I used React Hooks because of its
                                ease of use on function component, and I learn
                                to structure React app more flexibly. In order to
                                shorten the amount of time spent writing CSS code,
                                I used SCSS which can work with variables to 
                                implement the style.
                            </Paragraph>
                            <Paragraph>
                                GraphQL was mainly chosen because I wanted to
                                improve my abilities with it, but also because
                                their server performance is extremely fast, but 
                                actually, it took me a good amount of time 
                                adding a GraphQL client to my frontend.
                            </Paragraph>
                        </RightContent>
                    </WebStack>
                    <DuoImages>
                        <LeftImage></LeftImage>
                        <RightImage></RightImage>
                    </DuoImages>
                    <CenterText>
                        <Heading>Problems and Thought Process</Heading>
                        <Paragraph>
                            I normally work through projects and logic by
                            creating lists like above before coding. Here I've written down
                            some necessary points that my program needs to
                            find a solution for. I also note a few complications
                            that arose once my app was shown and running. <br />{' '}
                            <br /> In this case, I noticed that it would grow
                            tedious for a user to have to enter and re-enter
                            their search words over and over again, so I saved their 
                            entries using hsitory. Another big problem was reducing the 
                            the pictures render time, so I managed to adopt pagination and conditional
                            rendering method.
                        </Paragraph>
                    </CenterText>
                    <Image
                        src={Movies2}
                        alt='Movie details and view trailer'
                    />
                    <DuoLinks>
                        <LinkLeft>
                            <a
                                title='TMDB API'
                                target='_blank'
                                rel='noreferrer'
                                href='https://github.com/archerzou/movie-library'
                            >
                                <ProjectLink>
                                    View Code <span>&#8250;</span>
                                </ProjectLink>
                            </a>
                        </LinkLeft>
                        <LinkRight>
                            <a
                                title='TMDB API'
                                target='_blank'
                                rel='noreferrer'
                                href='https://archer-movies.netlify.app/'
                            >
                                <ProjectLink>
                                    Live Site <span>&#8250;</span>
                                </ProjectLink>
                            </a>
                        </LinkRight>
                    </DuoLinks>
                    <TextContent>
                        <Heading>Future Improvements</Heading>
                        <Paragraph>
                            I still have a few features I would love to
                            implement with this project. I'd really like to
                            update the movie status so that they display based on what the trend
                            currently is, so that the application has the feel of users currently
                            experiencing. I also have plans to add some search conditions like
                            actor's name, so the user can find the movie even though they cannot
                            remember the movie's name.
                        </Paragraph>
                    </TextContent>
                </Container>
            </Layout>
            <Footer projectDisplay='block' />
        </>
    );
}

export default Movies;
