import {View, Text, FlatList, StyleSheet, ScrollView, Modal} from 'react-native';
import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {axiosInstance} from "../API";
import { setServices } from '../store/serviceSlice';
import ServiceCard from '../components/ServiceCard';
import axios from "axios";
import {FontAwesome5, Ionicons} from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import Cart from "../components/cart";
import Booking from "../components/Booking";

export default function ServiceScreen({navigation}) {
    const dispatch = useDispatch();
    const services = useSelector((store)=> store.service.services)
    const [modalWindow, setModalWindow]=useState(false)
    const [Windows, setModal]=useState(false)

    useEffect(() => {

        async function getAllDevices() {
            await axiosInstance.get('/stocks1').then((response) => dispatch(setServices(response?.data)));
        }
        getAllDevices();
    }, [dispatch]);


    return (
        <ScrollView>

            <View style={styles.page}>
               <Modal visible ={modalWindow}>
                   <Ionicons  name="close" size={24} color="red" style={styles.title} onPress ={()=> setModalWindow(false)}/>
                   <View>
                       <Text style={styles.title}>Бронирования</Text>
                       <Cart/>
                   </View>
               </Modal >
                <Modal visible ={Windows}>
                    <Ionicons  name="close" size={30} color="red" style={styles.title} onPress ={()=> setModal(false)}/>
                    <View>
                        <Text style={styles.title}>Записи</Text>
                        <Booking/>
                    </View>
                </Modal>
                <View style={styles.header}>
                    <FontAwesome5  name="dog" size={24} color="blue" onPress ={()=> setModalWindow(true)}/>
                    <AntDesign name="home" size={24} color="black" onPress ={()=> setModal(true)}/>
                </View>

                {!!services && services.map((service)=> <ServiceCard key={service.id} {...service} navigation={navigation}/>)}
            </View>
        </ScrollView>);
}

const styles = StyleSheet.create({
    page: {
        display: 'flex',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E0EFEA',
    },
    title:{
        textAlign:'center',
        fontSize: 24
    },
    header:{
        display:'flex',
        justifyContent:'space-between',
    }

});
