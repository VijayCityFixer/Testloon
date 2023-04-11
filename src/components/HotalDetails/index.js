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

/******************** StyleSheet ***************/
import styles from "./style";

/******************** constants ***************/
const COLOR_SCHEME = Appearance.getColorScheme();

export function HotalDetails({ onPress, title, style ,subTitle,mrp,discount,price,image}) {
  return (
    <TouchableOpacity style={[styles.button,style]} onPress={onPress}>
        <View style={{borderWidth:0}}>
          <Image style={{width:wp(90),height:hp(15),borderTopRightRadius:hp(2),borderTopLeftRadius:hp(2)}} source={image} />
          <View style={{paddingHorizontal:wp(4)}}>
          <Text style={styles.titleText}>{title}</Text>
          <Text 
          style={styles.subText}>{subTitle}</Text>
          <View style={{flexDirection:'row',marginTop:hp(.5),marginBottom:hp(1.5)}}>
            <Text style={{
               color: DynamicAppStyles.colorSet[COLOR_SCHEME].Black,
               fontSize: DynamicAppStyles.fontSize.small,
               fontFamily: DynamicAppStyles.fontFamily.RubikSemiBold,
               paddingEnd:wp(2)
            }}>₹ {price}</Text>
            <Text
             style={{
               color: DynamicAppStyles.colorSet[COLOR_SCHEME].Silver,
               fontSize: DynamicAppStyles.fontSize.small,
               fontFamily: DynamicAppStyles.fontFamily.RubikSemiBold,
               textDecorationLine:'line-through',
               paddingEnd:wp(2)
            }}
            >{mrp}</Text>
            <Text style={{
               color: DynamicAppStyles.colorSet[COLOR_SCHEME].Red,
               fontSize: DynamicAppStyles.fontSize.xsmall,
               fontFamily: DynamicAppStyles.fontFamily.RubikLight,
            }}>{discount}</Text>
          </View>
          </View>
        </View>
    </TouchableOpacity>
  );
}