"use client";
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
  useToast,
} from "@chakra-ui/react";

import { FaMapMarkerAlt } from "react-icons/fa";
import Image from "next/image";
import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function Checkout({ params }: { params: any }) {
  const id = params.slug;
  const [material, setMaterial] = useState({
    material_id: null,
    material_name: "",
    quantity_available: null,
    price_per_unit: null,
  });
  const toast = useToast();
  const [count, setCount] = useState(1);
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchMaterial = async () => {
      try {
        const response = await axios.get(
          "https://temantanilasti-production.up.railway.app/materials/" + id,
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          }
        );
        setMaterial(response.data);
      } catch (error) {
        console.error("Fetch materials failed:", error);
      }
    };
    fetchMaterial();
  });

  const handleOrder = async () => {
    try {
      setIsLoading(true);
      const response = await axios.post(
        "https://temantanilasti-production.up.railway.app/orders",
        {
          material_id: material.material_id,
          quantity: count,
        },
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );

      toast({
        title: "Pesanan berhasil dibuat",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      router.push(`/pembayaran/${response.data.order_id}`);
    } catch (error) {
      console.error("Fetch materials failed:", error);
      toast({
        title: "Pesanan gagal dibuat",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <VStack
      style={{ backgroundColor: "#F0FFF4", padding: "10px", overflowY: "auto" }}
    >
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
                    src="/image.png"
                    alt="Caffe Latte"
                  />
                  <Text fontSize={"large"} fontWeight={"bold"} width={240}>
                    {material.material_name}
                  </Text>
                  <Text>RP {material.price_per_unit * 1000}</Text>
                  <NumberInput
                    min={1}
                    size="lg"
                    maxW={32}
                    defaultValue={1}
                    onChange={(e) => setCount(parseInt(e))}
                  >
                    <NumberInputField />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                  <Text textColor={"#9C4221"}>
                    RP {material.price_per_unit * count * 1000}
                  </Text>

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
            <Text>Rp{material.price_per_unit * count * 1000}</Text>
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
              Rp{material.price_per_unit * count * 1000 + 10000}
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
        <Button
          bg={"#9C4221"}
          textColor={"white"}
          px={2}
          borderRadius={8}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          height={10}
          onClick={handleOrder}
          isLoading={isLoading}
          loadingText="Ordering"
        >
          Buat Pesanan
        </Button>
      </Box>
    </VStack>
  );
}
