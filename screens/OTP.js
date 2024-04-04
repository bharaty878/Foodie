
import { StyleSheet, Text, TextInput, TouchableOpacity, View,Alert,Button } from 'react-native'
import React, {  useState } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';

const input = Array(6).fill('')
const isObjvalid =({otp1})=>{
   return Object.values({otp1})
}

const OTP = (Props) => {
    const {navigation} = Props;
    const email = Props.route.params;

  const[otp1,setOTP1]=useState(0)

  

  const Resend=async()=>{
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
  

  const Handle=(e,index)=>{
    const newotp = {...otp1};
    newotp[index]=e;
    setOTP1(newotp);    
  };

    const Reset= async()=>{
              if(isObjvalid(otp1)){
                let val = '';                 
                Object.values(otp1).forEach(e=>{val+=e});
                
                    const response = await fetch('http://192.168.236.212:5001/verify-otp', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({ email: email, otp: val })
                    });
                    const data = await response.json();
                    console.log(data);
                    // Handle success or error response
                    if (response.status === 200) {
                        Alert.alert('Success', 'OTP verified successfully');
                        navigation.navigate("ResetPassword",email)
                    } else {
                        Alert.alert('Error', 'Failed to verify OTP');
                    }
                }

              
    }
  return (
    <View>
      <Text style={styles.txt1}>Email Verification</Text>
      <Text style={styles.txt2}>Enter the Verification code we send you on :</Text>
      <Text></Text>
      <View style={styles.view2}>
         {  input.map((item,index)=>{
                return <TextInput key={index.toString()} placeholder='0' keyboardType='numeric' maxLength={1} style={styles.otp} value={otp1[index]} onChangeText={(e)=>Handle(e,index)}/>
            })}
       
      
      </View>
      <View style={styles.view2}>
      <Text style={styles.txt3}>Didn't receive code?</Text>
      <TouchableOpacity onPress={()=>Resend()}>
                 <Text style={{color:"darkorange"}}>resend?</Text>
      </TouchableOpacity>
      </View>
      <View style={{flexDirection:"row",alignSelf:"center"}}>
      <Icon name="clock-o" size={20} color="grey" />
      <Text style={{marginLeft:5}}>09:00</Text>
      </View>
      <View style={styles.view3}>
      <TouchableOpacity style={styles.btn} onPress={()=>Reset()}>
                 <Text style={{color:"white",marginTop:-9}}>Continue</Text>
      </TouchableOpacity>
      </View>
      

    </View>
  )
}

export default OTP

const styles = StyleSheet.create({
    view2:{
        flexDirection:"row",
        margin:5,
        alignSelf:"center"
    },
    otp:{
        width: 50,
        height: 50,
        borderColor:"silver",
        borderWidth:1,
        borderRadius:10,
        color:"black",
        margin:2,
        textAlign:"center"
    },
    txt1:{
      color:"black",
      fontSize:34,
      fontWeight:"900",
      marginTop:"20%",
      margin:"4%"
    },
    txt2:{
        marginLeft:"5%"
    },
    txt3:{
        alignSelf:"center"
    },
    btn:{
        alignSelf:"center",
        marginTop:"6%"
    },
    view3:{
        margin:"5%",
        width: "80%",
        height: "10%",
        backgroundColor:"darkorange",
        borderRadius:20,
        alignSelf:"center",
    }
})



