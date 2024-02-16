This is a demo app that showcases the FCM (Firebase Cloud Messaging) integration of Novu and allows you to use Novu to send FCM notifications, change priority of notifications, send image in notifications and more.

## Run locally:
This repo has two parts:

- frontend, and
- backend
To run this app locally, you just need to:

1. Clone this repo.
2. Install all the required packages for frontend as well as backend using npm install.
3. Supply your `NOVU_API_KEY` and `SUSBSCRIBER_ID`. You can obtain both of them from the settings menu in [Novu's web dashboard](https://web.novu.co/settings).
4. In the backend, you'll need to create a subscriber first before sending notifications to that subscriber. It has been done in the novu.js file in the novu directory in backend.
<br/>
You can also find the corresponding guide in our docs.
