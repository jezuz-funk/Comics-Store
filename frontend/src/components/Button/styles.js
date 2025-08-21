import styled from 'styled-components'

export const StyledButton = styled.button`
  padding: 0.6rem 1.2rem;
  border-radius: 8px;
  border: 1px solid transparent;
  background: #1f2937;
  color: white;
  font-weight: 600;
  cursor: pointer;
  transition: border-color 0.2s ease, transform 0.05s ease-in-out;

  &:hover {
    border-color: #646cff;
  }

  &:active {
    transform: translateY(1px);
  }
`


