/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from "react";
import { Provider } from "react-redux";
import { store } from "./src/store";
import { ApplicationProvider, Icon, IconRegistry } from "@ui-kitten/components";
import * as eva from "@eva-design/eva";
import {
  Clubs,
  ClubDetail,
  AddClubForm,
  Players,
  PlayerStats,
  PlayerClubHistory,
} from "./src/components";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const ClubsStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name="Clubs"
        component={Clubs}
      />
      <Stack.Screen name="CLUB DETAILS" component={ClubDetail} />
      <Stack.Screen name="ADD NEW CLUB" component={AddClubForm} />
    </Stack.Navigator>
  );
};

const PlayersStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name="players"
        component={Players}
      />
      <Stack.Screen name="PLAYER STATS" component={PlayerStats} />
      <Stack.Screen name="PLAYER HISTORY" component={PlayerClubHistory} />
    </Stack.Navigator>
  );
};
const App = () => {
  return (
    <Provider store={store}>
      <IconRegistry icons={EvaIconsPack} />

      <ApplicationProvider {...eva} theme={eva.light}>
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen
              options={{
                tabBarIcon: ({ color, size }) => <Icon name="flag-outline" />,
                tabBarLabel: "CLUBS",
              }}
              name="CLUBS"
              component={ClubsStack}
            />
            <Tab.Screen
              options={{
                tabBarIcon: ({ color, size }) => <Icon name="flag-outline" />,
                tabBarLabel: "PLAYERS",
              }}
              name="PLAYERS"
              component={PlayersStack}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </ApplicationProvider>
    </Provider>
  );
};

export default App;
