import Navbar from '@components/Navbar';
import { Flex, Box, Text, Image, Stack, HStack, Icon } from '@chakra-ui/react';
import { FaUser, FaBolt, FaEnvelope, FaCode, FaBook, FaCog } from 'react-icons/fa';
import ContactForm from '@components/ContactForm';
import Contacts from '@components/Contacts';
import ToggleDarkMode from '@components/ToggleDarkMode';
import SkillProgress from '@components/SkillProgress';
import { languages, libraries, tools } from '@content/skills';

export default function Home() {
    const birthday = new Date('2002-10-31');

    const calculateAge = (birthday) => {
        let difference = Date.now() - birthday.getTime();
        let date = new Date(difference);
        return Math.abs(date.getUTCFullYear() - 1970);
    };

    const age = calculateAge(birthday);

    return (
        <Flex justify="center" align="center" flexDirection="column">
            <Box w={{ base: '100%', md: '90%', lg: '80%', xl: '70%' }}>
                <Navbar />

                <Flex justify="center" align="center" m={10}>
                    <Stack direction={{ base: 'column', lg: 'row' }} align="center" spacing={7}>
                        <Box boxSize="150px">
                            <Image boxShadow="xl" borderRadius="full" src="https://i.imgur.com/TgxmYrp.jpg" alt="Andrea Lin" />
                        </Box>
                        <Box>
                            <Stack spacing={-5}>
                                <HStack>
                                    <Text fontSize="6xl" fontWeight={900}>
                                        Andrea
                                    </Text>
                                    <Text fontSize="6xl" fontWeight={900} color="green.500">
                                        Lin
                                    </Text>
                                </HStack>

                                <Text fontSize="3xl" color="gray.500">
                                    Studente
                                </Text>
                            </Stack>
                        </Box>
                    </Stack>
                </Flex>
                <Box m={10} id="aboutme">
                    <HStack>
                        <Icon as={FaUser} fontSize="xl" color="red.500" />
                        <Text fontSize="3xl" fontWeight={800}>
                            Chi Sono?
                        </Text>
                    </HStack>
                    <Box p={5}>
                        <Text fontSize="xl">
                            Ciao! mi chiamo Andrea Lin, ho {age} anni attualmente sto frequentando il quinto anno dell'indirizzo informatico all'I.I.S. Blaise Pascal di Reggio Emilia.
                            <br />
                            In futuro vorrei studiare informatica all'università e poi lavorare come Web Developer.
                        </Text>
                    </Box>
                </Box>
                <Box m={10} id="skills">
                    <HStack>
                        <Icon as={FaBolt} fontSize="xl" color="yellow.400" />
                        <Text fontSize="3xl" fontWeight={800}>
                            Skills
                        </Text>
                    </HStack>
                    <Box p={5}>
                        <SkillProgress icon={FaCode} color="green.300" title="Linguaggi" data={languages} />
                        <SkillProgress icon={FaBook} color="red.400" title="Librerie / Frameworks" data={libraries} />
                        <SkillProgress icon={FaCog} color="gray.500" title="Strumenti / Servizi" data={tools} />
                    </Box>
                </Box>
                <Box m={10} id="contact">
                    <HStack>
                        <Icon as={FaEnvelope} fontSize="xl" color="blue.400" />
                        <Text fontSize="3xl" fontWeight={800}>
                            Contattami
                        </Text>
                    </HStack>
                    <Box p={5}>
                        <Stack direction={{ base: 'column', lg: 'row' }} spacing={5}>
                            <Box w={{ base: '100%', lg: '65%' }}>
                                <ContactForm />
                            </Box>
                            <Box w={{ base: '100%', lg: '35%' }}>
                                <Contacts />
                            </Box>
                        </Stack>
                    </Box>
                </Box>
            </Box>
            <ToggleDarkMode />
        </Flex>
    );
}
