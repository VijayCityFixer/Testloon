import {Platform, Dimensions, Appearance} from 'react-native';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';

const WINDOW_WIDTH = Dimensions.get('window').width;
const WINDOW_HEIGHT = Dimensions.get('window').height;
const COLOR_SCHEME = Appearance.getColorScheme();

const lightColorSet = {
  White: '#FFFFFF',
  Black: '#000000',
  Silver: '#C4C4C4',
  KellyGreen: '#12AE19',
  Red: '#FF0505',
  WhiteSmoke: '#F5F5F5',
  DimGray: '#6B6B6B',
  NeonBlue: '#2945FF',
};

const darkColorSet = {
  White: '#FFFFFF',
  Black: '#000000',
  Silver: '#C4C4C4',
  KellyGreen: '#12AE19',
  Red: '#FF0505',
  WhiteSmoke: '#F5F5F5',
  DimGray: '#6B6B6B',
  NeonBlue: '#2945FF',
};

const colorSet = {
  dark: darkColorSet,
  light: lightColorSet,
  'no-preference': lightColorSet,
};

const fontFamily = {
  RubikLight: 'Rubik-Light',
  RubikMedium: 'Rubik-Medium',
  RubikRegular: 'Rubik-Regular',
  RubikSemiBold: 'Rubik-SemiBold',
  RubikBold: 'Rubik-Bold',
  RubikExtraBold: 'Rubik-ExtraBold',
  RubikBlack: 'Rubik-Black',
  RubikItalic: 'Rubik-Italic',
  RubikBlackItalic: 'Rubik-BlackItalic',
  RubikBoldItalic: 'Rubik-BoldItalic',
  RubikExtraBoldItalic: 'Rubik-ExtraBoldItalic',
  RubikLightItalic: 'Rubik-LightItalic',
  RubikMediumItalic: 'Rubik-MediumItalic',
  RubikSemiBoldItalic: 'Rubik-SemiBoldItalic',
};

const fontSize = {
  xxlarge: RFValue(40),
  xlarge: RFValue(30),
  large: RFValue(25),
  xmiddium: RFValue(20),
  middium: RFValue(18),
  normals: RFValue(17),
  normal: RFValue(16),
  xnormal: RFValue(15),
  small: RFValue(14),
  msmall: RFValue(13),
  xsmall: RFValue(12),
  xmsmall: RFValue(11),
  xxsmall: RFValue(10),
  xxxsmall: RFValue(9),
  title: RFValue(30),
  content: RFValue(20),
};

const StyleDict = {
  colorSet,
  fontFamily,
  fontSize,
  WINDOW_WIDTH,
  WINDOW_HEIGHT,
};

export default StyleDict;
