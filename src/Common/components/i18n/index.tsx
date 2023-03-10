import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
    en: {
        loginModule: {
            "loginButtonName": "Login",
            "userNameLabel": "USERNAME",
            "passwordLabel": "PASSWORD",
            "usernameInputPlaceholderText": "Username",
            "passwordInputPlaceholderText": "Password",
            "passwordInputFieldType": "password",
            "usernameInputFieldType": "text",
            "loginBtnType": "submit"
        },
        headerStrings: {
            "homeBtnText": "Home",
            "jobsBtnText": "Jobs",
            "logoutBtnText": "Logout"

        },
        homeScreenStrings: {
            "findJobsBtnText": "Findjobs",
            "homePageHeading": "Find The Job That Fits Your Life",
            "homePageDescriptionText": "Millions of people are searching for jobs, salary, information, company reviews. Find the Jobs that fits your abilities and potential",

        },
        jobsScreenStrings: {
            "typeOfEmployment": "Type of Employment",
            "salaryRangeFilter": "Salary Range"
        },
        noJobsFoundScreen: {
            "noJobsFoundHeading": "",
            "noJobsFoundDescription": ""
        }

    },
    fr: {
        translation: {
            "Welcome to React": "Bienvenue à React et react-i18next"
        }
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: "en",

        interpolation: {
            escapeValue: false // react already safes from xss
        }
    });

export default i18n;