import { DrawerActions, useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import { Pressable } from "react-native";
import { Ionicons } from "./Ionicons";

export const HamburgerMenu = () => {
    const navigation = useNavigation();

    useEffect(() => {
     navigation.setOptions({
        headerLeft: ()=>(
            <Pressable 
            style={{
                marginHorizontal: 10
            }}
            onPress={()=>navigation.dispatch(DrawerActions.toggleDrawer())}>
                <Ionicons 
                    name="menu-outline"
                />
            </Pressable>
        )
     })
    }, [])

    return <></>
};