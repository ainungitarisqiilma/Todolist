import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';

export default TaskItem = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.indexContainer}>
                <Text style={styles.index}>{props.index}</Text>
            </View>
            <View style={styles.taskContainer}>
                <Text style={styles.task}>{props.task}</Text>
                <TouchableOpacity style={styles.edit} onPress={() => props.editTask()}>
                    <MaterialIcons name="edit" size={18} color='#fff' />
                </TouchableOpacity>
                <TouchableOpacity style={styles.delete} onPress={() => props.deleteTask()}>
                    <MaterialIcons name="delete" size={18} color='#fff' />
                </TouchableOpacity>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginHorizontal: 20,
    },
    indexContainer: {
        backgroundColor: '#3E3364',
        borderRadius: 12,
        marginRight: 10,
        alignItems: 'center',
        justifyContent: 'center',
        width: 50,
        height: 50,
    },
    index: {
        color: '#fff',
        fontSize: 20,
    },
    taskContainer: {
        backgroundColor: '#3E3364',
        borderRadius: 12,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        flex: 1,
        paddingHorizontal: 13,
        paddingVertical: 5,
        minHeight: 50,
    },
    task: {
        color: '#fff',
        width: '80%',
        fontSize: 16,
    },
    edit: {
        marginLeft: -15,
    },
    delete: {
        marginLeft: 15,
    },
}
);