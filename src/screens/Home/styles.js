import styled from "styled-components/native";
import { theme } from "../../styles/theme";
import { Animated } from "react-native";

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${theme.colors.Background};
`;

export const TitleCategoricals = styled.Text`
  color: ${theme.colors.Foreground};
  font-size: 20px;
  font-weight: bold;
  margin-left: 5%;
  margin-top: 7%;
`;

export const MostMovies = styled.View`
  width: 90%;
  height: 150px;
  align-self: center;
  margin-top: 20px;
  border-radius: 8px;
  background-color: ${theme.colors.Current_Line};
  overflow: hidden;
`;

export const ListMovies = styled.FlatList``;

export const Title = styled.Text`
  text-align: center;
  font-size: 24px;
  color: ${theme.colors.Purple};
  font-weight: bold;
`;

export const Indicator = styled.View`
  height: 15px;
  width: 15px;
  background-color: ${(props) => props.color};
  margin-bottom: 7px;
  border-radius: 15px;
`;
