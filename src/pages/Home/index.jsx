import { Text } from "react-native";
import { SafeAreaView, View, Image, ButtonContainer } from "./style";
import banner from "../../assets/img/banner.png";
import Button from "../../components/Button";

export default function Home({ navigation }) {
  return (
    <SafeAreaView>
      <View>
        <Text>Pedir comida nunca foi tão fácil</Text>
        <Image source={banner} />
        <Text>Permitir localização</Text>
        <Text>Para descobrir restaurantes que entregam em sua região</Text>
        <ButtonContainer>
          <Button
            theme="primary"
            text="ENTRAR"
            onPress={() => {
              navigation.navigate("Main");
            }}
          />
        </ButtonContainer>
      </View>
    </SafeAreaView>
  );
}
