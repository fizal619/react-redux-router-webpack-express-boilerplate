#React + Redux + Router + SASS + Webpack + Express Boilerplate

Built with **browserHistory** in mind, it has a node server running on port 3000 with a wildcard (*) route to direct any incoming request to index.html. 

If you want to define your own `/api` for use in your app, make sure to `use` the controller above the wildcard to adhere to the rule of priority in routing.

##Installation 

1. Fork or clone this repo as needed.
2. `npm install` 
3. `npm run dev` for the development server
4. _(Optional) For best performance run `npm run build` prior to deploying._

##Directory Structure

```
.
├── css
│   ├── main.css
│   └── main.css.map
├── package.json
├── public
│   ├── bundle.js
│   ├── bundle.js.map
│   ├── css
│   │   ├── style.css
│   │   └── style.css.map
│   └── index.html
├── README.md
├── server.js
├── src
│   ├── actions
│   │   └── index.js
│   ├── css
│   │   └── style.css
│   ├── index.jsx
│   ├── reducers
│   │   └── index.js
│   ├── Screen1.jsx
│   ├── Screen2.jsx
│   ├── Screen3.jsx
│   ├── ScreenStuff.jsx
│   └── ScreenTitle.jsx
├── webpack.config.js
└── yarn.lock

```

* Compiled js AND css is piped from the `src/` folder to the `public/` folder next to our predefined index.html(not auto generated yet). 
* `src/` holds the react components, make sure everything is relevant to index.js. 
* `src/css` is where you can put the *.css files to be compiled to main.css. I believe multiple css files get compiled to one css file for efficiency.


##TODO

* Gotta make this deployment ready with a few scripts; most likely specifically for Heroku. 
