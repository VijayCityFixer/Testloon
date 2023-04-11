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
import {AddsSlider} from '../../components/AddsSlider';
import LinearGradient from 'react-native-linear-gradient';
import {Headers} from '../../components';

/******************** constants ********************/
const COLOR_SCHEME = Appearance.getColorScheme();

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Data: [],
      title: 'La-cassa Farms',
      data: [
        {
          Hotal: Hotal,
        },
        {
          Hotal: Hotal,
        },
        {
          Hotal: Hotal,
        },
      ],
      facilities: [
        '05 Rooms',
        'Free Wifi',
        'Air conditioner',
        'Television',
        '15 Guests Capacity',
      ],
      Policies: [
        'Check-in from 3:00 PM.',
        'Check-out till 12:00 PM.',
        'Breakfast - 08:00 - 10:30 hrs.',
        'Lunch - 12:30 - 14:30 hrs.',
        'Dinner - 20:00 - 23:00 hrs.',
        'We accept Master Card, Visa.',
        'We do not sell alcohol at the property however, you are allowed to carry your own.',
        'We request you to inform us in advance of your meal preference on the day of your arrival.',
        'Pet policy: We allow pets with their owners at the bungalow.',
      ],
      noOfDays: 2,
      mrp: 1499,
      price: 799,
      discount: '50% off',
    };
  }
  componentDidMount() {
    console.log(this.props.route.params.data);
    this.setState({Data: this.props.route.params.data});
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
          <Headers
            isBack={true}
            title={this.state.title}
            onPress={() => this.props.navigation.goBack()}
          />
          <ScrollView>
            <AddsSlider
              imageStyles={{height: hp(28)}}
              mainViewStyle={{height: hp(32)}}
              data={this.state.data}
              onPress={data => console.log(data)}
            />
            <TouchableOpacity>
              <Text style={styles.viewBtn}>View Gallary</Text>
            </TouchableOpacity>
            <View style={{paddingHorizontal: wp(4)}}>
              <Text style={styles.titleText}>Available facilities</Text>
              {this.state.facilities?.length > 0 &&
                this.state.facilities.map(item => {
                  return <Text style={styles.detailText}>* {item}</Text>;
                })}
              <Text style={styles.titleText}>Dining</Text>
              <Text style={styles.detailText}>
                Guests can indulge in the traditional Konkani or Goan Portuguese
                dishes when staying with us. From freshly baked pao breads
                served with authentic Goan sausages to freshly sourced rawa
                fried fish cooked in traditional Gomantak style, the meals at
                the bungalows are inspired by the flavours of the region. Our
                chefs will also be glad to cook delicacies as per guests’
                requests and as per local availability of ingredients. Guests
                can join our chefs in the kitchen to learn a thing or two about
                the local food or give a personal twist to their meals.
              </Text>

              <Text style={styles.titleText}>Policies</Text>
              {this.state.Policies?.length > 0 &&
                this.state.Policies.map(item => {
                  return <Text style={styles.detailText}>* {item}</Text>;
                })}
              <Text style={styles.titleText}>Pricing :</Text>
              <Text
                style={[
                  styles.detailText,
                  {
                    marginLeft: wp(5),
                  },
                ]}>
                {this.state.noOfDays} Day Stay
              </Text>
              <View style={styles.mrpView}>
                <Text style={styles.priceText}>₹ {this.state.Data?.price}</Text>
                <Text style={styles.mrpText}>{this.state.Data?.mrp}</Text>
                <Text style={styles.offText}>{this.state.Data?.discount}</Text>
              </View>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Schedule')}>
                <Text style={styles.btn}>Book</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}

export default Details;
