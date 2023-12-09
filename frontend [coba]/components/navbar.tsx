'use client'
import { usePathname } from "next/navigation";
import NextLink from 'next/link'
import { Link } from '@chakra-ui/react'
import Image from "next/image";
import { Box, Text } from "@chakra-ui/react";
import React from "react";

export default function Navbar(){
    return (
        <div className="box">
              <div className="navbar">
                <Box
                    w={"100%"}
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent={"space-between"}
                  >
                    <Text fontSize={"x-large"} fontWeight={"bold"}>
                      Welcome, Tito Sutadi
                    </Text>
                    <Box position={"relative"} pr="10">
                      <Image
                        objectFit="cover"
                        width={50}
                        height={50}
                        src="/avatar.png"
                        alt="Caffe Latte"
                      />
                      <Box
                        position={"absolute"}
                        right={9}
                        bottom={1}
                        w={4}
                        h={4}
                        borderWidth={2}
                        borderColor={"white"}
                        bg={"green"}
                        borderRadius={"50%"}
                      ></Box>
                    </Box>
                  </Box>        
              </div>          
            </div>
    )
}