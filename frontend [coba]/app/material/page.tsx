import React from 'react'
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
  } from '@chakra-ui/react'
  import { BsCartCheckFill, BsTools } from 'react-icons/bs'
import Sidebar from '@/components/sidebar'
  
export default function Material() {
    return (
    <Stack width="100%" height="100%" maxWidth="100%" background="green.50">
      
      <Tabs
        align="center"
        mt={4} // margin-top 4
        mx={20}
      >
        <TabList>
            <Tab>All</Tab>
            <Tab>Available</Tab>
        </TabList>

        <TabPanels>
            <TabPanel>
                <div style={{ textAlign: 'right', margin: '10px 80px'}}>
                    <input
                        style={{
                        borderWidth: 1,
                        borderRadius: 7,
                        borderColor: "gray",
                    }}
                    placeholder="Cari Produk di sini"
                    />
                </div>
                
                <TableContainer  style={{ margin: '20px 80px', background:'white' }}>
                    <Table variant='simple'>
                        <Thead>
                            <Tr>
                                <Th>No</Th>
                                <Th>Nama Material</Th>
                                <Th>Jumlah Stok</Th>
                                <Th>Satuan</Th>
                            </Tr>
                        </Thead>

                        <Tbody>
                            <Tr>
                                <Td>1</Td>
                                <Td>Bibit Padi Tipe A</Td>
                                <Td>0</Td>
                                <Td>Kilogram</Td>
                            </Tr>
                            <Tr>
                                <Td>2</Td>
                                <Td>Bibit Padi Tipe B</Td>
                                <Td>1</Td>
                                <Td>Kilogram</Td>
                            </Tr>
                            <Tr>
                                <Td>3</Td>
                                <Td>Bibit Jagung Tipe A</Td>
                                <Td>4</Td>
                                <Td>Kilogram</Td>
                            </Tr>
                            <Tr>
                                <Td>4</Td>
                                <Td>Bibit Jagung Tipe B</Td>
                                <Td>3</Td>
                                <Td>Kilogram</Td>
                            </Tr>
                            <Tr>
                                <Td>5</Td>
                                <Td>Garu Sisir</Td>
                                <Td>2</Td>
                                <Td>Unit</Td>
                            </Tr>
                            <Tr>
                                <Td>6</Td>
                                <Td>Cangkul</Td>
                                <Td>5</Td>
                                <Td>Unit</Td>
                            </Tr>
                            <Tr>
                                <Td>7</Td>
                                <Td>Bibit Sawi</Td>
                                <Td>0</Td>
                                <Td>Kilogram</Td>
                            </Tr>
                            <Tr>
                                <Td>8</Td>
                                <Td>Bibit Kentang</Td>
                                <Td>0</Td>
                                <Td>Kilogram</Td>
                            </Tr>
                        </Tbody>

                    </Table>
                </TableContainer>
            </TabPanel>

            <TabPanel>
                <div style={{ textAlign: 'right', margin: '10px 80px' }}>
                    <input
                        style={{
                        borderWidth: 1,
                        borderRadius: 7,
                        borderColor: "gray",
                        }}
                        placeholder="Cari Produk di sini"
                    />
                </div>

                <TableContainer  style={{ margin: '20px 80px', background:'white' }}>
                    <Table variant='simple'>
                        <Thead>
                            <Tr>
                                <Th>No</Th>
                                <Th>Nama Material</Th>
                                <Th>Jumlah Stok</Th>
                                <Th>Satuan</Th>
                            </Tr>
                        </Thead>

                        <Tbody>
                            <Tr>
                                <Td>1</Td>
                                <Td>Bibit Padi Tipe B</Td>
                                <Td>1</Td>
                                <Td>Kilogram</Td>
                            </Tr>
                            <Tr>
                                <Td>2</Td>
                                <Td>Bibit Jagung Tipe A</Td>
                                <Td>4</Td>
                                <Td>Kilogram</Td>
                            </Tr>
                            <Tr>
                                <Td>3</Td>
                                <Td>Bibit Jagung Tipe B</Td>
                                <Td>3</Td>
                                <Td>Kilogram</Td>
                            </Tr>
                            <Tr>
                                <Td>4</Td>
                                <Td>Garu Sisir</Td>
                                <Td>2</Td>
                                <Td>Unit</Td>
                            </Tr>
                            <Tr>
                                <Td>5</Td>
                                <Td>Cangkul</Td>
                                <Td>5</Td>
                                <Td>Unit</Td>
                            </Tr>
                        </Tbody>

                    </Table>
                </TableContainer>

            </TabPanel>
        </TabPanels>
      </Tabs>
    </Stack>
  )
}  