import React, { useEffect, useState } from "react";
import { Container, ListGroup, ListGroupItem, Button } from "reactstrap";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { getItems, deleteItem, addItem } from "../actions/itemActions";

const ShoppingList = ({ getItems, item, deleteItem, addItem }) => {
  useEffect(() => {
    getItems(); // dispatch Redux action when component mounts
  }, [getItems]);

  const { items } = item; // get items from Redux store

  return (
    <Container>
      <ListGroup>
        {items.map(({ _id, name }) => (
          <ListGroupItem key={_id}>
            <Button
              color="danger"
              className="remove-btn"
              size="sm"
              onClick={() => deleteItem(_id)}
            >
              &times;
            </Button>
            {name}
          </ListGroupItem>
        ))}
      </ListGroup>
    </Container>
  );
};

ShoppingList.propTypes = {
  getItems: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  item: state.item,
});

export default connect(mapStateToProps, { getItems, deleteItem, addItem })(
  ShoppingList
);
