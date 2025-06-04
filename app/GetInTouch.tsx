import { Box, Button, Group, Paper, SimpleGrid, Text, Textarea, TextInput, useMantineTheme } from '@mantine/core';
// import bg from './bg.svg';
import { ContactIconsList } from './ContactIcons';
import classes from './GetInTouch.module.css';
import { IconBrandTelegram, IconBrandWhatsapp, IconExternalLink, IconMail, IconPhone } from '@tabler/icons-react';
import { useState } from 'react';
  
function decode(encodedString: string) {
  // Decode the Base64 string to normal text
  const decodedBytes = atob(encodedString);
  // Convert the numbers back to the original phone number
  const originalNumber = decodedBytes.split('').map(function(char) {
      return String.fromCharCode(char.charCodeAt(0) - 1);
  }).join('');
  return originalNumber;
}

export function GetInTouch() {
    const [showPhoneNumber, setShowPhoneNumber] = useState(false); 
    const theme = useMantineTheme();
    const handleShowPhoneNumber = () => setShowPhoneNumber(true);
    const encodedPhoneNumber = "LDIhKToyOCohODEyLjQ1ODI=";
    const phoneNumber = decode(encodedPhoneNumber);
    const whatsappMessage = encodeURIComponent("Hello, I'm interested in your handyman services.");
  return (

    <Paper radius="xl">

      <Text ta="center" size="xl" fw={500} my="md">
      📱 Contact Us 📱
      </Text>

      <Box w="100%" p='20px 0' ta='center'>
                <SimpleGrid
                    cols={{ base: 1, sm: 2, lg: 4 }}
                    spacing={{ base: 10, sm: 'xl' }}
                    verticalSpacing={{ base: 'md', sm: 'xl' }}
                     my="xl"
                >
                    <Button
                    variant="outline"
                    component="a"
                    href="mailto:gatsby1118@gmail.com?subject=[WEBSITE%20INQUIRY]"
                    leftSection={<IconMail size={18} />}
                    >
                    Email
                    </Button>
                    <Button variant="outline" component="a" href="https://t.me/handymankurt" target="_blank" leftSection={<IconBrandTelegram size={18} />}>
                    Telegram
                    </Button>
                    <Button variant="outline" component="a" href={`https://wa.me/9177013471?text=${whatsappMessage}`} target="_blank" leftSection={<IconBrandWhatsapp size={18} />}>
                    WhatsApp
                    </Button>
                    {showPhoneNumber ? (
                    <Text>
                        <a href={`tel:${phoneNumber}`} style={{ textDecoration: "none", color: theme.colors.blue[6] }}>
                        {phoneNumber}
                        </a>
                    </Text>
                    ) : (
                    <Button variant="outline" onClick={handleShowPhoneNumber} leftSection={<IconPhone size={18} />}>
                        Direct Call
                    </Button>
                    )}
                </SimpleGrid>
        </Box>
      {/* <div className={classes.wrapper}>
        <div className={classes.contacts} style={{ backgroundColor: "#3574B7" }}>
          <Text fz="lg" fw={700} className={classes.title} c="#fff">
            Contact information
          </Text>

          <ContactIconsList />
        </div>

        <form className={classes.form} onSubmit={(event) => event.preventDefault()}>
          <Text fz="lg" fw={700} className={classes.title}>
            Send a request.
          </Text>

          <div className={classes.fields}>
            <SimpleGrid cols={{ base: 1, sm: 2 }}>
              <TextInput label="Your name" placeholder="Your name" />
              <TextInput label="Your email" placeholder="hello@mail.com" required />
            </SimpleGrid>

            <TextInput mt="md" label="Subject" placeholder="Subject" required />

            <Textarea
              mt="md"
              label="Your message"
              placeholder="Please include all relevant information"
              minRows={3}
            />

            <Group justify="flex-end" mt="md">
              <Button type="submit" className={classes.control}>
                Send message
              </Button>
            </Group>
          </div>
        </form>
      </div> */}
    </Paper>
  );
}