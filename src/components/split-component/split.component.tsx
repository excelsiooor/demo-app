import React from "react";
import { Button } from "react-native";
import { NavigationContainer, NavigationProp } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { useAppSelector } from "@global/lib/hooks";
import { SplitRoutes } from "@global/lib/types";

import * as Styled from "./split.styled";

const firstContent = require("../../../assets/first_content.jpg");
const secondContent = require("../../../assets/second_content.jpg");

const { Navigator: StackNav, Screen: StackScreen } = createStackNavigator();
const { Navigator: TopTabNav, Screen: TopTabScreen } = createMaterialTopTabNavigator();

interface IProps {
  navigation: NavigationProp<any>;
}

const LeftPart = () => (
  <Styled.HalfBox withBorder>
    <NavigationContainer independent>
      <StackNav screenOptions={{headerShown: false}}>
        <StackScreen name={SplitRoutes.Left_Part_One}>
          {(props: IProps) => (
              <Styled.Wrapper>
                <Styled.StyledImage source={firstContent} />
                <Styled.ButtonWrapper>
                  <Button
                    onPress={() => {
                      props.navigation.navigate(SplitRoutes.Left_Part_Two);
                    }}
                    title="Next page"
                  />
                </Styled.ButtonWrapper>
              </Styled.Wrapper>
            )}
        </StackScreen>
        <StackScreen name={SplitRoutes.Left_Part_Two}>
          {(props: IProps) => (
              <Styled.Wrapper>
                <Styled.StyledImage source={secondContent} />
                <Styled.ButtonWrapper>
                  <Button
                    onPress={() => {
                      props.navigation.navigate(SplitRoutes.Left_Part_One);
                    }}
                    title="Previous page"
                  />
                </Styled.ButtonWrapper>
              </Styled.Wrapper>
            )}
        </StackScreen>
      </StackNav>
    </NavigationContainer>
  </Styled.HalfBox>
);

const RightPart = () => (
  <Styled.HalfBox>
    <NavigationContainer independent>
      <TopTabNav
        screenOptions={{
          tabBarItemStyle: { display: "none" },
        }}
      >
        <TopTabScreen name={SplitRoutes.Right_Part_One}>
          {() =>  (
            <Styled.Wrapper>
              <Styled.StyledImage source={firstContent} />
            </Styled.Wrapper>
          )}
        </TopTabScreen>
        <TopTabScreen name={SplitRoutes.Right_Part_Two}>
            {() => (
            <Styled.Wrapper>
              <Styled.StyledImage source={secondContent} />
            </Styled.Wrapper>
          )}
        </TopTabScreen>
      </TopTabNav>
    </NavigationContainer>
  </Styled.HalfBox>
);

export const SplitComponent: React.FC = () => {
  const { secondScreen } = useAppSelector(
    (state) => state.pagesReducer
  );

  const screens =
    secondScreen === 1
      ? [
        {key: 1, component: (k: number) => <LeftPart key={k} />},
        {key: 2, component: (k: number) => <RightPart key={k} />}
      ]
      : [
        {key: 3, component: (k: number) => <RightPart key={k} />},
        {key: 4, component: (k: number) => <LeftPart key={k} />}
      ];

  return (
    <Styled.Conatainer>
      {screens.map((screen) => {
        return screen.component(screen.key);
      })}
    </Styled.Conatainer>
  );
};
