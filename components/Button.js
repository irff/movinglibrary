import React from 'react';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import * as theme from '../constants/theme';
import { Text, Bold } from './common';

const PrimaryButton = (props) => (
	<TouchableOpacity activeOpacity={0.7} {...props}>
		<Button>
			<ButtonText>{props.title}</ButtonText>
		</Button>
	</TouchableOpacity>
);

export const SecondaryButton = (props) => (
	<TouchableOpacity activeOpacity={0.7} {...props}>
		<Button secondary>
			<SecondaryButtonText>{props.title}</SecondaryButtonText>
		</Button>
	</TouchableOpacity>
);

const Button = styled.View`
	background-color: ${props => props.secondary ? 'transparent' : theme.teal};
	${props => props.secondary && `
		border-width: 1;
		border-color: ${theme.teal};
	`};
	border-radius: 4;
	align-items: center;
	padding-top: 6;
	padding-bottom: 6;
`;

const ButtonText = styled(Bold)`font-size: 16; color: ${theme.white}`;
const SecondaryButtonText = styled(Text)`font-size: 16; color: ${theme.teal}`;

export default PrimaryButton;