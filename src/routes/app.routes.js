import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

import { Home } from "../screens/Home";
import { Details } from "../screens/Details";
import { FavoriteMovies } from "../screens/FavoriteMovies";

export function AppRoutes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Details" component={Details} />
      <Stack.Screen name="FavoriteMovies" component={FavoriteMovies} />
    </Stack.Navigator>
  );
}
