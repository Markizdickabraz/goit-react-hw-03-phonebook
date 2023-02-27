import styled from "styled-components";

export const FormStyled= styled.form`
display:flex;
flex-direction:column;
gap:10px;
padding:15px;
border: 1px solid black;
width: 450px;
`

export const FormBtn = styled.button`
width:130px;
padding: 10px 15px 10px 15px;
border-radius:6px;
transition: all .2s ease-in-out;
background-color: white;
cursor: pointer;

&:hover,
&:focus{
    background-color: lightblue;
    transform: scale(1.02);
}
`
export const LabelStyled = styled.label`
display:flex;
gap: 5px;
flex-direction:column;
`
export const InputStyled = styled.input`
padding-left:10px;
height:40px;
border-radius:6px;
max-width:420px; 
transition: all .2s ease-in-out;

&:focus{
    transform: scale(1.02);
    box-shadow: 5px 5px 5px grey;
}
`
