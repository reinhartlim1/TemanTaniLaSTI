"use client";
import React from "react";
import {
  Stack,
  Box,
  Icon,
  Avatar,
  AvatarBadge,
  Text,
  Tabs,
  Tab,
  TabPanels,
  TabList,
  TabPanel,
  Input,
  InputRightElement,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  useToast,
} from "@chakra-ui/react";
import { BsCartCheckFill, BsTools } from "react-icons/bs";
import Sidebar from "@/components/sidebar";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import axios from "../axios";

export default function Material() {
  const router = useRouter();
  const toast = useToast();
  const [data, setData] = useState([]);
  const [lowStock, setLowStock] = useState([]);

  useEffect(() => {
    const fetchStock = async () => {
      try {
        const response = await axios.get("/warehouse", {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        });
        setData(response.data);
      } catch (error) {
        console.error("Fetch products failed:", error);
      }
    };
    const fetchLowStock = async () => {
      try {
        const response = await axios.get("/warehouse/low", {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        });
        setLowStock(response.data);
      } catch (error) {
        console.error("Fetch products failed:", error);
      }
    };
    fetchStock();
    fetchLowStock();
  }, []);

  console.log(data);
  return (
    <Stack width="100%" height="720px" maxWidth="100%" background="green.50">
      <Tabs
        align="center"
        mt={4} // margin-top 4
        mx={20}
      >
        <TabList>
          <Tab>All</Tab>
          <Tab>Unvailable</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <Box style={{ textAlign: "right", margin: "10px 80px" }}>
              <Input
                style={{
                  borderWidth: 1,
                  borderRadius: 7,
                  borderColor: "gray",
                }}
                placeholder="Cari Produk di sini"
              />
            </Box>

            <TableContainer
              style={{ margin: "20px 80px", background: "white" }}
            >
              <Table variant="simple">
                <Thead>
                  <Tr>
                    <Th>No</Th>
                    <Th>Nama Material</Th>
                    <Th>Jumlah Stok</Th>
                    <Th>Satuan</Th>
                  </Tr>
                </Thead>

                <Tbody>
                  {data?.map((item, index) => (
                    <Tr key={index}>
                      <Td>{index + 1}</Td>
                      <Td>{item.material_name}</Td>
                      <Td>{item.quantity_in_stock}</Td>
                      <Td>{item.unit_type}</Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </TableContainer>
          </TabPanel>

          <TabPanel>
            <Box style={{ textAlign: "right", margin: "10px 80px" }}>
              <Input
                style={{
                  borderWidth: 1,
                  borderRadius: 7,
                  borderColor: "gray",
                }}
                placeholder="Cari Produk di sini"
              />
            </Box>

            <TableContainer
              style={{ margin: "20px 80px", background: "white" }}
            >
              <Table variant="simple">
                <Thead>
                  <Tr>
                    <Th>No</Th>
                    <Th>Nama Material</Th>
                    <Th>Jumlah Stok</Th>
                    <Th>Satuan</Th>
                  </Tr>
                </Thead>

                <Tbody>
                  {lowStock?.map((item, index) => (
                    <Tr key={index}>
                      <Td>{index + 1}</Td>
                      <Td>{item.material_name}</Td>
                      <Td>{item.quantity_in_stock}</Td>
                      <Td>{item.unit_type}</Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </TableContainer>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Stack>
  );
}
