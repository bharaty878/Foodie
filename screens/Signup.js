import { StyleSheet, Text, View,TextInput,TouchableOpacity,StatusBar, Image,Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome6';
import axios from 'axios';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';


const Signup = (Props) => {
  const[email,setEmail]=useState("")
  const[name,setName]=useState("")
  const[password,setPassword]=useState("")
  const [isTicked, setIsTicked] = useState(false);
  const[unset,Setset]=useState(true)
  const {navigation} = Props;
  
  const Logi=async()=>{
        const userData ={
          name:name,
          email,
          password
        };
        if(name && email && password && isTicked){
            axios.post("http://192.168.236.212:5001/register",userData)
            .then(res=>{console.log(res.data)
              if(res.data.status == "ok"){
                Alert.alert("Registered Successfully")
           }else{
             Alert.alert("Already Registered")
           }    
            })
            .catch(e=>console.log(e))
          }else{
             Alert.alert("Please fill all Details")
               
          }
 }
  const Sign=()=>{
     navigation.navigate("Login")
  }
 
  const Eye=()=>{
    if(unset ){
         Setset(false)
    }else{
      Setset(true)
    }
}
  const toggleTick = () => {
    setIsTicked(!isTicked);
    
  };
  useEffect(() => {
    // Initialize GoogleSignin
    GoogleSignin.configure({
      // Replace with your own client ID
      webClientId: '870759477114-v3uffs5qb4h02gh6b4ccrdkefq8ku9t7.apps.googleusercontent.com',
      // webClientId:'519606986621-v6cmbo6cu8jj6nopemnrggl4og2nnd09.apps.googleusercontent.com',

    });
  }, []);

 

  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log(userInfo);
  
      // Send user data to your backend
      await sendUserDataToServer(userInfo);
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
        console.log('SIGN_IN_CANCELLED');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
        console.log('IN_PROGRESS');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
        console.log('PLAY_SERVICES_NOT_AVAILABLE');
      } else {
        // some other error happened
        console.log(error);
      }
    }
  };
  
  const sendUserDataToServer = async (userInfo) => {
    try {
      const response = await fetch('http://192.168.236.212:5001/google-signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userInfo),
      });
  
      if (!response.ok) {
        throw new Error('Failed to send user data to server');
      }
  
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error sending user data to server:', error);
    }
  };
  

  return (
     
    <View style={styles.view}>
          <StatusBar hidden/>
          <View style={styles.view2}>
            <Text style={styles.txt21}>Create your new</Text>
            <Text style={styles.txt22}>account. </Text>
            <Text>Create an account to start looking for the food</Text>
            <Text>you like</Text>
          </View>     
          <Text style={styles.txt23}>Email Address</Text>
      <TextInput value={email} onChangeText={(e)=>setEmail(e)}  placeholder='Enter E-mail' style={styles.input}/>
      <Text style={styles.txt24}>User Name</Text>
      <TextInput value={name} onChangeText={(e)=>setName(e)}  placeholder='Enter Name' style={styles.input}/>
      <Text style={styles.txt24}>Password</Text>
      <View >
      <TextInput value={password} onChangeText={(e)=>setPassword(e)}   placeholder=' Password' secureTextEntry={unset}  style={styles.input} />
        <TouchableOpacity style={{position:"relative",top:-50,left:320}} onPress={()=>Eye()}>
        <Icon name="eye-slash" size={15} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.view3}>
      <TouchableOpacity style={[styles.button, isTicked ? styles.ticked : null]} onPress={toggleTick}>
                    <View style={styles.buttonText}>{isTicked ? <Image source={require('../images/img99.png')} style={{width:20,height:20,marginLeft:-10,marginTop:-10}}/>: null}</View>

    </TouchableOpacity>
      <Text style={{marginLeft:5}}>I Agree with</Text>
      <TouchableOpacity  onPress={()=>Logi()}>
                         <Text style={styles.txt26} >Terms of Services</Text>
      </TouchableOpacity>
      <Text>and</Text>
      <TouchableOpacity  onPress={()=>Logi()}>
                         <Text style={styles.txt26} >Privacy</Text>
                         <Text style={styles.txt27}>Policy</Text>
      </TouchableOpacity>

      </View>
      <TouchableOpacity style={styles.Btn} onPress={()=>Logi()}>
                         <Text style={styles.txt1}>Register</Text>
      </TouchableOpacity>
      <Text style={{alignSelf:"center"}}>------------  Or sign in with  -------------</Text>
    
      <TouchableOpacity onPress={()=>signIn()} style={{alignSelf:"center",}}>
                       <View><Image source={require('../images/img6.webp')} style={{width:30,height: 30,margin:10}}/></View>
      </TouchableOpacity>
      
      <TouchableOpacity onPress={()=>Sign()} style={{flexDirection:"row",alignSelf:"center",marginTop:10}}>
                         <Text>Have an account?</Text>
                        <Text style={styles.txt3}>Sign in</Text>
      </TouchableOpacity>
      

    </View>
  
  )
}

export default Signup

const styles = StyleSheet.create({
  view3:{
      flexDirection:"row",
      margin:1,
    marginTop:-10

  },
  view:{
       flex:1,
      backgroundColor:"white"
       
  },
  input:{
    width: "90%",
    borderRadius:10,
    margin:"5%",
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
        margin:10
  },
  txt1:{
    textAlign:"center",
    fontWeight:"300",
      fontSize:15,
      color:"white"
  },
  txt2:{
     marginTop:200,
     fontFamily:"cursive",
     color:"black",
     fontSize:50,
     alignSelf:"center",
     margin:10

  },
  txt3:{
        alignSelf:"center",
        color:"black",
        color:"gold",
        fontWeight:"700"
  },
  view2:{
       margin:20,
  },
  txt21:{
    color:"black",
    fontSize:34,
    fontWeight:"900",
    marginTop:30,
},
txt22:{
 color:"black",
 fontSize:34,
 fontWeight:"900",

 },
 txt23:{
  color:"black",
  fontSize:15,
  fontWeight:"800",
  marginLeft:20,
  marginTop:20,
},
txt24:{
  color:"black",
  fontSize:15,
  marginLeft:20,
  marginTop:2,
  fontWeight:"800",
},
    txt25:{
        color:"gold",
        fontWeight:"700",
        alignSelf:"flex-end",
        marginRight:20
    },
    txt26:{
      color:"gold",
      fontWeight:"700",
      alignSelf:"flex-end",
      marginRight:2,
      
  },
  button: {
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 5,
    width: 20,
    height: 20,
    marginLeft:10
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    textAlign:"center"
  },
  ticked: {
    backgroundColor: 'darkorange', 
  },
  txt27:{
     marginLeft:-210,
     color:"gold",
     fontWeight:"700",

  }
})

// '✓'