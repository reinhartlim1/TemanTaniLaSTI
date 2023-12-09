"use client";
import {
  Card,
  CardBody,
  StackDivider,
  Box,
  Stack,
  Text,
  Button,
  NumberInput,
  NumberInputStepper,
  NumberInputField,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";

import Link from "next/link";

import { MdDeleteOutline } from "react-icons/md";
import Image from "next/image";

const Cards = ({ itemName, itemPrice }) => {
  return (
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
        {itemName}
      </Text>
      <Text>{itemPrice}</Text>
      <NumberInput size="lg" maxW={32} defaultValue={1}>
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
      <Text textColor={"#9C4221"}>{itemPrice}</Text>

      <Button
        leftIcon={<MdDeleteOutline />}
        colorScheme=""
        variant="ghost"
      ></Button>
    </Box>
  );
};

export default function Keranjang() {
  const arrData = [
    { name: "Bibit Sawi", price: "RP 20.000" },
    { name: "Cangkul", price: "RP 20.000" },
    { name: "Bibit Padi Tipe A", price: "RP 20.000" },
  ];
  return (
    <div
      style={{ height: "1000px", backgroundColor: "#F0FFF4", padding: "10px" }}
    >
      <Text fontWeight={"bold"} fontSize={"x-large"} my={3}>
        Keranjang Belanja
      </Text>
      <Card borderRadius={15}>
        <CardBody>
          <Stack divider={<StackDivider />} spacing="4">
            {arrData.map((item, index) => (
              <Cards key={index} itemName={item.name} itemPrice={item.price} />
            ))}
          </Stack>
        </CardBody>
      </Card>
      <Box
        height={20}
        backgroundColor={"#FFFAF0"}
        display={"flex"}
        alignItems={"center"}
        px={"10"}
        my={15}
        borderRadius={15}
        gap={5}
        justifyContent={"center"}
      >
        <Text>Pilih Semua ({arrData.length})</Text>
        <Text fontWeight={"bold"} fontSize={"large"}>
          Total (1 Produk):
        </Text>
        <Text fontWeight={"bold"} fontSize={"large"} textColor={"#9C4221"}>
          Rp 10.000
        </Text>
        <Link href="/pembayaran">
          <Text
            fontWeight={"bold"}
            fontSize={"large"}
            backgroundColor={"#9C4221"}
            textColor={"white"}
            p={2}
            borderRadius={6}
          >
            Checkout
          </Text>
        </Link>
      </Box>
    </div>
  );
}
