# factorio-planner
web application for planning factorio builds

Live at http://104.236.228.89:5000/

## Requirements
+ [MongoDB](https://www.mongodb.com/)
+ [Python 2](https://www.python.org/)
+ [Python Flask](http://flask.pocoo.org/) `$ pip install flask`
+ [Pymongo](https://api.mongodb.com/python/current/) `$ pip install pymongo`
+ [Lua](https://www.lua.org/) (for loading new base mod)

## Usage
### Running application

To run flask application:

`$ python app/app.py`

Connect locally via `localhost:5000` or use external address with port 5000.

### Loading new base mod
New mod info should be loaded after Factorio content updates.

Copy contents of Factorio base mod into /base directory.

Base mod is found in /data/base in the Factorio install directory.

To generate mongo inserts file:

`$ lua base/mongo.lua`

To execute generated file and add to database:

`$ mongo base/fact-mongo-insert.js`