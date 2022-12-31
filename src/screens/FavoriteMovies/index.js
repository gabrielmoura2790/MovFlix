import React, { useCallback, useState } from "react";
import Feather from "@expo/vector-icons/Feather";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { theme } from "../../styles/theme";

import { Container, Title, ButtonBack, ListMovies } from "./styles";

import { MovieCard } from "../../components/MovieCard";
import { getMoviesSave } from "../../utils/storage";

export function FavoriteMovies() {
  const navigation = useNavigation();

  const [movies, setMovies] = useState([]);

  useFocusEffect(
    useCallback(() => {
      let isActive = true;

      async function getFavoritesMovies() {
        const result = await getMoviesSave();

        if (isActive) {
          setMovies(result);
        }
      }

      if (isActive) {
        getFavoritesMovies();
      }

      return () => {
        isActive = false;
      };
    }, [])
  );

  return (
    <Container>
      <ButtonBack onPress={() => navigation.goBack()}>
        <Feather name="arrow-left" size={32} color={theme.colors.Foreground} />
      </ButtonBack>

      <Title>Sua lista de favoritos</Title>

      <ListMovies
        data={movies}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <MovieCard data={item} />}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        columnWrapperStyle={{
          marginHorizontal: "5%",
          marginBottom: "5%",
          justifyContent: "space-between",
        }}
      />
    </Container>
  );
}
