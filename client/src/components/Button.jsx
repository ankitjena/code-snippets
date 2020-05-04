import styled from 'styled-components';

export default styled.button`
  background: ${(props) => (props.primary ? '#2980b9' : '#ffffff')};
  color: ${(props) => (props.primary ? '#ffffff' : '#2980b9')};
  font-size: 1.2em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #2980b9;
  border-radius: 5px;
  width: 100px;
`;
