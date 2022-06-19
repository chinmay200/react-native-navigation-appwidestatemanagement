import {
  View,
  Text,
  Pressable,
  Image,
  StyleSheet,
  Platform,
} from "react-native";

export default function MealItem({
  title,
  imageUrl,
  duration,
  complexity,
  affordability,
  onPress,
  mealId
}) {
  return (
    <View style={styles.mealItem}>
      <View>
        <Pressable android_ripple={{color:"#d6ccc2"}} onPress={()=> onPress(mealId)}>
          <View>
            <Image source={{ uri: imageUrl }} style={styles.image} />
            <Text style={styles.title}>{title}</Text>
          </View>
          <View style={styles.details}>
            <Text style={styles.detailItem}>{duration}m</Text>
            <Text style={styles.detailItem}>{complexity.toUpperCase()}</Text>
            <Text style={styles.detailItem}>{affordability.toUpperCase()}</Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  innerMealItemContainer:{
    borderRadius: 8,
    overflow:"hidden"
  },
  mealItem: {
    margin: 16,
    elevation: 4,
    borderRadius: 8,
    backgroundColor: "white",
    shadowColor: "black",
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.25,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },

  image: {
    width: "100%",
    height: 200,
  },

  title: {
    margin: 8,
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 20,
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
});
