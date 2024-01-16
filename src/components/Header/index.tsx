import { Text, View, TouchableOpacity } from 'react-native'
import { styles } from './style'
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/AntDesign'
import {useRef, useMemo, useCallback} from 'react'
import BottomSheet from '@gorhom/bottom-sheet';

export function Header(){
    const bottomSheetRef = useRef<BottomSheet>(null);
    const handleOpenPress = () => bottomSheetRef.current?.expand();

    return( 
    <View style={styles.headerContainer}>

        <TouchableOpacity style={styles.botaoAdicionar} onPress={handleOpenPress} >
            <Icon name="plus" size={25}/>
        </TouchableOpacity>
    </View>)
}