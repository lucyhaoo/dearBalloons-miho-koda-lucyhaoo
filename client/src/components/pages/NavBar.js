import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
} from '@chakra-ui/react';
import React from "react";
import GoogleLogin, { GoogleLogout } from "react-google-login";
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { navigate } from "@reach/router";

const Links = ['Dashboard', 'Write a letter', 'Pick up a message'];

const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'underline',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    onClick={async event => {
      if (children === 'Dashboard') {
        navigate(`/`)
      } else if (children === 'Write a letter') {
        navigate(`/TextEditor`)
      } else if (children === 'Pick up a message') {
        navigate(`/PickUp`)
      } 
    }}>
    {children}
  </Link>
);

const GOOGLE_CLIENT_ID = "104820923294-urq2f2ldknf1fhfrp4537sratgfad5vn.apps.googleusercontent.com";

const NavBar = ({ userId, handleLogin, handleLogout }) => {

  const authButton = userId ? (
    <GoogleLogout
      clientId={GOOGLE_CLIENT_ID}
      buttonText="Logout"
      onLogoutSuccess={handleLogout}
      onFailure={(err) => console.log(err)}
    />
  ) : (
    <GoogleLogin
      clientId={GOOGLE_CLIENT_ID}
      buttonText="Login"
      onSuccess={handleLogin}
      onFailure={(err) => console.log(err)}
    />
  )

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Box>Dear Balloons</Box>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </HStack>
          </HStack>
          {authButton}
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}

export default NavBar;