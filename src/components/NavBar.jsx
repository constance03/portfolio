import {
    Box,
    Flex,
    Link,
    useColorModeValue
  } from '@chakra-ui/react';
  
  const navLinks = [
    { name: '// About', path: '#about' },
    { name: '// Projects', path: '#projects' },
    { name: '// Skills', path: '#skills' },
    { name: '// Contact', path: '#contact' }
  ];
  
  export default function NavBar() {
    return (
      <Box px={2} boxShadow="lg" zIndex={1} position="fixed" bg="#144272">
        <Flex h={12} alignItems="center" justifyContent="space-around">
              {navLinks.map((link, index) => (
                <NavLink key={index} {...link} />
              ))}
          </Flex>
      </Box>
    );
  }
  
  // NavLink Component
  const NavLink = ({ name, path }) => {
    const link = {
      bg: useColorModeValue('gray.200', 'gray.700'),
      color: useColorModeValue('blue.500', 'blue.200')
    };
  
    return (
      <Link
        w="auto"
        href={path}
        lineHeight="inherit"
        rounded="md"
        _hover={{
          textDecoration: 'none',
          bg: link.bg,
          color: link.color
        }}
      >
        {name}
      </Link>
    );
  };
  