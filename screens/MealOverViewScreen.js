import { useLayoutEffect } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import MealItem from "../components/MealItem";
import { MEALS, CATEGORIES } from "../data/dummy-data";

function MealOverViewScreen({ route, navigation }) {
  const catId = route.params.categoryId;

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  useLayoutEffect(() => {
    const catTitle = CATEGORIES.find((category) => catId === category.id);

    navigation.setOptions({
      title: catTitle.title,
    });
  }, [catId, navigation]);

  function onPressHandler(mealId) {
    navigation.navigate("Meal Details", { mealId: mealId });
  }

  function renderMeal(itemData) {
    return (
      <MealItem
        title={itemData.item.title}
        imageUrl={itemData.item.imageUrl}
        complexity={itemData.item.complexity}
        duration={itemData.item.duration}
        affordability={itemData.item.affordability}
        onPress={onPressHandler}
        mealId={itemData.item.id}
      />
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        renderItem={renderMeal}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

export default MealOverViewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 18,
  },
});
