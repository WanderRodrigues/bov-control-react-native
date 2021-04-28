import React from 'react'
import styled from 'styled-components/native'
import colors from '../../styles/colors'
import sizes from '../../styles/sizes'

const StyledText = styled.Text<TextProps>`
  color: ${({ color }) => color};
  font-size: ${({ size }) => size}px;
  font-family: 'SourceSansPro-${({ variant }) => variant}';
  padding: 5px;
`

interface TextProps {
  children: React.ReactNode | React.ReactNode[]
  color?: string
  size?: number
  variant?:
    | 'Regular'
    | 'Black'
    | 'BlackItalic'
    | 'Bold'
    | 'BoldItalic'
    | 'ExtraLight'
    | 'ExtraLightItalic'
    | 'Italic'
    | 'Light'
    | 'LightItalic'
    | 'SemiBold'
    | 'SemiBoldItalic'
}

const Text: React.FC<TextProps> = ({
  children,
  variant = 'Regular',
  color = colors.light,
  size = sizes.text.regular
}) => {
  return (
    <StyledText variant={variant} color={color} size={size}>
      {children}
    </StyledText>
  )
}

export default Text
