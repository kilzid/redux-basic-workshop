FILENAME=${1:-most-basic-react-boilerplate}
# Open project
mkdir $FILENAME && cd $FILENAME
# start project
npm init -y
# Create dist folder and the index html
mkdir dist && cd dist && touch index.html && cd ..
#install webpack
npm i --save-dev webpack webpack-dev-server webpack-cli
# create a webpack.config file
touch webpack.config.js
# Create the src folder and index file
cd .. mkdir src && cd src && touch index.js
# Babel core & preset-env (latest js env)
npm i --save-dev @babel/core @babel/preset-env
# Babel - jsx to js preset
npm i --save-dev @babel/preset-react
# Add a babelrc file
touch .babelrc
# Babel loader (the connection to webpack)
npm i --save-dev babel-loader
##### Install react main dependencies
npm i --save react react-dom
# Hot Module Replacement change will apply in the app running and will not reload the entire page
npm i --save-dev react-hot-loader
# SASS
npm i --save-dev sass-loader node-sass css-loader style-loader