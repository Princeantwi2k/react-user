import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { connect } from "react-redux";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import EditUser from "./EditUser";
import { deleteUser } from "../Action/AddAction";

const User = ({ users, deleteUser, editUser }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDelete = (e) => {
    e.preventDefault();
    deleteUser(users.id);
  };
  return (
    <>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Contact</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditUser
            users={users}
            editUser={editUser}
            closeModal={handleClose}
          />
        </Modal.Body>
      </Modal>
      <Card style={{ width: "18rem" }}>
        <h2>Name : {users.fullname}</h2>
        <p>Email : {users.email}</p>
        <p>Gen : {users.gen}</p>
        <p>Contact : {users.contact}</p>
        <Button variant="outline-primary" size="sm" onClick={handleShow}>
          Eidth
        </Button>{" "}
        <Button variant="outline-dark" size="sm" onClick={handleDelete}>
          Delete
        </Button>
      </Card>
    </>
  );
};
const mapDispatchToProps = {
  deleteUser: deleteUser,
};

export default connect(null, mapDispatchToProps)(User);
