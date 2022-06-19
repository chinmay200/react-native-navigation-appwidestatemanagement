import {
  Text,
  View,
  Image,
  StyleSheet,
  Button,
  ScrollView,
} from "react-native";
import { MEALS } from "../data/dummy-data";
import { useLayoutEffect } from "react";
import IconButton from "../components/IconButton";

function MealDetailsScreen({ route, navigation }) {
  const mealId = route.params.mealId;

  const mealDetails = MEALS.find((meal) => meal.id === mealId);

  function onPressHandler() {
    console.log("PRESSED");
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            title="Tap me"
            onPress={onPressHandler}
            icon="star"
            color="white"
          />
        );
      },
    });
  }, [navigation]);

  return (
    <ScrollView style={styles.rootScreen}>
      <Image source={{ uri: mealDetails.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{mealDetails.title}</Text>
      <View style={styles.details}>
        <Text style={styles.detailItem}>{mealDetails.duration}m</Text>
        <Text style={styles.detailItem}>
          {mealDetails.complexity.toUpperCase()}
        </Text>
        <Text style={styles.detailItem}>
          {mealDetails.affordability.toUpperCase()}
        </Text>
      </View>

      <Text style={styles.subTitle}>Ingredients</Text>
      <Text style={styles.textContainer}>
        {mealDetails.ingredients.map((ingredient) => (
          <Text key={ingredient} style={styles.detailText}>
            {ingredient}
          </Text>
        ))}
      </Text>
      <Text style={styles.subTitle}>Steps</Text>
      <Text style={styles.textContainer}>
        {mealDetails.steps.map((step) => (
          <Text key={step} style={styles.detailText}>
            {step}
          </Text>
        ))}
      </Text>
    </ScrollView>
  );
}

export default MealDetailsScreen;

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    backgroundColor: "#5D6C83",
  },

  details: {
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
    justifyContent: "center",
  },

  detailItem: {
    marginHorizontal: 4,
    fontSize: 12,
  },
  image: {
    width: "100%",
    height: 300,
  },

  title: {
    fontWeight: "bold",
    fontSize: 24,
    textAlign: "center",
    color: "white",
  },

  detailText: {
    color: "black",
    fontSize: 18,
  },

  subTitle: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
    margin: 10,
    paddingVertical: 2,
    borderBottomWidth: 3,
    borderBottomColor: "white",
  },

  textContainer: {
    padding: 8,
    marginHorizontal: 10,
    backgroundColor: "white",
    borderRadius: 5,
  },
});
