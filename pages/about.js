import React from "react";
import Layout from "../components/Layout";
import Grid from "@mui/material/Grid";
import {ImageGallery} from "../components/ImageGallery";

export default function About() {
    return (
        <Layout
            title='Rólunk'
        >
            <Grid
                container
                spacing={3}
                alignItems="center"
                justifyContent="center"
            >
                <ImageGallery/>
            </Grid>
        </Layout>
    )
}