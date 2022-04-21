import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView }  from 'react-native';
import imageA from './assets/home-image-2.jpg';
import imageB from './assets/our-story-image-2.jpg';
import imageC from './assets/our-story-image-3.jpg';

const blockA = `
✔️\tA curious and experienced Full Stack Engineer; BSc in Computer Science & Mathematics and BA inBusiness Administration – 2 degrees in parallel.

✔️\tFamiliar with wide range of programming languages & tools. 

✔️\tProven experience in working on several projects and various technologies simultaneously, troubleshooting, debugging and upgrading apps, with record of delivering ahead of schedule.

✔️\tBrings in-depth understanding of company's products, able to operate in a productive and efficient manner, converting ideas into innovative solutions.
`;

const blockB = `
 ✔️\tPossess excellent technical skills, well experienced in B2C Apps architecture & design, in both server side and client side; State Management - Redux and Context API

✔️\tOverseeing the project as a whole - from characterizing, code writing, automated testing, 
infrastructure, security aspects, UX-UI, to successful delivery; extremely accurate and detail-oriented
JavaScript | TypeScript | React | Next.js | Node.js | NestJS | Express | Redux | Redux-Thunk | Context API | Caching | Redis | Apache | Firebase | Heroku | NoSQL | MongoDB | Influx Data | SQL | MySQL | PostgreSQL | Linux | XCode | Python | Jenkins | AWS | Azure | Docker | Kubernetes
`;

export default function AboutGlobo() {
    return(
        <View style={styles.container}>
            <ScrollView>
                <Image source={imageA} style={{ width: '100%', height: 300 }} />
                <Text style={styles.heading}>We Are Different</Text>
                <Text style={styles.text}>{blockA}</Text>
                <Image source={imageB} style={{ width: '100%', height: 300 }} />
                <Text style={styles.heading}>Leaders in our field</Text>
                <Text style={styles.text}>{blockB}</Text>
                <Image source={imageC} style={{ width: '100%', height: 400 }} />
                <Text style={styles.heading}>We love Tel Aviv :)</Text>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    heading: {
        fontFamily: 'OpenSans',
        fontWeight: 'bold',
        paddingTop: 5
    },
    text: {
        fontFamily: 'OpenSans'
    }
});
