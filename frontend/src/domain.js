//export const Domain = "http://localhost:5000";
export const Domain = "";

//1) set Domain= "" if hosted on heroku, the local proxy in react package.json should be removed
//2) add the keys_dev to the gitignore in the express server if it's to be posted on heroku, while setting the config vars on heroku instead
//3) the server should be at the root folder
//4) the frontend build path should be called in the server.js ('npm run build' the frontend)
//5) the server package.json should have a postbuild item ("heroku-postbuild": "cd frontend && npm && npm run build")
//6)

//cd .. (to the root)
//git init
//git add .
//git commit -m "heroku version"
//heroku create <name>
//heroku git:remote -a <name>
//heroku config:set MONGO_URI=mongodb://Maha:maha123456@ds247141.mlab.com:47141/astrolabs2018
//heroku config:set SECRET=hjhjhjggdrdrsmklmoojoijihiuhu
//heroku config:set NODE_ENV=production
//git push heroku master

//7) to clear buildpacks if react is to be added on top of a node.js deployment, run:
//heroku buildpacks:clear

//https://daveceddia.com/deploy-react-express-app-heroku/
