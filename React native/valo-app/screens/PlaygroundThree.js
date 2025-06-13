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
  Dimensions,
} from "react-native";
import { useRoute } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

const { width, height } = Dimensions.get("window");

const PlaygroundThree = ({ navigation }) => {
  const { agent } = useRoute().params;
  const [selectedAbility, setSelectedAbility] = useState("");
  const slideAnim = useRef(new Animated.Value(width)).current;

  const handlePress = (ability) => {
    setSelectedAbility(ability);
    slideAnim.setValue(width);
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
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.backButtonWrapper}>
        <Pressable onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={width * 0.08} color="white" />
        </Pressable>
      </View>

      <View style={styles.container}>
        <View style={styles.iconsRow}>
          {[agent.typeIcon, agent.one, agent.two, agent.three, agent.ult].map(
            (iconSrc, index) => (
              <Pressable
                key={index}
                style={styles.icon}
                onPress={() => {
                  const descriptions = [
                    agent.description,
                    agent.oneDescription,
                    agent.twoDescription,
                    agent.threeDescription,
                    agent.ultDescription,
                  ];
                  handlePress(descriptions[index]);
                }}
              >
                <Image
                  source={iconSrc}
                  style={{
                    height: width * 0.1,
                    width: width * 0.1,
                    tintColor: agent.color,
                  }}
                />
              </Pressable>
            )
          )}
        </View>

        {selectedAbility !== "" && (
          <Animated.View
            style={[styles.abilityBox, { transform: [{ translateX: slideAnim }] }]}
          >
            <ScrollView
              contentContainerStyle={styles.abilityContent}
              showsVerticalScrollIndicator={false}
            >
              <Text style={[styles.abilityText, { color: agent.color }]}>
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
  background: {
    flex: 1,
    alignItems: "center",
  },
  backButtonWrapper: {
    width: "100%",
    paddingTop: height * 0.06,
    paddingLeft: width * 0.05,
  },
  container: {
    marginTop: height * 0.05,
    height: height * 0.4,
    width: width * 0.9,
    backgroundColor: "rgba(0, 0, 0, 0.89)",
    borderRadius: 20,
  },
  iconsRow: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: height * 0.02,
  },
  icon: {
    justifyContent: "center",
    alignItems: "center",
    height: width * 0.15,
    width: width * 0.15,
    backgroundColor: "#ffffff",
    borderRadius: 10,
  },
  abilityBox: {
    flex: 1,
    marginTop: height * 0.02,
  },
  abilityContent: {
    paddingHorizontal: width * 0.05,
    paddingBottom: height * 0.02,
  },
  abilityText: {
    fontSize: width * 0.045,
    textAlign: "center",
  },
});

export default PlaygroundThree;
