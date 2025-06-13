import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Pressable,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import Preview from "../components/Preview.js";
import { agentData } from "../constants/dataValues.js";
import { useNavigation } from "@react-navigation/native";

const PlaygroundTwo = ({ navigation }) => {
  const navigator = useNavigation();

  return (
    <ImageBackground
      source={require("../assets/screen-two-wallpaper.jpg")}
      style={styles.background}
      resizeMode= "cover"
    >
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Pressable onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={24} color="white" />
          </Pressable>
          <Text style={styles.title}>VALORANT AGENTS</Text>
        </View>

        <ScrollView
          style={{ marginTop: 30, padding: 16 }}
          showsVerticalScrollIndicator={false}
          scrollEventThrottle={16}
        >
          <View style={styles.grid}>
            {agentData.map((agent, index) => (
              <Pressable
                key={index}
                onPress={() => navigator.navigate("Third", { agent })}
                style={{ width: "48%", marginBottom: 16 }}
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
    flex: 1
  },
  container: {
    flex: 1,
    justifyContent: "flex-start",
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: 12,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    backgroundColor: "transparent",
  },
  title: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default PlaygroundTwo;
