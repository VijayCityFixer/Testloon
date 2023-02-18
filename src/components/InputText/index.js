import React, {Component, useEffect, useRef} from 'react';
import {View, StyleSheet, TextInput, Appearance} from 'react-native';
import {DynamicAppStyles} from '../../theme';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {RFValue} from 'react-native-responsive-fontsize';

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
  maxlength,
  searchlable,
  isFocus,
  onSubmitEditing,
  iconStyles,
  isPhone,
  multiline,
  numberOfLines,
}) => {
  const ref = useRef(null);
  const [isFocused, setIsFocused] = React.useState(false);

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
          onChangeText={onChangeText}
          placeholderTextColor={placeholderTextColor}
          selectionColor={selectionColor}
          editable={false}
          value={'+91'}
          secureTextEntry={secureTextEntry}
          style={[styles.phoneNumberView]}
        />
      )}
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
        secureTextEntry={secureTextEntry}
        maxLength={maxlength}
        autoFocus={isFocus}
        style={[styles.inputstyle, inputstyle]}
        onSubmitEditing={onSubmitEditing}
        multiline={multiline}
        numberOfLines={numberOfLines}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputstyle: {
    borderRadius: wp(2),
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: hp(6.3),
    flex: 1,
    paddingLeft: wp(10),
    borderWidth: 1,
    color: DynamicAppStyles.colorSet[COLOR_SCHEME].Black,
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
});
