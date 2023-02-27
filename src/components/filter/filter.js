
import React from "react"
import PropTypes from 'prop-types';
import { InputStyled, LabelStyled } from '../form/FormStyled'


const Filter = ({ value, onChange }) => (

                <LabelStyled>
          Find contacts by name
    <InputStyled
            type='text'
            value={value}
            onChange = {onChange}
          />
        </LabelStyled>    
)

export default Filter;

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func

}
