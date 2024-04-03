import { StyleSheet,Alert, Text, View,TextInput,TouchableOpacity, Button, } from 'react-native'
import React, { useState } from 'react'
import axios from 'axios'
import OTP from './OTP';

const ForgetPassword = (Props) => {
  const {navigation} = Props;
  const[email,setEmail]=useState("")
 
  const Logi=async()=>{
    navigation.navigate("OTP",email)
    const userData ={
      email:email,
    };
    if(email){
        axios.post("http://192.168.236.212:5001/send-otp",userData)
        .then(res=>{console.log(res.data)
          if(res.data.status == "ok"){
            Alert.alert("otp send Successfully")
            console.log(res.data.otp)
               navigation.navigate("OTP",email)
       }else{
         Alert.alert("send successfully")
         navigation.navigate("OTP",email)
       }    
        })
        .catch(e=>console.log(e))
      }else{
         Alert.alert("Please fill all Details")
      }

}
  return (
    <View style={styles.View1}>
      <View >
      <Text style={styles.txt2}>Forget Password ?</Text>
      <Text style={styles.txt4}>Enter your email address and we'll send you </Text>
      <Text style={styles.txt5}>confirmation code to reset your password </Text>

      <Text style={styles.txt3}>Email Address</Text>

      <View style={{width: 350,}}>
      <TextInput value={email} onChangeText={(e)=>setEmail(e)}  placeholder='Write email'  style={styles.input} />
        
     
      <TouchableOpacity style={styles.Btn} onPress={()=>Logi()}>
                         <Text style={styles.txt1}>Continue</Text>
      </TouchableOpacity>

        </View>
      </View>
    </View>
  )
}

export default ForgetPassword

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
      txt5:{
        marginLeft:10,
        
      },
})