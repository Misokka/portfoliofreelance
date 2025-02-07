import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import sr from '@utils/sr';
import { srConfig, github } from '@config';
import styled from 'styled-components';
import { theme, mixins, media, Section, Heading } from '@styles';
import IconCloudSection from '@components/IconCloudSection';

const { colors, fontSizes, fonts } = theme;

const StyledContainer = styled(Section)`
  position: relative;
`;

const StyledFlexContainer = styled.div`
  ${mixins.flexBetween};
  align-items: flex-start;
  ${media.tablet`display: block;`};
`;

const StyledContent = styled.div`
  width: 60%;
  max-width: 480px;
  ${media.tablet`width: 100%;`};
  a {
    ${mixins.inlineLink};
  }
`;

const StyledSkillsWrapper = styled.div`
  margin-top: 100px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledSkillsHeading = styled.h3`
  font-size: ${fontSizes.xxl};
  margin-bottom: 80px; /* Ajoute de l'espace sous le titre */
  color: ${colors.lightestSlate};
`;

const StyledIconsWrapper = styled.div`
  margin-bottom: 150px;
`;

const SkillsContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
  max-width: 900px;
  list-style: none;
  padding: 0;
  text-align: center;

  ${media.tablet`
    grid-template-columns: repeat(3, 1fr);
  `};

  ${media.phablet`
    grid-template-columns: repeat(2, 1fr);
  `};
`;

const Skill = styled.li`
  position: relative;
  font-family: ${fonts.SFMono};
  font-size: ${fontSizes.md};
  color: ${colors.green};
  padding: 10px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  transition: all 0.3s ease-in-out;

  &:hover {
    background: ${colors.green};
    color: ${colors.navy};
    transform: scale(1.05);
  }
`;

const StyledPic = styled.div`
  position: relative;
  width: 40%;
  max-width: 300px;
  margin-left: 60px;
  ${media.tablet`margin: 60px auto 0;`};
  ${media.phablet`width: 70%;`};
`;

const StyledAvatar = styled(Img)`
  position: relative;
  mix-blend-mode: multiply;
  filter: grayscale(100%) contrast(1);
  border-radius: ${theme.borderRadius};
  transition: ${theme.transition};
`;

const StyledAvatarLink = styled.a`
  ${mixins.boxShadow};
  width: 100%;
  position: relative;
  border-radius: ${theme.borderRadius};
  background-color: ${colors.lightestSlate};
  margin-left: -20px;
  &:hover,
  &:focus {
    background: transparent;
    &:after {
      top: 15px;
      left: 15px;
    }
    ${StyledAvatar} {
      filter: none;
      mix-blend-mode: normal;
    }
  }
  &:before,
  &:after {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: ${theme.borderRadius};
    transition: ${theme.transition};
  }
  &:before {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${colors.navy};
    mix-blend-mode: screen;
  }
  &:after {
    border: 2px solid ${colors.green};
    top: 10px;
    left: 10px;
    z-index: -1;
  }
`;

const About = ({ data }) => {
  const { frontmatter, html } = data[0].node;
  const { title, skills, avatar } = frontmatter;
  const revealContainer = useRef(null);
  useEffect(() => sr.reveal(revealContainer.current, srConfig()), []);

  return (
    <StyledContainer id="about" ref={revealContainer}>
      <Heading>{title}</Heading>
      <StyledFlexContainer>
        <StyledContent>
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </StyledContent>
        <StyledPic>
          <StyledAvatarLink href={github}>
            <StyledAvatar fluid={avatar.childImageSharp.fluid} alt="Avatar" />
          </StyledAvatarLink>
        </StyledPic>
      </StyledFlexContainer>

      <StyledSkillsWrapper>
        <StyledSkillsHeading>Mes compétences</StyledSkillsHeading>
        <StyledIconsWrapper>
          <IconCloudSection />
        </StyledIconsWrapper>
        <SkillsContainer>
          {skills && skills.map((skill, i) => <Skill key={i}>{skill}</Skill>)}
        </SkillsContainer>
      </StyledSkillsWrapper>
    </StyledContainer>
  );
};

About.propTypes = {
  data: PropTypes.array.isRequired,
};

export default About;
