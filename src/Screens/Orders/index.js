import React, {Component} from 'react';
import {
  View,
  Appearance,
  ScrollView,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';
import {Logo, Hotal} from '../../assets';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {DynamicAppStyles} from '../../theme';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './style';
import LinearGradient from 'react-native-linear-gradient';

import moment from 'moment';

/******************** constants ********************/
const COLOR_SCHEME = Appearance.getColorScheme();

class Orders extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Data: [
        {
          orderId: 1,
          venue: 'Rajwadi party plot',
          scheduleDate: '28/11/2022 - 29/11/2022',
          eventType: 'Marriage function',
          payment: 'Advance Token',
          paidAmount: '$5000',
          dueAmount: '$20000',
          status: 'Confirmed',
          name: 'Vishal Parmar',
          contact: '8460300912',
          startDate: '28/11/2023',
        },
        {
          orderId: 1,
          venue: 'Rajwadi party plot',
          scheduleDate: '28/11/2022 - 29/11/2022',
          eventType: 'Marriage function',
          payment: 'Advance Token',
          paidAmount: '$5000',
          dueAmount: '$20000',
          status: 'Cancelled',
          name: 'Vishal Parmar',
          contact: '8460300912',
          startDate: '28/11/2024',
        },
      ],
      listData: [],
    };
  }

  componentDidMount() {
    console.log(moment('20/10/2023', 'DD/MM/YYYY') > moment());
    let UpcomingData = this.state.Data?.filter(
      i => moment(i.startDate, 'DD/MM/YYYY') > moment(),
    );
    this.setState({listData: UpcomingData});
  }
  manageData = bool => {
    var Data = [];
    if (bool) {
      Data = this.state.Data?.filter(
        i => moment(i.startDate, 'DD/MM/YYYY') > moment(),
      );
    } else {
      Data = this.state.Data?.filter(i => i.status == 'Cancelled');
    }

    this.setState({listData: Data});
  };
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: DynamicAppStyles.colorSet[COLOR_SCHEME].KellyGreen,
        }}>
        <Image style={styles.logoStyle} source={Logo} />
        <View style={styles.container}>
          <ScrollView contentContainerStyle={{alignItems: 'center'}}>
            <View style={styles.headerView}>
              <TouchableOpacity onPress={() => this.manageData(true)}>
                <Text style={styles.headerText}>Upcoming</Text>
              </TouchableOpacity>
              <LinearGradient
                colors={['#bcbcbc', '#000']}
                style={{width: wp(3), height: '100%'}}
              />
              <TouchableOpacity onPress={() => this.manageData(false)}>
                <Text style={styles.headerText}>Cancelled</Text>
              </TouchableOpacity>
            </View>
            <LinearGradient
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              colors={['#bcbcbc', '#000']}
              style={[styles.linearStyle]}
            />

            {this.state.listData?.length > 0 &&
              this.state.listData.map(item => {
                return (
                  <View style={styles.detailsView}>
                    <View style={{flexDirection: 'row'}}>
                      <Text style={styles.normalText1}>Order id</Text>
                      <Text style={styles.normalText}>: {item?.orderId}</Text>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                      <Text style={styles.normalText1}>Venue</Text>
                      <Text style={styles.normalText}>: {item?.venue}</Text>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                      <Text style={styles.normalText1}>Contact info</Text>
                      <Text style={styles.normalText}>: {item?.contact}</Text>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                      <Text style={styles.normalText1}>Schedule Date</Text>
                      <Text style={styles.normalText}>
                        : {item?.scheduleDate}
                      </Text>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                      <Text style={styles.normalText1}>Event type</Text>
                      <Text style={styles.normalText}>: {item?.eventType}</Text>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                      <Text style={styles.normalText1}>Payment</Text>
                      <Text style={styles.normalText}>: {item?.payment}</Text>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                      <Text style={styles.normalText1}>Paid Amount</Text>
                      <Text style={styles.normalText}>
                        : {item?.paidAmount}
                      </Text>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                      <Text style={styles.normalText1}>Due Amount</Text>
                      <Text style={styles.normalText}>: {item?.dueAmount}</Text>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                      <Text style={styles.normalText1}>Status</Text>
                      <Text style={styles.normalText}>: {item?.status}</Text>
                    </View>
                  </View>
                );
              })}
          </ScrollView>
        </View>
      </View>
    );
  }
}

export default Orders;
