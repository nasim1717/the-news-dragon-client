import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import { FaGoogle, FaGithub } from "react-icons/fa";
import Qzone from "../QZone/Qzone";
import bg from "../../assets/bg.png";

const RightNav = () => {
  return (
    <div>
      <h4 className="mt-4">Login With</h4>
      <Button variant="outline-primary mb-2">
        {" "}
        <FaGoogle />
        Login with Google
      </Button>{" "}
      <Button variant="outline-secondary">
        {" "}
        <FaGithub />
        Login with Github
      </Button>{" "}
      <div>
        <h4 className="mt-4"> Find Us on</h4>
        <ListGroup>
          <ListGroup.Item>Cras justo odio</ListGroup.Item>
          <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
          <ListGroup.Item>Morbi leo risus</ListGroup.Item>
          <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
          <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
        </ListGroup>
      </div>
      <Qzone></Qzone>
      <div>
        <img src={bg} alt="" />
      </div>
    </div>
  );
};

export default RightNav;
