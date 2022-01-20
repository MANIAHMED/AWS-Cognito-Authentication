import {CognitoUserPool} from "amazon-cognito-identity-js";

const poolData = {
    UserPoolId :"//Id on general setting tab",
    ClientId:"//appclient setting id"

}

export default new CognitoUserPool(poolData);