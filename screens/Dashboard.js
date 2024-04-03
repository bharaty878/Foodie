import React, { useState } from 'react';
import { View,Text } from 'react-native';
import { Calendar } from 'react-native-calendars';

const Dashboard = () => {
  const[data,setData]=useState([])
  const[data2,setData2]=useState([])

  return (
    <View style={{ flex: 1,backgroundColor:"black" }}>
      <Text style={{color:"white" ,alignSelf:"center",fontSize:30}}>Calendar</Text>
      <Calendar
        current={'2024-04-02'}
       minDate={'2024-04-01'}
        maxDate={'2024-04-30'}
        onDayPress={(day) => {
          setData(day)
        }}
        monthFormat={'yyyy MM'}
        onMonthChange={(month) => {
          setData2( month);
        }}
        hideExtraDays={true}
        disableMonthChange={true}
        firstDay={1}
        hideDayNames={false}
        showWeekNumbers={true}
        onPressArrowLeft={(subtractMonth) => subtractMonth()}
        onPressArrowRight={(addMonth) => addMonth()}
      />
      <Text style={{color:"white",alignSelf:"center"}}>Book Your Therapy</Text>
      <Text style={{color:"white"}}>{"Selected Day : "+data.dateString}</Text>
      
      


    </View>
  );
};

export default Dashboard;
