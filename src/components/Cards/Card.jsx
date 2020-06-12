import React from 'react';
import { Card, CardContent, Typography, Grid  } from '@material-ui/core';
import Countup from 'react-countup';
import styles from './Card.module.css';
import cx from 'classnames';

const Cards = ({ data, country }) => {
    if (!data.cases) {
        return 'Loading.....'
    }
    return (
        <div className={styles.container}>
            <Grid container spacing={3}>
                  <Grid item component={Card} xs={12} md={5} className={cx(styles.card, styles.infected)}>
                      <CardContent>
                          <Typography color="textSecondary" gutterBottom>
                                Infected
                          </Typography>
                          <Typography variant="h5">
                        <Countup start={0} end={data.cases} duration={2.5} separator=","/>
                        </Typography>
                        <Typography variant="body2">Number of Active cases of COVID-19</Typography>
                      </CardContent>
                  </Grid>
                  <Grid item component={Card} xs={12} md={5} className={cx(styles.card, styles.active)}>
                      <CardContent>
                          <Typography color="textSecondary" gutterBottom>
                                Active Cases
                          </Typography>
                          <Typography variant="h5">
                        <Countup start={0} end={data.active} duration={2.5} separator=","/>
                        </Typography>
                        <Typography variant="body2">Number of Active cases of COVID-19</Typography>
                      </CardContent>
                  </Grid>
                  <Grid item component={Card} xs={12} md={5}className={cx(styles.card, styles.recovered)}>
                      <CardContent>
                          <Typography color="textSecondary" gutterBottom>
                                Recoverd Cases
                          </Typography>
                          <Typography variant="h5">
                        <Countup start={0} end={data.recovered} duration={2.5} separator=","/>
                        </Typography>
                        <Typography variant="body2">Number of Active cases of COVID-19</Typography>
                      </CardContent>
                  </Grid>
                  <Grid item component={Card} xs={12} md={5}className={cx(styles.card, styles.deaths)}>
                      <CardContent>
                          <Typography color="textSecondary" gutterBottom>
                                Deaths Cases
                          </Typography>
                          <Typography variant="h5">
                        <Countup start={0} end={data.deaths} duration={2.5} separator=","/>
                        </Typography>
                        <Typography variant="body2">Number of Active cases of COVID-19</Typography>
                      </CardContent>
                  </Grid>
                  
            </Grid>
        </div>
    )
}
export default Cards;