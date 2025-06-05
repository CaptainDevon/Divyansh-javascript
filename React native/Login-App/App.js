import { StatusBar } from "expo-status-bar";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity
} from "react-native";

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.heading}>Login Page</Text>
        <View style={styles.inputField}>
          <TextInput placeholder="username" style={styles.userInput}/>
          <TextInput secureTextEntry={true} placeholder="Password" style={styles.passInput}/>
        </View>
        <TouchableOpacity style={styles.customButton} activeOpacity={0.5}>
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>
        <View style={styles.contacts}>
          <Image source={require('./assets/communication.png')} style={styles.icons}/>
          <Image source={require('./assets/instagram.png')} style={styles.icons}/>
          <Image source={require('./assets/twitter.png')} style={styles.icons}/>
          <Image source={require('./assets/youtube.png')} style={styles.icons}/>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  box: {
    display:'flex',
    flexDirection:'column',
    backgroundColor: "gray",
    alignItems: "center",
    justifyContent: "start",
    height: 500,
    width: 400,
    borderRadius: 20,
  },
  heading: {
    position: "relative",
    paddingTop:40,
    fontSize: 35,
    color: "indigo",
  },
  inputField: {
    position: "relative",
    gap:20,
    paddingTop:25,
    fontSize:40,
    height:100,
    width:350
  },
  userInput:{
    position:'relative',
    backgroundColor:"#c4bbf7",
    fontSize:25,
    letterSpacing:2,
    borderRadius:10
  },
  passInput:{
    position:'relative',
    backgroundColor:"#c4bbf7",
    fontSize:25,
    letterSpacing:2,
    borderRadius:10
  },
  customButton: {
    position:'relative',
    marginTop:100,
    backgroundColor: '#7c54fe',
    height: 50,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
},
buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
},
icons:{
  display:'flex',
  flexDirection:'row',
},
contacts:{
  position:'relative',
  marginTop:50,
  gap:40,
  display:'flex',
  flexDirection:'row',
},
icons:{
  height:50,
  width:50,
} 
});

export default App;
