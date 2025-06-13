import { StatusBar } from "expo-status-bar";
import {
  Image,
  ImageBackground,
  Pressable,
  StyleSheet,
  View,
  Text,
  Dimensions,
  SafeAreaView,
} from "react-native";
import valorantWallpaper from "../assets/screen-one-wallpaper.jpg";
import valorantIcon from "../assets/Valorant-Logo.png";

const { width, height } = Dimensions.get("window");

const PlaygroundOne = ({ navigation }) => {
  return (
    <ImageBackground
      source={valorantWallpaper}
      style={styles.background}
      resizeMode="cover"
    >
      <SafeAreaView style={styles.safeArea}>
        <Image source={valorantIcon} style={styles.valoIcon} />
        <StatusBar style="auto" />

        <Pressable
          onPress={() => navigation.navigate("Second")}
          style={({ pressed }) => [
            styles.buttonItem,
            pressed && styles.pressedStyle,
          ]}
        >
          <Text style={styles.buttonText}>Go Exploring</Text>
        </Pressable>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: height * 0.1,
    paddingBottom: height * 0.1,
  },
  valoIcon: {
    height: height * 0.25,
    width: width * 0.5,
    resizeMode: "contain",
  },
  buttonItem: {
    backgroundColor: "#ff2828",
    width: width * 0.6,
    height: height * 0.08,
    borderRadius: 20,
    borderWidth: 5,
    borderColor: "#cd3535",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    fontSize: width * 0.07,
    fontWeight: "bold",
  },
  pressedStyle: {
    opacity: 0.8,
    transform: [{ scale: 1 }],
  },
});

export default PlaygroundOne;
