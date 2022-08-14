
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Icon } from "@rneui/themed";
const BottomNavigation = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.touchable}>
        <Icon
          color='#023D41'
          name='dashboard'
          
          
          size={35}
        />
      </TouchableOpacity>
      <TouchableOpacity>
      <Icon
        name='receipt'
        color='gray'
        size={35}
      />
      </TouchableOpacity>
      <TouchableOpacity>
      <Icon
        name='user'
        color='gray'
        type='font-awesome'
        size={35}
      />
      </TouchableOpacity>
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignSelf: 'flex-end',
    bottom: 0,
    height: 65,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#F8F8FA'
  },
  touchable: {
    
  },
  
});



export default BottomNavigation;