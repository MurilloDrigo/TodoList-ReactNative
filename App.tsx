import React, { useRef, useCallback, useState } from 'react';
import BottomSheet from '@gorhom/bottom-sheet';
import { StyleSheet, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Header } from '@/components/Header';
import { FormTarefa } from '@/components/FormTarefa';
import { Body } from '@/components/Body';

export default function App() {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const [tarefas, setTarefas] = useState([]) 

  const handleOpenPress = () => {
    bottomSheetRef.current?.expand();
  };

  const handleCloseAction = () => {
    bottomSheetRef.current?.close();
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Header onOpenPress={handleOpenPress} />
        <Body tarefas={tarefas} setTarefas = {setTarefas}/>
        <FormTarefa onCloseAction={handleCloseAction} bottomSheetRef={bottomSheetRef}
        setTarefas = {setTarefas} />
      </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333333',
  },
});
