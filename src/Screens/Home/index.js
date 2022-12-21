import React, { Component } from 'react';
import { View, Appearance, Image, ScrollView,TouchableOpacity,Text } from 'react-native';
import { Logo, Hotal } from "../../assets";
import { DynamicAppStyles } from '../../theme';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { HotalDetails } from "../../components";
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import { AddsSlider } from '../../components/AddsSlider';
import { ExploreOffer } from '../../components/ExploreOffer';



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
          discount: '50% off'
        },
        {
          Hotal: Hotal,
          title: 'Hotal H',
          subTitle: 'Anand, Gujarat',
          price: 799,
          mrp: 1499,
          discount: '50% off'
        },
        {
          Hotal: Hotal,
          title: 'Darshan INN',
          subTitle: 'Anand, Gujarat',
          price: 799,
          mrp: 1499,
          discount: '50% off'
        }
      ]

    }
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: DynamicAppStyles.colorSet[COLOR_SCHEME].KellyGreen }}>
        <Image style={{ height: hp(5), width: hp(5), alignSelf: 'center', marginVertical: hp(2) }} source={Logo} />
        <ScrollView style={{ backgroundColor: DynamicAppStyles.colorSet[COLOR_SCHEME].White, flex: 1, borderTopLeftRadius: hp(5), borderTopRightRadius: hp(5) }}>
        <AddsSlider
        data={this.state.data}
        onPress={(data)=>console.log(data)}
        
        />
 <TouchableOpacity>
      <Text style={{color: DynamicAppStyles.colorSet[COLOR_SCHEME].White,
    fontSize: DynamicAppStyles.fontSize.normal,
    textAlign:'center',
    alignSelf:'center',
    padding:hp(1),
    paddingHorizontal:wp(10),
    backgroundColor:DynamicAppStyles.colorSet[COLOR_SCHEME].Black,
    borderRadius:hp(5)}}>Explore All</Text>
      </TouchableOpacity>
        <View style={{height:hp(32),borderWidth:1}}>
        <SwiperFlatList
      autoplay
      autoplayDelay={2}
      autoplayLoop
      index={2}
      showPagination
      data={this.state.data}
      paginationStyleItemActive={{backgroundColor:DynamicAppStyles.colorSet[COLOR_SCHEME].Black,height:10,width:10,marginTop:hp(1)}}
      paginationStyleItemInactive={{backgroundColor:'transparent',height:10,width:10,borderWidth:1,marginTop:hp(1)}}
      renderItem={({ item }) => (
        <HotalDetails
        style={{ width: wp(90),marginHorizontal:wp(5),elevation:10 }}
        image={Hotal}
        title={"La cassa"}
        subTitle={'Anand,Gujarat'}
        price={799}
        mrp={1499}
        discount={"50% off"}
      /> 
      )}
    />
    </View>
    <ExploreOffer
        ImageData={Hotal}
        onPress={(data)=>console.log(data)}
        TitleText={"Exclusive offers for you"}
        />
       
        </ScrollView>
      </View>
    );
  }
}

export default Home;
