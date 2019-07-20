import { ACTUAL_TRANSLATION_FOR_SIMULATOR_CLIENT } from '../actions/fiscalPrinterServerReceivedActions';
import { initialize, addTranslationForLanguage } from 'react-localize-redux'

export const updateTranslationMiddleware = store => next => action => {

    if (action.type === ACTUAL_TRANSLATION_FOR_SIMULATOR_CLIENT &&
        action.payload &&
        action.payload['country_translation'] &&
        Array.isArray(action.payload['country_translation'])
    ) {
        const translationPayload = action.payload['country_translation'];

        const onMissingTranslation = (obj) =>{
            obj.defaultTranslation = 'Translation Missing'
            console.log(obj)
            return obj.defaultTranslation;
        } 

        next(initialize({
            languages: translationPayload.map(m=>m.languages),
            options: {
                renderToStaticMarkup: false,
                defaultLanguage: localStorage.getItem('default-lang') || 'en',
                onMissingTranslation:onMissingTranslation
            }
        }));


        translationPayload.forEach(element => {
                const langCode = element.languages.code;
                return next(addTranslationForLanguage(element.translation,langCode ));
            });
    }
    else {
        return next(action);
    }
}