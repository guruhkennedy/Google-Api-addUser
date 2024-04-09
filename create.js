const { google } = require('googleapis');

// Fungsi untuk mengatur otentikasi OAuth 2.0
async function authenticate() {
    const oAuth2Client = new google.auth.OAuth2(
        'YOUR_CLIENT_ID',
        'YOUR_CLIENT_SECRET',
    );

// Lakukan autentikasi menggunakan kredensial OAuth 2.0
oAuth2Client.setCredentials({
    access_token: 'YOUR_ACCESS_TOKEN',
    refresh_token: 'YOUR_REFRESH_TOKEN'
});

    return oAuth2Client;
}

// Fungsi untuk membuat pengguna baru
async function createNewUser(authClient, newUser) {
    const admin = google.admin({ version: 'directory_v1', auth: authClient });

    try {
        const response = await admin.users.insert({
            requestBody: newUser
        });
        console.log('Successfully Add User:', response.data.primaryEmail, response.data.name);
    } catch (error) {
        console.error('Error creating user:', error.message);
    }
}

// Fungsi utama untuk menjalankan skrip
async function main() {
    // Otentikasi dengan OAuth 2.0
    const authClient = await authenticate();

    // Informasi pengguna baru
    const numberOfUsers = parseInt(process.argv[2]); // Jumlah pengguna yang ingin dibuat dari argumen CLI
    const domainName = 'mydomain.com'; // Nama domain
    const givenName = 'Guruh'; // Nama depan
    const familyName = 'Kennedy'; // Nama belakang
    const password = 'Password123'; // Password
    const changePasswordAtNextLogin = true; // Ganti password saat login pertama

    if (isNaN(numberOfUsers)) {
        console.error('Invalid input. input Must Number.');
        return;
    }

    for (let i = 0; i < numberOfUsers; i++) {
        const randomString = Math.random().toString(36).substring(2, 8);
        const newUser = {
            primaryEmail: `username${randomString}@${domainName}`,
            name: {
                givenName: givenName,
                familyName: familyName
            },
            password: password,
            changePasswordAtNextLogin: changePasswordAtNextLogin
        };
        // Membuat pengguna baru
        await createNewUser(authClient, newUser);
    }
}
main().catch(console.error);