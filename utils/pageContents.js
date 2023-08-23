import openingImg from '../public/landing/nyito.jpg'
import combinedImg from '../public/landing/combined.jpg'
import aboutUsImg from '../public/landing/bemutatkozo.jpg'
import berthaLogo from '../public/landing/bertha_logo_BLACKonWHITE-01.svg'
import theySayImg from '../public/landing/azt_beszelik.svg'
import placeholder from '../public/image_placeholder.jpg'

export const imagePlaceholder = {
    placeholder: placeholder
}

export const homeContent = {
    aboutUs: 'Az Orczy Szomszédok a Gólya Szövetkezet és a Kazán Közösségi Ház Szomszédsági programjának a ház környezetéről szóló, helytörténeti projektje. Az itt élők történetein keresztül szeretnénk megismerni a véleményüket és tapasztalataikat a környékről, megérteni, hogy különböző társadalmi folyamatok hogyan alakítják a mindennapjaikat. Fontosnak tartjuk, hogy a kerületrészről azok az emberek beszéljenek akiknek a mindennapi tapasztalata ide kötődik, ezzel árnyalva az Orczy-negyed köztudatban élő rossz hírét. A projekt kiindulópontja egy hetvenkét interjúból álló kutatás, amit részvételi művészeti és közösségépítő programok, és egy kiállítás követ majd.',
    titles: {
        about: 'RÓLUNK',
        current: 'AKTUÁLIS',
        contact: 'ELÉRHETŐSÉG'
    },
    images: {
        opening: openingImg,
        aboutUs: aboutUsImg,
        bertha: berthaLogo,
        theySay: theySayImg,
        combined: combinedImg
    },
    email: 'orczy.szomszedsagi@gmail.com'
}

export const enContent = {
    aboutUs: 'Orczy Neighborhood Project is a neighborhood project using creative tools to build community, fight gentrification and research the local history of a stigmatized area in Budapest, Hungary. The project expands the work of the Community From Neighborhood Program, run by Kazán Community Center, a political and social space owned and used by more than ten different organizations in the same location. The Orczy Neighborhood Project was initiated by Csilla Hajdu, a community developer in the Community From Neighborhood Program, and Dorottya Poór, a visual artist and art educator. They work with a group of community developers, social workers, sociologists, cultural workers, and artists.',
    aboutNeighborhoodProject: 'Coming soon!',
    titles: {
        about: 'ABOUT US',
        neighborhood: 'COMMUNITY FROM NEIGHBORHOOD',
    },
    images: {
        aboutUs: aboutUsImg,
        neighborhood: '',
    }
}

export const aboutContent = {
    images: [
        {
            src: openingImg,
        },
        {
            src: aboutUsImg,
        },
        {
            src: aboutUsImg,
        },
    ],
}
