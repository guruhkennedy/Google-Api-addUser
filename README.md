
# Google api add bulk user


## Authors

- [@guruhkennedy](https://www.github.com/guruhkennedy)


## Required Modules

- googleapis
- readline


## First step

[How to get CLIENT_ID and CLIENT_SECRET](https://www.balbooa.com/help/gridbox-documentation/integrations/other/google-client-id)

you must login as admin



## Get access_token and refresh_token

- paste your CLIENT_ID and CLIENT_SECRET inside file get.js
- For //your redirect url, make sure it matches the link in the Authorized redirect URIs menu on your project 
![App Screenshot](https://i.imgur.com/e72oVbr.png)
- run script get.js
- If successful, a link from the response will appear. "Authorize this app by visiting this url:"
- paste url and authorize app using your google admin account
- if successful you will redirected to page, Here I use the localhost link according to my redirect link URL
- then the result is : http://localhost/?code=4/xxxxxxxxeaYSHBpNoxxxxaqLVyEnV7GWV8EiQHkK0Hni4t0vaXxTCruCJprZSWjtVgjO0L_hCnqrhg&scope=https://www.googleapis.com/auth/drive.readonly
- paste this code in your console xxxxxxxxeaYSHBpNoxxxxaqLVyEnV7GWV8EiQHkK0Hni4t0vaXxTCruCJprZSWjtVgjO0L_hCnqrhg
- open the tokens.json file to see the results of access_token and refresh token
- When finished, please fill in everything required in the create.js file

## Running Tests

To run tests, run the following command

```bash
  node create.js 2
  // 2 is the number of emails account you want to create. adjust to your needs \\
```

## Result
![App Screenshot](https://i.imgur.com/I9FRgPd.png)


## Support

For support, email kenn@phantom-thieves.org .

