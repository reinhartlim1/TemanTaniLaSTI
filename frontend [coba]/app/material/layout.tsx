import Navbar from '@/components/navbar';
import Sidebar from '@/components/sidebar';
import { Flex, Box } from '@chakra-ui/layout';
 
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Flex style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', overflow:"hidden" }}>
          <Box style={{ width: '270px' }}>
            <Sidebar/>
          </Box>
          <Box style={{ flexGrow: 1, height: '100vh', margin: 0, padding: 0 }}>
            <Navbar/>
            {children}
            </Box>
        </Flex>
      </body>
    </html>
  );
}