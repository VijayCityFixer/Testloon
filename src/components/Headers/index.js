import React from 'react';
import {Text, TouchableOpacity, Appearance, View, Image} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {DynamicAppStyles} from '../../theme';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';

/******************** StyleSheet ***************/
import styles from './style';

/******************** constants ***************/
const COLOR_SCHEME = Appearance.getColorScheme();

export function Headers({title, isBack, onPress, linearViewStyle, titleStyle}) {
  return (
    <View>
      <View style={{flexDirection: 'row'}}>
        {isBack && (
          <TouchableOpacity
            style={{position: 'absolute', left: wp(6),zIndex:1}}
            onPress={() => onPress()}>
            <Ionicons
              style={styles.icon}
              color={'black'}
              name="arrow-back"
              size={wp(8)}
            />
          </TouchableOpacity>
        )}
        <Text style={[styles.mainTitle, titleStyle]}>{title}</Text>
      </View>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={['#bcbcbc', '#000']}
        style={[styles.linearStyle, linearViewStyle]}
      />
    </View>
  );
}
