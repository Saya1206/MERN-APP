import axios from "axios";
import { GET_ITEMS, ADD_ITEMS, DELETE_ITEMS, ITEMS_LOADING } from "./types";

// GET ITEMS
export const getItems = () => async (dispatch) => {
  try {
    dispatch(setItemsLoading());
    const res = await axios.get("/api/items");
    dispatch({
      type: GET_ITEMS,
      payload: res.data,
    });
  } catch (error) {
    console.error("Error fetching items:", error);
  }
};

// ADD ITEM
export const addItem = (item) => async (dispatch) => {
  try {
    const res = await axios.post("/api/items", item);
    dispatch({
      type: ADD_ITEMS,
      payload: res.data,
    });
  } catch (error) {
    console.error("Error adding item:", error);
  }
};

// DELETE ITEM
export const deleteItem = (id) => async (dispatch) => {
  try {
    await axios.delete(`/api/items/${id}`);
    dispatch({
      type: DELETE_ITEMS,
      payload: id,
    });
  } catch (error) {
    console.error("Error deleting item:", error);
  }
};

// SET LOADING
export const setItemsLoading = () => ({
  type: ITEMS_LOADING,
});
