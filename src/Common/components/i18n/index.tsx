import i18n from "i18next";
import { initReactI18next } from "react-i18next";


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
            "salaryRangeFilter": "Salary Range",
            "searchInputPlaceholderText": "Search",
            "searcInputType": "search"
        },
        noJobsFoundScreen: {
            "noJobsFoundHeading": "No Jobs Found",
            "noJobsFoundDescription": "We could not find any jobs try other filter."
        },
        notFoundScreenStrings: {
            "notFoundHeading": "No Jobs Found",
            "notFoundDescription": "We are sorry, the page you requested could not be found."
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