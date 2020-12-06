import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { Link } from 'gatsby';
import Layout from '../components/Layout';
import { breakpoints } from '../components/Media';
import Logo from '../components/Logo';
import Heading from '../components/Heading';
import Paragraph from '../components/Paragraph';
import Footer from '../components/footer';
import ProjectRow from '../components/ProjectRow';
import ProjectRow2 from '../components/ProjectRow2';
import FullProjectRow from '../components/FullProjectRow';
import LandingImage from '../images/LandingImage.jpg';
import HeadingWrap from '../components/HeadingWrap';
import '../index.css';
import { Float } from '../styles';

const Container = styled.div`
    margin: 100px 0 200px 0;
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    flex-wrap: wrap;

    @media (min-width: ${breakpoints.mobileMax}) {
        flex-wrap: nowrap;
    }
`;

const SkillTable = styled.div`
    width: 100%;
    text-align: left;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    @media (min-width: ${breakpoints.mobileMax}) {
        flex-wrap: nowrap;
    }

    p {
        color: black;
        font-weight: 700;
        min-width: 200px;
        margin: 20px 0 0 0;

        @media (min-width: ${breakpoints.mobileMax}) {
            min-width: unset;
            margin: 30px 0;
        }

        span {
            font-size: 20px;
            margin-right: 5px;
            color: #b4e1e7;
        }
    }
`;

const SubContainer = styled.div`
    margin: 0px 0;
    width: 100%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;

    @media (min-width: ${breakpoints.mobileMax}) {
        flex-wrap: nowrap;
    }
`;

const TextContent = styled.div`
    max-width: 700px;
    .Paragraph {
        a {
            border-bottom: 2px solid transparent;
            transition: 0.3s;

            :hover {
                border-bottom: 2px solid black;
            }
        }
    }
`;

const TextContentWrap = styled(TextContent)`
    width: 100%;

    ${Paragraph} {
        margin: 40px 0px;
    }
    :nth-child(2) {
        ${Paragraph} {
            margin: 0px 0px;

            @media (min-width: ${breakpoints.mobileMax}) {
                margin: 40px 0;
            }
        }
    }

    @media (min-width: ${breakpoints.mobileMax}) {
        width: 45%;
    }
`;

const SkillContent = styled.div`
    width: 100%;
`;

const HeadingImage = styled.div`
    margin-left: 0px;
    margin-right: 0px;
    margin-top: 0px;
    width: 100%;
    border-radius: 4px;
    height: 300px;
    background-size: cover;
    background-image: url(${LandingImage});
    background-color: #f5f5f5;
    background-position: center;
    transform: translateY(30px);
    opacity: 0;
    animation: ${Float} 1s 0.6s forwards;

    @media (min-width: ${breakpoints.mobileMax}) {
        width: 100%;
        height: 400px;
        background-position-x: right;
        background-position-y: center;
    }
`;

const SubParagraph = styled(Paragraph)`
    margin-top: 10px;
    max-width: unset;

    @media (min-width: ${breakpoints.mobileMax}) {
        max-width: 70%;
    }
`;

