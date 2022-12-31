import styled from "styled-components/native";
import { theme } from "../../styles/theme";

export const Container = styled.TouchableOpacity`
  height: 230px;
  width: 170px;
  background-color: ${theme.colors.Current_Line};
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  overflow: hidden;
`;

export const Banner = styled.Image`
  height: 100%;
  width: 100%;
`;
