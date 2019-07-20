import React, { Component } from 'react'
import { Grid } from '@material-ui/core';
import {LanguageSelectorComponent,SerialPortSelectorComponent} from './index';

export class TitleBarComponent extends Component {
    render() {
        return (
            <Grid container>
                <Grid item xs={3} >
                    <LanguageSelectorComponent />
                </Grid>
                <Grid item xs={9}>
                    <SerialPortSelectorComponent />
                </Grid>
            </Grid>
        )
    }
}