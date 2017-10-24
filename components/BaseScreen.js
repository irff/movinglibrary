import React from 'react';
import { KeyboardAvoidingView } from 'react-native';
import styled from 'styled-components/native';
import { Constants } from 'expo';

const StatusBarView = styled.View`
  padding-top: ${Constants.statusBarHeight};
  background-color: #000;
`;

const Screen = styled.View`
  flex: 1;
`;


export default (props) => (
  <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
    <StatusBarView />
    <Screen>
      {props.children}
    </Screen>
  </KeyboardAvoidingView>
);
