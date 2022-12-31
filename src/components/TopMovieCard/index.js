import { useNavigation } from "@react-navigation/native";
import React from "react";

import { Banner, ButtonBanner } from "./styles";

export function TopMovieCard({ data }) {
  const navigation = useNavigation();

  return (
    <ButtonBanner
      onPress={() => navigation.navigate("Details", { id: data.id })}
      activeOpacity={0.8}
    >
      <Banner
        source={{
          uri: `https://image.tmdb.org/t/p/w500/${data.backdrop_path}`,
        }}
        resizeMode={"cover"}
      />
    </ButtonBanner>
  );
}
