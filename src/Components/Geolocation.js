import React, {Component} from 'react';
import {DeviceEventEmitter, View, Text, Switch} from 'react-native';
import { SensorManager } from 'NativeModules';
import { Heading, Title, NavigationBar, Row, Subtitle, TextInput } from '@shoutem/ui';




export default class Geolocation extends Component{

state={
  toggleSwitch: false,
  time: 100.00,
  initialPosition: 'unknown',
  lastPosition: 'unknown'
};


watchID: ?number = null;


toggleGeolocation(value,url)
{
//const ws = new WebSocket('ws://192.168.1.102:5000//accelerometer');
const ws = new WebSocket('ws://'+url+'//geolocation');
ws.onerror = (e) => {  // an error occurred
alert(e.message); };

  this.setState({toggleSwitch: value});
  if(value===true)
  {
    navigator.geolocation.getCurrentPosition( (position) =>
     { var initialPosition = JSON.stringify(position);
       ws.send(this.state.initialPosition);
       this.setState({initialPosition}); }, (error) => alert(JSON.stringify(error)),
        {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}

       );



    this.watchID = navigator.geolocation.watchPosition((position) =>
     { var lastPosition = JSON.stringify(position); this.setState({lastPosition});
      ws.send(this.state.lastPosition);


   });

   }
  else
  {
     navigator.geolocation.clearWatch(this.watchID);

  }

}


render()
{

return(
<View>
<Row>

<Switch onValueChange={(value) => this.toggleGeolocation(value,this.props.url)}
style={{flex:0.25,alignItems:'center'}}
value={this.state.toggleSwitch}
 />

<Subtitle style={{flex:0.5, alignItems:'center'}}>Geolocation</Subtitle>
</Row>

</View>);


}


}
