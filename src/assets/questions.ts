import { QuestionType } from "../models";

const TriviaQuestions: { [key: string]: QuestionType[] } = {
    cryptocurrency: [
        {
            body: 'What is the name of the first cryptocurrency?',
            options: ['Bitcoin', 'Ethereum', 'Litecoin', 'Ripple'],
            correctAnsIdx: 0,
        },
        {
            body: 'What mechanism does Bitcoin use to secure its blockchain?',
            options: ['Proof of Work', 'Proof of Stake', 'Delegated Byzantine Fault Tolerance', 'Proof of Authority'],
            correctAnsIdx: 0,
        },
        {
            body: 'Which cryptocurrency introduced the concept of Initial Coin Offerings (ICOs)?',
            options: ['Ethereum', 'Mastercoin', 'Bitcoin', 'Ripple'],
            correctAnsIdx: 1,
        },
        {
            body: 'Which one of these cryptocurrencies is primarily associated with smart contracts?',
            options: ['Bitcoin', 'Cardano', 'Ethereum', 'Stellar'],
            correctAnsIdx: 2,
        },
        {
            body: 'As of 2021, which of these consensus algorithms is Ethereum planning to transition to?',
            options: ['Proof of Work', 'Proof of Burn', 'Proof of Stake', 'Proof of Authority'],
            correctAnsIdx: 2,
        }
    ],
    astro_physics: [
        {
            body: 'What is the primary component of the sun?',
            options: ['Oxygen', 'Hydrogen', 'Carbon Dioxide', 'Helium'],
            correctAnsIdx: 1,
        },
        {
            body: 'What is the term for the boundary around a black hole beyond which no light can escape?',
            options: ['Event Horizon', 'Gravitational Singularity', 'Photon Sphere', 'Accretion Disk'],
            correctAnsIdx: 0,
        },
        {
            body: 'Which astrophysical phenomenon is crucial to our understanding of galaxy formation?',
            options: ['Quasars', 'Neutron Stars', 'Dark Matter', 'Pulsars'],
            correctAnsIdx: 2,
        },
        {
            body: 'What is the observable universe primarily composed of?',
            options: ['Planetary Nebulae', 'Galactic Filaments', 'Dark Energy and Dark Matter', 'Black Holes'],
            correctAnsIdx: 2,
        },
        {
            body: 'What phenomenon explains the acceleration of the expansion of the universe?',
            options: ['Black Hole Merger', 'Dark Energy', 'Big Bang', 'Galactic Collision'],
            correctAnsIdx: 1,
        }
    ],
    history: [
        {
            body: 'Who wrote the document known as the 95 Theses?',
            options: ['John Calvin', 'Martin Luther', 'John Knox', 'Ulrich Zwingli'],
            correctAnsIdx: 1,
        },
        {
            body: 'Which ancient civilization built the Machu Picchu complex?',
            options: ['The Maya', 'The Inca', 'The Aztecs', 'The Olmecs'],
            correctAnsIdx: 1,
        },
        {
            body: 'What was the main cause of the fall of the Roman Empire?',
            options: ['Economic Troubles and Overreliance on Slave Labor', 'Invasions by Barbarian tribes', 'Overexpansion and Military Overspending', 'All of the above'],
            correctAnsIdx: 3,
        },
        {
            body: 'What event marked the beginning of the Renaissance in European history?',
            options: ['The Fall of Constantinople', 'The Black Death', 'The Discovery of the New World', 'The Invention of the Printing Press'],
            correctAnsIdx: 0,
        },
        {
            body: 'Which document proclaimed the freedom of the 13 American colonies from Great Britain?',
            options: ['The Constitution', 'The Bill of Rights', 'The Declaration of Independence', 'The Emancipation Proclamation'],
            correctAnsIdx: 2,
        }
    ]
};

export default TriviaQuestions