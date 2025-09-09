import { Col } from "react-bootstrap";
import { useState } from "react";

export const Card = ({ title, description, imgUrl, details }) => {
  const [expanded, setExpanded] = useState(false);
  const toggleExpand = () => setExpanded(!expanded);

  return (
    <>
      <Col size={12} sm={6} md={4}>
        <div
          className="proj-imgbx"
          onClick={toggleExpand}
          style={{ cursor: "pointer" }}
        >
          <img src={imgUrl} alt={title} />
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
          </div>
        </div>
      </Col>

      {/* Floating Modal Content*/}
      {expanded && (
        <div className="proj-modal-content">
          {/* Close the popup */}
          <h2>{title}</h2>
          <p>{details}</p>
          <button onClick={toggleExpand}> Close</button>
        </div>
      )}
    </>
  );
};