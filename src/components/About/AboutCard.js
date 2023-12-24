import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Thurai Tun </span>
            from <span className="purple"> Munaung, Rakhine State.</span>
            <br />
            I am currently searching web developer position.
            <br />
            I have completed BA.Myanmar and Professional Web Developer Certificate at Fairway Technology.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
