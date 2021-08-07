import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
    cursor: pointer;
    width: 245px;
    height: 64px;
`

const Button = ({ title }) => {
    return (
        <StyledButton>{title}</StyledButton>
    )
}
export default Button;