import {
  chakra,
  Stack,
  Text,
  Avatar,
  Divider,
  useColorModeValue,
  Flex
} from '@chakra-ui/react';
// Here we have used react-icons package for the icons

const SkillCard = (props) => {
  const {skill} = props;
  return (
      <Stack
        w="30rem"
        spacing={3}
        pb={4}
        pt={2}
        border="1px solid"
        borderColor={useColorModeValue('gray.400', 'gray.600')}
        rounded="md"
        _hover={{
          boxShadow: useColorModeValue(
            '0 4px 6px rgba(160, 174, 192, 0.6)',
            '0 4px 6px rgba(9, 17, 28, 0.4)'
          )
        }}
        textAlign="center"
      >
        <Flex justifyContent="center" alignItems="center" >
          <Avatar
            src={skill.image}
            size="md"
            borderRadius="md"
            marginLeft="4" />
          <chakra.h1 fontSize="2xl" fontWeight="bold">
          <chakra.span color="white" bg="linear-gradient(transparent 50%, #186685 30%)">
            {skill.name}
          </chakra.span>
          </chakra.h1>
        </Flex>
        <Divider />
        <Text fontSize="xl" color="gray.200" p="4">
          {skill.description}
        </Text>
        <Flex gap="2" justify="center" alignItems="center">
          <Text fontSize="xl">&#123;</Text> 
            {skill.icons.map((icon) => {
                  return <Avatar src={icon} size="sm"/>  
                })} 
          <Text fontSize="xl">&#125;</Text>
        </Flex>
      </Stack>
  );
};

export default SkillCard;