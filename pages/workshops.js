import React from "react";
import Layout from "../components/Layout";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import {workshopsContent} from "../utils/pageContents"
import {ImageButtons} from "../components/ImageButton";

export default function Workshops() {
    const backgroundImageUrl = 'url("/exhibition/blob4.jpg")'

    return (
        <Layout
            title='Foglalkozások'
        >
            <Grid
            container
            spacing={3}
            alignItems="center"
            justifyContent="center"
            style={{
                backgroundImage: backgroundImageUrl,
                backgroundSize: 'contain',
                backgroundPosition: 'right',
                width: '100%',
                height: '80vh',
                backgroundRepeat: 'no-repeat',
            }}
            >
                <Grid
                    item
                    container
                    m={1}
                    spacing={5}
                >
                    <Grid item sx={{paddingTop: '100px'}}>
                        <Typography variant='h6'>
                            Hamarosan.
                        </Typography>
                    </Grid>

                    <Grid item container spacing={1}>
                        <Grid item>
                            <Typography
                                variant='h6'
                            >
                                Addig is látogass el kiállításunkra:
                            </Typography>
                        </Grid>
                        <Grid item container>
                            <ImageButtons images={workshopsContent.buttonImages}/>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

        </Layout>
    )
}