import React from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';
import {useDispatch} from "react-redux";
import {setCart} from "../store/serviceSlice";


export default function CartItems({ navigation, ...props }) {

    return (
        <View style={styles.card}>
            <View style={styles.container}>
                <Text style={styles.brandTitle}>{props.service}</Text>
                <View>
                    <Text style={styles.text}>{props.price} р.</Text>
                </View>

            </View>



        </View>
    );
}

const styles = StyleSheet.create({
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

