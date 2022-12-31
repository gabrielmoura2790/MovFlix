import { Platform } from "react-native";
import styled from "styled-components/native";
import { theme } from "../../styles/theme";

export const Container = styled.View`
  flex: 1;
  background-color: ${theme.colors.Background};
`;

export const Title = styled.Text`
  margin: 5%;
  color: ${theme.colors.Foreground};
  font-size: 22px;
  font-weight: bold;
`;

export const ButtonBack = styled.TouchableOpacity`
  margin-left: 5%;
  margin-top: ${Platform.OS === "ios" ? 15 : 5}%;
`;

export const ListMovies = styled.FlatList``;
