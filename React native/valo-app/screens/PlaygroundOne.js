import { StatusBar } from "expo-status-bar";
import {
  Image,
  ImageBackground,
  Pressable,
  StyleSheet,
  View,
  Text,
} from "react-native";
import valorantWallpaper from "../assets/screen-one-wallpaper.jpg";
import valorantIcon from "../assets/Valorant-Logo.png";

const PlaygroundOne = ({ navigation }) => {
  return (
    <ImageBackground
      source={valorantWallpaper}
      style={{ flex: 1}}
      resizeMode= "cover" 
    >
      <View style={styles.container}>
        <Image source={valorantIcon} style={styles.valoIcon} />
        <StatusBar style="auto" />
      </View>
      <Pressable
        onPress={() => navigation.navigate("Second")}
        style={({ pressed }) => [
          styles.buttonItem,
          pressed && styles.pressedStyle,
        ]}
      >
        <Text
          style={{
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            fontSize: 35,
            fontWeight: "bold"
          }}
        >
          Go Exploring
        </Text>
      </Pressable>
      <View></View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 12,
  },
  valoIcon: {
    position: "relative",
    height: 200,
    width: 200,
    resizeMode: "contain",
  },
  buttonItem: {
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 500,
    marginLeft: "20%",
    backgroundColor: "#ff2828",
    width: "60%",
    height: 80,
    borderRadius: 20,
    borderStyle: "solid",
    borderWidth: 5,
    borderColor: "#cd3535",
  },
  pressedStyle: {
    opacity: 0.8,
    transform: [{ scale: 1 }],
  },
});

export default PlaygroundOne;
