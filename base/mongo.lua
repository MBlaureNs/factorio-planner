-- horrifying hardcoded schema
-- todo: generic method for including nested table
-- todo: generic default value thingy
-- todo: figure out what the actual schema with default values is

-- generates mongo script to add recipe data to db

-- utils

require("load")

g = {}
g.outfile = "fact-mongo-insert.js"
g.indent = "  "

function g.writeline(depth, ...)
    io.write(g.indent:rep(depth))
    io.write(...)
    io.write("\n")
end

function stringy(x)
    if type(x) == "string" then
        return "\""..x.."\"";
    elseif type(x) == "table" then
        return "\""..tostring(x).."\"";
    else
        return tostring(x);
    end
end

function tablesize(t)
    count = 0
    for k,v in pairs(t) do
        count = count + 1
    end
    return count
end

-- init

DBNAME = "fact"
io.output(g.outfile)

g.writeline(0,"var conn = new Mongo();")
g.writeline(0,"db = conn.getDB(\"",DBNAME,"\");")
g.writeline(0,"db.recipe.drop();")
g.writeline(0,"db.item.drop();")

-- recipe

require("prototypes.recipe.ammo")
require("prototypes.recipe.capsule")
require("prototypes.recipe.demo-furnace-recipe")
require("prototypes.recipe.demo-recipe")
require("prototypes.recipe.demo-turret")
require("prototypes.recipe.equipment")
require("prototypes.recipe.fluid-recipe")
require("prototypes.recipe.furnace-recipe")
require("prototypes.recipe.inserter")
require("prototypes.recipe.module")
require("prototypes.recipe.recipe")
require("prototypes.recipe.turret")

for item,recipe in pairs(data.raw.recipe) do
    g.writeline(0,"")
    g.writeline(0,"doc = {};")
    g.writeline(0,"doc[\"energy_required\"] = 0.5;")
    g.writeline(0,"doc[\"result_count\"] = 1;")
    for k,v in pairs(recipe) do
        if (k == "ingredients") then
            g.writeline(0,"ings = [];")
            for ind,entry in pairs(v) do
                g.writeline(0,"i = {};")
                if (tablesize(entry) == 2) then
                    for i,val in pairs(entry) do
                        if (i == 1) then
                            g.writeline(0,"i[\"name\"] = ", stringy(val), ";")
                        else
                            g.writeline(0,"i[\"amount\"] = ", stringy(val), ";")
                        end
                    end
                else
                    for key,val in pairs(entry) do
                        g.writeline(0,"i[\"",key,"\"] = ",stringy(val),";")
                    end
                end
                g.writeline(0,"ings.push(i);")
            end
            g.writeline(0,"doc[\"ingredients\"] = ings;")
        elseif (k == "results") then
            g.writeline(0,"res = [];")
            for _,entry in pairs(v) do
                g.writeline(0,"i = {};")
                for i,val in pairs(entry) do
                    if (i == 1) then
                        g.writeline(0,"i[\"name\"] = ", stringy(val), ";")
                    else
                        g.writeline(0,"i[\"amount\"] = ", stringy(val), ";")
                    end
                end
                g.writeline(0,"res.push(i);")
            end
            g.writeline(0,"doc[\"results\"] = res;")
        else
            g.writeline(0, "doc[\"", k, "\"] = ", stringy(v), ";")
        end
    end
    g.writeline(0,"db.recipe.insert(doc);")
end

-- item

require("prototypes.item.ammo")
require("prototypes.item.armor")
require("prototypes.item.capsule")
require("prototypes.item.demo-ammo")
require("prototypes.item.demo-armor")
require("prototypes.item.demo-gun")
require("prototypes.item.demo-item")
require("prototypes.item.demo-item-groups")
require("prototypes.item.demo-mining-tools")
require("prototypes.item.demo-turret")
require("prototypes.item.equipment")
require("prototypes.item.gun")
require("prototypes.item.item")
require("prototypes.item.mining-tools")
require("prototypes.item.module")
require("prototypes.item.turret")

itemtablenames = {};
table.insert(itemtablenames, "mining-tool");
table.insert(itemtablenames, "gun");
table.insert(itemtablenames, "tool");
--  table.insert(itemtablenames, "item-subgroup");
table.insert(itemtablenames, "capsule");
table.insert(itemtablenames, "blueprint");
table.insert(itemtablenames, "repair-tool");
table.insert(itemtablenames, "ammo");
table.insert(itemtablenames, "module");
table.insert(itemtablenames, "item-with-entity-data");
table.insert(itemtablenames, "rail-planner");
--  table.insert(itemtablenames, "item-group");
table.insert(itemtablenames, "item");
table.insert(itemtablenames, "deconstruction-item");
table.insert(itemtablenames, "blueprint-book");
--  table.insert(itemtablenames, "selection-tool");
table.insert(itemtablenames, "armor");

