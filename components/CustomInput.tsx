import React from 'react';
import { TextInput } from 'react-native-paper';
import { StyleSheet, View } from 'react-native';

interface CustomInputProps {
    label: string;
    value: string;
    onChangeText: (text: string) => void;
    secureTextEntry?: boolean;
}

const CustomInput: React.FC<CustomInputProps> = ({ label, value, onChangeText, secureTextEntry }) => {
    return (
        <View style={styles.inputContainer}>
        <TextInput
            label={label}
    value={value}
    onChangeText={onChangeText}
    secureTextEntry={secureTextEntry}
    style={styles.input}
    mode="outlined"
        />
        </View>
);
};

const styles = StyleSheet.create({
    inputContainer: {
        margin: 10,
    },
    input: {
        backgroundColor: 'white',
    },
});

export default CustomInput;
