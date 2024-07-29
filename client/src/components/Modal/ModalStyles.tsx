import styled from "styled-components";

export const ModalBackdrop = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: rgba(0, 0, 0, 0.5);
	z-index: 50;
`;

export const ModalContent = styled.div`
	background-color: white;
	padding: 16px;
	border-radius: 20px;
	box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
	max-width: 800px;
	width: 100%;
`;

export const ModalHeader = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding-bottom: 8px;
	padding-left: 15px;
	padding-top: 15px;
	position: relative;
`;

export const ModalTitle = styled.h2`
	font-size: 1.5rem;
`;

export const CloseButton = styled.button`
	font-size: 1.5rem;
	background: none;
	border: none;
	cursor: pointer;
	position: absolute;
	top: 0;
	right: 0;
`;

export const ModalBody = styled.div`
	display: flex;
	flex-direction: column;
	gap: 16px;
	padding: 8px;
`;

export const InfoText = styled.p`
	font-size: 1rem;
	font-weight: 600;
	color: #4b5563;
	border-radius: 15px;
	padding: 10px;
`;

export const InfoTextSpan = styled.span`
	font-weight: 400;
	color: #6b7280;
`;

export const Opponents = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;
	width: 100%;
	position: relative;
`;

export const Opponent = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 0 30px;
`;

export const OpponentImage = styled.img`
	width: 65px;
	height: 65px;
	border-radius: 50%;
	margin-bottom: 8px;
	margin-top: 8px;
`;

export const SpeechBubble = styled.div`
	position: relative;
	border-radius: 10px;
	padding: 10px;
	width: 150px;
	margin-bottom: 8px;
	color: #ffffff;

	&:after {
		content: "";
		position: absolute;
		top: 100%;
		left: 50%;
		border: solid transparent;
		height: 0;
		width: 0;
		pointer-events: none;
		border-color: rgba(255, 255, 255, 0);
		border-top-color: inherit;
		border-width: 10px;
		margin-left: -10px;
	}
`;

export const VS = styled.div`
	font-size: 2rem;
	font-weight: bold;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
`;
