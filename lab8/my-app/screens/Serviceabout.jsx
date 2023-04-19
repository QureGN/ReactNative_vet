import {View, Text, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { resetService, setService } from '../store/serviceSlice';
import { axiosInstance } from '../API';

export default function Serviceabout({ route }) {
    const { pk } = route.params;
    const dispatch = useDispatch();
    const { service } = useSelector((store) => store.service);
    useEffect(() => {
        async function getOneService() {
            await axiosInstance.get(`/stocks1/${pk}`).then((response) => dispatch(setService(response?.data)));
        }
        getOneService();
        return () => {
            dispatch(resetService());
        };
    }, [dispatch]);
    return (
        <View style ={styles.page}>
            <View style ={styles.card}>
                <View style={styles.container}>
                    <Text style={styles.brandTitle}>{service.service}</Text>
                    <Text style={styles.text}>{service.description} р.</Text>
                </View>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    page: {
        justifyContent: 'center',
        height: '100%' ,
        width: '100%',
        alignItems: 'center',
        backgroundColor: '#E0EFEA',
    },
    card: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'column',
        width: 320,
        backgroundColor: '#8EA076',
        borderRadius: 12,
        padding: 24,
        gap: 12,
        margin: 8,
    },
    container: { display: 'flex', width: '100%', margin: 8 },
    brandTitle: { color: '#564734', textAlign:'center',fontSize: 20 },
    text: { color: '#f0f0f0', fontSize: 16 ,textAlign:'center'},
});