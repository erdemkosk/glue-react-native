import React, { useState } from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";
import { Platform, View } from "react-native";
import { Icon, GlobeIcon, ShareIcon, FavouriteIcon } from "@gluestack-ui/themed";
import { useColorScheme } from "@/components/useColorScheme";
import { useSelector } from "react-redux";
import { BookOpen, BookOpenText, HelpCircle, Quote, Settings, ShieldQuestion } from "lucide-react-native";

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
        name="read"
        options={{
          title: "",
          tabBarIcon: ({ color }) => (
            <View style={{
              alignItems: "center",
              paddingTop: 16,
              borderTopColor:  selectedIndex === 0 ? color : colorMode === 'dark' ? '#ffffff' : '#000000 '  ,
              borderTopWidth: 2
            }}>
              <Icon  size='xl'  color={selectedIndex === 0 ? color : colorMode === 'dark' ? ' #000000 ' : '#ffffff '} as={BookOpenText} />
            </View>
          ),
        }}
        listeners={({ navigation }) => ({
          tabPress: () => handleTabPress(0)
        })}
      />

      <Tabs.Screen
        name="quiz"
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
              <Icon  size='xl' color={'#ffffff'} as={Quote} />
            </View>
          ),
        }}
        listeners={({ navigation }) => ({
          tabPress: () => handleTabPress(1)
        })}
      />

      <Tabs.Screen
        name="setting"
        options={{
          title: "",
          tabBarIcon: ({ color }) => (
            <View style={{
              alignItems: "center",
              paddingTop: 16,
              borderTopColor:  selectedIndex === 2 ? color : colorMode === 'dark' ? '#000000 ' : '#ffffff'  ,
              borderTopWidth: 2
            }}>
              <Icon  size='xl' color={selectedIndex === 2 ? color : colorMode === 'dark' ? ' #000000' : '#ffffff '} as={Settings} />
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
