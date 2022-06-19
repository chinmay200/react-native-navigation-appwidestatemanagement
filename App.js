import "react-native-gesture-handler";
import { StyleSheet, View } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import MealOverViewScreen from "./screens/MealOverViewScreen";
import MealDetailsScreen from "./screens/MealDetailsScreen";
import FavoritesScreen from './screens/FavoritesScreen'

const stack = createNativeStackNavigator();
const drawer = createDrawerNavigator();

function DrawerNavigationScreens() {
  return (
    <drawer.Navigator screenOptions={{
      headerStyle:{backgroundColor: "#2b2d42" },
      headerTintColor:"white"
    }}>
      <drawer.Screen
        name="Categories"
        component={CategoriesScreen}
      ></drawer.Screen>
      <drawer.Screen
        name="Favorites"
        component={FavoritesScreen}
      ></drawer.Screen>

    </drawer.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: "#2b2d42" },
            headerTintColor: "white",
            contentStyle: { backgroundColor: "#8d99ae" },
          }}
        >
          <stack.Screen
            name="MealCategories"
            component={DrawerNavigationScreens}
            options={{
              title: "Meals categories",
              headerStyle: { backgroundColor: "#2b2d42" },
              headerTintColor: "white",
              contentStyle: { backgroundColor: "#8d99ae" },
              headerShown:false
            }}
          />
          <stack.Screen
            name="Meal Overview Screen"
            component={MealOverViewScreen}
            // options={({ route, navigation }) => {
            //   const catId = route.params.categoryId;
            //   const catTitle = CATEGORIES.find((category) => catId === category.id);
            //   return { title: catTitle.title };
            // }}
          />
          <stack.Screen
            name="Meal Details"
            component={MealDetailsScreen}
          ></stack.Screen>
        </stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({});
