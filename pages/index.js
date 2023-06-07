import Layout from "@/components/Layout";
import React from "react";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import City from "../public/OSZ_ketsoros_sarga.svg";
import {homeContent} from "../utils/pageContents"
import BerthaLogo from "../public/bertha_logo_BLACKonWHITE_web.jpg"
import Typography from "@mui/material/Typography";

export default function Home() {
  return (

      <Layout
          title='OSZ'
      >
          <Grid
            container
            spacing={3}
            alignItems="center"
            justifyContent="center"
            padding='10px'
          >

              <Grid item container
                    alignItems="center"
                    justifyContent="center">
                  <Grid item>
                      <Image
                          src={City}
                          alt='drawing of city streets from above'
                          priority={true}
                          width='auto'
                          height='auto'
                      >

                      </Image>
                  </Grid>
              </Grid>


              <Grid item container spacing={2}>
                  <Grid item container direction="column" spacing={2} xs={12} md={6}>
                      <Grid item>
                          <Typography variant='h5' fontWeight='bold'>{homeContent.titles.about}</Typography>
                      </Grid>
                      <Grid item>
                          <Image
                              src={City}
                              alt='drawing of city streets from above'
                              priority={true}
                              width='auto'
                              height='auto'
                          >

                          </Image>
                      </Grid>
                  </Grid>

                  <Grid item container direction="column" spacing={6} xs={12} md={6}>
                      <Grid item>
                          <Typography>{homeContent.aboutUs}</Typography>
                      </Grid>
                      <Grid item container direction='column'>
                          <Grid item>
                              <p>This project is funded by:</p>
                          </Grid>
                          <Grid item>
                              <p>Bertha Logo</p>
                          </Grid>
                      </Grid>
                  </Grid>

              </Grid>

              <Grid item container>
                  <Grid item>
                      <Typography variant='h5' fontWeight='bold'>{homeContent.titles.current}</Typography>
                  </Grid>
              </Grid>
              <Grid item container spacing={2}>
                  <Grid item xs={12} md={4}>
                      <p>Image</p>
                  </Grid>
                  <Grid item xs={12} md={4}>
                      <p>Image</p>
                  </Grid>
                  <Grid item xs={12} md={4}>
                      <p>Image</p>
                  </Grid>
                  <Grid item xs={12} md={4}>
                      <p>Image</p>
                  </Grid>
                  <Grid item xs={12} md={4}>
                      <p>Image</p>
                  </Grid>
                  <Grid item xs={12} md={4}>
                      <p>Image</p>
                  </Grid>
              </Grid>

              <Grid item container>
                  <Grid item>
                      <Typography variant='h5' fontWeight='bold'>{homeContent.titles.contact}</Typography>
                  </Grid>
              </Grid>
          </Grid>

      </Layout>

  );
}