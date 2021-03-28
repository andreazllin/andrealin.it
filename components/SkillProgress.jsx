import { useState } from 'react';
import { Button, ButtonGroup, Progress, HStack, Text, Box, Icon, Wrap, WrapItem } from '@chakra-ui/react';

export default function ProgressWrapper({ icon, color, title, data }) {
    return (
        <Box>
            <HStack>
                <Icon as={icon} fontSize="md" color={color} />
                <Text fontSize="2xl" fontWeight={600}>
                    {title}
                </Text>
            </HStack>

            {data.map((section, index) => (
                <SkillProgress section={section} key={index} />
            ))}
        </Box>
    );
}

const SkillProgress = ({ section }) => {
    const [element, setElement] = useState(section[0]);
    return (
        <Box my={4}>
            <Wrap mb={1} spacing="1" wrap={true} shouldWrapChildren={true}>
                {section.map((skill, index) => (
                    <WrapItem>
                        <Button size="xs" colorScheme={skill.color} key={index} onClick={() => setElement(skill)}>
                            {skill.name}
                        </Button>
                    </WrapItem>
                ))}
            </Wrap>

            <HStack>
                <Box w="auto">{element.perc.padStart(2, 0)}%</Box>
                <Box w="100%">
                    <Progress colorScheme={element.color} rounded="lg" value={element.perc} />
                </Box>
            </HStack>
        </Box>
    );
};
