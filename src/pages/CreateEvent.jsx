import { useState } from "react";
import { Box, Button, Container, Flex, FormControl, FormLabel, Heading, Input, Textarea, useToast } from "@chakra-ui/react";

const CreateEvent = () => {
  const [eventName, setEventName] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventTime, setEventTime] = useState("");
  const [eventLocation, setEventLocation] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  const toast = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!eventName || !eventDate || !eventTime || !eventLocation || !eventDescription) {
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
      eventName,
      eventDate,
      eventTime,
      eventLocation,
      eventDescription,
    });

    toast({
      title: "Success",
      description: "Event created successfully.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });

    // Clear the form
    setEventName("");
    setEventDate("");
    setEventTime("");
    setEventLocation("");
    setEventDescription("");
  };

  return (
    <Container maxW="container.md" py={10}>
      <Heading as="h1" size="xl" textAlign="center" mb={10}>
        Create Event
      </Heading>
      <Box as="form" onSubmit={handleSubmit}>
        <FormControl id="event-name" mb={4} isRequired>
          <FormLabel>Event Name</FormLabel>
          <Input
            type="text"
            value={eventName}
            onChange={(e) => setEventName(e.target.value)}
          />
        </FormControl>
        <FormControl id="event-date" mb={4} isRequired>
          <FormLabel>Event Date</FormLabel>
          <Input
            type="date"
            value={eventDate}
            onChange={(e) => setEventDate(e.target.value)}
          />
        </FormControl>
        <FormControl id="event-time" mb={4} isRequired>
          <FormLabel>Event Time</FormLabel>
          <Input
            type="time"
            value={eventTime}
            onChange={(e) => setEventTime(e.target.value)}
          />
        </FormControl>
        <FormControl id="event-location" mb={4} isRequired>
          <FormLabel>Event Location</FormLabel>
          <Input
            type="text"
            value={eventLocation}
            onChange={(e) => setEventLocation(e.target.value)}
          />
        </FormControl>
        <FormControl id="event-description" mb={4} isRequired>
          <FormLabel>Event Description</FormLabel>
          <Textarea
            value={eventDescription}
            onChange={(e) => setEventDescription(e.target.value)}
          />
        </FormControl>
        <Button colorScheme="teal" type="submit" width="full">
          Create Event
        </Button>
      </Box>
    </Container>
  );
};

export default CreateEvent;