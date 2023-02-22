import {Platform, StyleSheet, Appearance} from 'react-native';
import {DynamicAppStyles} from '../../theme';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const COLOR_SCHEME = Appearance.getColorScheme();

const styles = StyleSheet.create({
  icon: {
    marginLeft: wp(6),
  },
  logoStyle: {
    height: hp(5),
    width: hp(5),
    alignSelf: 'center',
    marginVertical: hp(2),
  },
  container: {
    backgroundColor: DynamicAppStyles.colorSet[COLOR_SCHEME].White,
    flex: 1,
    borderTopLeftRadius: hp(5),
    borderTopRightRadius: hp(5),
    paddingTop: hp(2),
  },
  titleText: {
    color: DynamicAppStyles.colorSet[COLOR_SCHEME].Black,
    fontSize: DynamicAppStyles.fontSize.middium,
    fontFamily: DynamicAppStyles.fontFamily.RubikMedium,
    alignSelf: 'center',
    width: wp(80),
    textAlign: 'center',
  },
  editText: {
    color: DynamicAppStyles.colorSet[COLOR_SCHEME].Red,
    fontSize: DynamicAppStyles.fontSize.xsmall,
    fontFamily: DynamicAppStyles.fontFamily.RubikRegular,
  },
  normalText: {
    color: DynamicAppStyles.colorSet[COLOR_SCHEME].Black,
    fontSize: DynamicAppStyles.fontSize.xsmall,
    fontFamily: DynamicAppStyles.fontFamily.RubikRegular,
    width: wp(65),
    paddingHorizontal: wp(3),
  },
  detailsView: {
    borderWidth: 1,
    borderRadius: hp(2),
    paddingVertical: hp(2),
    paddingLeft: wp(5),
    marginBottom: hp(2),
  },
  headerView: {
    flexDirection: 'row',
    width: wp(100),
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    color: DynamicAppStyles.colorSet[COLOR_SCHEME].Black,
    fontSize: DynamicAppStyles.fontSize.xmiddium,
    fontFamily: DynamicAppStyles.fontFamily.RubikRegular,
    textAlign: 'center',
    paddingVertical: hp(1),
  },
  linearStyle: {
    height: hp(1.3),
    width: wp(100),
  },
  btnView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: wp(95),
    paddingHorizontal: wp(5),
    alignItems: 'center',
    paddingVertical: hp(1),
  },
  editBtn: {
    position: 'absolute',
    bottom: 5,
    right: 0,
    borderRadius: hp(2),
    backgroundColor: DynamicAppStyles.colorSet[COLOR_SCHEME].KellyGreen,
    padding: 3,
  },
  editBtnView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginVertical: hp(4),
  },
  textInput: {
    marginBottom: hp(3),
    marginLeft: wp(12),
    marginRight: wp(6),
  },
  btnStyle: {
    width: wp(45),
    marginBottom: hp(4),
    alignSelf: 'center',
    marginVertical: hp(4),
  },
});
export default styles;
