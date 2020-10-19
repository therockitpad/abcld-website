# ABC

## How to test

```bash
npm install
node index.js
```

This is will host the website on port 3000.

## Setting up the email service

1. Create a file named .env. And put this inside it:
    ```
    SENDER_EMAIL='emailid-of-account-to-send-mails-from'
    SENDER_PASS='password-of-account-to-send-mails-from'
    TO_MAIL='emailid-of-account-to-send-mails-to'
    ```
2. Go to this link https://www.google.com/settings/security/lesssecureapps.
    Make sure you are logged in from the `SENDER_MAIL` account and flip the switch.

