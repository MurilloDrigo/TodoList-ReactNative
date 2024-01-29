import React, { useRef, useState } from 'react';
import { View } from "react-native";
import BottomSheet from '@gorhom/bottom-sheet';

import { Body } from "@/components/Body";
import { FormTarefa } from "@/components/FormTarefa";
import { Header } from "@/components/Header";

import {styles} from "./styles"

export function Home(){
    const bottomSheetRef = useRef<BottomSheet>(null);
    const [tarefas, setTarefas] = useState([]) 

    const handleOpenPress = () => {
        bottomSheetRef.current?.expand();
    };

    const handleCloseAction = () => {
        bottomSheetRef.current?.close();
    };
    
    return(
        <View style={styles.container}>
            <Header onOpenPress={handleOpenPress} />
            <Body tarefas={tarefas} setTarefas = {setTarefas}/>
            <FormTarefa 
                onCloseAction={handleCloseAction} 
                bottomSheetRef={bottomSheetRef}
                setTarefas = {setTarefas}
            />
        </View>
    )
}
