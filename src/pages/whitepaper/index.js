import React from "react";
import styled from 'styled-components'
import { Box} from '@material-ui/core'

import back_img1 from "../../assets/right_panel_reserve2.png";


export default function Whitepaper() {


	return (
		<Reservebody >

		</Reservebody >
	);
}

const Reservebody = styled(Box)`
	width: 100%;
	height: 100vh;
	background-color: black;
	background-image: url(${back_img1});
	background-repeat: repeat-y;
	background-size: cover;
	display: flex;
	flex-direction: column;
	align-items: center;
`
