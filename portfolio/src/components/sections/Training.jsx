import { Flex, Grid, Section, Heading, Text, Separator } from "@radix-ui/themes";
import { TrainingBox } from "../custom/TrainingBox";
import { MySeparator } from "../custom/MySeparator";


export default function Training () {
    return (
        <Section>
            <Flex direction='column' gap='3'>
                <Flex gap='5' direction='column' style={{padding:'5% 0%'}}>
                    <Heading align='center' style={{padding: '2%', fontSize: '300%', fontWeight: '800'}}>TRAININGS</Heading>
                    <MySeparator />
                    <Text 
                        align='center'
                        size='7' 
                        style={{padding: '5%', fontSize: '150%'}}
                        >
                        Here are some of the trainings that helped me hone my skill to this level.
                    </Text>
                </Flex>
                <Grid columns='3' gap='7' style={{padding:'0% 10%'}}>
                    <TrainingBox training='Robotics' type="BootCamp" origin="STEM IGNITE" date='September 2022'/>
                    <TrainingBox training='3D Modeling' type='BootCamp' origin='STEM IGNITE' date='September 2021' />
                    <TrainingBox training='Javascript Course' type='Training' origin='WildLearner' date='March 2023' />
                    <TrainingBox training='Python' type='Training' origin='WildLearner' date='July 2023' />
                    <TrainingBox training='MongoDB' type='Training' origin='WildLearner' date='October 2023' />
                    <TrainingBox training='React JS' type='Training' origin='WildLearner' date='October 2023' />
                    <TrainingBox training='Express JS' type='Training' origin='WildLearner' date='October 2023' />
                    <TrainingBox training='Node JS' type='Training' origin='WildLearner' date='October 2023' />
                </Grid>
                <Separator size='4' />
            </Flex>
        </Section>
    )
}