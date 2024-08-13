import image1 from '../src/assets/4-your-eyez-only-album.jpg'
import image2 from '../src/assets/forest-hills-drive.jpg'
import image3 from '../src/assets/the off-season.png'
import image4 from '../src/assets/everybody.jpg'
import image5 from '../src/assets/logic-confessions-of-a-dangerous-mind-lp.jpg'
import image6 from '../src/assets/bobby tarantino.png'
import image7 from '../src/assets/dark lame demo tapes.jpg'
import image8 from '../src/assets/nothing was the same.webp'
import image9 from '../src/assets/scorpion.png'

export interface AlbumItem{
    id: number;
    artist: string;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
}

export const albumItems: AlbumItem[] = [
    {
        id: 1,
        artist: "J. Cole",
        name: "4 Your Eyez Only",
        description: "The album explores personal and societal themes through a deeply reflective narrative, offering a poignant look into the life and struggles of a close friend.",
        price: 19.99,
        imageUrl: image1
    },
    {
        id: 2,
        artist: "J. Cole",
        name: "2014 Forest Hills Drive",
        description: "J. Cole delivers a raw and heartfelt exploration of his upbringing and personal journey, reflecting on his past experiences and their impact on his present life.",
        price: 21.99,
        imageUrl: image2
    },
    {
        id: 3,
        artist: "J. Cole",
        name: "The Off Season",
        description: "The album sees J. Cole returning with a high-energy, lyrical showcase of his skills, blending introspective musings with braggadocious bars to assert his place in the rap game.",
        price: 15.99,
        imageUrl: image3
    },
    {
        id: 4,
        artist: "Logic",
        name: "Everybody",
        description: " Logic’s 'Everybody' is a concept album that tackles themes of unity, mental health, and self-identity, blending introspective lyrics with a call for social harmony.",
        price: 19.99,
        imageUrl: image4
    },
    {
        id: 5,
        artist: "Logic",
        name: "Confessions Of A Dangerous Mind",
        description: " In 'Confessions of a Dangerous Mind', Logic explores the complexities of fame, personal struggles, and societal pressures, delivering a mix of introspection and commentary with his signature style.",
        price: 18.99,
        imageUrl: image5
    },
    {
        id: 6,
        artist: "Logic",
        name: "Bobby Tarantino",
        description: "'Bobby Tarantino' showcases Logic’s more playful and energetic side, featuring a collection of high-energy tracks and clever wordplay that contrasts with his more serious and introspective work.",
        price: 17.99,
        imageUrl: image6
    },
    {
        id: 7,
        artist: "Drake",
        name: "Dark Lame Demo Tapes",
        description: "'Dark Lane Demo Tapes' offers a collection of previously unreleased tracks and demos, showcasing Drake’s versatility and introspective style with a mix of moody and upbeat vibes.",
        price: 19.99,
        imageUrl: image7
    },
    {
        id: 8,
        artist: "Drake",
        name: "Nothing Was The Same",
        description: "'Nothing Was the Same' is a defining album for Drake, blending introspective lyrics with confident, genre-defying production as he reflects on his rise to fame and personal growth.",
        price: 18.99,
        imageUrl: image8
    },
    {
        id: 9,
        artist: "Drake",
        name: "Scorpion",
        description: "'Scorpion' is a double album where Drake explores themes of fame, personal conflicts, and fatherhood, delivering a mix of introspective ballads and energetic bangers with his signature style.",
        price: 17.99,
        imageUrl: image9
    },
]