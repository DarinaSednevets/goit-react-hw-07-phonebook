import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { addContact, deleteContact, filterContacts } from "./contacts-acions";
import contactsList from '../../components/initialContacts.json'

const initialContacts = [...contactsList];
const initialFilter = "";

const contactsReducer = createReducer(initialContacts, {
    [addContact]: (state, { payload }) => [...state, payload],
    [deleteContact]: (state, { payload }) => state.filter(({ id }) => id !== payload),
})

const filterReducer = createReducer(initialFilter, {
    [filterContacts]: (_, { payload }) => payload,
});

export default combineReducers({
    items: contactsReducer,
    filter: filterReducer,
})
