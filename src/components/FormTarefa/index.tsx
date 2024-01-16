import { Text, View, Button, Keyboard } from 'react-native'
import { styles } from './style'
import React, {useState} from 'react';
import {useRef, useMemo, useCallback} from 'react'
import BottomSheet, { BottomSheetTextInput } from '@gorhom/bottom-sheet';


export function FormTarefa(){
    const bottomSheetRef = useRef<BottomSheet>(null);
    const handleOpenPress = () => bottomSheetRef.current?.expand();
    const snapPoints = useMemo(() => ['25%', '50%'], []);
    const handleCloseAction = () => {
        Keyboard.dismiss()
        bottomSheetRef.current?.close()
    
        }

    return( 
    <View style={styles.contentContainer}>
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
    </View>)
}