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

export default function Detail() {
  return (
    <Stack style={{ padding: 20, backgroundColor: "#F0FFF4"}}>
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
            <Heading size="md">Bibit Sawi</Heading>

            <Text py="2">Rp10.000</Text>
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
            <Link href="/checkout">
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
