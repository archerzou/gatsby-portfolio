import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { breakpoints } from '../Media';
import Heading from '../Heading';
import Paragraph from '../Paragraph';
import GradesThumb from '../../images/GradesThumb.jpg';
import shopping from '../../images/shopping.jpg';

const ProjectContainer = styled.div`
    display: flex;
    width: 100%;
    margin-bottom: 0px;
    flex-wrap: wrap;
    margin-top: 0px;
    height: unset;
    @media (min-width: ${breakpoints.mobileMax}) {
        flex-wrap: nowrap;
        margin-bottom: 70px;
        margin-top: 40px;
        height: 500px;
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
    border-bottom: 2px solid transparent;
    transition: border-bottom 0.3s;

    :hover {
        border-bottom: 2px solid black;
    }

    span {
        font-size: 20px;
    }
`;

const ProjectImage = styled.div`
    width: 100%;
    height: 300px;
    border-radius: 4px;
    transition-duration: 0.3s;
`;

const Project = styled.div`
    width: 100%;
    height: auto;
    margin-bottom: 90px;
    transition-duration: 0.3s;

    :hover {
        ${ProjectImage} {
            transform: scale(1.03);
        }

        ${ProjectLink} {
            border-bottom: 2px solid black;
        }
    }

    :nth-child(1) {
        margin-right: 0;

        @media (min-width: ${breakpoints.mobileMax}) {
            margin-right: 10%;
        }
    }

    @media (min-width: ${breakpoints.mobileMax}) {
        width: 45%;
        margin-bottom: 0px;
    }

    :nth-child(1) {
        ${ProjectImage} {
            background-image: url(${shopping});
            background-size: cover;
            background-position-x: center;
            background-position-y: center;
        }
    }

    :nth-child(2) {
        ${ProjectImage} {
            background-image: url(${GradesThumb});
            background-size: cover;
            background-position-x: center;
            background-position-y: center;
        }
    }
`;

const SubHeading = styled(Heading)`
    font-size: 30px;
    margin-bottom: 0;
    margin-top: 30px;
`;

const ProjectParagraph = styled(Paragraph)`
    margin-top: 10px;
    max-width: unset;
    margin-bottom: 20px;

    @media (min-width: ${breakpoints.mobileMax}) {
        max-width: 70%;
    }
`;

function ProjectRow() {
    return (
        <ProjectContainer>
            <Project>
                <Link title='ShoppingList' to='/ShoppingList'>
                    <ProjectImage />
                </Link>
                <Link title='ShoppingList' to='/ShoppingList'>
                    <SubHeading>Shopping List</SubHeading>
                </Link>
                <ProjectParagraph>
                    A simple app to help users speed shopping in their local supermarket.
                </ProjectParagraph>
                <Link title='ShoppingList' to='/ShoppingList'>
                    <ProjectLink>
                        View Project <span>&#8250;</span>
                    </ProjectLink>
                </Link>
            </Project>
            <Project>
                <Link title='Grades Project' to='/Grades'>
                    <ProjectImage />
                </Link>
                <Link title='Grades Project' to='/Grades'>
                    <SubHeading>Grades for Analysis</SubHeading>
                </Link>
                <ProjectParagraph>
                    A fullstack web application built with MERN Stack to analyze student's grades.
                </ProjectParagraph>

                <Link title='Grades Project' to='/Grades'>
                    <ProjectLink>
                        View Project <span>&#8250;</span>
                    </ProjectLink>
                </Link>
            </Project>
        </ProjectContainer>
    );
}

export default ProjectRow;
