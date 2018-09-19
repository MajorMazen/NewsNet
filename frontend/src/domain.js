//export const Domain = "http://localhost:5000";
export const Domain = "";
//or Domain= "" if hosted on heroku, the proxy in react package.json will be ignored by heroku
//add the keys_dev to the gitignore in the express server if it's to be posted on heroku, while setting the config vars on heroku instead
//the server should be at the root folder
//the frontend build should be called in the server.js

//cd ..
//git init
//git add .
//git commit -m "heroku version"
//heroku create <name>
//heroku git:remote -a <name>
//heroku config:set MONGO_URI=mongodb://Maha:maha123456@ds247141.mlab.com:47141/astrolabs2018
//heroku config:set SECRET=hjhjhjggdrdrsmklmoojoijihiuhu
//heroku config:set NODE_ENV=production
//git push heroku master
