import PropTypes from 'prop-types';
import { ListItemStyled } from './listItemStyled';


export default function ListItem({ name, number, deleteClick }) { 

    return (
        <ListItemStyled key={name}> <span> {name} : {number}</span> <button type="button" onClick = {()=>{deleteClick(name)}}>Delete</button></ListItemStyled>
    )
}
ListItem.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    deleteClick: PropTypes.func
    }