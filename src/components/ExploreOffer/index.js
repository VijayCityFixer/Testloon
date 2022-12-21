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
  import { SwiperFlatList } from 'react-native-swiper-flatlist';

/******************** StyleSheet ***************/
import styles from "./style";

/******************** constants ***************/
const COLOR_SCHEME = Appearance.getColorScheme();

export function ExploreOffer({ ImageData,onPress,mainViewStyle,TitleText}) {
  return (
    <View style={[styles.mainView,mainViewStyle]}>
      <Text style={styles.titleText}>{TitleText}</Text>
      <View style={{width:wp(100),alignItems:'center'}}>
      <Image
        style={{ width: wp(90),height:hp(30),borderRadius:hp(3)}}
        source={ImageData}
      />
      </View>
      <TouchableOpacity onPress={onPress} style={{marginTop:hp(5),marginBottom:hp(10)}}>
      <Text style={styles.exploreBtn}>Explore all offers</Text>
      </TouchableOpacity>
    </View>
  );
}