import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import order from "../../Assets/Projects/order-system.png";
import blog from "../../Assets/Projects/blog-1.png";
import shortify from "../../Assets/Projects/shortify.png";
import reservation from "../../Assets/Projects/reservation.png";
import library from "../../Assets/Projects/library.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blog}
              isBlog={false}
              title="Blog"
              description="Personal Blog build with Laravel, Blade, Bootstrap and MySQL. Have features which allows users authentication, comments system and uploads blog"
              ghLink="https://github.com/Thuraitun/blog-laravel"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={order}
              isBlog={false}
              title="Order System"
              description="Order System build with Laravel, Blade, MySQL and Bootstrap."
              ghLink="https://github.com/Thuraitun/food-order-system"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={shortify}
              isBlog={false}
              title="URL Shortify"
              description="URL Shortify build with Laravel, Nuxt, MySQL and TailwindCSS. This project features - create url to covert shortify url, user authentication and pingination"
              ghLink="https://github.com/Thuraitun/nuxt-laravel"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={reservation}
              isBlog={false}
              title="Reservation"
              description="Reservation build with Laravel, Blade, MySQL and TailwindCSS."
              ghLink="https://github.com/Thuraitun/reservation-website"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={library}
              isBlog={false}
              title="Book Library"
              description="Book Library build with React, Tailwind, Firbase Realtime and Auth."
              ghLink="https://github.com/Thuraitun/book-library"
              
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
