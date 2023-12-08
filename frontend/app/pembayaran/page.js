import {
  Box,
  VStack,
  HStack,
  Text,
  Stack,
} from "@chakra-ui/react";
import Link from "next/link";
export default function Pembayaran() {
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
          <Text>Rp15.000</Text>
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
        <Link href="/pembayaran-berhasil">
          <Text
            bg={"#9C4221"}
            textColor={"white"}
            px={2}
            borderRadius={8}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            height={10}
            cursor={"pointer"}
          >
            Selesai
          </Text>
        </Link>
      </Box>
    </VStack>
  );
}
