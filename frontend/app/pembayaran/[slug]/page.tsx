"use client";
import {
  Box,
  VStack,
  HStack,
  Text,
  Stack,
  useToast,
  Button,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
export default function Pembayaran({ params }: { params: any }) {
  const id = params.slug;
  const [order, setOrder] = useState({
    order_id: null,
    user_id: null,
    material_id: null,
    quantity_ordered: null,
  });
  const toast = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [material, setMaterial] = useState({
    material_id: null,
    material_name: "",
    quantity_available: null,
    price_per_unit: 0,
  });
  const router = useRouter();
  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const response = await axios.get(
          "https://temantanilasti-production.up.railway.app/orders/" + id,
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          }
        );
        setOrder(response.data);
      } catch (error) {
        console.error("Fetch orders failed:", error);
      }
    };
    fetchOrder();
  });
  useEffect(() => {
    const fetchMaterial = async () => {
      try {
        const response = await axios.get(
          "https://temantanilasti-production.up.railway.app/materials/" +
            order.material_id,
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
  }, [order]);

  const handlePayment = async () => {
    setIsLoading(true);
    try {
      const response = await axios.post(
        "https://temantanilasti-production.up.railway.app/payment/" +
          order.order_id,
        {
          order_id: order.order_id,
        },
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );
      toast({
        title: "Pembayaran berhasil",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      router.push("/pembayaran-berhasil");
    } catch (error) {
      toast({
        title: "Pembayaran gagal",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      console.error("Payment failed:", error);
    }
  };
  return (
    <VStack
      display={"flex"}
      justifyContent={"left"}
      backgroundColor={"#F0FFF4"}
      padding={5}
    >
      <Box w={"100%"}>
        <Text fontWeight={"bold"} fontSize={"large"} textAlign={"left"}>
          Pembayaran
        </Text>
      </Box>
      <Stack w={"100%"} bg={"white"} borderRadius={15} padding={10}>
        <HStack>
          <Text w={400} fontWeight={"bold"}>
            Transfer Bank
          </Text>
          <Text fontWeight={"bold"}>Bank BRI</Text>
        </HStack>
        <HStack>
          <Text w={400} fontWeight={"bold"}>
            Kode Pembayaran
          </Text>
          <Text>1231074184204920</Text>
        </HStack>
        <HStack>
          <Text w={400} fontWeight={"bold"}>
            Total Bayar
          </Text>
          <Text>
            Rp
            {order.quantity_ordered * (material.price_per_unit * 1000) + 10000}
          </Text>
        </HStack>
      </Stack>
      <Box
        bg={"#FFFAF0"}
        w={"100%"}
        h={100}
        p={5}
        display={"flex"}
        justifyContent={"center"}
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
          cursor={"pointer"}
          onClick={handlePayment}
          isLoading={isLoading}
          loadingText="Waiting for Payment"
        >
          Selesai
        </Button>
      </Box>
    </VStack>
  );
}
