import { useTranslation } from "react-i18next";
import {
  NotFoundContainer,
  NotFoundImg,
  NotFoundHeading,
  NotFoundDescription,
} from "./styledComponents";

const NotFound = () => {
  const { t } = useTranslation();
  return (
    <NotFoundContainer>
      <NotFoundImg
        src="https://assets.ccbp.in/frontend/react-js/jobby-app-not-found-img.png"
        alt="not found"
        data-testid="not-found"
      />
      <NotFoundHeading>
        {t("notFoundScreenStrings:notFoundHeading")}
      </NotFoundHeading>
      <NotFoundDescription>
        {t("notFoundScreenStrings:notFoundDescription")}
      </NotFoundDescription>
    </NotFoundContainer>
  );
};

export default NotFound;