for _itn,itemtablename in pairs(itemtablenames) do
    --print(itemtablename, data.raw[itemtablename]);
    for _it,itemtable in pairs(data.raw[itemtablename]) do
        g.writeline(0,"");
        --print("  ",_it,itemtable);
        g.writeline(0,"doc = {};");
        for k,v in pairs(itemtable) do
            --print("  ","  ",k,v);
            if (type(v) == "table") then
                g.writeline(0,k," = [];");
                for _flag,flag in pairs(v) do
                    g.writeline(0,k,".push(",stringy(flag),")");
                end
                g.writeline(0,"doc[\"",k,"\"] = ",k,";")
            else
                g.writeline(0,"doc[\"", k, "\"] = ", stringy(v), ";");
                if (k == "icon") then
                    si,ei = string.find(v,"([^/]+)$");
                    --print(si,ei);
                    iconurl = string.sub(v,si,ei);
                    iconurl = iconurl:sub(1,1):upper()..iconurl:sub(2);
                    iconurl = "https://wiki.factorio.com/images/"..iconurl;
                    --print(iconurl, v)
                    g.writeline(0,"doc[\"iconurl\"] = \"", iconurl, "\";");
                end
            end
        end
        g.writeline(0,"db.item.insert(doc);");
    end
end

-- english localization name

g.writeline(0,"")
io.input("../locale/item-name.cfg")
for line in io.lines() do
    name,eng_name = line:match("([^,]+)=([^,]+)")
    --print(name, eng_name)
    g.writeline(0,"db.item.update({name:\"",name,"\"}, {$set: {eng_name:\"",eng_name,"\"}});");
end

-- manual overwrites
-- fixes for inconsistencies between wiki and mod
g.writeline(0,"db.item.update({name:\"accumulator\"}, {$set: {iconurl:\"https://wiki.factorio.com/images/Basic-accumulator.png\"}});");
g.writeline(0,"db.item.update({name:\"beacon\"}, {$set: {iconurl:\"https://wiki.factorio.com/images/Basic-beacon.png\"}});");
g.writeline(0,"db.item.update({name:\"rail\"}, {$set: {iconurl:\"https://wiki.factorio.com/images/Straight-rail.png\"}});");
g.writeline(0,"db.item.update({name:\"transport-belt\"}, {$set: {iconurl:\"https://wiki.factorio.com/images/Basic-transport-belt.png\"}});");
g.writeline(0,"db.item.update({name:\"underground-belt\"}, {$set: {iconurl:\"https://wiki.factorio.com/images/Basic-transport-belt-to-ground.png\"}});");
g.writeline(0,"db.item.update({name:\"fast-underground-belt\"}, {$set: {iconurl:\"https://wiki.factorio.com/images/Fast-transport-belt-to-ground.png\"}});");
g.writeline(0,"db.item.update({name:\"express-underground-belt\"}, {$set: {iconurl:\"https://wiki.factorio.com/images/Express-transport-belt-to-ground.png\"}});");
g.writeline(0,"db.item.update({name:\"splitter\"}, {$set: {iconurl:\"https://wiki.factorio.com/images/Basic-splitter.png\"}});");
g.writeline(0,"db.item.update({name:\"personal-laser-defense-equipment\"}, {$set: {iconurl:\"https://wiki.factorio.com/images/Basic-laser-defense-equipment.png\"}});");
g.writeline(0,"db.item.update({name:\"discharge-defense-equipment\"}, {$set: {iconurl:\"https://wiki.factorio.com/images/Basic-electric-discharge-defense-equipment.png\"}});");
g.writeline(0,"db.item.update({name:\"exoskeleton-equipment\"}, {$set: {iconurl:\"https://wiki.factorio.com/images/thumb/Basic-exoskeleton-equipment.png/32px-Basic-exoskeleton-equipment.png\"}});");
g.writeline(0,"db.item.update({name:\"inserter\"}, {$set: {iconurl:\"https://wiki.factorio.com/images/Inserter-icon.png\"}});");
g.writeline(0,"db.item.update({name:\"stack-filter-inserter\"}, {$set: {iconurl:\"https://wiki.factorio.com/images/Stack_filter_inserter.png\"}});");
g.writeline(0,"db.item.update({name:\"blueprint-book\"}, {$set: {iconurl:\"https://wiki.factorio.com/images/Blueprint_book.png\"}});");
g.writeline(0,"db.item.update({name:\"grenade\"}, {$set: {iconurl:\"https://wiki.factorio.com/images/Basic-grenade.png\"}});");
g.writeline(0,"db.item.update({name:\"cluster-grenade\"}, {$set: {iconurl:\"https://wiki.factorio.com/images/Cluster_grenade.png\"}});");
g.writeline(0,"db.item.update({name:\"discharge-defense-remote\"}, {$set: {iconurl:\"https://wiki.factorio.com/images/Basic-electric-discharge-defense-remote.png\"}});");
g.writeline(0,"db.item.update({name:\"electric-mining-drill\"}, {$set: {iconurl:\"https://wiki.factorio.com/images/Basic-mining-drill.png\"}});");
g.writeline(0,"db.item.update({name:\"light-armor\"}, {$set: {iconurl:\"https://wiki.factorio.com/images/Basic-armor.png\"}});");
g.writeline(0,"db.item.update({name:\"modular-armor\"}, {$set: {iconurl:\"https://wiki.factorio.com/images/Basic-modular-armor.png\"}});");
g.writeline(0,"db.item.update({name:\"firearm-magazine\"}, {$set: {iconurl:\"https://wiki.factorio.com/images/Basic-bullet-magazine.png\"}});");
g.writeline(0,"db.item.update({name:\"piercing-rounds-magazine\"}, {$set: {iconurl:\"https://wiki.factorio.com/images/Piercing-bullet-magazine.png\"}});");