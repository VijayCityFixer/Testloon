import React, { Component } from 'react';
import {
  View,
  Appearance,
  Image,
  ScrollView,
  TouchableOpacity,
  Text,
} from 'react-native';
import { Logo, Hotal } from '../../assets';
import { DynamicAppStyles } from '../../theme';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { HotalDetails } from '../../components';
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import { AddsSlider } from '../../components/AddsSlider';
import { ExploreOffer } from '../../components/ExploreOffer';
import { Dropdown } from 'react-native-element-dropdown';
import styles from './style';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

/******************** constants ********************/
const COLOR_SCHEME = Appearance.getColorScheme();
const colors = ['tomato', 'thistle', 'skyblue', 'teal'];

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
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
      City: [
        { label: 'Surat', value: '1' },
        { label: 'Anand', value: '2' },
        { label: 'Baroda', value: '3' },
        { label: 'Ahmedabad', value: '4' },
        { label: 'Nadiad', value: '5' },
      ],
    };
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: DynamicAppStyles.colorSet[COLOR_SCHEME].KellyGreen,
        }}>
        <Image style={styles.headerImage} source={Logo} />
        <View style={styles.mainView}>
          <ScrollView>
            <Text
              style={styles.locarionText}>
              Location
            </Text>
            <Dropdown
              style={[styles.dropdown]}
              data={this.state.City}
              selectedTextStyle={styles.selectedTextStyle}
              maxHeight={300}
              labelField="label"
              valueField="value"
              value={'1'}
              placeholder={'Select City'}
              itemTextStyle={{
                color: DynamicAppStyles.colorSet[COLOR_SCHEME].Black,
              }}
              onChange={item => {
                this.setState({ currentCity: item.value });
              }}
              renderLeftIcon={() => (
                <Ionicons
                  style={styles.icon}
                  color={'black'}
                  name="location-sharp"
                  size={hp(3)}
                />
              )}
              renderRightIcon={() => (
                <AntDesign
                  style={styles.icon}
                  color={'black'}
                  name="caretdown"
                  size={hp(2)}
                />
              )}
            />
            <AddsSlider
              data={this.state.data}
              onPress={data => console.log(data)}
            />
            <View style={{ height: hp(36) }}>
              <Text style={styles.subTitle}>
                Recommended Relaxation Farms for you
              </Text>
              <SwiperFlatList
                paginationStyleItem={{ marginRight: 1 }}
                autoplay
                autoplayDelay={2}
                autoplayLoop
                index={2}
                showPagination
                data={this.state.data}
                paginationStyleItemActive={{
                  backgroundColor:
                    DynamicAppStyles.colorSet[COLOR_SCHEME].Black,
                  height: 9,
                  width: 9,
                  marginTop: hp(1),
                }}
                paginationStyleItemInactive={{
                  backgroundColor: 'transparent',
                  height: 9,
                  width: 9,
                  borderWidth: 1,
                  marginTop: hp(1),
                }}
                renderItem={({ item }) => (
                  <HotalDetails
                    style={{
                      width: wp(90),
                      marginHorizontal: wp(5),
                      elevation: 10,
                    }}
                    image={Hotal}
                    title={'La cassa'}
                    subTitle={'Anand,Gujarat'}
                    price={799}
                    mrp={1499}
                    discount={'50% off'}
                  />
                )}
              />
            </View>
            <ExploreOffer
              ImageData={Hotal}
              onPress={() => this.props.navigation.navigate('ExploreAll')}
              TitleText={'Exclusive offers for you'}
            />
            <TouchableOpacity
              style={styles.exploreView}
              onPress={() => this.props.navigation.navigate('ExploreAll')}>
              <Text style={styles.exploreBtn}>Explore All</Text>
            </TouchableOpacity>

            <Text style={[styles.subTitle, { marginBottom: hp(2) }]}>
              Recommended party plot for events
            </Text>
            <SwiperFlatList
              paginationStyleItem={{ marginRight: 1 }}
              autoplay
              autoplayDelay={2}
              autoplayLoop
              index={2}
              showPagination
              data={this.state.data}
              paginationStyleItemActive={{
                backgroundColor: DynamicAppStyles.colorSet[COLOR_SCHEME].Black,
                height: 9,
                width: 9,
                marginTop: hp(1),
              }}
              paginationStyleItemInactive={{
                backgroundColor: 'transparent',
                height: 9,
                width: 9,
                borderWidth: 1,
                marginTop: hp(1),
              }}
              renderItem={({ item }) => (
                <HotalDetails
                  style={styles.hotalDetailsView}
                  image={Hotal}
                  title={'La cassa'}
                  subTitle={'Anand,Gujarat'}
                  price={799}
                  mrp={1499}
                  discount={'50% off'}
                />
              )}
            />
          </ScrollView>
        </View>
      </View>
    );
  }
}

export default Home;
