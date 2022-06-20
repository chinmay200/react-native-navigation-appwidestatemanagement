import { FlatList, Text } from "react-native";
import MealItem from "../components/MealItem";
import { useContext } from "react";
import { MEALS } from "../data/dummy-data";
import { FavoriteContext } from "../store/context/favoritesContext";
import { useNavigation } from "@react-navigation/native";

function FavoritesScreen({onPressHandler}) {
  const favoritesMealsContext = useContext(FavoriteContext);

  const favoriteMeals = MEALS.filter((meal) =>
    favoritesMealsContext.ids.includes(meal.id)
  );

  const navigation = useNavigation()

  function onPressHandler(mealId) {
    navigation.navigate("Meal Details", { mealId: mealId });
  }

  const meals = favoriteMeals.length;

  // console.log(favoriteMeals[0].title);
  return (
    <FlatList
      data={favoriteMeals}
      renderItem={(itemData) => 
        <MealItem
        title={itemData.item.title}
        imageUrl={itemData.item.imageUrl}
        complexity={itemData.item.complexity}
        duration={itemData.item.duration}
        affordability={itemData.item.affordability}
        onPress={onPressHandler}
        mealId={itemData.item.id}
      />
      }
      keyExtractor={(item) => item.id}
    />
  );
}

export default FavoritesScreen;
