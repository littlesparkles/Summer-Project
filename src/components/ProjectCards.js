import React from "react";
import { Col } from "react-bootstrap";

export const ProjectCards = ({ title, description, imgUrl, websiteUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <a href={websiteUrl} target="_blank" rel="nnoopener noreferrer">
        <div className="proj-imgbx">
          <img src={imgUrl} alt="" />
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
          </div>
        </div>
      </a>
    </Col>
  );
};
