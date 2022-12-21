import { StyleSheet,Appearance } from "react-native";
import { DynamicAppStyles } from '../../theme';
import { heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';

const COLOR_SCHEME = Appearance.getColorScheme();

const styles = StyleSheet.create({
  mainView: {
    backgroundColor: DynamicAppStyles.colorSet[COLOR_SCHEME].Black,
    width:'100%',
    // height:hp(50),
    marginVertical:hp(1)
  },
  titleText:{
    color: DynamicAppStyles.colorSet[COLOR_SCHEME].White,
    fontSize: DynamicAppStyles.fontSize.middium,
    fontFamily: DynamicAppStyles.fontFamily.RubikRegular,
    paddingStart:wp(4),
    marginVertical:hp(3)
  },
  exploreBtn:{
    color: DynamicAppStyles.colorSet[COLOR_SCHEME].White,
    fontSize: DynamicAppStyles.fontSize.normal,
    textAlign:'center',
    borderColor:DynamicAppStyles.colorSet[COLOR_SCHEME].White,
    borderWidth:1,
    paddingVertical:hp(1),
    marginHorizontal:wp(6),
  }
 
});
export default styles;
