import { StyleSheet,Appearance } from "react-native";
import { DynamicAppStyles } from '../../theme';
import { heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';

const COLOR_SCHEME = Appearance.getColorScheme();

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: DynamicAppStyles.colorSet[COLOR_SCHEME].White,
    borderRadius: hp(3),
    borderWidth:1,
    alignSelf:'center',
    width:'100%'
  },
  subText:{
    color: DynamicAppStyles.colorSet[COLOR_SCHEME].DimGray,
    fontSize: DynamicAppStyles.fontSize.small,
    fontFamily: DynamicAppStyles.fontFamily.RubikRegular,
  },
  titleText:{
    marginTop:hp(.5),
    color: DynamicAppStyles.colorSet[COLOR_SCHEME].Black,
    fontSize: DynamicAppStyles.fontSize.middium,
    fontFamily: DynamicAppStyles.fontFamily.RubikMedium,
  }
});
export default styles;
