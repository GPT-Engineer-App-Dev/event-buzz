import { useState } from "react";
import { Box, Button, Container, FormControl, FormLabel, Heading, Input, Select, useToast } from "@chakra-ui/react";

const BookTickets = () => {
  const [selectedEvent, setSelectedEvent] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [numTickets, setNumTickets] = useState("");
  const toast = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedEvent || !name || !email || !numTickets) {
      toast({
        title: "Error",
        description: "All fields are required.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      return;
    }

    // Here you would typically send the data to the server
    console.log({
      selectedEvent,
      name,
      email,
      numTickets,
    });

    toast({
      title: "Success",
      description: "Tickets booked successfully.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });

    // Clear the form
    setSelectedEvent("");
    setName("");
    setEmail("");
    setNumTickets("");
  };

  return (
    <Container maxW="container.md" py={10}>
      <Heading as="h1" size="xl" textAlign="center" mb={10}>
        Book Tickets
      </Heading>
      <Box as="form" onSubmit={handleSubmit}>
        <FormControl id="event" mb={4} isRequired>
          <FormLabel>Select Event</FormLabel>
          <Select
            placeholder="Select event"
            value={selectedEvent}
            onChange={(e) => setSelectedEvent(e.target.value)}
          >
            <option value="event1">Event 1</option>
            <option value="event2">Event 2</option>
            <option value="event3">Event 3</option>
          </Select>
        </FormControl>
        <FormControl id="name" mb={4} isRequired>
          <FormLabel>Name</FormLabel>
          <Input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </FormControl>
        <FormControl id="email" mb={4} isRequired>
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormControl>
        <FormControl id="num-tickets" mb={4} isRequired>
          <FormLabel>Number of Tickets</FormLabel>
          <Input
            type="number"
            value={numTickets}
            onChange={(e) => setNumTickets(e.target.value)}
          />
        </FormControl>
        <Button colorScheme="teal" type="submit" width="full">
          Book Tickets
        </Button>
      </Box>
    </Container>
  );
};

export default BookTickets;