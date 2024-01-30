import React, { useRef, useState } from 'react';
import { View } from "react-native";
import BottomSheet from '@gorhom/bottom-sheet';

import { FormTarefa } from "@/components/FormTarefa";
import { Header } from "@/components/Header";

import {styles} from "./styles"
import { ListPendente } from '@/components/ListPendente';

export function Pendentes(){
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
            <ListPendente tarefas={tarefas} setTarefas = {setTarefas}/>
            
        </View>
    )
}
