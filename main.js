/* eslint-env node*/
/* eslint no-console:0, no-unused-vars:0*/

var fs = require("fs"),
    qs = require('querystring'),
    chalk = require('chalk'),
    got = require('got'),
    Learnosity = require('learnosity-sdk-nodejs'),
    htmlFiles = require('./htmlFilesToObject.js')(),
    getReqData = require('./getRequestData.js'),
    creds = JSON.parse(fs.readFileSync("../dev.json", "utf8"))

console.log("htmlFiles:", Object.keys(htmlFiles));

/*
    helper function to make a console.log() also write to data.log
*/
function writeLog() {
    var argString = Array.from(arguments).map(function (arg) {
        if (typeof arg === "object") {
            return JSON.stringify(arg, null, 2);
        }
        return arg.toString();
    }).join(' ');
    argString += "\n------------------------------------------\n"

    fs.appendFile("data.log", argString, function () {});
    console.log.apply(null, arguments);
}

function makeErrorHtml(message) {
    return htmlFiles.error
        .replace(/{{message}}/g, message);
}

function makeRequestHtml(html, request) {
    //add in the request JSON
    return html.replace(/{{request}}/, JSON.stringify(request, null, 4));
}


function sendLearnosityBack(res, provider) {
    // Instantiate the SDK
    var requestOut, requestData,
        learnositySdk = new Learnosity(),
        security = {
            'consumer_key': creds.key,
            'domain': 'localhost',
            'user_id': 'finchd@byui.edu'
        };

    //get the right data
    requestData = getReqData(provider.body.resource_link_id,
        Object.keys(provider.nonceStore.used)[0],
        htmlFiles);

    requestData = {
        html: htmlFiles.items,
        service: 'items',
        request: {
            'type': 'local_practice',
            'state': 'initial',
            "rendering_type": "assess",
            "user_id": "finchd@byui.edu",
            "session_id": 1, //sessionId,
            "items": [
             "4a54ff38-1d69-4a92-80b5-a12b33bf406c"
            ],
            "config": {
                "subtitle": "By Ben (H)",
                "navigation": {
                    "show_intro": true,
                    "show_itemcount": true
                }
            }
        }
    };

    //make request with correct data
    requestOut = learnositySdk.init(requestData.service, security, creds.secret, requestData.request);

    //make and send the html
    makeRequestHtml(requestData.html, requestOut)
}





console.log(chalk.blue("Started"));
