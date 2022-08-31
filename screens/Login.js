import  React from 'react'
import { StyleSheet, Text, View, TextInput,TouchableOpacity, Dimensions } from 'react-native';
import maid from '../src/maid.jpg';


const Login = ({navigation}) => {
  return (
  
    <View style={styles.container}>
      <img src={maid} alt=""/>
     <Text style={styles.welcome}> Welcome Back </Text>
     <Text style={{marginBottom:10,fontSize:18,color: "#fff"}}>  Sign in to continue  </Text>
     <TextInput
     style = {styles.input}
     placeholder=" Enter UserName"
     
     />
      <TextInput
     style = {styles.input}
     placeholder="Enter Password"
     secureTextEntry={true}
     />
    <View style={styles.btnContainer}>
     <TouchableOpacity style={styles.userBtn} onPress ={() => navigation.navigate('Home')}>
        <Text style={styles.btnTxt}>
            Login
        </Text>
     </TouchableOpacity >
     <TouchableOpacity style={styles.userBtn} onPress ={() => navigation.navigate('SignUp')}>
     <Text style={styles.btnTxt}>
     You don't have an account? SignUp Here
     </Text>
     </TouchableOpacity>
     </View>
    </View>
 
  ); 
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e90ff',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  welcome: {
    fontSize: 30,
    backgroundColor: '#1e90ff',
    color: "#fff",
    margin:10,
    textAlign: 'center',
    
    fontWeight:'100',
    marginBottom:10
  },
  input: {
   width: "90%",
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 10,
  },
  btnContainer: {
   flexDirection: "row",
   justifyContent:"space-between",
   width:"90%"
   },
   userBtn: {
    backgroundColor:"green",
     padding:15,
     width:"45%",
     margin:15,
     borderRadius:10
    },
    btnTxt: {
        fontSize: 15,
        textAlign:"center",
        fontWeight:'bold'
        
        },
});

export default Login;