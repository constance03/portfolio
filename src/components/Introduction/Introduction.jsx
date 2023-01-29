import { Flex, Avatar, Box, Container } from '@chakra-ui/react';
import { MotionBox, MotionFlex } from './motion';
import Header from './header';
import photo from "../../assets/photo.jpeg"

const ANIMATION_DURATION = 0.5;

const Introduction = () => {
  const color = '#2C74B3';

  return (
    <Container maxW="4xl" p={{ base: 5, md: 12 }} mt="200" mb="8">
      <Flex direction={['column', 'column', 'row']}>
        <MotionBox
          opacity="0"
          initial={{
            translateX: -150,
            opacity: 0
          }}
          animate={{
            translateX: 0,
            opacity: 1,
            transition: {
              duration: ANIMATION_DURATION
            }
          }}
          m="auto"
          mb={[16, 16, 'auto']}
        >
          <MotionBox whileHover={{ scale: 1.2 }} rounded="full" shadow="lg">
            <Avatar
              size="1xl"
              showBorder={true}
              borderColor={color}
              src={photo}
            />
          </MotionBox>
        </MotionBox>
        <MotionFlex
          position="relative"
          ml={['auto', 'auto', 16]}
          m={['auto', 'initial']}
          w={['90%', '85%', '90%']}
          maxW="800px"
          opacity="0"
          justify="center"
          direction="column"
          initial={{
            opacity: 0,
            translateX: 150
          }}
          animate={{
            opacity: 1,
            translateX: 0,
            transition: {
              duration: ANIMATION_DURATION
            }
          }}
        >
          <Box position="relative">
            <MotionBox whileHover={{ translateY: -5 }} width="max-content">
              <Header underlineColor={color} mt={0} width="max-content">
                Fullstack Developer
              </Header>
            </MotionBox>
          </Box>
          <Box as="h2" fontSize="2xl" fontWeight="400" textAlign="left">
            I'm {' '}
            <Box as="strong" fontWeight="600">
              Maria Constance
            </Box>{' '}
            and I'm a scientist and developer{' '}
            <Box as="span" whiteSpace="nowrap">
              based in São Paulo, Brazil.{' '}
            </Box>
          </Box>
          <Box as="h2" fontSize="2xl" fontWeight="400" mt={5} textAlign="left">
          Welcome to my page! I'm a marine biologist diving on the developer world. 
          Passionate about nature, the universe and pop culture (Harry Potter, Marvel and Game Of Thrones).
          </Box>
        </MotionFlex>
      </Flex>
    </Container>
  );
};

export default Introduction