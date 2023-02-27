import ListItem from "../listItem/listItem";
// import { nanoid } from "nanoid";
import PropTypes from 'prop-types';


export default function ContactList({ items, onDeleteClick }) {
    // const id = nanoid();

   
        return (
            <ul>
                {items.map(item =>
                (
                    <ListItem key={item.name}
                        name={item.name} number={item.number} deleteClick = {onDeleteClick} ></ListItem>
                )
                    )}
            </ul>
        )
    }


ListItem.prototype = {
    item: PropTypes.objectOf(PropTypes.string),
    onDeleteClick: PropTypes.func
} 