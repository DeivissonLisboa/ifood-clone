import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Principal from "../principal";
import Perfil from "../perfil";
import { FontAwesome } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

function Main() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowIcon: true,
        tabBarShowLabel: false,
        // tabBarActiveTintColor: "tomato",
        // tabBarInativeTintColor: "gray",
      }}
    >
      <Tab.Screen
        name="Princial"
        component={Principal}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <FontAwesome
                name="home"
                size={24}
                color={focused ? "tomato" : "gray"}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Perfil"
        component={Perfil}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <FontAwesome
                name={"user"}
                color={focused ? "tomato" : "gray"}
                size={24}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}

export default Main;
