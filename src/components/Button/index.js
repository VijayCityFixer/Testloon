import React from 'react';
import {
    Text, 
    TouchableOpacity,
    Appearance
  } from "react-native";
  import {  DynamicAppStyles } from "../../theme";

/******************** StyleSheet ***************/
import styles from "./style";

/******************** constants ***************/
const COLOR_SCHEME = Appearance.getColorScheme();

export function Button({ onPress, title, style ,Txtstyle}) {
  return (
    <TouchableOpacity style={[styles.button,style ]} onPress={onPress}>
        <Text style={[{...styles.TxtTitle,...Txtstyle}]}>{title}</Text>
    </TouchableOpacity>
  );
}