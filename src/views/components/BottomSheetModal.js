//BottomSheetModalComponent.js
import { StyleSheet, Text, View, Image, Button } from "react-native";
import React from "react";
import { COLORS } from "../../constants";
import { TouchableOpacity } from "react-native-gesture-handler";
import { rupiah } from "../../utils/currency";

const BottomSheetModalComponent = ({
    image,
    name,
    price,
    description,
    category,
}) => {
    return (
        <View style={styles.container}>
            {/* image */}
            <View style={styles.imageContainer}>
                <Image source={{ uri: image }} style={styles.image} />
            </View>
            {/* text header */}
            <View style={styles.textContainer}>
                <Text style={styles.text}>{name}</Text>
                <Text style={styles.description}>{description}</Text>
                <Text style={styles.price}>{rupiah(price)}</Text>
                
            </View>
            {/* button */}
                <TouchableOpacity style={styles.buttonContainer} onPress={() => alert("Added to cart")}>
                    <View>
                        <Text style={styles.buttonText}>Add to Cart</Text>
                    </View>
                </TouchableOpacity>

            {/* price */}
          
            
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.lightGray4,
        flex: 1,
    },
    buttonText:{
        color: COLORS.white,
        fontWeight: "bold",
    },
    buttonContainer:{
        backgroundColor: COLORS.primary,
        height: 50,
        marginHorizontal: 20,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    
    textContainer: {
        marginTop: 10,
    },
    text: {
        textAlign: "left",
        marginLeft: 20,
        fontSize: 20,
        color:"black",
        fontWeight: "bold",
    },
    imageContainer: {
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 10,
    },
    description:{
        flexWrap: "wrap",
        textAlign: "left",
        marginLeft: 20,
        marginTop: 10,
        fontSize: 14,
        color:"black",
        fontWeight: "normal",
    },
    price:{
        marginLeft: 20,
        marginTop: 10,
        marginBottom: 20,
        fontSize: 18,
        color:"black",
        fontWeight: "bold",
    },
    
    subtext: {
        marginLeft: 5,
    },
    details: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20,
    },
    logo: {
        width: 25,
        height: 25,
        marginRight: 15,
        marginLeft: 15,
    },
    image: {
        width: "90%",
        borderRadius: 10,
        height: 300,
    },
});

export default BottomSheetModalComponent;