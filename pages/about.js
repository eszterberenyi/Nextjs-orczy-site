import React from "react";
import Layout from "../components/Layout";
import Grid from "@mui/material/Grid";
import {ItemTransition} from "../components/ItemTransition";
import Typography from "@mui/material/Typography";
import {aboutContent, homeContent} from "../utils/pageContents";
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
                padding={6}
                sx={{display: {xs: 'none', md: 'flex'}}}
            >

                {/*DESKTOP ABOUT US CONTENT*/}

                <Grid container direction='column' spacing={3}>

                    {/*<ItemTransition>*/}
                        <Grid item>
                            <Typography variant='h5' fontWeight='bold'>{aboutContent.titles.about}</Typography>
                        </Grid>

                        <Grid item container spacing={3} sx={{marginBottom: '40px'}}>
                            <Grid item lg={6}>
                                <Image
                                    src={homeContent.images.aboutUs}
                                    alt='kép a projekttagokról'
                                    style={{maxWidth: '100%', height: 'auto'}}
                                >
                                </Image>
                            </Grid>
                            <Grid item container lg={6}>
                                <Typography style={{whiteSpace: 'pre-line'}}>{aboutContent.aboutUs.description}</Typography>
                            </Grid>
                        </Grid>
                    {/*</ItemTransition>*/}

                    <Grid item container spacing={3}>
                        {/*<ItemTransition>*/}
                            <Grid item>
                                <Typography variant='h6' fontWeight='bold'>TEAM</Typography>
                            </Grid>
                        {/*</ItemTransition>*/}

                        {aboutContent.aboutUs.team.map((person, index) => (
                            // <ItemTransition key={index-1}>
                                <Grid item container spacing={3} key={index}>
                                    {index % 2 === 0 ? (
                                        <>
                                            <Grid item md={6} key={index} sx={{marginBottom: '40px'}}>
                                                {person.img && (
                                                    <Image
                                                        src={person.img}
                                                        alt='kép a projekttagról'
                                                        style={{maxWidth: '100%', height: 'auto'}}
                                                    />
                                                )}
                                            </Grid>
                                            <Grid item md={6} key={index + 1} sx={{marginBottom: '40px'}}>
                                                <Typography style={{whiteSpace: 'pre-line'}}>{person.text}</Typography>
                                            </Grid>
                                        </>
                                    ) : (
                                        <>
                                            <Grid item md={6} key={index + 1} sx={{marginBottom: '40px'}}>
                                                <Typography style={{whiteSpace: 'pre-line'}}>{person.text}</Typography>
                                            </Grid>
                                            <Grid item md={6} key={index + 2} sx={{marginBottom: '40px'}}>
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
                            // </ItemTransition>
                        ))}
                        {/*<ItemTransition>*/}
                            <Grid item container>
                                <Grid item md={12}>
                                    <Typography variant='h6' fontWeight='bold'>{aboutContent.aboutUs.partners.text}</Typography>
                                </Grid>
                                <Grid item container>
                                    <Grid item container md={6} alignItems='center'>
                                        <Grid item>
                                            <Image
                                                src={aboutContent.aboutUs.partners.partnerOne.logo}
                                                fill={false}
                                                style={{maxWidth: '50%', height: 'auto'}}
                                                alt='Periféria Központ logó'
                                            >
                                            </Image>
                                        </Grid>
                                    </Grid>

                                    <Grid item container md={6} alignItems='center'>
                                        <Grid item>
                                            <Image
                                                src={aboutContent.aboutUs.partners.partnerTwo.logo}
                                                fill={false}
                                                style={{maxWidth: '50%', height: 'auto'}}
                                                alt='Józsefváros Múzeum logó'
                                            >
                                            </Image>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        {/*</ItemTransition>*/}
                    </Grid>
                </Grid>

                {/*DESKTOP ABOUT US CONTENT END*/}


                {/*DESKTOP HISTORY CONTENT*/}

                {/*<Grid container direction='column' >*/}
                {/*    /!*<ItemTransition>*!/*/}
                {/*        <Grid item>*/}
                {/*            <Typography variant='h5' fontWeight='bold'>{aboutContent.titles.history}</Typography>*/}
                {/*        </Grid>*/}
                {/*        <Grid container spacing={3}>*/}
                {/*            <Grid item container md={6}>*/}

                {/*                <Grid item>*/}
                {/*                    <Image*/}
                {/*                        src={imagePlaceholder.placeholder}*/}
                {/*                        alt='placeholder'*/}
                {/*                        style={{maxWidth: '100%', height: 'auto'}}*/}
                {/*                    >*/}
                {/*                    </Image>*/}
                {/*                </Grid>*/}
                {/*            </Grid>*/}
                {/*        </Grid>*/}
                {/*    /!*</ItemTransition>*!/*/}
                {/*</Grid>*/}

                {/*DESKTOP HISTORY CONTENT END*/}

            </Grid>


            <Grid
                container
                alignItems="center"
                justifyContent="center"
                padding={2}
                sx={{display: {xs: 'flex', md: 'none'}}}
            >

                {/*MOBILE ABOUT US CONTENT*/}

                <Grid container direction='column' >
                    {/*<Accordion*/}
                    {/*    sx={{*/}
                    {/*        boxShadow: 'none',*/}
                    {/*        backgroundColor: 'white',*/}
                    {/*    }}*/}
                    {/*>*/}
                    {/*    <AccordionSummary*/}
                    {/*        expandIcon={<ExpandMoreIcon/>}*/}
                    {/*    >*/}
                            <Grid item>
                                <Typography variant='h5' fontWeight='bold'>{aboutContent.titles.about}</Typography>
                            </Grid>
                        {/*</AccordionSummary>*/}

                        {/*<AccordionDetails>*/}

                            <ItemTransition>
                                <Grid item container spacing={3} sx={{marginBottom: '40px'}}>
                                    <Grid item >
                                        <Image
                                            src={homeContent.images.aboutUs}
                                            alt='kép a projekttagokról'
                                            style={{maxWidth: '100%', height: 'auto'}}
                                        >
                                        </Image>
                                    </Grid>
                                    <Grid item >
                                        <Typography style={{whiteSpace: 'pre-line'}}>{aboutContent.aboutUs.description}</Typography>
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
                                                <Grid item key={index + 1}>
                                                    <Image
                                                        src={person.img}
                                                        alt='kép a projekttagról'
                                                        style={{maxWidth: '100%', height: 'auto'}}>
                                                    </Image>

                                                </Grid>
                                                <Grid item key={index + 2}>
                                                    <Typography
                                                        style={{whiteSpace: 'pre-line'}}>{person.text}</Typography>
                                                </Grid>
                                            </Grid>
                                            }
                                        </ItemTransition>
                                    ))}
                                <ItemTransition>
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
                                                        alt='Perféria Központ logó'
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
                                                        alt='Józsefváros Múzeum logó'
                                                    >
                                                    </Image>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </ItemTransition>
                            </Grid>
                    {/*    </AccordionDetails>*/}
                    {/*</Accordion>*/}
                </Grid>

                {/*MOBILE ABOUT US CONTENT END*/}

                {/*<Grid item xs={12}>*/}
                {/*    <Divider flexItem variant='middle'/>*/}
                {/*</Grid>*/}

                {/*MOBILE HISTORY CONTENT*/}

                {/*<Grid container direction='column' >*/}
                {/*    <Accordion*/}
                {/*        sx={{*/}
                {/*            boxShadow: 'none',*/}
                {/*            backgroundColor: 'white'*/}
                {/*        }}*/}
                {/*    >*/}
                {/*        <AccordionSummary*/}
                {/*            expandIcon={<ExpandMoreIcon/>}*/}
                {/*            // aria-controls="panel1a-content"*/}
                {/*            // id="panel1a-header"*/}
                {/*        >*/}
                {/*            <Grid item>*/}
                {/*                <Typography variant='h5' fontWeight='bold'>{aboutContent.titles.history}</Typography>*/}
                {/*            </Grid>*/}
                {/*        </AccordionSummary>*/}
                {/*        <AccordionDetails>*/}
                {/*            <Grid container spacing={3}>*/}
                {/*                <Grid item container>*/}

                {/*                    <Grid item>*/}
                {/*                        <Image*/}
                {/*                            src={imagePlaceholder.placeholder}*/}
                {/*                            alt='placeholder'*/}
                {/*                            style={{maxWidth: '100%', height: 'auto'}}*/}
                {/*                        >*/}
                {/*                        </Image>*/}
                {/*                    </Grid>*/}
                {/*                </Grid>*/}
                {/*            </Grid>*/}
                {/*        </AccordionDetails>*/}
                {/*    </Accordion>*/}
                {/*</Grid>*/}

                {/*MOBILE HISTORY CONTENT END*/}

            </Grid>
        </Layout>
    )
}