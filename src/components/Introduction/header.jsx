import { Box } from '@chakra-ui/react';

const Header = ({ children, underlineColor, ...props }) => (
  <Box
    as="h1"
    mt={10}
    mb={6}
    fontSize="3xl"
    lineHeight="shorter"
    fontWeight="bold"
    {...props}
    textAlign="left"
  >
    <UnderlinedText color={underlineColor}>{children}</UnderlinedText>
  </Box>
);


const UnderlinedText = (props) => (
  <Box as="span" display="inline-block" position="relative">
    {props.children}
    <Box
      as="span"
      display="block"
      position="absolute"
      bg={props.color || 'gray.200'}
      w="100%"
      h={props.h || '1px'}
      bottom={-2}
    />
  </Box>
);

export default Header;