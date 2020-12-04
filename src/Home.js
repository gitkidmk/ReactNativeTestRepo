import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  Image,
  TouchableHighlight,
  TouchableOpacity,
  ScrollView,
  FlatList,
  YellowBox,
} from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Toggle from "./Toggle";

import Favicon from "../assets/adaptive-icon.png";
import Samseck from "../assets/samseck.jpg";

export default function Home() {
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

  return (
    <ScrollView>
      <View style={styles.container}>
        <Image style={styles.image} source={Favicon} />
        <TouchableOpacity
          style={styles.buttonTouchable}
          activeOpacity={0.7}
          onPress={() => {
            setCount(count + 1);
          }}
        >
          <Text style={styles.text}>Change Opacity</Text>
        </TouchableOpacity>
        <TouchableHighlight
          style={styles.buttonTouchable2}
          underlayColor="#FFB"
          onPress={() => {
            setCount(count + 1);
          }}
        >
          <Text style={styles.text}>Change Color</Text>
        </TouchableHighlight>
        <Toggle
          label={"Primary axis (flexDirection)"}
          value={flexDirection}
          options={flexDirectionOptions}
          onChange={(option) => {
            setFlexDirection(option);
          }}
        />
        <View style={[styles.layout, layoutStyle]}>
          <Image source={Samseck} style={styles.box} />
          <Image source={Samseck} style={styles.box} />
          <Image source={Samseck} style={styles.box} />
        </View>
        <StatusBar style="auto" />
        <TextInput
          value={text}
          style={{ fontSize: 32, color: "steelblue" }}
          placeholder="Type here..."
          onChangeText={(text) => {
            setText(text);
          }}
        />
        <Text style={{ fontSize: 24 }}>
          You entered:
          {"\n"}
          {text}
        </Text>
        <Text style={styles.textBox} ref={TextRef}>
          {textResult}
        </Text>
        <Text ref={TextRef}>{count}</Text>
        <Button
          title="Press me!"
          style={styles.button1}
          onPress={() => {
            setTextResult("Oh I'm changed!!!");
          }}
        />
        <Button
          title="Set Original"
          style={styles.button2}
          onPress={() => {
            setTextResult("I'm original Text");
          }}
        />
        <Button
          title={"Press me for counting"}
          style={styles.button3}
          onPress={() => {
            setCount(count + 1);
          }}
        />
      </View>
    </ScrollView>
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
  button1: {
    position: "absolute",
    top: 100,
    margin: 10,
    padding: 4,
  },
  button2: {
    margin: 10,
    padding: 4,
  },
  button3: {
    margin: 10,
    padding: 4,
  },
});
