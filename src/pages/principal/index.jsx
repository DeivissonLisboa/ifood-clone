import { useState, useEffect } from "react";
import { Text, Alert, ActivityIndicator } from "react-native";
import {
  SafeAreaView,
  Image,
  ViewActivity,
  View,
  ViewPrincipal,
  ButtonContainer,
  CategoriaView,
  SelectTipo,
  ButtonTipoSelect,
  TextTipoSelect,
  BannerView,
  ViewRestaurantes,
  TituloRestaurantes,
} from "./style";
import RestauranteItem from "../../components/restauranteItem";
import CategoriaItem from "../../components/CategoriaItem";
import BannerItem from "../../components/BannerItem";

export default function Principal() {
  const [banners, setBanners] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [restaurantes, setRestaurantes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [tipo, setTipo] = useState("Entrega");

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch(
          "http://my-json-server.typicode.com/pablohdev/app-ifood-clone/db"
        );
        const data = await response.json();
        setLoading(true);
        setBanners(data.banner_principal);
        setCategorias(data.categorias);
        setRestaurantes(data.restaurantes);
      } catch (err) {
        Alert.alert("API error", err.message);
      }
    }

    getData();
  }, []);

  const ViewHome = () => {
    return (
      <ViewPrincipal>
        <SelectTipo>
          <ButtonTipoSelect
            onPress={() => {
              setTipo("Entrega");
            }}
          >
            <TextTipoSelect selected={tipo === "Entrega"}>
              Entrega
            </TextTipoSelect>
          </ButtonTipoSelect>
          <ButtonTipoSelect
            onPress={() => {
              setTipo("Retirada");
            }}
          >
            <TextTipoSelect selected={tipo === "Retirada"}>
              Retirada
            </TextTipoSelect>
          </ButtonTipoSelect>
        </SelectTipo>

        <CategoriaView horizontal={true} showsHorizontalScrollIndicator={false}>
          {categorias.map((categoria) => (
            <CategoriaItem key={categoria.id} {...categoria} />
          ))}
        </CategoriaView>

        <BannerView horizontal={true} showsHorizontalScrollIndicator={false}>
          {banners.map((banner) => (
            <BannerItem key={banner.id} {...banner} />
          ))}
        </BannerView>

        <TituloRestaurantes>Restaurantes</TituloRestaurantes>
        <ViewRestaurantes>
          {restaurantes.map((restaurante) => (
            <RestauranteItem key={restaurante.id} {...restaurante} />
          ))}
        </ViewRestaurantes>
      </ViewPrincipal>
    );
  };

  return (
    <SafeAreaView>
      {loading ? (
        <ViewHome />
      ) : (
        <ViewActivity>
          <ActivityIndicator color="#e71b27" size="large" />
        </ViewActivity>
      )}
    </SafeAreaView>
  );
}
