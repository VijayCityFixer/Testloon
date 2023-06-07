import React, { Component } from 'react';
import {
  View,
  Appearance,
  ScrollView,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';
import { Logo } from '../../assets';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { DynamicAppStyles } from '../../theme';
import styles from './style';
import { Button, Headers } from '../../components';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { RFValue } from 'react-native-responsive-fontsize';

/******************** constants ********************/
const COLOR_SCHEME = Appearance.getColorScheme();

class OrderSummary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Data: [],
      isConfirm: false
    };
  }
  componentDidMount() { }
  render() {
    return (
      <View style={{ flex: 1 }}>
        {this.state.isConfirm ? <View
          style={{
            flex: 1,
            backgroundColor: DynamicAppStyles.colorSet[COLOR_SCHEME].KellyGreen,
          }}>
          <Image
            style={{
              height: hp(5),
              width: hp(5),
              alignSelf: 'center',
              marginVertical: hp(2),
            }}
            source={Logo}
          />
          <View
            style={styles.mainView}>
            <Headers
              onPress={() => this.props.navigation.goBack()}
              isBack={true}
              title={'Order Summary'}
            />
            <ScrollView contentContainerStyle={{ paddingHorizontal: wp(4) }}>
              <Text style={styles.titleText}>Booking Details</Text>
              <View style={styles.detailsView}>
                <Text style={styles.normalText}>Name: Vishal Parmar</Text>
                <Text style={styles.normalText}>Contact info : 8980532603</Text>
                <Text style={styles.normalText}>
                  Email : vijay.cityfixer@gmail.com
                </Text>
              </View>
              <Text style={styles.titleText}>Place & Stay</Text>
              <View style={styles.detailsView}>
                <Text style={styles.normalText}>Venue : Rajwadi pary plot</Text>
                <Text style={styles.normalText}>Check-in : 22-10-2022</Text>
                <Text style={styles.normalText}>Check-out : 23-10-2022</Text>
                <Text style={styles.normalText}>Total Days : 1</Text>
                <Text style={styles.normalText}>Guests : 5</Text>
              </View>
              <Text style={styles.titleText}>Payment</Text>
              <View style={styles.detailsView}>
                <Text style={styles.normalText}>Payment : Advance only</Text>
                <Text style={styles.normalText}>Amount : $ 5000</Text>
              </View>
            </ScrollView>
            <TouchableOpacity onPress={() => this.setState({ isConfirm: false })} style={styles.bookBtn}>
              <View
                style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={styles.btnText}>$5000</Text>
                <Text style={styles.btnText}>Pay & Book</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
          :
          <View style={{
            flex: 1,
            backgroundColor: DynamicAppStyles.colorSet[COLOR_SCHEME].KellyGreen,
            alignItems: 'center', justifyContent: 'center'
          }}>
            <Ionicons
              name={'checkmark-done-sharp'}
              size={hp(18)}
            />
            <Text style={[styles.btnText, { width: wp(60), textAlign: 'center', alignSelf: 'center', fontSize: RFValue(40) }]}>Order Confirm</Text>
            <Button
              onPress={() => this.props.navigation.navigate('BottomTab')}
              style={{ width: wp(45), position: 'absolute', bottom: 0 }}
              title={'Back Home'}
            />
          </View>}
      </View>
    );
  }
}

export default OrderSummary;
