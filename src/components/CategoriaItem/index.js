import React from "react";

import { CategoriaView, CategoriaFoto, CategoriaTexto } from "./style";

const CategoriaItem = ({ id, nome, img_url }) => {
  return (
    <CategoriaView key={id}>
      <CategoriaFoto
        source={{
          uri: img_url.trim(),
          width: 98,
          height: 58,
        }}
      />
      <CategoriaTexto>{nome}</CategoriaTexto>
    </CategoriaView>
  );
};

export default CategoriaItem;
