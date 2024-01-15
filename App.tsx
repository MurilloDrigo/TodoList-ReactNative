import React, {useState} from 'react';
import BottomSheet, { BottomSheetTextInput, TouchableOpacity } from '@gorhom/bottom-sheet';
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
     
        <TouchableOpacity style={styles.botaoAdicionar} onPress={handleOpenPress} >
            <Icon name="plus" size={25}/>
        </TouchableOpacity>
  
          <BottomSheet
              ref={bottomSheetRef}
              index={1}
              snapPoints={snapPoints}
              enablePanDownToClose={true}
              >
            
            <BottomSheetTextInput style={styles.input} placeholder='Escreva aqui a nova tarefa' />
            
        <View style={styles.contentContainer}>
          <Button title="Salvar" onPress={handleCloseAction} />
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
    alignItems: 'flex-end',
    padding: 20,
    marginLeft: 260,
    marginTop: 20,
    backgroundColor: "white",
    borderRadius: 20
  },
  input: {
    marginTop: 8,
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 10,
    borderRadius: 10,
    fontSize: 16,
    lineHeight: 20,
    padding: 8,
    backgroundColor: 'rgba(151, 151, 151, 0.25)',
  },
  entrada:{
    flex:1,
    backgroundColor: 'grey'
  }
});


