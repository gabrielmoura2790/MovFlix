import { useNavigation } from "@react-navigation/native";
import React from "react";

import { Container, Banner } from "./styles";

export function MovieCard({ data }) {
  const navigation = useNavigation();

  return (
    <Container onPress={() => navigation.navigate("Details", { id: data.id })}>
      <Banner
        source={{
          uri: `https://image.tmdb.org/t/p/original${data.poster_path}`,
        }}
      />
    </Container>
  );
}
