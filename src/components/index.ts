import styled from 'styled-components/native'

interface IText {
  color?: 'primary' | 'primary_light' | 'secondary' | 'gray' | 'gray_secondary' | 'dark'
}

interface IContainerRowProps {
  align?: 'flex-start' | 'flex-end' | 'center'
}

export const Label = styled.Text<IText>`
  font-family: ${({theme}) => theme.font.regular};
  font-size: ${({theme}) => theme.font.sizes.regular};
  color: ${({theme, color}) => theme.colors[color || 'dark']};
`;

export const LabelSmall = styled.Text<IText>`
  font-family: ${({theme}) => theme.font.regular};
  font-size: ${({theme}) => theme.font.sizes.small};
  color: ${({theme, color}) => theme.colors[color || 'dark']};
`;

export const H3 = styled.Text<IText>`
  font-family: ${({theme}) => theme.font.regular};
  font-size: ${({theme}) => theme.font.sizes.medium};
  color: ${({theme, color}) => theme.colors[color || 'dark']};
`;

export const H2 = styled.Text<IText>`
  font-family: ${({theme}) => theme.font.bold};
  font-size: ${({theme}) => theme.font.sizes.bigger_light};
  color: ${({theme, color}) => theme.colors[color || 'dark']};
`;

export const H1 = styled.Text<IText>`
  font-family: ${({theme}) => theme.font.bold};
  font-size: ${({theme}) => theme.font.sizes.bigger};
  color: ${({theme, color}) => theme.colors[color || 'dark']};
`;

export const ContainerRow = styled.View<IContainerRowProps>`
  flex-direction: row;
  align-items: center;
  justify-content: ${({align}) => align || 'center'};
  width: 100%;
`;
