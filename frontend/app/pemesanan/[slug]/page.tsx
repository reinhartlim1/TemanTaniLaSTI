"use client"
import {
  Card,
  Stack,
  Heading,
  Text,
  Button,
  Image,
  CardBody,
  CardFooter,
} from "@chakra-ui/react";

import Link from "next/link";

import { FaCartShopping } from "react-icons/fa6";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import axios from "axios";


export default function Detail({ params }: { params: any }) {
  const id = params.slug;
  const [material, setMaterial] = useState({
    material_id: null,
    material_name:"",
    quantity_available: null,
    price_per_unit: null,
  });

  useEffect(() => {
    const fetchMaterial = async () => {
      try {
        const response = await axios.get("https://temantanilasti-production.up.railway.app/materials/" + id, {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        });
        setMaterial(response.data);
      } catch (error) {
        console.error("Fetch materials failed:", error);
      }
    };
    fetchMaterial();
  });


  return (
    <Stack style={{ padding: 20, backgroundColor: "#F0FFF4" }}>
      <Card
        direction={{ base: "column", sm: "row" }}
        overflow="hidden"
        variant="outline"
        style={{ backgroundColor: "white", padding: 20, height: 300 }}
      >
        <Image
          objectFit="cover"
          maxW={{ base: "100%", sm: "300px" }}
          src="/image.png"
          alt="Caffe Latte"
        />

        <Stack>
          <CardBody>
            <Heading size="md">{material.material_name}</Heading>

            <Text py="2">Rp{material.price_per_unit * 1000}</Text>
            <Text py="2" fontWeight="bold">
              Pengiriman ke
            </Text>
            <Text py="2">Jakarta Pusat</Text>
          </CardBody>

          <CardFooter display={"flex"} gap={3}>
            <Link href="/keranjang">
              <Button
                leftIcon={<FaCartShopping />}
                colorScheme="teal"
                variant="outline"
              >
                Masukan ke keranjang
              </Button>
            </Link>
            <Link href={`/checkout/${id}`}>
              <Button
                leftIcon={<FaCartShopping />}
                colorScheme="teal"
                variant="solid"
              >
                Beli Sekarang
              </Button>
            </Link>
          </CardFooter>
        </Stack>
      </Card>
    </Stack>
  );
}
