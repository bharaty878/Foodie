
import { StyleSheet, Text, View,TextInput,TouchableOpacity,Alert,Modal,Button, Image } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome6';
import axios from 'axios';

const ResetPassword = (Props) => {
  const mail = Props.route.params;
  
  const [modalVisible, setModalVisible] = useState(false);
  const[newPassword,setnewPassword]=useState("")
  const[password2,setPassword2]=useState("")
const Moda=()=>{
  Props.navigation.navigate("Login")
}
  const Reset = () => {
      if(newPassword === password2){
    axios.put('http://192.168.236.212:5001/change-password', {
            mail,
            newPassword,
          })
          .then(response => {
            console.log('Success', response.data.message);
            setModalVisible(true);
          })
          .catch(error => {
            Alert.alert('Error', error.response.data.message || 'Failed to change password');
          });
        }else{
              console.warn("Your Password is not matching")
        }
  };


  return (
    <View style={styles.View1}>
      <View >
      <Text style={styles.txt2}>Reset Password </Text>
      <Text style={styles.txt4}>Your new Password must be different from the previously used password</Text>
      <Text style={styles.txt3}>New Password</Text>

      <View style={{width: 350,}}>
      <TextInput value={newPassword} onChangeText={(e)=>setnewPassword(e)}  placeholder=' Password' secureTextEntry style={styles.input} />
        <TouchableOpacity style={{position:"relative",top:-35,left:300}}>
        <Icon name="eye-slash" size={15} color="black" />
        </TouchableOpacity>
      <Text style={styles.txt4}>Must be at least 8 character</Text>
      <Text style={styles.txt3}>Confirm Password</Text>
        <TextInput value={password2} onChangeText={(e)=>setPassword2(e)}  placeholder=' Password' secureTextEntry style={styles.input} />
        <TouchableOpacity style={{position:"relative",top:-35,left:300}}>
        <Icon name="eye-slash" size={15} color="black" />
        </TouchableOpacity>
      <Text style={styles.txt4}>Both Password must match</Text>
      <TouchableOpacity style={styles.Btn} onPress={()=>Reset()}>
                         <Text style={styles.txt1}>Verify Account</Text>
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
      
        }}
      >
        <View style={styles.viewmodal}>
          <View style={styles.viewmodal2}>
            <Image source={require('../images/imgtick.jpeg')} style={{width: 200,height: 200,alignSelf:"center"}}/>
            <Text style={styles.txtmodal}>Password changed </Text>
            <Text style={styles.txt41}>Password changed successfully, you can login </Text>
            <Text style={styles.txt42}>again with a new password </Text>
             <TouchableOpacity style={styles.Btnmodal} onPress={()=>Moda()}>
                         <Text style={styles.txt1}>Go To Login</Text>
      </TouchableOpacity>
          </View>
        </View>
      </Modal>
        </View>
      </View>
    </View>
  )
}

export default ResetPassword

const styles = StyleSheet.create({
  View1:{
         flex:1,
         backgroundColor:"white"
  },
  input:{
    borderRadius:10,
    marginLeft:10,
    marginTop:-5,
    borderWidth:1,
    borderColor:"grey",
    backgroundColor:"white"
},
  Btn:{
    width:300,
    height:40,
    alignSelf:"center",
   justifyContent:"center",
    backgroundColor:"darkorange",
    borderRadius:20,
    margin:10,
    marginTop:180
},
txt1:{
textAlign:"center",
fontWeight:"300",
  fontSize:15,
  color:"white"
},
txt2:{
  fontWeight:"500",
    fontSize:25,
    margin:10,
    color:"black"
  },
  txt3:{
    fontWeight:"500",
      fontSize:20,
      margin:10,
      color:"black"
    },
    txt4:{
        marginLeft:10,
        marginTop:-8
      },
      viewmodal:{
        
        flex: 1,
         justifyContent: "flex-end", 
        alignItems: 'center',
        
      },
      viewmodal2:{
        width: "100%",
        height: 500,
        marginBottom:-100,
        backgroundColor: 'white', 
        padding: 25,
        borderRadius: 10
      },
      txtmodal:{
        color:"black",
        alignSelf:"center",
        fontSize:25,
        fontWeight:"600"
      },
      txt41:{
        alignSelf:"center",
        margin:5
      },
      txt42:{
        alignSelf:"center",

      },
      Btnmodal:{
        width:300,
        height:40,
        alignSelf:"center",
       justifyContent:"center",
        backgroundColor:"darkorange",
        borderRadius:20,
        margin:10,
        marginTop:10
    },
      
})