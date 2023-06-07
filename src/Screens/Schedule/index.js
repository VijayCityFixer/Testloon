import React, { Component } from 'react';
import {
  View,
  Appearance,
  ScrollView,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';
import { Logo, Hotal } from '../../assets';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { DynamicAppStyles } from '../../theme';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import styles from './style';
import { Dropdown } from 'react-native-element-dropdown';
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from 'react-native-simple-radio-button';
import DatePicker from 'react-native-date-picker';
import moment from 'moment/moment';
import { Headers } from '../../components';
import AntDesign from 'react-native-vector-icons/AntDesign';

/******************** constants ********************/
const COLOR_SCHEME = Appearance.getColorScheme();

class Schedule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Data: [],
      Type: [
        { label: 'Relaxion', value: '1' },
        { label: 'Birthday', value: '2' },
      ],
      paymentOptions: [
        { label: 'Advance Token', value: 0, price: '$ 5000' },
        { label: 'Advance Payment', value: 1, price: '$ 10000' },
      ],
      DateModal: false,
      startDate: 'DD/MM/YYYY',
      endDate: 'DD/MM/YYYY',
      fromEnd: false,
      selectedPayment: 0,
    };
  }
  componentDidMount() { }
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: DynamicAppStyles.colorSet[COLOR_SCHEME].KellyGreen,
        }}>
        <Image
          style={styles.logo}
          source={Logo}
        />

        <View
          style={styles.containerView}>
          <Headers
            onPress={() => this.props.navigation.goBack()}
            isBack={true}
            title={'Schedule'}
          />
          <ScrollView contentContainerStyle={{ paddingHorizontal: wp(4) }}>
            <Text
              style={styles.titleText}>
              Date of Stay
            </Text>
            <View style={{ borderWidth: 1, borderRadius: hp(2) }}>
              <View
                style={{
                  padding: wp(3),
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <View>
                  <Text
                    style={{
                      color: DynamicAppStyles.colorSet[COLOR_SCHEME].Black,
                      fontSize: DynamicAppStyles.fontSize.xsmall,
                      fontFamily: DynamicAppStyles.fontFamily.RubikMedium,
                    }}>
                    {this.state.startDate == 'DD/MM/YYYY'
                      ? 'DD/MM/YYYY'
                      : moment(this.state.startDate).format(
                        'ddd, DD, MMM YYYY',
                      )}
                  </Text>
                  <Text
                    style={{
                      color: DynamicAppStyles.colorSet[COLOR_SCHEME].Silver,
                      fontSize: DynamicAppStyles.fontSize.xxsmall,
                      fontFamily: DynamicAppStyles.fontFamily.RubikMedium,
                    }}>
                    Check-in 09:00 AM
                  </Text>
                </View>
                <Text
                  onPress={() =>
                    this.setState({ DateModal: true, fromEnd: false })
                  }
                  style={styles.editText}>
                  Edit
                </Text>
              </View>
              <DatePicker
                theme={COLOR_SCHEME}
                modal={true}
                open={this.state.DateModal}
                date={new Date()}
                onConfirm={date =>
                  this.state.fromEnd
                    ? this.setState({ endDate: date, DateModal: false })
                    : this.setState({ startDate: date, DateModal: false })
                }
                onCancel={() => this.setState({ DateModal: false })}
                mode={'date'}
              />
              <View
                style={{
                  padding: wp(3),
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <View>
                  <Text
                    style={{
                      color: DynamicAppStyles.colorSet[COLOR_SCHEME].Black,
                      fontSize: DynamicAppStyles.fontSize.xsmall,
                      fontFamily: DynamicAppStyles.fontFamily.RubikMedium,
                    }}>
                    {this.state.endDate == 'DD/MM/YYYY'
                      ? 'DD/MM/YYYY'
                      : moment(this.state.endDate).format('ddd, DD, MMM YYYY')}
                  </Text>
                  <Text
                    style={{
                      color: DynamicAppStyles.colorSet[COLOR_SCHEME].Silver,
                      fontSize: DynamicAppStyles.fontSize.xxsmall,
                      fontFamily: DynamicAppStyles.fontFamily.RubikMedium,
                    }}>
                    Check-in 09:00 AM
                  </Text>
                </View>
                <Text
                  onPress={() =>
                    this.setState({ DateModal: true, fromEnd: true })
                  }
                  style={styles.editText}>
                  Edit
                </Text>
              </View>
            </View>
            <Text
              style={styles.titleText}>
              Guests
            </Text>
            <View
              style={styles.guestView}>
              <View>
                <Text
                  style={styles.subText}>
                  Guests
                </Text>
              </View>
              <Text
                style={styles.editText}>
                Edit
              </Text>
            </View>

            <Text
              style={styles.titleText}>
              Event
            </Text>
            <View style={{ borderWidth: 1, borderRadius: hp(2) }}>
              <Dropdown
                style={[styles.dropdown]}
                data={this.state.Type}
                selectedTextStyle={styles.selectedTextStyle}
                maxHeight={300}
                labelField="label"
                valueField="value"
                value={'0'}
                placeholderStyle={{ color: DynamicAppStyles.colorSet[COLOR_SCHEME].DimGray }}
                placeholder={'Please select event'}
                onChange={item => {
                  this.setState({ currentCity: item.value });
                }}
                itemTextStyle={{
                  color: DynamicAppStyles.colorSet[COLOR_SCHEME].Black,
                }}
                renderRightIcon={() => (
                  <AntDesign
                    style={styles.icon}
                    color={'black'}
                    name="caretdown"
                    size={hp(2)}
                  />
                )}
                renderLeftIcon={() => (
                  null
                )}
              />
            </View>
            <Text
              style={styles.titleText}>
              Payment
            </Text>
            <View style={{ borderWidth: 1, borderRadius: hp(2) }}>
              {this.state.paymentOptions?.map((obj, i) => (
                <TouchableOpacity onPress={() => this.setState({ selectedPayment: i })}>

                  <View style={{ flexDirection: 'row', margin: hp(1), marginLeft: wp(5), alignItems: 'center' }}>
                    <View style={[styles.radioView, this.state.selectedPayment === i ? { opacity: 1 } : { opacity: 0.5 }]}>
                      {this.state.selectedPayment == i ? < View style={{ backgroundColor: DynamicAppStyles.colorSet[COLOR_SCHEME].Black, height: hp(1.3), width: hp(1.3), borderRadius: hp(0.75) }} /> : null}
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: wp(3) }}>
                      <Text
                        style={styles.paymentlabel}>
                        {obj.label}
                      </Text>
                      <Text
                        onPress={() =>
                          this.setState({ DateModal: true, fromEnd: false })
                        }
                        style={{
                          color: DynamicAppStyles.colorSet[COLOR_SCHEME].Red,
                          fontSize: DynamicAppStyles.fontSize.xsmall,
                          fontFamily: DynamicAppStyles.fontFamily.RubikMedium,
                        }}>
                        {obj.price}
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('OrderSummary')}
            style={styles.bookBtn}>
            <View
              style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={styles.btnText}>$5000</Text>
              <Text style={styles.btnText}>Pay & Book</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Schedule;
