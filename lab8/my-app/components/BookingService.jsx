import {Button, StyleSheet, Text, View} from "react-native";
import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {axiosInstance} from "../API";
import {resetService, setService} from "../store/serviceSlice";

export default function BookingService({ navigation, ...props }) {
    const { service } = useSelector((store) => store.service);
    const dispatch=useDispatch();
    const [error, setError] = useState(null);

    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch(`http://192.168.1.13:8000/stocks1/${props.service1}/`)
            .then(res => res.json())
            .then(
                (result) => {

                    setItems(result);
                },
                // Примечание: важно обрабатывать ошибки именно здесь, а не в блоке catch(),
                // чтобы не перехватывать исключения из ошибок в самих компонентах.
                (error) => {
                    setError(error);
                }
            )
    }, [])

    // useEffect(() => {
    //     async function getOneService() {
    //         await axiosInstance.get(`/stocks1/${props.service1}`).then((response) => dispatch(setService(response?.data)));
    //     }
    //     getOneService();
    //     return () => {
    //         dispatch(resetService());
    //     };
    // }, [dispatch]);

    async function handlePress() {
        const config = {
            headers: {
                'Accept': 'application/json',
                'Content-Type':'application/json',

            }
        };

        const res = await axiosInstance.delete(`/stocks2/${props.pk}/`, config)

    }
    return (
        <View >
            <View style={styles.card}>

                <View>
                    <Text style={styles.brandTitle}>{items.service} </Text>
                    <Button title='Удалить' onPress={handlePress}/>
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
