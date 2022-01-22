import React from "react";
import { Dimensions } from "react-native";
import { BannerView, BannerFoto } from "./style";

const BannerItem = ({ id, banner_img_url }) => {
  return (
    <BannerView>
      <BannerFoto
        source={{
          uri: banner_img_url.trim(),
          width: Dimensions.get("window").width - 50,
          height: 180,
          resizeMode: "contain",
        }}
      />
    </BannerView>
  );
};

export default BannerItem;
