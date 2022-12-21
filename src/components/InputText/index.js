import React, { Component, useEffect, useRef } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Appearance
} from "react-native";
import {  DynamicAppStyles } from "../../theme";
import { heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';

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
  containerstyle,
  iconstyle,
  onPress,
  closeicon,
  closeOnpress,
  isFocus,
  onSubmitEditing,
  size
}) => {
const ref = useRef(null)
const [isFocused, setIsFocused] = React.useState(false);

  return (
    <View style={[styles.inputtextstyle, inputtextstyle]}>
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
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputstyle: {
    borderRadius:wp(2),
    flexDirection: "row",
    justifyContent: "space-between",
    height:hp(6.3),
    flex:1,
    paddingLeft:wp(10),
    borderWidth:1,   
    color:DynamicAppStyles.colorSet[COLOR_SCHEME].Black,
  },

  inputtextstyle: {
    flexDirection:'row'
  },
  containerstyle: {
    justifyContent: "center",
    width: wp(9),
    alignSelf: "center",
  },

});