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
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import * as eva from "@eva-design/eva";
import { Clubs, ClubDetail, AddClubForm } from "./src/components";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { EvaIconsPack } from "@ui-kitten/eva-icons";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva.light}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              options={{ headerShown: false }}
              name="Home"
              component={Clubs}
            />
            <Stack.Screen name="CLUB DETAILS" component={ClubDetail} />
            <Stack.Screen name="ADD NEW CLUB" component={AddClubForm} />
          </Stack.Navigator>
        </NavigationContainer>
      </ApplicationProvider>
    </Provider>
  );
};

export default App;
