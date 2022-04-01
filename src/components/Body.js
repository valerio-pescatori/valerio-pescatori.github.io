import styled from 'styled-components'
import { FlexContainer } from './styled/FlexContainer.styled';
const Picture = styled.img`
    width:150px;
    background: #8F91A2;
    border: solid 3px #94B0DA;
    border-radius: 50%;
    margin-top: 50px;
`;

const Body = () => {
  return (
    <FlexContainer margin_top="50px">
        <Picture src="imgs/user.png"/>
    </FlexContainer>
  )
}

export default Body