import React, {Component} from 'react';
import {DeviceEventEmitter, View, Text, Switch} from 'react-native';
import { SensorManager } from 'NativeModules';
import { Heading, Title, NavigationBar, Row, Subtitle, TextInput } from '@shoutem/ui';




export default class Thermometer extends Component{

state={
  toggleSwitch: false,
  time: 100.00
};

toggleThermometer(value,url)
{
//const ws = new WebSocket('ws://192.168.1.102:5000//accelerometer');
const ws = new WebSocket('ws://'+url+'//thermometer');
ws.onerror = (e) => {  // an error occurred
alert(e.message); };

  this.setState({toggleSwitch: value});
  if(value===true)
  {

    SensorManager.startThermometer(this.state.time);

    ws.onopen = () => {  // connection opened

    DeviceEventEmitter.addListener('Thermometer', function (data) {
  /**
  * data.x
  * data.y
  * data.z
  **/

  ws.send(data.temp);

});
};

  }
  else {
    SensorManager.stopThermometer();
  }

}


render()
{

return(
<View>
<Row>

<Switch onValueChange={(value) => this.toggleThermometer(value,this.props.url)}
style={{marginBottom: 10}}
value={this.state.toggleSwitch}
style={{flex:0.25,alignItems:'center'}}
 />

<Subtitle style={{flex:0.5, alignItems:'center'}}>Thermometer</Subtitle>
<TextInput
  placeholder={'Time'}
  onChangeText={(text)=>this.setState({time:parseFloat(text)})}
  style={{height:75,flex:0.25,alignItems:'center'}}
/>
</Row>

</View>);


}


}
