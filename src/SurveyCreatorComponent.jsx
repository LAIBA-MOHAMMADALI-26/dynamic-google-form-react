import React from "react";
import { SurveyCreator, SurveyCreatorComponent } from "survey-creator-react";
import "survey-core/survey.i18n.js";
import "survey-creator-core/survey-creator-core.i18n.js";
import { surveyJSON } from "./survey_json";
import "survey-core/defaultV2.css";
import "survey-creator-core/survey-creator-core.css";
import "./index.css";

function SurveyCreatorRenderComponent() {
    const options = {
        showLogicTab: true
    };
    const creator = new SurveyCreator(options);
    creator.JSON = surveyJSON;
    return (<SurveyCreatorComponent creator={creator} />);
}

export default SurveyCreatorRenderComponent;