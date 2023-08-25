import React from "react";
import Layout from "../components/Layout";
import Grid from "@mui/material/Grid";
import {ItemTransition} from "../components/ItemTransition";
import Typography from "@mui/material/Typography";
import {aboutContent, homeContent, imagePlaceholder} from "../utils/pageContents";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Divider from '@mui/material/Divider';
import Image from "next/image";


export default function About() {
    return (
        <Layout
            title='Rólunk'
        >
            <Grid
                container
                alignItems="center"
                justifyContent="center"
                padding={2}
            >
                <Grid container direction='column' sx={{display: {xs: 'flex', md: 'none'}}}>
                    <Accordion
                        sx={{
                            boxShadow: 'none',
                            backgroundColor: 'white',
                        }}
                    >
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon/>}
                        >
                            <Grid item>
                                <Typography variant='h5' fontWeight='bold'>{aboutContent.titles.about}</Typography>
                            </Grid>
                        </AccordionSummary>

                        <AccordionDetails>

                            <ItemTransition>
                                <Grid item container spacing={3} sx={{marginBottom: '40px'}}>
                                    <Grid item xs={12} md={6}>
                                        <Image
                                            src={homeContent.images.aboutUs}
                                            alt='kép a projekttagokról'
                                            style={{maxWidth: '100%', height: 'auto'}}
                                        >
                                        </Image>
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <Typography
                                            style={{whiteSpace: 'pre-line'}}>{aboutContent.aboutUs.description}</Typography>
                                    </Grid>
                                </Grid>
                            </ItemTransition>

                            <Grid item container spacing={3}>
                                <ItemTransition>
                                    <Grid item>
                                        <Typography variant='h6' fontWeight='bold'>TEAM</Typography>
                                    </Grid>
                                </ItemTransition>

                                    {aboutContent.aboutUs.team.map(
                                        (person, index) => (
                                            <ItemTransition key={index-1}>
                                                {person.img &&
                                                    <Grid item container spacing={3} key={index}>
                                                        <Grid item xs={12} md={6} key={index + 1}>
                                                            <Image
                                                                src={person.img}
                                                                alt='kép a projekttagról'
                                                                style={{maxWidth: '100%', height: 'auto'}}>
                                                            </Image>

                                                        </Grid>
                                                        <Grid item xs={12} md={6} key={index + 2}>
                                                            <Typography
                                                                style={{whiteSpace: 'pre-line'}}>{person.text}</Typography>
                                                        </Grid>
                                                    </Grid>
                                                }
                                            </ItemTransition>
                                    ))}
                                <Grid item container direction='column' >
                                    <Grid item>
                                        <Typography variant='h7'>{aboutContent.aboutUs.partners.text}</Typography>
                                    </Grid>
                                    <Grid item container>
                                        <Grid item container>
                                            <Grid item>
                                                <Image
                                                    src={aboutContent.aboutUs.partners.partnerOne.logo}
                                                    fill={false}
                                                    style={{maxWidth: '50%', height: 'auto'}}
                                                >
                                                </Image>
                                            </Grid>
                                        </Grid>

                                        <Grid item container>
                                            <Grid item>
                                                <Image
                                                    src={aboutContent.aboutUs.partners.partnerTwo.logo}
                                                    fill={false}
                                                    style={{maxWidth: '50%', height: 'auto'}}
                                                >
                                                </Image>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </AccordionDetails>
                    </Accordion>
                </Grid>

                <Grid container direction='column' sx={{display: {xs: 'none', md: 'flex'}}}>

                    <ItemTransition>
                        <Grid item>
                            <Typography variant='h5' fontWeight='bold'>{aboutContent.titles.about}</Typography>
                        </Grid>

                        <Grid item container spacing={3} sx={{marginBottom: '40px'}}>
                            <Grid item xs={12} md={6}>
                                <Image
                                    src={homeContent.images.aboutUs}
                                    alt='kép a projekttagokról'
                                    style={{maxWidth: '100%', height: 'auto'}}
                                >
                                </Image>
                            </Grid>
                            <Grid item container xs={12} md={6}>
                                <Typography style={{whiteSpace: 'pre-line'}}>{aboutContent.aboutUs.description}</Typography>
                            </Grid>
                        </Grid>
                    </ItemTransition>

                    <ItemTransition>
                        <Grid item container spacing={3}>
                            <Grid item>
                                <Typography variant='h6' fontWeight='bold'>TEAM</Typography>
                            </Grid>

                            {aboutContent.aboutUs.team.map((person, index) => (
                                <Grid item container spacing={3} key={index}>
                                    {index % 2 === 0 ? (
                                        <>
                                            <Grid item xs={12} md={6} key={index} sx={{marginBottom: '40px'}}>
                                                {person.img && (
                                                    <Image
                                                        src={person.img}
                                                        alt='kép a projekttagról'
                                                        style={{maxWidth: '100%', height: 'auto'}}
                                                    />
                                                )}
                                            </Grid>
                                            <Grid item xs={12} md={6} key={index + 1} sx={{marginBottom: '40px'}}>
                                                <Typography style={{whiteSpace: 'pre-line'}}>{person.text}</Typography>
                                            </Grid>
                                        </>
                                    ) : (
                                        <>
                                            <Grid item xs={12} md={6} key={index + 1} sx={{marginBottom: '40px'}}>
                                                <Typography style={{whiteSpace: 'pre-line'}}>{person.text}</Typography>
                                            </Grid>
                                            <Grid item xs={12} md={6} key={index + 2} sx={{marginBottom: '40px'}}>
                                                {person.img && (
                                                    <Image
                                                        src={person.img}
                                                        alt='kép a projekttagról'
                                                        style={{maxWidth: '100%', height: 'auto'}}
                                                    />
                                                )}
                                            </Grid>
                                        </>
                                    )}
                                </Grid>
                            ))}
                            <Grid item container>
                                <Grid item md={12}>
                                    <Typography variant='h6'>{aboutContent.aboutUs.partners.text}</Typography>
                                </Grid>
                                <Grid item container>
                                    <Grid item container md={6}>
                                        <Grid item>
                                            <Image
                                                src={aboutContent.aboutUs.partners.partnerOne.logo}
                                                fill={false}
                                                style={{maxWidth: '50%', height: 'auto'}}
                                            >
                                            </Image>
                                        </Grid>
                                    </Grid>

                                    <Grid item container md={6}>
                                        <Grid item>
                                            <Image
                                                src={aboutContent.aboutUs.partners.partnerTwo.logo}
                                                fill={false}
                                                style={{maxWidth: '50%', height: 'auto'}}
                                            >
                                            </Image>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>

                    </ItemTransition>
                </Grid>

                <Grid item xs={12} sx={{display: {xs: 'flex', md: 'none'}}}>
                    <Divider flexItem variant='middle'/>
                </Grid>

                <Grid container direction='column' sx={{display: {xs: 'flex', md: 'none'}}}>
                    <Accordion
                        sx={{
                            boxShadow: 'none',
                            backgroundColor: 'white'
                        }}
                    >
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon/>}
                            // aria-controls="panel1a-content"
                            // id="panel1a-header"
                        >
                            <Grid item>
                                <Typography variant='h5' fontWeight='bold'>{aboutContent.titles.history}</Typography>
                            </Grid>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Grid container spacing={3}>
                                <Grid item container xs={12} lg={6}>

                                    <Grid item>
                                        <Image
                                            src={imagePlaceholder.placeholder}
                                            alt='placeholder'
                                            style={{maxWidth: '100%', height: 'auto'}}
                                        >
                                        </Image>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </AccordionDetails>
                    </Accordion>
                </Grid>

                <Grid container direction='column' sx={{display: {xs: 'none', md: 'flex'}}}>
                    <ItemTransition>
                        <Grid item>
                            <Typography variant='h5' fontWeight='bold'>{aboutContent.titles.history}</Typography>
                        </Grid>
                        <Grid container spacing={3}>
                            <Grid item container xs={12} lg={6}>

                                <Grid item>
                                    <Image
                                        src={imagePlaceholder.placeholder}
                                        alt='placeholder'
                                        style={{maxWidth: '100%', height: 'auto'}}
                                    >
                                    </Image>
                                </Grid>
                            </Grid>
                        </Grid>
                    </ItemTransition>
                </Grid>



            </Grid>
        </Layout>
    )
}