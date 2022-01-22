import { Text } from "react-native";
import { RestaurantesView, RestauranteInfo, RestauranteFoto } from "./style";
import { AntDesign } from "@expo/vector-icons";

function RestauranteItem({
  id,
  nome,
  nota,
  categoria,
  distancia,
  valor_frete,
  tempo_entrega,
  url_img,
}) {
  return (
    <RestaurantesView>
      <RestauranteFoto
        source={{
          uri: url_img,
          width: 50,
          height: 50,
          reziseMode: "cover",
        }}
      />
      <RestauranteInfo>
        <Text>{nome}</Text>
        <Text>
          <Text>
            <AntDesign name="star" size={12} color="#F9A825" />{" "}
          </Text>
          {nota} - {categoria} - {distancia}
        </Text>
        <Text>
          {tempo_entrega} - R$ {valor_frete}
        </Text>
      </RestauranteInfo>
    </RestaurantesView>
  );
}

export default RestauranteItem;
