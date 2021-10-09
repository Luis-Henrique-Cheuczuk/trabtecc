import React, { useEffect } from 'react';
import { View, Text } from 'react-native';

import Realm from "realm";
import ProductSchema from "./TaskList.realm";

function TaskList(){

    const createProduct = async() => {
        let task1 = null
        let task2 = null
        const realm = await Realm.open({
            path: "myrealm",
            schema: [ProductSchema],
        });
        try{
        realm.write(() => {
            task1 = realm.create("Task", {
                _id: 100,
                name: "go grocery shopping",
                status: "Open",
            });
            task2 = realm.create("Task", {
                _id: 200,
                name: "go exercise",
                status: "Open",
            });
        });
        }catch(e){
            console.log(e)
        }
        const tasks = realm.objects("Task");
        console.log(`The lists of tasks are: ${tasks.map((task) => task.name)}`);
    }

    useEffect(() => {
        createProduct()
    });
    /* const tasks = realm.objects("Task"); */
        return (
            <View>
                {/* {tasks.map(item => <Text>{item.name}</Text>)} */}
                <Text>TaskList</Text>
                <Text>TaskList</Text>
                <Text>TaskList</Text>
                <Text>TaskList</Text>
                <Text>TaskList</Text>
                <Text>TaskList</Text>
                <Text>TaskList</Text>
                <Text>TaskList</Text>
            </View>
        )
    }

export default TaskList;