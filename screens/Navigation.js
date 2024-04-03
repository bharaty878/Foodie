import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Welcome1 from './Welcome1';
import Welcome2 from './Welcome2';
import Welcome3 from './Welcome3';
import Login from './Login';
import Signup from './Signup';
import Dashboard from './Dashboard';
import ForgetPassword from './ForgetPassword';
import ResetPassword from './ResetPassword';
import OTP from './OTP';

const stack = createNativeStackNavigator();

const Navigation = () => {
  return (
          <NavigationContainer>
            <stack.Navigator screenOptions={{headerShown:false}}>
                <stack.Screen name='Welcome1' component={Welcome1} />
                <stack.Screen name='Welcome2' component={Welcome2}/>
                <stack.Screen name='Welcome3' component={Welcome3}/>
                <stack.Screen name='Login' component={Login}  />
                <stack.Screen name='Signup' component={Signup}/>
                <stack.Screen name='ForgetPassword' component={ForgetPassword} options={{headerShown:false,headerTitle:"Reset Password",headerTitleStyle:{fontWeight:"800",fontSize:17}}}/>
                <stack.Screen name='OTP' component={OTP}  options={{headerShown:true,headerTitleStyle:{fontWeight:"500",fontSize:17} }}/>
                <stack.Screen name='ResetPassword' component={ResetPassword} options={{headerShown:true,headerTitle:"Reset Password",headerTitleStyle:{fontWeight:"800",fontSize:17}}}/>
                <stack.Screen name='Dashboard' component={Dashboard} options={{headerShown:true}}/>
            </stack.Navigator>
          </NavigationContainer>
          
  )
}

export default Navigation

const styles = StyleSheet.create({})