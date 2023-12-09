import Image from "next/image";

import {
    Stack,
    Text,
    Box,
    Tabs,
    Tab,
    TabPanels,
    TabList,
    TabPanel,
    Card,
    Input,
    Button,
  } from '@chakra-ui/react'
  
  export default function Register(){
    return(
    <Stack align='center' width="100%" height="720px" maxWidth="100%" background="green.50">  
      <Text style={{margin: '40px 0px' }}
        fontFamily="Inter"
        lineHeight="1.2"
        fontWeight="bold"
        fontSize="36px"
        color="black"
      >
        Selamat Datang di Website Teman Tani!
      </Text>
      
      <Stack
        align='center'
        borderRadius="24px"
        borderColor="gray.200"
        borderStartWidth="1px"
        borderEndWidth="1px"
        borderTopWidth="1px"
        borderBottomWidth="1px"
        width="768px"
        height="600px"
        maxWidth="100%"
        background="white"
        boxShadow="base"
      >
        <Box pt='2'>
        <Image style={{ textAlign: 'center', margin: '20px 0px' }}
            alt="Logo Teman Tani"
            src={"/teman-tani.png"}
            className="image"
            width={75}
            height={74}
            priority
        />
        </Box>
        <Tabs 
        align="center"
        mx={20}
        >
          <TabList>
            <Tab>Daftar</Tab>
            <Tab>Masuk</Tab>
          </TabList>

        <TabPanels>  
          <TabPanel>
              <Card width="100%" height="330px" maxWidth="100%">

                <Text
                  fontFamily="Inter"
                  lineHeight="1.5"
                  fontWeight="regular"
                  fontSize="14px"
                  color="black"
                >
                  Email
                </Text>
                <Input style={{ margin: '0px px 20px 0px'}} 
                  placeholder="Email"
                  size="lg"
                  width=""
                  height="48px"
                  maxWidth="100%"
                />

                <Text
                  fontFamily="Inter"
                  lineHeight="1.5"
                  fontWeight="regular"
                  fontSize="14px"
                  color="black"
                >
                  Username
                </Text>
                <Input style={{ margin: '0px 0px 20px 0px'}} 
                  placeholder="Username"
                  size="lg"
                  width="371px"
                  height="48px"
                  maxWidth="100%"
                />

                <Text
                fontFamily="Inter"
                lineHeight="1.5"
                fontWeight="regular"
                fontSize="14px"
                color="black"
                >
                  Password
                </Text>
                <Input style={{ margin: '0px 0px 20px 0px'}} 
                  placeholder="Password"
                  size="lg"
                  width="371px"
                  height="48px"
                  maxWidth="100%"
                />

                <Button colorScheme="orange">Register</Button>
              </Card>  
          </TabPanel>

          <TabPanel>
          <Card width="371px" height="330px" maxWidth="100%">
            <Text
              fontFamily="Inter"
              lineHeight="1.5"
              fontWeight="regular"
              fontSize="14px"
              color="black"
            >
            Username
            </Text>
            <Input style={{ margin: '0px 0px 50px 0px'}}
              placeholder="Username"
              size="lg"
              width="371px"
              height="48px"
              maxWidth="100%"
            />

            <Text
              fontFamily="Inter"
              lineHeight="1.5"
              fontWeight="regular"
              fontSize="14px"
              color="black"
            >
              Password
            </Text>
            <Input style={{ margin: '0px 0px 50px 0px'}}
              placeholder="Password"
              size="lg"
              width="371px"
              height="48px"
              maxWidth="100%"
            />

            <Button colorScheme="orange">Login</Button>
            </Card>  
          </TabPanel>

        </TabPanels>
        </Tabs>
        
      </Stack>
    </Stack>
  )
}  