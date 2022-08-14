import { Button, StyleSheet, Text, TouchableOpacity,View } from 'react-native';
const MainView = () => {

  return (<View style={styles.container}>
    <View style={
      styles.head}>
      <Text style={styles.txt}>Join MealInfo Now! </Text>
      
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btntxt}>
            Sign Up / Log In
          </Text>
        </TouchableOpacity>


    </View>
  </View>);
}



const styles = StyleSheet.create({
  container: {

    flex: 1,


  },
  head: {
    height: 90,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 50,
    marginLeft: 24,
    marginRight: 24,
    borderRadius: 10,
    padding: 10,
    alignItems: 'center'
  },
  txt: {
    fontSize: 20,

  },
  btn: {
    padding: 10,
    backgroundColor: '#107177',
    borderRadius: 10,

  },
  btntxt: {
    fontSize: 18,
    fontWeight: '',

  }

});

export default MainView;