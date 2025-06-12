import { Text, StyleSheet, View, Image } from "react-native";

const Preview = ({ name, typeIcon, emoticon }) => {
  return (
    
      <View style={styles.card}>
        <Image source={emoticon} style={styles.bgImage} />
        <Image source={typeIcon} style={styles.roleImage} />
        <Text style={styles.nameStyle}>{name}</Text>
      </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '100%',   
    alignItems:'center',       
    marginBottom: 16,
    borderRadius: 16,
    padding: 12,
    backgroundColor: 'rgba(0,0,0,0.6)',
  },
  bgImage: {
    flex: 1,
    resizeMode: "cover",
    height: 250,
    width: 140,
  },
  roleImage: {
    height: 25,
    width: 25,
  },
  nameStyle: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default Preview;
