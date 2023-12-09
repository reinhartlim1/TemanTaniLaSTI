import Image from "next/image";
import {
  Box,
  Stack,
} from "@chakra-ui/react";
import Link from "next/link";

export default function PembarayanBerhasil() {
  return (
    <Stack
      display={"flex"}
      justifyContent={"center"}
      backgroundColor={"#F0FFF4"}
      padding={5}
    >
      <Link href="/">
        <Box w={"100%"} display={"flex"} justifyContent={"center"}>
          <Image
            objectFit="cover"
            width={500}
            height={200}
            // maxW={{ base: "100%", sm: "300px" }}
            src="/berhasil.png"
            alt="Caffe Latte"
          />
        </Box>
      </Link>
    </Stack>
  );
}
