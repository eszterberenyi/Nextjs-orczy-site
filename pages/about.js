import React from "react";
import Layout from "../components/Layout";
import Grid from "@mui/material/Grid";
import {ImageGallery} from "../components/ImageGallery";
import Typography from "@mui/material/Typography";
import {aboutContent} from "../utils/pageContents";
import {ItemTransition} from "../components/ItemTransition";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Divider from '@mui/material/Divider';


export default function About() {
    return (
        <Layout
            title='Rólunk'
        >
            <Grid
                container
                // spacing={3}
                alignItems="center"
                justifyContent="center"
                padding={2}
            >
                <Grid container  direction='column' sx={{display: {xs: 'flex', md: 'none'}}}>
                {/*<ItemTransition>*/}
                    <Accordion
                        sx={{
                            boxShadow: 'none',
                            backgroundColor: 'white',
                        }}
                    >
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            // aria-controls="panel1a-content"
                            // id="panel1a-header"
                        >
                            <Grid item>
                                <Typography variant='h5' fontWeight='bold'>{aboutContent.titles.about}</Typography>
                            </Grid>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Grid container spacing={3}>
                                <ImageGallery images={aboutContent.images}/>
                            </Grid>
                        </AccordionDetails>
                    </Accordion>
                {/*</ItemTransition>*/}
                </Grid>

                <Grid item xs={12}>
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
                            expandIcon={<ExpandMoreIcon />}
                            // aria-controls="panel1a-content"
                            // id="panel1a-header"
                        >
                            <Grid item>
                                <Typography variant='h5' fontWeight='bold'>{aboutContent.titles.history}</Typography>
                            </Grid>
                        </AccordionSummary>
                        <AccordionDetails>
                            <ImageGallery images={aboutContent.historyImages}/>
                        </AccordionDetails>
                    </Accordion>
                </Grid>
            </Grid>
        </Layout>
    )
}