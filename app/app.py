from flask import Flask,render_template,request,session,redirect,url_for,jsonify,json
from pymongo import MongoClient
from functools import wraps
import time

_app = Flask(__name__)

_client = MongoClient()
_db = _client["fact"]
_recipe = _db["recipe"]
_item = _db["item"]

_app.secret_key = "PLACEHOLDER"

#will be hidden from user
#either uncreatable in game or create technical problems
_ITEM_BLACKLIST = []
_ITEM_BLACKLIST.append("railgun")
_ITEM_BLACKLIST.append("tank-cannon")
_ITEM_BLACKLIST.append("railgun-dart")
_ITEM_BLACKLIST.append("loader")
_ITEM_BLACKLIST.append("computer")
_ITEM_BLACKLIST.append("player-port")
_ITEM_BLACKLIST.append("coin")
_ITEM_BLACKLIST.append("small-plane")
_ITEM_BLACKLIST.append("electric-energy-interface")
_ITEM_BLACKLIST.append("fast-loader")
_ITEM_BLACKLIST.append("express-loader")
_ITEM_BLACKLIST.append("raw-fish")
_ITEM_BLACKLIST.append("coal")
_ITEM_BLACKLIST.append("alien-artifact")
_ITEM_BLACKLIST.append("stone")
_ITEM_BLACKLIST.append("iron-ore")
_ITEM_BLACKLIST.append("copper-ore")
_ITEM_BLACKLIST.append("empty-barrel")
_ITEM_BLACKLIST.append("crude-oil-barrel")
_ITEM_BLACKLIST.append("raw-wood")
_ITEM_BLACKLIST.append("sulfur")
_ITEM_BLACKLIST.append("plastic-bar")
    
@_app.route("/ajax/item/<itemname>")
def ajax_item(itemname):
    item = _item.find_one({"name":itemname})
    if item:
        item.pop("_id")
        return jsonify(item)
    else:
        return jsonify({"name": itemname, "message": "not found"})
        
@_app.route("/ajax/recipe/target/<itemname>")
def ajax_recipetarget(itemname):
    recipe = _recipe.find_one({"result":itemname})
    if recipe:
        recipe.pop("_id")
        return jsonify(recipe)
    else:
        return jsonify({"name": itemname, "message": "not found"})

@_app.route("/")
@_app.route("/home")
def home_html():
    itemcursor = _item.find()
    groupeditemlist = {}
    for item in itemcursor:
        if item["name"] not in _ITEM_BLACKLIST:
            group = item["subgroup"].capitalize().replace("-"," ")
            if group not in groupeditemlist:
                groupeditemlist[group] = [item]
            else:
                groupeditemlist[group] += [item]
    for group in groupeditemlist:
        groupeditemlist[group].sort(key = lambda x: x["order"])
        
    return render_template("home.html",
                           groupeditemlist = groupeditemlist)

@_app.route("/cook",methods=['GET','POST'])
def cook_html():
    if request.method == "POST":
        print request.data
        return render_template("cook.html")
    else:
        return "what"


@_app.route("/todo")
def todo_html():
    return render_template("todo.html")

###

if __name__ == "__main__":
    _app.debug = True
    _app.run()
