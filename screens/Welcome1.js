import { StyleSheet, Text, View,ImageBackground, TouchableOpacity,StatusBar } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';


const Welcome1 = (Props) => {
  const {navigation} = Props;
  const Skip=()=>{
      navigation.navigate("Login")
  }
  const Next=()=>{
    navigation.navigate("Welcome2")
}
  return (
    <ImageBackground source={require('../images/burger2.jpg')} style={{flex:1}}>
    <View style={styles.view1}>
      <StatusBar translucent={true} backgroundColor={'transparent'}/>
      <View style={styles.view4}>
        <Text style={styles.txt0}>We Serve</Text>
        <Text style={styles.txt1}>Incomparable</Text>
        <Text style={styles.txt1}>delicacies</Text>
        <Text style={styles.txt2}>All the best Restaurants with their top</Text>
        <Text style={styles.txt22}>menu waiting for you,they can't wait</Text>
        <Text style={styles.txt23}>for your order!!</Text>
        </View>
        <View style={styles.view3}>
              <Text style={styles.txtview}>  </Text>
              <Text style={styles.txtview2}> </Text>
              <Text style={styles.txtview3}> </Text>

        </View>
        <View style={styles.view2}>
           <TouchableOpacity onPress={()=>Skip()}>
                    <Text style={styles.txtview22}>Skip</Text>
            </TouchableOpacity>
            <TouchableOpacity  onPress={()=>Next()}>
                    <Text style={styles.txtview22}>Next <Icon name="long-arrow-right" size={15} color="white" />    
                    </Text>                   
            </TouchableOpacity>    
        </View>         
    </View>
    </ImageBackground>
  )
}

export default Welcome1

const styles = StyleSheet.create({
  view1:{
    marginTop:"95%",
    width:"80%",
    height: "43%",
    alignSelf:"center",
    backgroundColor:"darkorange",
    borderRadius:60,  
  },
  txt0:{
    marginTop:"5%",
    alignSelf:"center",
    color:"white",
    fontSize:35,
    fontWeight:"600",
    opacity:0.8

 },
  txt1:{
     alignSelf:"center",
     color:"white",
     fontSize:35,
     fontWeight:"600",
     opacity:0.8

  },
  txt2:{
    marginTop:"10%",
     color:"white",
     opacity:0.6,
     alignSelf:"center",
  },
  txt22:{
  
     color:"white",
     opacity:0.6,
     alignSelf:"center",
  }, txt23:{
  
     color:"white",
     opacity:0.6,
     alignSelf:"center",
  },
  view2:{
      flexDirection:"row",
      margin:5,
      justifyContent:"space-between"
  },
  txtview:{
    width: 30,
    height: 5,
    margin:3,
    backgroundColor:"white",
    borderRadius:10,
    
  },
  txtview2:{
    width: 30,
    height: 5,
    margin:3,
    backgroundColor:"grey",
    borderRadius:10,
    
  }, 
   txtview3:{
    width: 30,
    height: 5,
    margin:3,
    backgroundColor:"grey",
    borderRadius:10,
    
  },
  view3:{
    flexDirection:"row",
    alignSelf:"center",
    margin:10
  },
  txtview22:{
          
          fontSize:15,
          margin:15,
          color:"white"
  },
  view4:{
    margin:10
  }

})