import styled from 'styled-components';

const Title = styled.div`
  ${props => props.underline ? 'border-bottom: 2px solid black' : '' };
  font-size: 50px;
  margin: 10px 0 25px 0
`;

export default Title;