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
        <div
          className="proj-modal-content"
          style={{
            position: "fixed",        // stays on top
            top: "50%",               // center vertically
            left: "50%",              // center horizontally
            transform: "translate(-50%, -50%)",
            backgroundColor: "#fff",
            borderRadius: "20px",
            width: "80%",
            maxWidth: "600px",
            padding: "30px",
            zIndex: 9999,             // ensures it overlays the cards
            boxShadow: "0 4px 20px rgba(0,0,0,0.3)", // optional for depth
          }}
        >
          {/* Close the popup */}
          <h2>{title}</h2>
          <p>{details}</p>
          <button onClick={toggleExpand}> Close</button>
        </div>
      )}
    </>
  );
};