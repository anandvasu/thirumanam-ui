var awsauth = require("aws-amplify");
const AmazonCognitoIdentity = require('amazon-cognito-identity-js');
const CognitoUserPool = AmazonCognitoIdentity.CognitoUserPool;
const AWS = require('aws-sdk');
const request = require('request');
const jwkToPem = require('jwk-to-pem');
const jwt = require('jsonwebtoken');
global.fetch = require('node-fetch');

const poolData = {    
    UserPoolId : "us-east-2_gom81bBSm", // Your user pool id here    
    ClientId : "6kl6qp089lbbbbd8f3c1u7kp4j" // Your client id here
    }; 
    const pool_region = 'us-east-2';

const userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);

var login = function Login(req, res) {
    console.log('login called:'+req.body.username);
    var authenticationDetails = new AmazonCognitoIdentity.AuthenticationDetails({
        Username : req.body.username,
        Password : req.body.password,
    });

    var userData = {
        Username : req.body.username,
        Pool : userPool
    };
    var cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);
    cognitoUser.authenticateUser(authenticationDetails, {
        onSuccess: function (result) {
            console.log('access token + ' + result.getAccessToken().getJwtToken());
            console.log('id token + ' + result.getIdToken().getJwtToken());
            console.log('refresh token + ' + result.getRefreshToken().getToken());
            const jwt = result.getAccessToken().getJwtToken();
            const username = result.accessToken.payload.username;
            console.log('jwt:'+jwt);
            console.log(result.accessToken.payload.username);
            res.status(200).send({
                 userSession: {
                     username: username,
                     jwt: jwt
                 } 
            });
        },
        onFailure: function(err) {
            console.log(err);
        },

    });    
}

var registerUser = function registerUser(req, res){
    var attributeList = [];
    attributeList.push(new AmazonCognitoIdentity.CognitoUserAttribute({Name:"email",Value:req.body.email}));
    attributeList.push(new AmazonCognitoIdentity.CognitoUserAttribute({Name:"phone_number",Value:req.body.email}));
    attributeList.push(new AmazonCognitoIdentity.CognitoUserAttribute({Name:"family_name",Value:req.body.family_name}));
    attributeList.push(new AmazonCognitoIdentity.CognitoUserAttribute({Name:"given_name",Value:req.body.given_name}));

    userPool.signUp(req.body.username, req.body.password, attributeList, null, function(err, result){
        if (err) {
            console.log(err);
            return;
        }
        cognitoUser = result.user;
        console.log('user name is ' + cognitoUser.getUsername());
    });
}

exports.login = login;
exports.registerUser = registerUser;