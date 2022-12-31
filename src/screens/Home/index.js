import React, { useState, useEffect, useRef } from "react";
import { ActivityIndicator, Animated } from "react-native";
import { MovieCard } from "../../components/MovieCard";
import { TopMovieCard } from "../../components/TopMovieCard";
import api, { api_key } from "../../services/api";
import { theme } from "../../styles/theme";
import { getListMovies } from "../../utils/movies";
import Feather from "@expo/vector-icons/Feather";
import { useNavigation } from "@react-navigation/native";

import {
  Container,
  Title,
  TitleCategoricals,
  MostMovies,
  ListMovies,
  Indicator,
  Header,
  ButtonFavoriteMovies,
} from "./styles";

export function Home() {
  const navigation = useNavigation();

  const [movies, setMovies] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    let isActive = true;

    async function getMovies() {
      const [popularMovies, topRatedMovies] = await Promise.all([
        api.get("/movie/popular", {
          params: {
            api_key: api_key,
            language: "pt-BR",
            page: 1,
          },
        }),
        api.get("/movie/top_rated", {
          params: {
            api_key: api_key,
            language: "pt-BR",
            page: 1,
          },
        }),
      ]);

      if (isActive) {
        const popularMoviesList = getListMovies(12, popularMovies.data.results);
        const topRatedMoviesList = getListMovies(
          5,
          topRatedMovies.data.results
        );

        setMovies(popularMoviesList);
        setTopRated(topRatedMoviesList);

        setLoading(false);
      }
    }

    getMovies();

    return () => {
      isActive = false;
    };
  }, []);

  if (loading) {
    return (
      <Container style={{ justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator color={theme.colors.Purple} size={"large"} />
      </Container>
    );
  }

  return (
    <Container>
      <Header>
        <Title>
          Mov<Title style={{ color: theme.colors.Comment }}>Flix</Title>
        </Title>

        <ButtonFavoriteMovies
          onPress={() => navigation.navigate("FavoriteMovies")}
        >
          <Feather name="film" size={32} color={theme.colors.Purple} />
        </ButtonFavoriteMovies>
      </Header>

      <TitleCategoricals>Filmes mais avaliados</TitleCategoricals>

      <MostMovies>
        <ListMovies
          data={topRated}
          keyExtractor={(item) => item.id}
          pagingEnabled
          onMomentumScrollEnd={(e) => {
            setActiveIndex(parseInt(e.nativeEvent.contentOffset.y / 140));
          }}
          renderItem={({ item }) => <TopMovieCard data={item} />}
          showsVerticalScrollIndicator={false}
        />

        <ListMovies
          data={topRated}
          keyExtractor={(item) => item.id}
          scrollEnabled={false}
          style={{ position: "absolute", right: "2%", top: "18%" }}
          renderItem={({ index }) => (
            <Indicator
              color={
                activeIndex === index
                  ? theme.colors.Foreground
                  : theme.colors.Comment
              }
            />
          )}
        />
      </MostMovies>

      <TitleCategoricals style={{ marginBottom: "5%" }}>
        Filmes mais populares
      </TitleCategoricals>

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
