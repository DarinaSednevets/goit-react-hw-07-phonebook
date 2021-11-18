import { useDispatch, useSelector } from "react-redux";
import { deleteContact } from '../../redux/Contacts/contacts-acions'
import { getFilteredContacts } from '../../redux/Contacts/contacts-selectors'

function ContactList() {
    const filteredContacts = useSelector(getFilteredContacts);
    const dispatch = useDispatch();
    return (
        <ul>
            {filteredContacts.map(({ id, name, number }) =>
            (<li key={id} id={id}>
                {name}:{number}
                <button type="button"
                    onClick={() => dispatch(deleteContact(id))}
                >Delete
                </button>
            </li>))
            }
        </ul>
    )
}


export default ContactList;

