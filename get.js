const { google } = require('googleapis');
const readline = require('readline');
const fs = require('fs');

async function authenticate() {
    const oAuth2Client = new google.auth.OAuth2(
        'YOUR_CLIENT_ID',
        'YOUR_CLIENT_SECRET',
        'http://localhost' //your redirect uri 
    );

    const SCOPES = ['https://www.googleapis.com/auth/drive.readonly'];

    const authUrl = oAuth2Client.generateAuthUrl({
        access_type: 'offline',
        scope: SCOPES,
    });

    console.log('Authorize this app by visiting this url:', authUrl);

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    rl.question('Enter the code from that page here: ', async (code) => {
        rl.close();
        try {
            const { tokens } = await oAuth2Client.getToken(code);
            oAuth2Client.setCredentials(tokens);
            fs.writeFileSync('./tokens.json', JSON.stringify(tokens));
            console.log('Tokens stored to tokens.json');
            console.log('Access token:', tokens.access_token);
            console.log('Refresh token:', tokens.refresh_token);
        } catch (error) {
            console.error('Error retrieving access token', error);
        }
    });
}

authenticate();
