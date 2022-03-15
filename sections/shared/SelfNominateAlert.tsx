import React from 'react'
import {
  useDisclosure,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
} from '@chakra-ui/react'

type SelfNominateAlertProps = {}

const SelfNominateAlert: React.FC<SelfNominateAlertProps> = ({}) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Flex
      px="8"
      py="4"
      mb="6"
      borderRadius="5px"
      background="linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), linear-gradient(73.6deg, #FF8060 2.11%, #FEB27A 90.45%);"
      alignItems="center"
      border="2px solid #FF8060"
    >
      <Box>
        <Heading
          size="sm"
          fontFamily="GT America Extended Bold"
          textTransform="uppercase"
        >
          Nominate Yourself
        </Heading>
        <Text fontSize="sm" opacity="0.7">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          pharetra
        </Text>
      </Box>
      <Button
        ml="auto"
        float="right"
        background="linear-gradient(311.52deg, #3D464C -36.37%, #131619 62.81%)"
        borderRadius="30px"
        fontSize="xs"
        colorScheme="teal"
        onClick={onOpen}
        boxShadow="0px 0px 10px 0px #000000E5"
      >
        Nominate Self
      </Button>

      <Modal size="2xl" isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent bg="black" color="white">
          <ModalCloseButton />
          <ModalBody textAlign="center">
            <Heading>Nominate Self</Heading>
            <Text>Lorem ipsum</Text>
            <Text>Checkboxes, input?</Text>
            <Button colorScheme="teal">Nominate Self</Button>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Flex>
  )
}
export default SelfNominateAlert
