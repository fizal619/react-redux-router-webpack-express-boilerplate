#React-Router + Express Boilerplate

Built with **browserHistory** in mind, it has a node server running on port 3000 with a wildcard (*) route to direct any incoming request to index.html. 

If you want to define your own `/api` for use in your app, make sure to `use` the controller above the wildcard to adhere to the rule of priority in routing.

##Installation 

1. Fork or clone this repo as needed.
2. `npm install` 
3. `npm run dev` for the development server

##Directory Structure

```

├── package.json
├── public
│   ├── bundle.js
│   ├── bundle.js.map
│   └── index.html
├── README.md
├── server.js
├── src
│   └── index.js
└── webpack.config.js

```

* Compiled js is piped to the `public/` folder next to our defined index.html(not auto generated yet). 
* `src/` holds the react components, make sure everything is relevant to index.js. 
* `src/css` is where you can put the *.scss files to be compiled with sass. Sass watches that folder and outputs to public/css.


##TODO

* Gotta make this deployment ready with a few scripts; most likely specifically for Heroku. 
