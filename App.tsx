import React, {useState} from 'react';
import BottomSheet from '@gorhom/bottom-sheet';
import { StyleSheet, Text, View, Button } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import {useRef, useMemo, useCallback} from 'react'
import Icon from 'react-native-vector-icons/AntDesign'
 
export default function App() {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ['25%', '50%'], []);

  // callbacks
  const handleCloseAction = () => bottomSheetRef.current?.close()
  const handleOpenPress = () => bottomSheetRef.current?.expand();
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  // renders
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <View style={styles.container}>

        <Button title="Abrir" onPress={handleOpenPress} />
          <Icon name="plus" color="FFF" />
          <BottomSheet
            ref={bottomSheetRef}
            index={1}
            snapPoints={snapPoints}
            enablePanDownToClose={true}
            onChange={handleSheetChanges}
            >
            <View style={styles.contentContainer}>
              <Text>Awesome 🎉</Text>
              <Button title="Fechar" onPress={handleCloseAction} />
            </View>
          </BottomSheet>
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
  },
});


