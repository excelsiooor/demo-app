import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AboutIcon, SplitIcon } from '@global/icons'
import { COLORS } from '@global/theme';
import { AboutComponent, SplitComponent } from '@global/components';
import { Routs } from '@global/lib/types';

const { Navigator, Screen } = createBottomTabNavigator();

export const NavRouter = () => {

  return (
    <NavigationContainer>
      <Navigator>
        <Screen
          name={Routs.ABOUT_SCREEN}
          component={AboutComponent}
          options={{
            tabBarIcon: ({ focused }) => (
              <AboutIcon fill={focused ? COLORS.iconBlue : COLORS.iconGray} />
            ),
          }}
        />
        <Screen
          name={Routs.SPLIT_SCREEN}
          component={SplitComponent}
          options={{
            tabBarIcon: ({ focused }) => (
              <SplitIcon pathFill={focused ? COLORS.iconBlue : COLORS.iconGray} />
            ),
          }}
        />
      </Navigator>
    </NavigationContainer>
  )
}
