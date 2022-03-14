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
    <Flex p="3" mb="6" border="1px solid white" alignItems="center">
      <Box>
        <Heading size="sm">Nominate Yourself</Heading>
        <Text>Lorem Ipsum</Text>
      </Box>
      <Button
        ml="auto"
        float="right"
        size="sm"
        colorScheme="teal"
        onClick={onOpen}
      >
        Nominate Yourself
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
