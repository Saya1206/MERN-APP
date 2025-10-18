import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalBody,
  ModalHeader,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";

import { connect } from "react-redux";
import { addItem } from "../actions/itemActions";

const ItemModal = ({ addItem }) => {
  const [modal, setModal] = useState(false); // toggle modal
  const [name, setName] = useState(""); // input value

  const toggle = () => {
    setModal(!modal);
  };

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newItem = { name }; // create new item object
    addItem(newItem); // dispatch Redux action
    toggle(); // close modal
    setName(" ");
  };

  return (
    <div>
      <Button color="dark" style={{ marginBottom: "2rem" }} onClick={toggle}>
        Add Item
      </Button>

      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Add To Shopping List</ModalHeader>
        <ModalBody>
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label for="item">Item</Label>
              <br />
              <input
                type="text"
                id="item"
                value={name}
                onChange={handleChange}
                placeholder="Add shopping item"
              />
              <Button color="dark" style={{ marginTop: "2rem" }} block>
                Add Item
              </Button>
            </FormGroup>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default connect(null, { addItem })(ItemModal);
