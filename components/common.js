import styled from 'styled-components/native';
import * as theme from '../constants/theme';

export const Text = styled.Text`
  font-size: 14;
  font-family: cerebri-medium;
`;

export const Bold = styled.Text`
  font-family: cerebri-extra-bold;
`;

export const Row = styled.View`
  flex-direction: row;
`;

export const Heading = styled(Bold)`
  font-size: 36;
`;

export const Container = styled.View`
  padding-top: 16;
  padding-bottom: 16;
  padding-left: 16;
  padding-right: 16;
`;

export const Flex = styled.View`
  flex: 1;
`;