import {Platform, StyleSheet, Appearance} from 'react-native';
import {DynamicAppStyles} from '../../theme';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const COLOR_SCHEME = Appearance.getColorScheme();

const styles = StyleSheet.create({
  selectedTextStyle: {
    color: DynamicAppStyles.colorSet[COLOR_SCHEME].Black,
    fontSize: DynamicAppStyles.fontSize.normal,
    fontFamily: DynamicAppStyles.fontFamily.RubikMedium,
  },
  icon: {
    marginRight: 5,
  },
  dropdown: {
    width: wp(85),
    height: hp(4),
    borderRadius: hp(1),
    paddingHorizontal: wp(3),
    marginVertical: hp(1),
    alignSelf:'center',
    marginBottom:hp(3),
    backgroundColor:'white',
    shadowColor:'#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 18.3,
    elevation: 5,
  },
  container: {
    backgroundColor: DynamicAppStyles.colorSet[COLOR_SCHEME].White,
    flex: 1,
    borderTopLeftRadius: hp(5),
    borderTopRightRadius: hp(5),
    paddingTop: hp(2),
  },
  logoImage: {
    height: hp(6),
    width: hp(6),
    alignSelf: 'center',
    marginVertical: hp(2),
  },
});
export default styles;
