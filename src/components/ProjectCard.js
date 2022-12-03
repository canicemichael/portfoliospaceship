import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, url, git }) => {
  return (
    <Col sm={6} md={4}>
      <div className="proj-cont">
        <div className="proj-imgbx" href="">
          <img src={imgUrl} alt="" />
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
          </div>
        </div>
        <a href={url} target="_blank" rel="noopener noreferrer">
          <button className="proj-link">Visit Site</button>
        </a>
        <a href={git} target="_blank" rel="noopener noreferrer">
          <button className="proj-link">GitHub</button>
        </a>
      </div>
    </Col>
  );
};
