import React, { useRef } from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  Alert,
  TouchableOpacity,
} from "react-native";
import { Video } from "expo-av";

export default function Lecture() {
  const videoRef = useRef();
  return (
    <View style={styles.container}>
      <Text style={styles.textBox}>동영상 play</Text>
      <TouchableOpacity
        style={styles.buttonTouchablePause}
        activeOpacity={0.7}
        onPress={() => {
          console.log("pause");
          videoRef.current.pauseAsync();
          Alert.alert("pause button pressed");
        }}
      >
        <Text style={styles.text}>Pause</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonTouchablePlay}
        activeOpacity={0.7}
        onPress={() => {
          videoRef.current.playAsync();
          // videoRef.current.presentFullscreenPlayer();
          Alert.alert("play button pressed");
        }}
      >
        <Text style={styles.text}>Play</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonTouchableFull}
        activeOpacity={0.7}
        onPress={() => {
          videoRef.current.presentFullscreenPlayer();
        }}
      >
        <Text style={styles.text}>Full screen</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonTouchableBack}
        activeOpacity={0.7}
        onPress={() => {
          videoRef.current.setPositionAsync(200);
          console.log("set pos 125ms");
        }}
      >
        <Text style={styles.text}>Back</Text>
      </TouchableOpacity>
      <Video
        ref={videoRef}
        source={
          // { uri: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4" }
          { uri: "http://local2.tmaxwork.shop:22101/videos/old_videos/1_8.mp4" }
          // require("../assets/video/test.mp4")
        }
        rate={1.0}
        volume={1.0}
        isMuted={false}
        resizeMode="cover"
        shouldPlay
        isLooping
        useNativeControls={true}
        style={styles.backgroundVideo}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  backgroundVideo: {
    position: "absolute",
    width: 360,
    height: 200,
    top: 100,
    left: 40,
    bottom: 0,
    right: 0,
  },
  textBox: {
    position: "absolute",
    top: 50,
  },
  buttonTouchablePause: {
    position: "absolute",
    padding: 4,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "green",
    backgroundColor: "lightgreen",
    top: 320,
  },
  buttonTouchablePlay: {
    position: "absolute",
    padding: 4,
    borderRadius: 4,
    borderWidth: 1,
    backgroundColor: "pink",
    top: 370,
  },
  buttonTouchableFull: {
    position: "absolute",
    padding: 4,
    borderRadius: 4,
    borderWidth: 1,
    backgroundColor: "lightyellow",
    top: 420,
  },
  buttonTouchableBack: {
    position: "absolute",
    padding: 4,
    borderRadius: 4,
    borderWidth: 1,
    backgroundColor: "orange",
    top: 460,
  },
});
