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
import shopping1 from '../images/shopping1.jpg';
import shopping2 from '../images/shopping2.jpg';
import shopping3 from '../images/shopping3.jpg';

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
    width: 100%;
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
    height: 300px;
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
        border-bottom: 2px solid orange;
    }

    span {
        font-size: 20px;
    }
`;

function ShoppingList() {
    return (
        <>
            <Helmet
                title='Archer Zou - Shopping List'
                meta={[
                    {
                        name: 'Archer Zou',
                        content: 'Portfolio',
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
                        <Heading>Shopping List</Heading>
                        <Paragraph>
                            Shpping List is a project I built in my spare time.
                            I decided to create a simple react web application that would help me advance the skills on both frontend and backend.
                            Meanwhile, this app can save my shopping time and can be utilized on mobile phone easily.
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
                                    <td>Personal App</td>
                                    <td>React</td>

                                    <Bold>
                                        <a href='https://github.com/archerzou/shopping-list'>
                                            Repository
                                        </a>
                                    </Bold>
                                    <Bold>
                                        <a href='https://archer-shopping-list.netlify.app/'>
                                            View Site
                                        </a>
                                    </Bold>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>Material-UI</td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>PostgreSQL</td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>Netlify</td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </ProjectTable>
                    </TextContent>
                    <Image
                        src={shopping1}
                        alt='Movies Application Work in Progress'
                    />
                    <TextContent>
                        <Heading>Project Purpose and Goal</Heading>
                        <Paragraph>
                            I built this app that let me shop faster at our local
                            supermarket. In our neighborhood center, the supermarket
                            is very huge. You end up spending a lot of time walking
                            from one end to the other, and back, just to find your 
                            items. Time consuming!<br />
                            <br />
                            I wanted this shopping list app that speeds up the shopping 
                            rate. It would add items with help from an autocomplete 
                            form feature and set up categories that change the display 
                            order of the list in order to optimize my store footprint, 
                            plus a top 10 favorite items ‘quick add’ menu!
                        </Paragraph>
                    </TextContent>
                    <WebStack>
                        <LeftContent></LeftContent>
                        <RightContent>
                            <Heading>Web Stack and Explanation</Heading>
                            <Paragraph>
                                React was a nice choice for this application,
                                because of its ease of state management and the
                                amount of packages available. I also utilized 
                                the{' '}<a
                                style={{
                                    color: '#DD7834',
                                    fontWeight: '900',
                                }}
                                href='http://material-ui.com/'
                            >
                                Material-UI 
                            </a>{' '}
                                framework, that allows me to easily
                                handle the design style which I'm not good at. I 
                                depended on{' '}<a
                                style={{
                                    color: '#DD7834',
                                    fontWeight: '900',
                                }}
                                href='http://www.netlify.com/'
                            >
                                Netlify
                            </a>{' '} as a server to host website, 
                                as it allows live updates alongside github.
                            </Paragraph>
                            <Paragraph>
                                In the future, I prepare to add Redux to this
                                project to clean up the states a bit, and I
                                am also looking into a text of tooltip that can allow
                                adding items easily based on history input.
                            </Paragraph>
                        </RightContent>
                    </WebStack>
                    <Image
                        src={shopping2}
                        alt='Movies image with differing weather information'
                    />
                    <CenterText>
                        <Heading>Problems and Thought Process</Heading>
                        <Paragraph>
                            Coding involves a lot of repetition. I force myself
                            to write loops and Conditional statements to imrprove
                            the code. And I also experiment with asynchronous JavaScript.
                            
                            The main APIs in my app come from Material-UI. They inject
                            different types of functionalities to components, such as
                            modals, lists, forms, etc. And I find myself heavily relying
                            on knex’s docs and Stack Overflow to learn more about SQL queries.
                        </Paragraph>
                    </CenterText>
                    <Image
                        src={shopping3}
                        alt='Movies image with differing weather information'
                    />
                    <TextContent>
                        <Heading>Lessons Learned</Heading>
                        <Paragraph>
                        I created this app alone. So here’s the thing, even some small differences caused hours 
                        upon hours of headaches as I unearthed new problems and bugs that I had to solve on my own.
                        with such kind of experience, I have become better at identifying where the bugs come up. 
                        I’ve cut down on silly mistakes. I’m better at reading logs. It feels like bugs take me less time to squash.<br />
                        <br />     
                        Another hidden perk: seeing the big picture behind the language. This project helped to solidify a lot my React knowledge, such as using hooks or updating the states. I also got a lot of great practice using ES6+ syntax on the backend of the project. I could distinguish which parts of the
                        code are pure JavaScript and which are specific to a framework, like React. React might go away someday, but JS will 
                        be there for much longer. If you focus on learning the language well, you will be able to navigate through whatever 
                        framework you pick. It doesn’t work out the other way around.
                        </Paragraph>
                    </TextContent>
                </Container>
            </Layout>
            <Footer projectDisplay='block' />
        </>
    );
}

export default ShoppingList;
