import { AUTH_SCOPE, CATEGORY_SCOPE, HTTP_METHODS, HTTP_URL } from "../../constants/default.const";

const GET_CATEGORIES = `${CATEGORY_SCOPE}/`;

export const getCategoriesUrl = {
    url: `${HTTP_URL}/${GET_CATEGORIES}`,
    method: HTTP_METHODS.GET
}; 