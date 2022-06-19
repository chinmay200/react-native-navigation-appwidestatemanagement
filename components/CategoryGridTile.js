import { Pressable, View, Text, StyleSheet, Platform } from "react-native";


function CategoryGridTile({ title, color, onPress }) {
  return (
    <View style={styles.gridItemContainer}>
      <Pressable
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
        android_ripple={{ color: "grey" }}
        onPress={onPress}
      >
        <View style={[styles.gridItem, { backgroundColor: color }]}>
          <Text style={styles.tileText}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default CategoryGridTile;

const styles = StyleSheet.create({
  gridItemContainer: {
    flex: 1,
    margin: 10,
    height: 150,
    elevation: 18,
    borderRadius: 10,
    backgroundColor: "white",
    shadowColor: "black",
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.25,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },

  button: { flex: 1 },

  gridItem: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },

  tileText: {
    fontSize: 18,
    fontWeight: "bold",
  },

  buttonPressed: {
    opacity: 0.5,
  },
});
