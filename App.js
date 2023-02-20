import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";
import logo from "./assets/logo.png";
import poster from "./assets/poster.jpg";

export default function App() {
  return (
    <SafeAreaView style={styles.body}>
      <View>
        <View style={styles.container}>
          <Image source={logo} style={styles.logo} />
        </View>
        <View>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Interstellar</Text>
            <View style={styles.filmInfosContainer}>
              <Text style={styles.filmInfos}>2014 </Text>
              <Text style={styles.filmInfos}>PG-13 </Text>
              <Text style={styles.filmInfos}>2h49min </Text>
              <Text style={styles.filmInfos}>Adventure, Drama, Sci-Fi</Text>
            </View>
            <View>
              <View>
                <Image source={poster} style={styles.poster} />
              </View>
              <View></View>
            </View>
          </View>
        </View>
        <StatusBar style={{ backgroundColor: "white" }} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: "#1D1D1D",
    color: "white",
  },
  container: {
    backgroundColor: "#393939",
    height: 100,
    // shadowColor: "black",
  },
  logo: {
    maxWidth: 100,
    resizeMode: "contain",
    marginTop: -30,
    marginLeft: 20,
  },
  titleContainer: {
    marginTop: 20,
    marginLeft: 20,
  },
  title: {
    fontSize: 40,
    color: "white",
  },
  filmInfosContainer: {
    flexDirection: "row",
    // justifyContent: "space-around",
    marginTop: 15,
  },
  filmInfos: {
    color: "#B0B0B0",
  },
  poster: {
    width: 200,
    resizeMode: "contain",
    top: -450,
  },
});
