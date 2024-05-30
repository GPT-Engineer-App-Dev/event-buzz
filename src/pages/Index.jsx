import { Box, Button, Container, Flex, Heading, HStack, Text, VStack, Link, SimpleGrid, Image } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Navigation Bar */}
      <Flex as="nav" bg="blue.600" color="white" p={4} justifyContent="space-between" alignItems="center">
        <Heading size="md">EventManager</Heading>
        <HStack spacing={8}>
          <Link href="#home" _hover={{ textDecoration: "none", color: "blue.300" }}>Home</Link>
          <Link href="#events" _hover={{ textDecoration: "none", color: "blue.300" }}>Events</Link>
          <Link href="#about" _hover={{ textDecoration: "none", color: "blue.300" }}>About</Link>
          <Link href="#contact" _hover={{ textDecoration: "none", color: "blue.300" }}>Contact</Link>
          <Link href="/create-event" _hover={{ textDecoration: "none", color: "blue.300" }}>Create Event</Link>
          <Link href="/book-tickets" _hover={{ textDecoration: "none", color: "blue.300" }}>Book Tickets</Link>
        </HStack>
      </Flex>

      {/* Hero Section */}
      <Box id="home" bg="blue.500" color="white" py={20} textAlign="center">
        <Heading size="2xl" mb={4}>Welcome to EventManager</Heading>
        <Text fontSize="xl" mb={6}>Your one-stop solution for managing and attending events</Text>
        <Button colorScheme="teal" size="lg">Get Started</Button>
      </Box>

      {/* Upcoming Events Section */}
      <Box id="events" py={20} px={4}>
        <Heading size="xl" textAlign="center" mb={10}>Upcoming Events</Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={6}>
            <Image src="https://via.placeholder.com/300" alt="Event 1" mb={4} />
            <Heading size="md" mb={2}>Event 1</Heading>
            <Text>Date: 2023-10-01</Text>
            <Text>Location: New York</Text>
          </Box>
          <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={6}>
            <Image src="https://via.placeholder.com/300" alt="Event 2" mb={4} />
            <Heading size="md" mb={2}>Event 2</Heading>
            <Text>Date: 2023-11-15</Text>
            <Text>Location: Los Angeles</Text>
          </Box>
          <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={6}>
            <Image src="https://via.placeholder.com/300" alt="Event 3" mb={4} />
            <Heading size="md" mb={2}>Event 3</Heading>
            <Text>Date: 2023-12-05</Text>
            <Text>Location: Chicago</Text>
          </Box>
        </SimpleGrid>
      </Box>

      {/* Testimonials Section */}
      <Box id="about" bg="gray.100" py={20} px={4}>
        <Heading size="xl" textAlign="center" mb={10}>What Our Users Say</Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          <Box p={6} textAlign="center">
            <Text fontSize="lg" mb={4}>"EventManager made organizing our annual conference a breeze!"</Text>
            <Text>- John Doe</Text>
          </Box>
          <Box p={6} textAlign="center">
            <Text fontSize="lg" mb={4}>"I love how easy it is to find and register for events."</Text>
            <Text>- Jane Smith</Text>
          </Box>
          <Box p={6} textAlign="center">
            <Text fontSize="lg" mb={4}>"The best event management platform I've used so far."</Text>
            <Text>- Michael Johnson</Text>
          </Box>
        </SimpleGrid>
      </Box>

      {/* Footer */}
      <Box id="contact" bg="blue.600" color="white" py={10} textAlign="center">
        <VStack spacing={4}>
          <Heading size="md">Contact Us</Heading>
          <Text>Email: contact@eventmanager.com</Text>
          <Text>Phone: (123) 456-7890</Text>
          <HStack spacing={4}>
            <Link href="https://facebook.com" isExternal><FaFacebook size="24px" /></Link>
            <Link href="https://twitter.com" isExternal><FaTwitter size="24px" /></Link>
            <Link href="https://instagram.com" isExternal><FaInstagram size="24px" /></Link>
          </HStack>
        </VStack>
      </Box>
    </Container>
  );
};

export default Index;