import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Pressable,
  ScrollView,
  Dimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import Preview from "../components/Preview.js";
import { agentData } from "../constants/dataValues.js";
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get("window");

const PlaygroundTwo = ({ navigation }) => {
  const navigator = useNavigation();

  return (
    <ImageBackground
      source={require("../assets/screen-two-wallpaper.jpg")}
      style={styles.background}
      resizeMode="cover"
    >
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Pressable onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={width * 0.06} color="white" />
          </Pressable>
          <Text style={styles.title}>VALORANT AGENTS</Text>
        </View>

        <ScrollView
          style={styles.scroll}
          showsVerticalScrollIndicator={false}
          scrollEventThrottle={16}
        >
          <View style={styles.grid}>
            {agentData.map((agent, index) => (
              <Pressable
                key={index}
                onPress={() => navigator.navigate("Third", { agent })}
                style={styles.gridItem}
              >
                <Preview
                  name={agent.name}
                  typeIcon={agent.typeIcon}
                  emoticon={agent.emoticon}
                />
              </Pressable>
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: width * 0.04,
    paddingTop: height * 0.04,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: height * 0.02,
    gap: width * 0.025,
  },
  title: {
    color: "white",
    fontSize: width * 0.05,
    fontWeight: "bold",
  },
  scroll: {
    paddingHorizontal: width * 0.03,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  gridItem: {
    width: "48%",
    marginBottom: height * 0.025,
  },
});

export default PlaygroundTwo;
