import React, { Component, useEffect, useRef } from 'react';
import { View, StyleSheet, TextInput, Appearance, Text, TouchableOpacity } from 'react-native';
import { DynamicAppStyles } from '../../theme';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { RFValue } from 'react-native-responsive-fontsize';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const COLOR_SCHEME = Appearance.getColorScheme();

export const InputText = ({
  placeholder,
  keyboardType,
  placeholderTextColor,
  selectionColor,
  inputtextstyle,
  onChangeText,
  onSubmit,
  inputstyle,
  value,
  editable,
  secureTextEntry,
  maxlength = 50,
  searchlable,
  isFocus,
  onSubmitEditing,
  iconStyles,
  isPhone,
  multiline = false,
  numberOfLines = 1,
  errorText,
}) => {
  const ref = useRef(null);
  const [isFocused, setIsFocused] = React.useState(false);
  const [visibility, setVisibility] = React.useState(
    secureTextEntry ? true : false,
  );
  return (
    <View style={[styles.inputtextstyle, inputtextstyle]}>
      {searchlable && (
        <MaterialIcons
          name="search"
          color={DynamicAppStyles.colorSet[COLOR_SCHEME].Black}
          size={30}
          style={[styles.iconStyles, iconStyles]}
        />
      )}
      {isPhone && (
        <TextInput
          ref={_ref => {
            ref.current = _ref;
          }}
          placeholderTextColor={placeholderTextColor}
          selectionColor={selectionColor}
          editable={false}
          value={'+91'}
          secureTextEntry={secureTextEntry}
          style={[styles.phoneNumberView]}
        />
      )}
      <View style={{ flex: 1, }}>
        <TextInput
          ref={_ref => {
            ref.current = _ref;
          }}
          placeholder={placeholder}
          keyboardType={keyboardType}
          onChangeText={onChangeText}
          placeholderTextColor={placeholderTextColor}
          selectionColor={selectionColor}
          autoCapitalize="none"
          onSubmit={onSubmit}
          value={value}
          editable={editable}
          secureTextEntry={visibility}
          maxLength={maxlength}
          autoFocus={isFocus}
          style={[styles.inputstyle, inputstyle]}
          onSubmitEditing={onSubmitEditing}
          multiline={multiline}
          numberOfLines={numberOfLines}
        />
        {errorText?.length > 0 && (
          <Text style={styles.errorText}>{errorText}</Text>
        )}
        {secureTextEntry && (
          <TouchableOpacity
            style={{ position: 'absolute', right: wp(4), top: hp(2) }}
            onPress={() => setVisibility(!visibility)}>
            <FontAwesome
              name={visibility ? 'eye-slash' : 'eye'}
              size={hp(2.2)}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputstyle: {
    borderRadius: wp(2),
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: hp(6.3),
    paddingLeft: wp(10),
    borderWidth: 1,
    color: DynamicAppStyles.colorSet[COLOR_SCHEME].Black,
    width: '100%'
  },
  inputtextstyle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconStyles: {
    paddingLeft: wp(4),
  },
  phoneNumberView: {
    borderRadius: wp(2),
    height: hp(6.3),
    borderWidth: 1,
    color: DynamicAppStyles.colorSet[COLOR_SCHEME].Black,
    width: wp(13),
    textAlign: 'center',
    marginRight: wp(5),
  },
  errorText: {
    color: DynamicAppStyles.colorSet[COLOR_SCHEME].Red,
    fontSize: DynamicAppStyles.fontSize.xsmall,
    fontFamily: DynamicAppStyles.fontFamily.RubikRegular,
  },
});
