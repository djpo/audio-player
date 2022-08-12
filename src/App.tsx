import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { appReducer } from "./redux/reducer";
import { HomeScreen } from "./HomeScreen";
import { SongScreen } from "./SongScreen";

const Stack = createNativeStackNavigator();

const App = (): JSX.Element => {
  const store = createStore(appReducer);

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ title: "Skoovin'" }}
          />
          <Stack.Screen
            name="Song"
            component={SongScreen}
            options={({ route }) => ({ title: route.params.name })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export { App };
