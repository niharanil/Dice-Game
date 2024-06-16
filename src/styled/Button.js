
import styled from "styled-components"

const Button = styled.button`
color: white;
padding: 10px 18px;
min-width: 220px;
border-radius: 5px;
background: #000;
border: none;
cursor: pointer;
font-size: 16px;
border: 1px solid transparent;

&:hover{
    background-color: white;
    border: 1px solid black;
    color: black;
    transition: 0.3s background ease-in;

}


`
export default Button;