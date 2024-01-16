import React, {useState} from 'react';
import BottomSheet, { BottomSheetTextInput, TouchableOpacity } from '@gorhom/bottom-sheet';
import { StyleSheet, Text, View, Button, Keyboard } from 'react-native';
import { GestureHandlerRootView, TextInput } from 'react-native-gesture-handler';
import {useRef, useMemo, useCallback} from 'react'
import { Header } from '@/components/Header';
import { FormTarefa } from '@/components/FormTarefa';

export default function App() {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const handleOpenPress = () => bottomSheetRef.current?.expand();
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  // renders
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <View style={styles.container}>
      <Header />
      <FormTarefa />          
      </View>
    </GestureHandlerRootView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: 'grey',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor:'white',
  }
});


