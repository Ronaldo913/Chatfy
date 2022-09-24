import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Welcome from "../pages/Welcome/index";
import SignIn from "../pages/SignIn/index";
import HomePage from "../pages/HomePage/index";
import Registration from "../pages/Registration/index";
import DrawerRoute from "./drawer";

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="DrawerRoute"
        component={DrawerRoute}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Registration"
        component={Registration}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
