import styled from "styled-components/native";

export const RestaurantesView = styled.View`
  flex-direction: row;
  align-items: center;
  border-radius: 5px;
  border: 1px solid #c4c4c4;
  background-color: #fff;
  min-width: 90%;
  margin-bottom: 10px;
  padding: 5px 10px;
`;

export const RestauranteInfo = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 5px 0;
  margin-left: 20px;
`;

export const RestauranteFoto = styled.Image`
  border-radius: 25px;
`;
