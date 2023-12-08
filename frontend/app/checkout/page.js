import {
  Box,
  VStack,
  HStack,
  Text,
  Card,
  CardBody,
  StackDivider,
  Stack,
  Button,
  NumberInput,
  NumberInputStepper,
  NumberInputField,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";

import { FaMapMarkerAlt } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";


export default function Checkout() {
  return (
    <VStack style={{ backgroundColor: "#F0FFF4", padding: "10px" }}>
      <HStack backgroundColor={"white"} height={100} width={"100%"} padding={5}>
        <Box w={"50%"}>
          <HStack>
            <FaMapMarkerAlt />
            <Text fontWeight={"semibold"} fontSize={"large"}>
              Alamat Pengiriman
            </Text>
          </HStack>
          <Text fontWeight={"semibold"} fontSize={"large"}>
            Tito Suhadi (+6282212345678)
          </Text>
        </Box>
        <Box w={"50%"}>
          <Text fontSize={"large"} textAlign={"end"}>
            Jl. Mawar no 20, Bandung, Jawa Barat
          </Text>
        </Box>
      </HStack>

      <HStack backgroundColor={"white"} width={"100%"} padding={5}>
        <Box w={"100%"}>
          <HStack>
            <Text fontWeight={"bold"} fontSize={"large"}>
              Produk Dipesan
            </Text>
          </HStack>
          <Card borderRadius={15}>
            <CardBody>
              <Stack divider={<StackDivider />} spacing="4">
                <Box display={"flex"} alignItems={"center"} gap={5}>
                  <Image
                    objectFit="cover"
                    width={200}
                    height={200}
                    maxW={{ base: "100%", sm: "300px" }}
                    src="/image.png"
                    alt="Caffe Latte"
                  />
                  <Text fontSize={"large"} fontWeight={"bold"} width={240}>
                    Bibit Sawi
                  </Text>
                  <Text>RP 10.000</Text>
                  <NumberInput size="lg" maxW={32} defaultValue={1}>
                    <NumberInputField />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                  <Text textColor={"#9C4221"}>RP 10.000</Text>

                  <Button
                    // leftIcon={<MdDeleteOutline />}
                    colorScheme=""
                    variant="ghost"
                  ></Button>
                </Box>
              </Stack>
            </CardBody>
          </Card>
        </Box>
      </HStack>

      <VStack
        display={"flexs"}
        backgroundColor={"white"}
        height={100}
        width={"100%"}
        padding={5}
      >
        <Text fontWeight={"bold"} fontSize={"large"}>
          Metode Pembayaran
        </Text>
        <Box w={"50%"}>
          <HStack gap={2}>
            <Text
              bg={"#9C4221"}
              textColor={"white"}
              px={2}
              borderRadius={8}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              cursor={"pointer"}
            >
              Transfer Bank
            </Text>
            <Text
              textColor={"#9C4221"}
              borderWidth={2}
              borderColor={"#9C4221"}
              px={2}
              borderRadius={8}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              cursor={"pointer"}
            >
              Gopay
            </Text>
            <Text
              textColor={"#9C4221"}
              borderWidth={2}
              borderColor={"#9C4221"}
              px={2}
              borderRadius={8}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              cursor={"pointer"}
            >
              Ovo
            </Text>
            <Text
              textColor={"#9C4221"}
              borderWidth={2}
              borderColor={"#9C4221"}
              px={2}
              borderRadius={8}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              cursor={"pointer"}
            >
              Dana
            </Text>
          </HStack>
        </Box>
      </VStack>

      <VStack
        display={"flexs"}
        backgroundColor={"white"}
        width={"100%"}
        padding={5}
      >
        <Text fontWeight={"bold"} fontSize={"large"}>
          Subtotal
        </Text>
        <Box w={"50%"}>
          <HStack gap={5}>
            <Text w={400} fontWeight={"semibold"}>
              Subtotal Produk
            </Text>
            <Text>Rp10.000</Text>
          </HStack>
          <HStack gap={5}>
            <Text w={400} fontWeight={"semibold"}>
              Total Ongkos Kirim
            </Text>
            <Text>Rp10.000</Text>
          </HStack>
          <HStack gap={5}>
            <Text w={400} fontWeight={"semibold"}>
              Total Pembayaran
            </Text>
            <Text fontWeight={"bold"} textColor={"#9C4221"}>
              Rp10.000
            </Text>
          </HStack>
        </Box>
      </VStack>
      <Box
        bg={"#FFFAF0"}
        w={"100%"}
        h={100}
        p={5}
        display={"flex"}
        justifyContent={"end"}
      >
        <Link href="/pembayaran">
        <Text
          bg={"#9C4221"}
          textColor={"white"}
          px={2}
          borderRadius={8}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          height={10}
        >
          Buat Pesanan
        </Text>
        </Link>
      </Box>
    </VStack>
  );
}
