import Image from "next/image";
import Link from "next/link";

import {
    Stack,
    Text,
    Button,
  } from '@chakra-ui/react'

export default function Page() {
  return (
    <Stack align='center' width="100%" height="720px" maxWidth="100%" background="green.50">  
    <Text style={{margin: '50px 0px' }}
      fontFamily="Inter"
      lineHeight="1.2"
      fontWeight="bold"
      fontSize="36px"
      color="black"
    >
      Selamat Datang di Website Teman Tani!
    </Text>

    <Image style={{alignItems: 'center', margin: '30px 30px'}}
                src={"/teman-tani.png"}
                alt="Teman Tani"
                className="image"
                width="96"
                height="97"
    />

    <Link href='/loginregister'>
    <Button colorScheme="orange" >Masuk ke Website Teman Tani</Button>
    </Link>

    </Stack>
  );
}