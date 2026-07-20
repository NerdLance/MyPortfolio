import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import PageMetadata from "../components/PageMetadata";
import AboutMe from "../components/home/AboutMe";
import Experience from "../components/home/Experience";
import GetInTouch from "../components/home/GetInTouch";
import Leadership from "../components/home/Leadership";
import LiveProjects from "../components/home/LiveProjects";
import MainBody from "../components/home/MainBody";
import Project from "../components/home/Project";
import Skills from "../components/home/Skills";
import UnpublishedProjects from "../components/home/UnpublishedProjects";
import {
  navBar,
  mainBody,
  about,
  repos,
  liveProjects,
  unpublishedProjects,
  leadership,
  skills,
  getInTouch,
  experiences,
} from "../editable-stuff/config";

const description =
  "My name is Lance Madden. I'm a passionate web developer with a game development hobby. I've been programming since I was in 5th grade, and it's one of the only things I can imagine loving to do every day. When I'm not programming, I'm spending time with family, or driving something German with a manual transmission.";

const HomePage = () => {
  const titleRef = React.useRef();

  return (
    <>
      <PageMetadata title="Lance Madden" description={description} />
      {navBar.show && <Navbar ref={titleRef} />}
      <MainBody
        gradient={mainBody.gradientColors}
        title={`${mainBody.firstName} ${mainBody.middleName} ${mainBody.lastName}`}
        message={mainBody.message}
        icons={mainBody.icons}
        ref={titleRef}
      />
      {about.show && (
        <AboutMe
          heading={about.heading}
          message={about.message}
          link={about.imageLink}
          imgSize={about.imageSize}
          resume={about.resume}
        />
      )}
      {experiences.show && <Experience experiences={experiences} />}
      {liveProjects.show && (
        <LiveProjects
          liveProjects={liveProjects.liveProjects}
          heading={liveProjects.heading}
        />
      )}
      {unpublishedProjects.show && (
        <UnpublishedProjects
          unpublishedProjects={unpublishedProjects.unpublishedProjects}
          heading={unpublishedProjects.heading}
          subheading={unpublishedProjects.subheading}
        />
      )}
      {leadership.show && (
        <Leadership
          heading={leadership.heading}
          message={leadership.message}
          img={leadership.images}
          imageSize={leadership.imageSize}
        />
      )}
      {skills.show && (
        <Skills
          heading={skills.heading}
          hardSkills={skills.hardSkills}
          softSkills={skills.softSkills}
        />
      )}
      {repos.show && (
        <Project
          heading={repos.heading}
          username={repos.gitHubUsername}
          length={repos.reposLength}
          specfic={repos.specificRepos}
        />
      )}
      <Footer>
        {getInTouch.show && (
          <GetInTouch
            heading={getInTouch.heading}
            message={getInTouch.message}
            email={getInTouch.email}
          />
        )}
      </Footer>
    </>
  );
};

export default HomePage;
