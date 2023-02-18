import React, {Component} from 'react';
import {View, Appearance, ScrollView, Image} from 'react-native';
import {HotalDetails} from '../../components';
import {Logo, Hotal} from '../../assets';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {DynamicAppStyles} from '../../theme';
import Entypo from 'react-native-vector-icons/Entypo';
import styles from './style';
import {Dropdown} from 'react-native-element-dropdown';

/******************** constants ********************/
const COLOR_SCHEME = Appearance.getColorScheme();

class ExploreAll extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Data: [
        {
          Hotal: Hotal,
          title: 'La cassa',
          subTitle: 'Anand, Gujarat',
          price: 799,
          mrp: 1499,
          discount: '50% off',
        },
        {
          Hotal: Hotal,
          title: 'Hotal H',
          subTitle: 'Anand, Gujarat',
          price: 799,
          mrp: 1499,
          discount: '50% off',
        },
        {
          Hotal: Hotal,
          title: 'Darshan INN',
          subTitle: 'Anand, Gujarat',
          price: 799,
          mrp: 1499,
          discount: '50% off',
        },
        {
          Hotal: Hotal,
          title: 'La cassa',
          subTitle: 'Anand, Gujarat',
          price: 799,
          mrp: 1499,
          discount: '50% off',
        },
        {
          Hotal: Hotal,
          title: 'Hotal H',
          subTitle: 'Anand, Gujarat',
          price: 799,
          mrp: 1499,
          discount: '50% off',
        },
        {
          Hotal: Hotal,
          title: 'Darshan INN',
          subTitle: 'Anand, Gujarat',
          price: 799,
          mrp: 1499,
          discount: '50% off',
        },
      ],
      Type: [
        {label: 'Relaxion', value: '1'},
        {label: 'Birthday', value: '2'},
      ],
      currentCity: '1',
    };
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: DynamicAppStyles.colorSet[COLOR_SCHEME].KellyGreen,
        }}>
        <Image style={styles.logoImage} source={Logo} />
        <View style={styles.container}>
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
          <ScrollView>
            {this.state.Data?.length > 0 &&
              this.state.Data.map(item => {
                return (
                  <HotalDetails
                    style={{
                      width: wp(90),
                      marginHorizontal: wp(5),
                      elevation: 10,
                      marginBottom: hp(2),
                    }}
                    image={Hotal}
                    title={'La cassa'}
                    subTitle={'Anand,Gujarat'}
                    price={799}
                    mrp={1499}
                    discount={'50% off'}
                    onPress={() =>
                      this.props.navigation.navigate('Details', {data: item})
                    }
                  />
                );
              })}
          </ScrollView>
        </View>
      </View>
    );
  }
}

export default ExploreAll;
