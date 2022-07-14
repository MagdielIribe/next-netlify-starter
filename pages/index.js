import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>YTAPIsite</title>
</head>
<body>
  <div>
    <h1>Fully Automated Youtube Channel</h1>
<p>Code to run a fully automated youtube that can scrape content, edit a compilation, and upload to youtube daily.
Read about it here: https://medium.com/@nathan_149/making-a-fully-automated-youtube-channel-20f2fa57e469</p>

<h3>Instructions</h3>
<p>
Download the Github Repository
</p>
<p>
Download and install Python3 and pip if necessary.
</p>
<p>
Install libraries with pip3 install -r requirements.txt or python3 -m pip install -r requirements.txt .
</p>
<p>
Get setup and create a Project with the Youtube API: https://developers.google.com/youtube/v3/quickstart/python Be sure to follow it carefully, as it won't work if you don't do this part right. Download your OATH file and name it as "googleAPI.json" in your project folder.
</p>
<p>
Create an instagram account and follow accounts you want to scrape from
</p>
<p>
Open config.py in a text editor and fill in instagram credentials
</p>
<p>
Note that you can edit variables inside main.py in a text editor and things such as MAX_CLIP_LENGTH.
In terminal/cmd, run instalooter login and instaloader --login {YOUR_USERNAME}. Follow the instructions to login.
</p>
<p>
Run python3 main.py in your computer terminal (terminal or cmd). You have to sign in to your Youtube Account through the link the script will give you. It's going to ask you: "Please visit this URL to authorize this application:..." so you copy that link, paste it in your browser, and then sign into your Google account. Then paste the authentication code you get back into your terminal. It will then say "Starting Scraping" and sign into your instagram account.
</p>
<>
Enjoy your fully automated youtube channel! :) Note that for uploading public videos, you have to complete an audit for the Youtube API. See the note in the Google Documentation. Without this, you can only post private videos, but they approve everyone. Have fun!
</p>
<a href="https://policies.google.com/privacy?hl=en-US">Privacy Policy</a>
</div>
</body>
</html>

      <Footer />
    </div>
  )
}
