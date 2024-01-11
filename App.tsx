import React, {useState} from 'react';
import BottomSheet, { TouchableOpacity } from '@gorhom/bottom-sheet';
import { StyleSheet, Text, View, Button } from 'react-native';
import { GestureHandlerRootView, TextInput } from 'react-native-gesture-handler';
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

        <TouchableOpacity style={styles.botaoAdicionar} onPress={handleOpenPress}>
          <Icon name="plus" size={25}/>
        </TouchableOpacity>
          <BottomSheet
              ref={bottomSheetRef}
              index={1}
              snapPoints={snapPoints}
              enablePanDownToClose={true}
              >
              <View style={styles.contentContainer}>

              
              <TextInput style={styles.contentContainer} placeholder='Escreva a nova Tarefa.'> </TextInput>
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
    backgroundColor:'white',
  },
  botaoAdicionar:{
    flex:1,
    alignItems: 'flex-end',
    padding: 20,
  },
  entrada:{
    flex:1,
    backgroundColor: 'grey'
  }
});


