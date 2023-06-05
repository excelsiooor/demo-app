import React from "react";
import { Text, Platform, Linking } from "react-native";
import { NavigationProp } from "@react-navigation/native";
import { Routs } from "@global/lib/types";
import { pagesActions } from "@global/lib/store";
import { useAppDispatch } from "@global/lib/hooks";

import * as Styled from './about.styled';

interface IComponentsProps {
  navigation: NavigationProp<any>;
}

export const AboutComponent: React.FC<IComponentsProps> = ({ navigation }) => {
  const { switchContent } = pagesActions
  const dispatch = useAppDispatch()

  const handleEmailButtonPress = () => {
    Linking.openURL('mailto:example@example.com');
  };

  const handleSettingsButtonPress = () => {
    Linking.openSettings();
  };

  const handleSwitchContent = () => {
    navigation.navigate(Routs.SPLIT_SCREEN)
    dispatch(switchContent())
  }

  return (
    <Styled.Container>
      <Text>Operation system: {Platform.OS}</Text>
      <Styled.Propertie>
        <Styled.StyledButton onPress={handleEmailButtonPress}>
          <Styled.StyledText>open the email application</Styled.StyledText>
        </Styled.StyledButton>
      </Styled.Propertie>
      <Styled.Propertie>
        <Styled.StyledButton onPress={handleSettingsButtonPress}>
        <Styled.StyledText>open the application settings</Styled.StyledText>
        </Styled.StyledButton>
      </Styled.Propertie>
      <Styled.Propertie>
        <Styled.StyledButton onPress={handleSwitchContent}>
        <Styled.StyledText>swich content</Styled.StyledText>
        </Styled.StyledButton>
      </Styled.Propertie>
    </Styled.Container>
  )
}
