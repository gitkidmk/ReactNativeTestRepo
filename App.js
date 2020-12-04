import React, { useState, useEffect, useRef } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Ionicons from "react-native-vector-icons/Ionicons";

import Home from "./src/Home";
import Lecture from "./src/Lecture";

function HomeScreen() {
  return <Home />;
}

function SettingsScreen() {
  return <Lecture />;
}

const Tab = createBottomTabNavigator();

export default function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  const [textResult, setTextResult] = useState(
    "Open up App.js to modify this project"
  );
  const [flexDirection, setFlexDirection] = useState("row");
  const [justifyContent, setJustifyContent] = useState("center");
  const [alignItems, setAlignItems] = useState("center");
  const layoutStyle = { flexDirection, justifyContent, alignItems };

  const primaryAxis = flexDirection === "row" ? "Horizontal" : "Vertical";
  const secondaryAxis = flexDirection === "row" ? "Vertical" : "Horizontal";

  const TextRef = useRef();

  const items = [
    { id: "0", text: "View" },
    { id: "1", text: "Text" },
    { id: "2", text: "Image" },
    { id: "3", text: "ScrollView" },
    { id: "4", text: "ListView" },
  ];

  let button;
  useEffect(() => {
    button = (
      <Button
        title="Press me2"
        onPress={() => {
          TextRef.current.value = "hihihihihi there";
        }}
      />
    );
  }, [TextRef]);

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = focused
                ? "ios-information-circle"
                : "ios-information-circle-outline";
            } else if (route.name === "Settings") {
              iconName = focused ? "ios-list-box" : "ios-list";
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: "tomato",
          inactiveTintColor: "gray",
        }}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
const flexDirectionOptions = ["row", "column"];
const justifyContentOptions = [
  "flex-start",
  "center",
  "flex-end",
  "space-around",
  "space-between",
];
const alignItemsOptions = ["flex-start", "center", "flex-end", "stretch"];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  layout: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.05)",
  },
  box: {
    padding: 25,
    backgroundColor: "#3B6CD4",
    margin: 5,
    width: 10,
    height: 10,
  },
  image: {
    margin: 25,
    width: "100%",
    height: 200,
  },
  buttonTouchable: {
    padding: 4,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "green",
    backgroundColor: "lightgreen",
  },
  buttonTouchable2: {
    margin: 15,
    padding: 4,
    borderRadius: 4,
    borderWidth: 1,
    backgroundColor: "pink",
  },
  row: {
    padding: 15,
    marginBottom: 5,
    backgroundColor: "skyblue",
  },
  textBox: {
    margin: 15,
    padding: 4,
  },
});
