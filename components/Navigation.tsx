import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import MapScreen from '../screens/MapScreen';


const Tab = createBottomTabNavigator();

const Navigation = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    position: "relative",
                    backgroundColor: "#ffffff",
                    borderRadius: 15,
                    height: 70,
                    ...styles.shadow,
                },
                tabBarShowLabel: false,
            }}
        >
            <Tab.Screen
                name="Home"
                component={MapScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View
                            style={{
                                alignItems: "center",
                                justifyContent: "center",
                                // top: 10,
                            }}
                        >
                            <Ionicons
                                name="home"
                                size={focused ? 30 : 25}
                                color={focused ? "#3ED400" : "#748c94"}
                            />
                            <Text
                                style={{
                                    color: focused ? "#3ED400" : "#748c94",
                                    fontSize: 12,
                                }}
                            >
                                Home
                            </Text>
                        </View>
                    ),
                }}
            />

            {/* <Tab.Screen
                name="New Quote"
                component={MapScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View
                            style={{
                                alignItems: "center",
                                justifyContent: "center",
                                // top: 10,
                            }}
                        >
                            <Ionicons
                                name="settings"
                                size={focused ? 30 : 25}
                                color={focused ? "#3ED400" : "#748c94"}
                            />
                            <Text

                                style={{
                                    color: focused ? "#3ED400" : "#748c94",
                                    fontSize: 12,
                                }}
                            >
                                Settings
                            </Text>
                        </View>
                    ),
                }}
            /> */}
            {/* <Tab.Screen name="Loading"
                component={MapScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View
                            style={{
                                alignItems: "center",
                                justifyContent: "center",
                                // top: 10,
                            }}
                        >
                            <Ionicons
                                name="person"
                                size={focused ? 30 : 25}
                                color={focused ? "#3ED400" : "#748c94"}
                            />
                            <Text
                                style={{
                                    color: focused ? "#3ED400" : "#748c94",
                                    fontSize: 12,
                                }}
                            >
                                Profile
                            </Text>
                        </View>
                    ),
                }}
            /> */}
        </Tab.Navigator>
    );
};

const styles = StyleSheet.create({
    shadow: {
        shadowColor: "#3ED400",
        shadowOffset: {
            width: 10,
            height: 20,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5,
    },
});

export default Navigation;
