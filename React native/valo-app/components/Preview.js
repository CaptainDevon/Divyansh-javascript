import { Text, StyleSheet, View, Image, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

const Preview = ({ name, typeIcon, emoticon }) => {
  return (
    <View style={styles.card}>
      <Image source={emoticon} style={styles.bgImage} />
      <Image source={typeIcon} style={styles.roleImage} />
      <Text style={styles.nameStyle}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: width * 0.44, // slightly smaller than 48% to allow margin
    alignItems: "center",
    marginBottom: 16,
    borderRadius: 16,
    padding: 12,
    backgroundColor: "rgba(0,0,0,0.6)",
  },
  bgImage: {
    height: width * 0.55, // proportional image height
    width: "100%",
    resizeMode: "contain",
    marginBottom: 10,
  },
  roleImage: {
    height: 24,
    width: 24,
    marginBottom: 6,
  },
  nameStyle: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default Preview;
