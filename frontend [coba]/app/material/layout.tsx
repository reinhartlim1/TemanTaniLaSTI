import Sidebar from '@/components/sidebar';
import { Flex, Box } from '@chakra-ui/layout';
 
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
    <body>
        <Flex>
        <Sidebar/>
      {children}
      </Flex>
    </body>
  </html>
  );
}