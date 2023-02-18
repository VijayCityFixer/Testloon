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
import Entypo from 'react-native-vector-icons/Entypo';
import styles from './style';
import {Dropdown} from 'react-native-element-dropdown';
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from 'react-native-simple-radio-button';
import DatePicker from 'react-native-date-picker';
import moment from 'moment/moment';

/******************** constants ********************/
const COLOR_SCHEME = Appearance.getColorScheme();

class Schedule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Data: [],
      Type: [
        {label: 'Relaxion', value: '1'},
        {label: 'Birthday', value: '2'},
      ],
      paymentOptions: [
        {label: 'Advance Token', value: 0},
        {label: 'Advance Payment', value: 1},
      ],
      DateModal: false,
      startDate: 'DD/MM/YYYY',
      endDate: 'DD/MM/YYYY',
      fromEnd: false,
      selectedPayment: 0,
    };
  }
  componentDidMount() {}
  render() {
    return (
      <View
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
          style={{
            backgroundColor: DynamicAppStyles.colorSet[COLOR_SCHEME].White,
            flex: 1,
            borderTopLeftRadius: hp(5),
            borderTopRightRadius: hp(5),
            paddingTop: hp(2),
          }}>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
              <Ionicons
                style={styles.backicon}
                color={'black'}
                name="arrow-back"
                size={30}
              />
            </TouchableOpacity>
            <Text
              style={{
                color: DynamicAppStyles.colorSet[COLOR_SCHEME].Black,
                fontSize: DynamicAppStyles.fontSize.middium,
                fontFamily: DynamicAppStyles.fontFamily.RubikMedium,
                alignSelf: 'center',
                width: wp(80),
                textAlign: 'center',
              }}>
              Schedule
            </Text>
          </View>
          <ScrollView contentContainerStyle={{paddingHorizontal: wp(4)}}>
            <Text
              style={{
                color: DynamicAppStyles.colorSet[COLOR_SCHEME].Black,
                fontSize: DynamicAppStyles.fontSize.normal,
                fontFamily: DynamicAppStyles.fontFamily.RubikMedium,
                marginVertical: hp(2),
              }}>
              Date of Stay
            </Text>
            <View style={{borderWidth: 1, borderRadius: hp(2)}}>
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
                    this.setState({DateModal: true, fromEnd: false})
                  }
                  style={{
                    color: DynamicAppStyles.colorSet[COLOR_SCHEME].Red,
                    fontSize: DynamicAppStyles.fontSize.xsmall,
                    fontFamily: DynamicAppStyles.fontFamily.RubikMedium,
                  }}>
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
                    ? this.setState({endDate: date, DateModal: false})
                    : this.setState({startDate: date, DateModal: false})
                }
                onCancel={() => this.setState({DateModal: false})}
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
                    this.setState({DateModal: true, fromEnd: true})
                  }
                  style={{
                    color: DynamicAppStyles.colorSet[COLOR_SCHEME].Red,
                    fontSize: DynamicAppStyles.fontSize.xsmall,
                    fontFamily: DynamicAppStyles.fontFamily.RubikMedium,
                  }}>
                  Edit
                </Text>
              </View>
            </View>
            <Text
              style={{
                color: DynamicAppStyles.colorSet[COLOR_SCHEME].Black,
                fontSize: DynamicAppStyles.fontSize.normal,
                fontFamily: DynamicAppStyles.fontFamily.RubikMedium,
                marginVertical: hp(2),
              }}>
              Guests
            </Text>
            <View style={{borderWidth: 1, borderRadius: hp(2)}}></View>
            <Text
              style={{
                color: DynamicAppStyles.colorSet[COLOR_SCHEME].Black,
                fontSize: DynamicAppStyles.fontSize.normal,
                fontFamily: DynamicAppStyles.fontFamily.RubikMedium,
                marginVertical: hp(2),
              }}>
              Event
            </Text>
            <View style={{borderWidth: 1, borderRadius: hp(2)}}>
              <Dropdown
                style={[styles.dropdown]}
                data={this.state.Type}
                selectedTextStyle={styles.selectedTextStyle}
                maxHeight={300}
                labelField="label"
                valueField="value"
                value={'1'}
                placeholder={'Select City'}
                onChange={item => {
                  this.setState({currentCity: item.value});
                }}
                itemTextStyle={{
                  color: DynamicAppStyles.colorSet[COLOR_SCHEME].Black,
                }}
                renderLeftIcon={() => (
                  <Entypo
                    style={styles.icon}
                    color={'black'}
                    name="location-pin"
                    size={20}
                  />
                )}
              />
            </View>
            <Text
              style={{
                color: DynamicAppStyles.colorSet[COLOR_SCHEME].Black,
                fontSize: DynamicAppStyles.fontSize.normal,
                fontFamily: DynamicAppStyles.fontFamily.RubikMedium,
                marginVertical: hp(2),
              }}>
              Payment
            </Text>
            <View style={{borderWidth: 1, borderRadius: hp(2)}}>
              <RadioForm formHorizontal={false} animation={true}>
                {this.state.paymentOptions?.map((obj, i) => (
                  <RadioButton labelHorizontal={true} key={i}>
                    <RadioButtonInput
                      obj={obj}
                      index={i}
                      isSelected={this.state.selectedPayment === i}
                      onPress={() => this.setState({selectedPayment: i})}
                      borderWidth={2.5}
                      buttonInnerColor={
                        DynamicAppStyles.colorSet[COLOR_SCHEME].Silver
                      }
                      buttonOuterColor={
                        this.state.selectedPayment === i
                          ? DynamicAppStyles.colorSet[COLOR_SCHEME].Silver
                          : '#000'
                      }
                      buttonSize={10}
                      buttonOuterSize={20}
                      buttonWrapStyle={{margin: hp(1), marginLeft: wp(5)}}
                    />
                    <RadioButtonLabel
                      obj={obj}
                      index={i}
                      labelHorizontal={true}
                      onPress={() => this.setState({selectedPayment: i})}
                      labelStyle={{
                        color: DynamicAppStyles.colorSet[COLOR_SCHEME].Black,
                        fontSize: DynamicAppStyles.fontSize.xsmall,
                        fontFamily: DynamicAppStyles.fontFamily.RubikRegular,
                      }}
                      labelWrapStyle={{}}
                    />
                  </RadioButton>
                ))}
              </RadioForm>
            </View>
          </ScrollView>
          <TouchableOpacity style={styles.bookBtn}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
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