class Page extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log(`
    #     #      #######                             ### 
    #     # #       #    #    # ###### #####  ###### ### 
    #     # #       #    #    # #      #    # #      ### 
    ####### #       #    ###### #####  #    # #####   #  
    #     # #       #    #    # #      #####  #          
    #     # #       #    #    # #      #   #  #      ### 
    #     # #       #    #    # ###### #    # ###### ### `);
        console.log('This website was designed and built by Archer Zou ');
    }

    render() {
        return (
            <>
                <Layout>
                    <Link title='Home - Archer Zou' to='/'>
                        <Logo />
                    </Link>
                    <Helmet>
                        <title>
                            Archer Zou - Software Developer - archerzou
                        </title>
                        <meta
                            name='title'
                            content='Archer Zou - Software Developer - archerzou'
                        />
                        <meta
                            name='description'
                            content="Technology has always been at the very core of my interests. From a young age, I've loved the idea of being able to build something new that people around the world can experience and interact with."
                        />
                        <meta property='og:type' content='website' />
                        <meta
                            property='og:url'
                            content='https://archerzou.com/'
                        />
                        <meta
                            property='og:title'
                            content='Archer Zou - Software Developer - archerzou'
                        />
                        <meta
                            property='og:description'
                            content="Technology has always been at the very core of my interests. From a young age, I've loved the idea of being able to build something new that people around the world can experience and interact with."
                        />
                        <meta property='og:image' content={LandingImage} />
                        <meta
                            property='twitter:card'
                            content='summary_large_image'
                        />
                        <meta
                            property='twitter:url'
                            content='https://twitter.com/ArcherZou'
                        />
                        <meta
                            property='twitter:title'
                            content='Archer Zou - Software Developer - archerzou'
                        />
                        <meta
                            property='twitter:description'
                            content="Technology has always been at the very core of my interests. From a young age, I've loved the idea of being able to build something new that people around the world can experience and interact with."
                        />
                        <meta property='twitter:image' content={LandingImage} />
                        <html lang='en' />
                    </Helmet>
                    <HeadingWrap />
                    <HeadingImage />
                    <Container
                        style={{
                            alignItems: 'start',
                            margin: 0,
                            justifyContent: 'space-between'
                        }}
                    >
                        <TextContentWrap>
                            <Paragraph>
                                I'm a Software Developer focused on building high-quality,
                                thoughtful, and intuitive websites and web applications.
                                <br />
                                <br />
                                I have had the opportunity to work along-side web development
                                professionals in notable projects. I value the ideas of hard-work
                                and persistence. These values have aided my career as a developer
                                and have shaped me into the person I am today.
                            </Paragraph>
                        </TextContentWrap>
                        <TextContentWrap>
                            <Paragraph>
                                I like to spend my free time adding on to my web stack and chasing
                                my dream of becoming a good software engineer. Other than coding, 
                                I prefer to read inspiring story to find my life's passion and 
                                discover new places with my friends or on my own.
                            </Paragraph>
                        </TextContentWrap>
                    </Container>
                    <Container>
                        <SubContainer>
                            <SkillContent>
                                <TextContent>
                                    <Heading>My Skills</Heading>
                                    <Paragraph>
                                        Through my self-learning, I've gained a solid
                                        understanding of computer science and
                                        web development concepts, and have
                                        dedicated a lot of my free time to apply
                                        these concepts to real-world scenarios
                                        and applications.
                                    </Paragraph>
                                </TextContent>
                                <SkillTable>
                                    <row>
                                        <Paragraph>
                                            <span>&#9675;</span> Javascript ES6
                                        </Paragraph>
                                        <Paragraph>
                                            <span>&#9675;</span> HTML & (S)CSS
                                        </Paragraph>
                                    </row>
                                    <row>
                                        <Paragraph>
                                            <span>&#9675;</span> React
                                        </Paragraph>
                                        <Paragraph>
                                            <span>&#9675;</span> Redux
                                        </Paragraph>
                                    </row>
                                    <row>
                                        <Paragraph>
                                            <span>&#9675;</span> Figma
                                        </Paragraph>
                                        <Paragraph>
                                            <span>&#9675;</span>{' '}
                                            GraphQL
                                        </Paragraph>
                                    </row>
                                    <row>
                                        <Paragraph>
                                            <span>&#9675;</span> PostgreSQL
                                        </Paragraph>
                                        <Paragraph>
                                            <span>&#9675;</span> MongoDB
                                        </Paragraph>
                                    </row>
                                </SkillTable>
                            </SkillContent>
                        </SubContainer>
                    </Container>
                    <SubContainer>
                        <TextContent>
                            <Heading>What I've been working on </Heading>
                            <Paragraph>
                                I like to stay busy and always try to build projects for real life after my work. Take a look at some of the
                                applications, projects, and websites I've
                                dedicated my time to.
                            </Paragraph>
                        </TextContent>
                    </SubContainer>
                    <SubContainer>
                        <ProjectRow />
                    </SubContainer>
                    <SubContainer>
                        <ProjectRow2 />
                    </SubContainer>
                    <SubContainer>
                        <FullProjectRow />
                    </SubContainer>
                </Layout>
                <Footer instagramDisplay='flex' />
            </>
        );
    }
}

export default Page;
