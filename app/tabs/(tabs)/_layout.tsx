import React, { useState } from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";
import { Platform, View } from "react-native";
import { Icon, GlobeIcon, ShareIcon, FavouriteIcon } from "@gluestack-ui/themed";
import { useColorScheme } from "@/components/useColorScheme";
import { useSelector } from "react-redux";

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={18} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const colorMode = useSelector((state) => state.colorMode.colorMode);

  const handleTabPress = (index: number) => {
    alert(colorMode)
    setSelectedIndex(index);
  };

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          position: "absolute",
          bottom: 0,
          right: 0,
          left: 0,
          height: 72,
          elevation: 0,
        }
      }}
    >
      <Tabs.Screen
        name="tab1"
        options={{
          title: "",
          tabBarIcon: ({ color }) => (
            <View style={{
              alignItems: "center",
              paddingTop: 16,
              borderTopColor:  selectedIndex === 0 ? color : colorMode === 'dark' ? '#ffffff' : '#000000 '  ,
              borderTopWidth: 2
            }}>
              <Icon h='$6' w='$6' color={selectedIndex === 0 ? color : colorMode === 'dark' ? ' #000000 ' : '#ffffff '} as={FavouriteIcon} />
            </View>
          ),
        }}
        listeners={({ navigation }) => ({
          tabPress: () => handleTabPress(0)
        })}
      />

      <Tabs.Screen
        name="tab2"
        options={{
          title: "",
          tabBarIcon: ({ color }) => (
            <View style={{
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#4287f5",
              width: Platform.OS === "ios" ? 50 : 60,
              height: Platform.OS === "ios" ? 50 : 60,
              top: Platform.OS === "ios" ? -10 : -20,
              borderRadius: Platform.OS === "ios" ? 25 : 30,
            }}>
              <Icon h='$8' w='$6' color={'#ffffff'} as={GlobeIcon} />
            </View>
          ),
        }}
        listeners={({ navigation }) => ({
          tabPress: () => handleTabPress(1)
        })}
      />

      <Tabs.Screen
        name="tab3"
        options={{
          title: "",
          tabBarIcon: ({ color }) => (
            <View style={{
              alignItems: "center",
              paddingTop: 16,
              borderTopColor:  selectedIndex === 2 ? color : colorMode === 'dark' ? '#000000 ' : '#ffffff'  ,
              borderTopWidth: 2
            }}>
              <Icon h='$6' w='$6' color={selectedIndex === 2 ? color : colorMode === 'dark' ? ' #000000' : '#ffffff '} as={ShareIcon} />
            </View>
          ),
        }}
        listeners={({ navigation }) => ({
          tabPress: () => handleTabPress(2)
        })}
      />
    </Tabs>
  );
}
