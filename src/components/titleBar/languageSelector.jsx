import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
    getTranslate,
    getActiveLanguage,
    setActiveLanguage
} from 'react-localize-redux';
import {
    Select,
    FormControl,
    InputLabel,
    FilledInput,
    MenuItem
} from '@material-ui/core';

class LanguageSelector extends Component {
    
    static propTypes = {
        languagesArray: PropTypes.array.isRequired,
        activeLanguage: PropTypes.object,
        
        Translate: PropTypes.func.isRequired,
        SetActiveLanguage: PropTypes.func.isRequired
    }

    render() {
        const languageOptions = this.props.languagesArray.map(lang => 
        <MenuItem key={lang.code} value={lang.code}>{lang.name}</MenuItem>
        );
        return (
            <FormControl style={{ textAlign: 'center' }} fullWidth={true} variant="filled">
                <InputLabel htmlFor="port-name">{`🏳️ ${this.props.Translate('appLanguageLabel')}`}</InputLabel>
                <Select
                    fullWidth={true}
                    value={(this.props.activeLanguage && this.props.activeLanguage.code) || ""}
                    input={<FilledInput name="app-language" id="app-language" />}
                    onChange={this.props.SetActiveLanguage}
                >
                    {languageOptions}
                </Select>
            </FormControl>
        )
    }
}

const mapStateToProps = (state) => ({
    Translate: getTranslate(state.localize),
    languagesArray: state.localize.languages || [],
    activeLanguage: getActiveLanguage(state.localize)
});

const mapDispatchToProps = (dispatch) => ({
    SetActiveLanguage: (event) => {
        localStorage.setItem('default-lang',event.target.value); 
        return dispatch(setActiveLanguage(event.target.value));
    }
});

export const LanguageSelectorComponent =  connect(mapStateToProps, mapDispatchToProps)(LanguageSelector)
