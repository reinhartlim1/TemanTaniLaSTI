import Sidebar from '@/components/sidebar';
import Navbar from '@/components/navbar';
import { Flex, Box } from '@chakra-ui/layout';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Flex style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'center', height: '100vh' }}>
          <Box style={{ width: '270px', height: '100vh', position: 'sticky'}}>
            <Sidebar/>
          </Box>
          <Box style={{ flexGrow: 1, overflowY: 'auto' }}>
            <Navbar/>
            {children}
          </Box>
        </Flex>
      </body>
    </html>
  );
}