import { StyleSheet,Alert, Text, View,TextInput,TouchableOpacity,StatusBar, Image,Modal,Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome6';
import axios from 'axios';
import { GoogleSignin,  statusCodes } from '@react-native-google-signin/google-signin';



const Login = (Props) => {
  const[email,setEmail]=useState("")
  const[password,setPassword]=useState("")
  const[unset,Setset]=useState(true)
  const [modalVisible, setModalVisible] = useState(false);

  const Moda=()=>{
    console.warn("Logout successful")
    setModalVisible(false)
  }
  const {navigation} = Props;
  
  const Logi=async()=>{
    const userData ={
      email:email,
      password
    };
    if(email && password ){
        axios.post("http://192.168.236.212:5001/login-user",userData)
        .then(res=>{console.log(res.data)
          if(res.data.status == "ok"){
            setModalVisible(true);

       }else{
         Alert.alert("Data is Incorrect")
       }    
        })
        .catch(e=>console.log(e))
      }else{
         Alert.alert("Please fill all Details")
           
      }
}
 const Eye=()=>{
  if(unset ){
       Setset(false)
  }else{
    Setset(true)
  }
}
const Goog=()=>{
  navigation.navigate("Dashboard")
}
  const Reg=()=>{
     navigation.navigate("Signup")
  }
  const Google=()=>{
      console.warn("www")
  }
  const Forget=()=>{
    navigation.navigate("ForgetPassword")
    
}

  useEffect(() => {
    // Initialize GoogleSignin
    GoogleSignin.configure({
      // Replace with your own client ID
      webClientId: '870759477114-v3uffs5qb4h02gh6b4ccrdkefq8ku9t7.apps.googleusercontent.com',
    });
  }, []);

  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log(userInfo);
      // Now you can use userInfo to authenticate the user with your backend
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
  return (
     
    <View style={styles.view}>
          <StatusBar hidden/>
          <View style={styles.view2}>
            <Text style={styles.txt21}>Login to your </Text>
            <Text style={styles.txt22}>account. </Text>
            <Text>Please sign in to your account </Text>
          </View>     
          <Text style={styles.txt23}>Email Address</Text>
      <TextInput value={email} onChangeText={(e)=>setEmail(e)}  placeholder='Enter E-mail' style={styles.input}/>
      <Text style={styles.txt24}>Password</Text>

      <View >
      <TextInput value={password} onChangeText={(e)=>setPassword(e)}  placeholder=' Password' secureTextEntry={unset} style={styles.input} />
        <TouchableOpacity style={{position:"relative",top:-50,left:329}} onPress={()=>Eye()}>
        <Icon name="eye-slash" size={15} color="black" />
        </TouchableOpacity>
      </View>
      <TouchableOpacity  onPress={()=>Forget()}>
                         <Text style={styles.txt25} >Forget Password</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.Btn} onPress={()=>Logi()}>
                         <Text style={styles.txt1}>Sign in</Text>
      </TouchableOpacity>
      <Text style={{alignSelf:"center"}}>------------ Or sign in with   -----------</Text>
    
      <TouchableOpacity onPress={()=>signIn()} style={{alignSelf:"center",}}>
                       <View><Image source={require('../images/img6.webp')} style={{width:30,height: 30,margin:10}}/></View>
      </TouchableOpacity>
 
      <TouchableOpacity onPress={()=>Reg()} style={{flexDirection:"row",alignSelf:"center",marginTop:10}}>
                         <Text>Don't have an account?</Text>
                        <Text style={styles.txt3}>Register</Text>
      </TouchableOpacity>
      <TouchableOpacity  onPress={()=>Goog()}>
                         <Text style={{color:"green"}}>Dashboard calender</Text>
      </TouchableOpacity>
      <Text >Login possible please set your own local server in express.js backend</Text>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);

        }}
      >
        <View style={styles.viewmodal}>
          <View style={styles.viewmodal2}>
            <Image source={require('../images/imgtick.jpeg')} style={{width: 200,height: 200,alignSelf:"center"}}/>
            <Text style={styles.txtmodal}>Login Successful </Text>
            <Text style={styles.txt41}>An event has been created and the invite has </Text>
            <Text style={styles.txt42}>been sent to you on your mail </Text>
             <TouchableOpacity style={styles.Btnmodal} onPress={()=>Moda()}>
                         <Text style={styles.txt1}>Logout</Text>
             </TouchableOpacity>
          </View>
        </View>
      </Modal>
      

    </View>
  
  )
}

export default Login

const styles = StyleSheet.create({
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
        width:"80%",
        height:"5%",
        alignSelf:"center",
       justifyContent:"center",
        backgroundColor:"darkorange",
        borderRadius:20,
        margin:"10%"
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
        fontWeight:"900",
        alignSelf:"flex-end",
        marginRight:20
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