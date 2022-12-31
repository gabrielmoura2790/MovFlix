import { Platform } from "react-native";
import styled from "styled-components/native";
import { theme } from "../../styles/theme";

export const Container = styled.View`
  flex: 1;
  background-color: ${theme.colors.Background};
`;

export const BannerMovie = styled.View`
  height: 50%;
  width: 100%;
  background-color: ${theme.colors.Current_Line};
  border-bottom-right-radius: 50px;
  border-bottom-left-radius: 50px;
`;

export const HeaderBanner = styled.View`
  flex-direction: row;
  padding: 15% 10%;
  justify-content: space-between;
`;

export const ButtonIcon = styled.TouchableOpacity`
  background-color: rgba(0, 0, 0, 0.4);
  padding: 10px;
  border-radius: 100px;
`;

export const TitleMovie = styled.Text`
  color: ${theme.colors.Foreground};
  font-size: 22px;
  font-weight: bold;
  margin-left: 5%;
  margin-top: 5%;
`;

export const Description = styled.Text`
  color: ${theme.colors.Foreground};
  font-size: 16px;
  margin: 2% 5%;
  text-align: justify;
  max-height: 20%;
`;

export const ButtonTrailer = styled.TouchableOpacity`
  height: 50px;
  width: 90%;
  background-color: ${theme.colors.Red};
  align-self: center;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  margin-top: 3%;
`;

export const ButtonTrailerText = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: ${theme.colors.Foreground};
`;

export const Banner = styled.Image`
  height: 100%;
  width: 100%;
  position: absolute;
  border-bottom-right-radius: 50px;
  border-bottom-left-radius: 50px;
`;

export const RateContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 15px;
`;

export const RateText = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: ${theme.colors.Foreground};
  margin-right: 5px;
  margin-left: 5%;
`;
