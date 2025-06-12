import React, { useState, useRef } from "react";
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  Pressable,
  Image,
  ScrollView,
  Animated,
  Easing,
} from "react-native";
import { useRoute } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

const PlaygroundThree = ({ navigation }) => {
  const { agent } = useRoute().params;
  const [selectedAbility, setSelectedAbility] = useState("");
  const slideAnim = useRef(new Animated.Value(300)).current;

  const handlePress = (ability) => {
    setSelectedAbility(ability);
    slideAnim.setValue(300);
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 1000,
      easing: Easing.out(Easing.exp),
      useNativeDriver: true,
    }).start();
  };

  return (
    <ImageBackground
      source={agent.wallpaper}
      style={{ flex: 1, alignItems: "center" }}
      resizeMode="cover"
    >
      <View
        style={{
          flexDirection: "row",
          position: "relative",
          marginTop: 50,
          paddingRight: 300,
        }}
      >
        <Pressable onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={50} color="white" />
        </Pressable>
      </View>

      <View style={styles.container}>
        <View style={styles.iconsRow}>
          <Pressable
            style={styles.icon}
            onPress={() => handlePress(agent.description)}
          >
            <Image
              source={agent.typeIcon}
              style={{ height: 50, width: 50, tintColor: agent.color }}
            />
          </Pressable>
          <Pressable
            style={styles.icon}
            onPress={() => handlePress(agent.oneDescription)}
          >
            <Image
              source={agent.one}
              style={{ height: 50, width: 50, tintColor: agent.color }}
            />
          </Pressable>
          <Pressable
            style={styles.icon}
            onPress={() => handlePress(agent.twoDescription)}
          >
            <Image
              source={agent.two}
              style={{ height: 50, width: 50, tintColor: agent.color }}
            />
          </Pressable>
          <Pressable
            style={styles.icon}
            onPress={() => handlePress(agent.threeDescription)}
          >
            <Image
              source={agent.three}
              style={{ height: 50, width: 50, tintColor: agent.color }}
            />
          </Pressable>
          <Pressable
            style={styles.icon}
            onPress={() => handlePress(agent.ultDescription)}
          >
            <Image
              source={agent.ult}
              style={{ height: 50, width: 50, tintColor: agent.color }}
            />
          </Pressable>
        </View>

        {selectedAbility !== "" && (
          <Animated.View
            style={{
              transform: [{ translateX: slideAnim }],
              flex: 1,
              marginTop: 20,
            }}
          >
            <ScrollView
              contentContainerStyle={{
                paddingHorizontal: 20,
                paddingBottom: 20,
              }}
            >
              <Text
                style={{
                  fontSize: 20,
                  color: agent.color,
                  textAlign: "center",
                  resizeMode:'contain'
                }}
              >
                {selectedAbility}
              </Text>
            </ScrollView>
          </Animated.View>
        )}
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    marginTop: "100%",
    height: 300,
    width: "90%",
    backgroundColor: "rgba(0, 0, 0, 0.89)",
    borderRadius: 20,
  },
  iconsRow: {
    width: "100%",
    flexDirection: "row",
    marginLeft: 5,
  },
  icon: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
    marginLeft: 10,
    height: 60,
    width: 60,
    backgroundColor: "rgb(255, 255, 255)",
    borderRadius: 8,
  },
});

export default PlaygroundThree;
