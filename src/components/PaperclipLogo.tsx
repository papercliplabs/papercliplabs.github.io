import React from "react";
import styled from "styled-components";

const Background = styled.div`
	display: flex;
	justify-content: center;
	z-index: 999;
	position: absolute;
`;

export default function PaperclipLogo() {
	return (
		<Background>
			<canvas id="canvas3d" />
		</Background>
	);
}