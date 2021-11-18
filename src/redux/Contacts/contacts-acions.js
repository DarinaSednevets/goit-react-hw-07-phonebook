import { createAction } from "@reduxjs/toolkit";
import shortId from "shortid";

export const addContact = createAction('contacts//addContact', ({ name, number }) => ({
    payload: {
        id: shortId.generate(),
        name,
        number,
    },
}));
export const deleteContact = createAction('contacts//deleteContact');
export const filterContacts = createAction('contacts/filterContacts');