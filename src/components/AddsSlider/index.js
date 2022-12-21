import React from 'react';
import {
    Text, 
    TouchableOpacity,
    Appearance,
    View,
    Image
  } from "react-native";
  import { heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';
  import {  DynamicAppStyles } from "../../theme";
  import {  Hotal } from "../../assets";
  import { SwiperFlatList } from 'react-native-swiper-flatlist';

/******************** StyleSheet ***************/
import styles from "./style";

/******************** constants ***************/
const COLOR_SCHEME = Appearance.getColorScheme();

export function AddsSlider({ data,onPress,mainViewStyle}) {
  return (
    <View style={[styles.mainView,mainViewStyle]}>
        <SwiperFlatList
      autoplay
      autoplayDelay={2}
      autoplayLoop
      index={2}
      showPagination
      data={data}
      paginationStyleItemActive={{backgroundColor:DynamicAppStyles.colorSet[COLOR_SCHEME].Black,height:10,width:10,marginTop:hp(1)}}
      paginationStyleItemInactive={{backgroundColor:'transparent',height:10,width:10,borderWidth:1,marginTop:hp(1)}}
      renderItem={({ item }) => (
        <Image
        style={{ width: wp(84),marginHorizontal:wp(8),elevation:10,height:hp(18),borderRadius:hp(3)}}
        source={item?.Hotal}
      /> 
      
      // <Views style={{width:400,height:200,backgroundColor:'red'}}/>
      )}
    />
    </View>
    
  );
}