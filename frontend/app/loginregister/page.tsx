"use client";
import Image from "next/image";

import {
  Stack,
  Text,
  Box,
  Tabs,
  Tab,
  TabPanels,
  TabList,
  TabPanel,
  Card,
  Input,
  Button,
  useToast,
} from "@chakra-ui/react";
import axios from "../axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Register() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const toast = useToast();
  const handleSignUp = async () => {
    try {
      const response = await axios.post("/users/", {
        email,
        password,
      });
      toast({
        title: "Sign Up success",
        description: "Logging in...",
        status: "success",
        duration: 9000,
        isClosable: true,
        position: "top",
      });
      handleLogin();
    } catch (error) {
      toast({
        title: "Sign Up failed",
        description: "Email has been used",
        status: "error",
        duration: 9000,
        isClosable: true,
        position: "top",
      });
    }
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        "/login",
        {
          username: email,
          password: password,
        },
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      toast({
        title: "Login success",
        description: "Welcome back",
        status: "success",
        duration: 9000,
        isClosable: true,
        position: "top",
      });
      localStorage.setItem("token", response.data.access_token);
      localStorage.setItem("token_type", response.data.token_type);
      router.push("/material");
    } catch (error) {
      console.log(error);
      toast({
        title: "Login failed",
        description: "Email or password is wrong",
        status: "error",
        duration: 9000,
        isClosable: true,
        position: "top",
      });
    }
  };
  return (
    <Stack
      align="center"
      width="100%"
      height="720px"
      maxWidth="100%"
      background="green.50"
    >
      <Text
        style={{ margin: "50px 0px" }}
        fontFamily="Inter"
        lineHeight="1.2"
        fontWeight="bold"
        fontSize="36px"
        color="black"
      >
        Selamat Datang di Website Teman Tani!
      </Text>

      <Stack
        align="center"
        borderRadius="24px"
        borderColor="gray.200"
        borderStartWidth="1px"
        borderEndWidth="1px"
        borderTopWidth="1px"
        borderBottomWidth="1px"
        width="768px"
        height="600px"
        maxWidth="100%"
        background="white"
        boxShadow="base"
      >
        <Box pt="2">
          <Image
            style={{ textAlign: "center", margin: "20px 0px" }}
            alt="Logo Teman Tani"
            src={"/teman-tani.png"}
            className="image"
            width={75}
            height={74}
            priority
          />
        </Box>
        <Tabs align="center" mx={20}>
          <TabList>
            <Tab>Daftar</Tab>
            <Tab>Masuk</Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <Card width="100%" height="330px" maxWidth="100%">
                <Text
                  fontFamily="Inter"
                  lineHeight="1.5"
                  fontWeight="regular"
                  fontSize="14px"
                  color="black"
                >
                  Email
                </Text>
                <Input
                  style={{ margin: "0px px 20px 0px" }}
                  placeholder="Email"
                  size="lg"
                  width=""
                  height="48px"
                  maxWidth="100%"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                />

                <Text
                  fontFamily="Inter"
                  lineHeight="1.5"
                  fontWeight="regular"
                  fontSize="14px"
                  color="black"
                >
                  Password
                </Text>
                <Input
                  style={{ margin: "0px 0px 20px 0px" }}
                  placeholder="Password"
                  size="lg"
                  width="371px"
                  height="48px"
                  maxWidth="100%"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                />

                <Button colorScheme="orange" onClick={handleSignUp}>
                  Register
                </Button>
              </Card>
            </TabPanel>

            <TabPanel>
              <Card width="371px" height="330px" maxWidth="100%">
                <Text
                  fontFamily="Inter"
                  lineHeight="1.5"
                  fontWeight="regular"
                  fontSize="14px"
                  color="black"
                >
                  Email
                </Text>
                <Input
                  style={{ margin: "0px 0px 50px 0px" }}
                  placeholder="Email"
                  size="lg"
                  width="371px"
                  height="48px"
                  maxWidth="100%"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                />

                <Text
                  fontFamily="Inter"
                  lineHeight="1.5"
                  fontWeight="regular"
                  fontSize="14px"
                  color="black"
                >
                  Password
                </Text>
                <Input
                  style={{ margin: "0px 0px 50px 0px" }}
                  placeholder="Password"
                  size="lg"
                  width="371px"
                  height="48px"
                  maxWidth="100%"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                />

                <Button colorScheme="orange" onClick={handleLogin}>
                  Login
                </Button>
              </Card>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Stack>
    </Stack>
  );
}
