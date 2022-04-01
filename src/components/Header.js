import { useState } from 'react'
import { act } from 'react-dom/test-utils'
import styled from 'styled-components'
import { FlexContainer } from './styled/FlexContainer.styled'


const HeaderElement = styled.h4`
	font-family: 'Roboto', sans-serif;
	font-weight: 300;
	transition: all .5s ease-in-out;
	padding: 20px 50px;
	background-color: ${(props) => props.active ? "#E8E8E8" : "#454545" };
	color: ${ (props) => props.active ? "#000" : "#FFF"};
	&:hover{
		text-shadow: 1px 1px 8px #94B0DA;
	}
	`
const DiagonalBlock = styled.div`
		display: inline;
		position: absolute;
		margin-left: -80px;
		height: 90px;
		width: 30px;
		transform: rotate(20deg);
		background-color: #454545;
`

const Header = () => {

	const [active, setActive] = useState(0);

	return (
			<FlexContainer>
				<HeaderElement onClick={() => setActive(0)} active={!active} >Me</HeaderElement>
				<DiagonalBlock />
				<HeaderElement onClick={() => setActive(1)} active={active}>Things I've done</HeaderElement>
			</FlexContainer> 
)

}

export default Header