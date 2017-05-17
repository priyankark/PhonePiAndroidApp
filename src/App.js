import React, {Component} from 'react';
import {View,ScrollView} from 'react-native';
import { Heading, Title, NavigationBar,Divider, TextInput, Row,Button,Text } from '@shoutem/ui';
import Accelerometer from './Components/Accelerometer';
import Gyroscope from './Components/Gyroscope';
import Magnetometer from './Components/Magnetometer';
import Orientation from './Components/Orientation';
import StepCounter from './Components/StepCounter';
import Thermometer from './Components/Thermometer';
import LightSensor from './Components/LightSensor';
import Proximity from './Components/Proximity';
import Geolocation from './Components/Geolocation';

export default class App extends Component{
state={
  base_url:''
};


render()
{

return(
<View style={{flex:1}}>
<ScrollView>
<Divider />
<NavigationBar
centerComponent={<Heading>PhonePi</Heading>}
/>
<Divider />
<Divider/>

<View style={{flexDirection:'row',alignItems:'center'}} >
<TextInput onChangeText={(text)=>{this.setState({base_url:text})}} placeholder={'URL'} style={{height:75,flex:0.8,marginLeft:1}} />
<Button styleName="dark">
<Text> Submit </Text>
</Button>
</View>

<Divider />

<Accelerometer url={this.state.base_url} />
<Divider />
<Gyroscope url={this.state.base_url} />
<Divider />
<Magnetometer url={this.state.base_url} />
<Divider />
<Orientation url={this.state.base_url} />
<Divider />
<StepCounter url={this.state.base_url} />
<Divider />
<Thermometer url={this.state.base_url} />
<Divider />
<LightSensor url={this.state.base_url} />
<Divider />
<Proximity url={this.state.base_url} />
<Divider />
<Geolocation url={this.state.base_url} />
<Divider />



</ScrollView>


</View>);
}

}
