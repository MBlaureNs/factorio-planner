var conn = new Mongo();
db = conn.getDB("fact");
db.recipe.drop();
db.item.drop();

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["type"] = "recipe";
doc["energy_required"] = 10;
doc["name"] = "accumulator";
doc["enabled"] = false;
ings = [];
i = {};
i["name"] = "iron-plate";
i["amount"] = 2;
ings.push(i);
i = {};
i["name"] = "battery";
i["amount"] = 5;
ings.push(i);
doc["ingredients"] = ings;
doc["result"] = "accumulator";
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["type"] = "recipe";
doc["energy_required"] = 3.5;
doc["name"] = "copper-plate";
doc["result"] = "copper-plate";
ings = [];
i = {};
i["name"] = "copper-ore";
i["amount"] = 1;
ings.push(i);
doc["ingredients"] = ings;
doc["category"] = "smelting";
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["type"] = "recipe";
doc["energy_required"] = 1;
doc["enabled"] = false;
ings = [];
i = {};
i["type"] = "item";
i["amount"] = 1;
i["name"] = "steel-plate";
ings.push(i);
doc["ingredients"] = ings;
doc["category"] = "crafting";
doc["name"] = "empty-barrel";
doc["subgroup"] = "barrel";
doc["requester_paste_multiplier"] = 10;
res = [];
i = {};
i["amount"] = "item";
i["amount"] = 1;
i["amount"] = "empty-barrel";
res.push(i);
doc["results"] = res;
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["type"] = "recipe";
doc["energy_required"] = 3;
doc["name"] = "shotgun-shell";
doc["enabled"] = false;
ings = [];
i = {};
i["name"] = "copper-plate";
i["amount"] = 2;
ings.push(i);
i = {};
i["name"] = "iron-plate";
i["amount"] = 2;
ings.push(i);
doc["ingredients"] = ings;
doc["result"] = "shotgun-shell";
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["type"] = "recipe";
doc["name"] = "discharge-defense-remote";
doc["enabled"] = false;
ings = [];
i = {};
i["name"] = "electronic-circuit";
i["amount"] = 1;
ings.push(i);
doc["ingredients"] = ings;
doc["result"] = "discharge-defense-remote";
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["type"] = "recipe";
doc["result"] = "express-underground-belt";
doc["result_count"] = 2;
doc["name"] = "express-underground-belt";
doc["enabled"] = false;
ings = [];
i = {};
i["name"] = "iron-gear-wheel";
i["amount"] = 40;
ings.push(i);
i = {};
i["name"] = "fast-underground-belt";
i["amount"] = 2;
ings.push(i);
i = {};
i["type"] = "fluid";
i["amount"] = 4;
i["name"] = "lubricant";
ings.push(i);
doc["ingredients"] = ings;
doc["category"] = "crafting-with-fluid";
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["type"] = "recipe";
doc["name"] = "inserter";
doc["requester_paste_multiplier"] = 4;
ings = [];
i = {};
i["name"] = "electronic-circuit";
i["amount"] = 1;
ings.push(i);
i = {};
i["name"] = "iron-gear-wheel";
i["amount"] = 1;
ings.push(i);
i = {};
i["name"] = "iron-plate";
i["amount"] = 1;
ings.push(i);
doc["ingredients"] = ings;
doc["result"] = "inserter";
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["type"] = "recipe";
doc["energy_required"] = 2;
doc["name"] = "electric-mining-drill";
ings = [];
i = {};
i["name"] = "electronic-circuit";
i["amount"] = 3;
ings.push(i);
i = {};
i["name"] = "iron-gear-wheel";
i["amount"] = 5;
ings.push(i);
i = {};
i["name"] = "iron-plate";
i["amount"] = 10;
ings.push(i);
doc["ingredients"] = ings;
doc["result"] = "electric-mining-drill";
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["type"] = "recipe";
doc["energy_required"] = 60;
doc["name"] = "productivity-module-3";
doc["enabled"] = false;
ings = [];
i = {};
i["name"] = "productivity-module-2";
i["amount"] = 5;
ings.push(i);
i = {};
i["name"] = "advanced-circuit";
i["amount"] = 5;
ings.push(i);
i = {};
i["name"] = "processing-unit";
i["amount"] = 5;
ings.push(i);
i = {};
i["name"] = "alien-artifact";
i["amount"] = 1;
ings.push(i);
doc["ingredients"] = ings;
doc["result"] = "productivity-module-3";
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["type"] = "recipe";
doc["energy_required"] = 20;
doc["result"] = "engine-unit";
doc["name"] = "engine-unit";
doc["enabled"] = false;
ings = [];
i = {};
i["name"] = "steel-plate";
i["amount"] = 1;
ings.push(i);
i = {};
i["name"] = "iron-gear-wheel";
i["amount"] = 1;
ings.push(i);
i = {};
i["name"] = "pipe";
i["amount"] = 2;
ings.push(i);
doc["ingredients"] = ings;
doc["category"] = "advanced-crafting";
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["type"] = "recipe";
doc["requester_paste_multiplier"] = 4;
doc["result"] = "express-transport-belt";
doc["name"] = "express-transport-belt";
doc["enabled"] = false;
ings = [];
i = {};
i["name"] = "iron-gear-wheel";
i["amount"] = 5;
ings.push(i);
i = {};
i["name"] = "fast-transport-belt";
i["amount"] = 1;
ings.push(i);
i = {};
i["type"] = "fluid";
i["amount"] = 2;
i["name"] = "lubricant";
ings.push(i);
doc["ingredients"] = ings;
doc["category"] = "crafting-with-fluid";
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["type"] = "recipe";
doc["requester_paste_multiplier"] = 4;
doc["name"] = "iron-chest";
doc["enabled"] = true;
ings = [];
i = {};
i["name"] = "iron-plate";
i["amount"] = 8;
ings.push(i);
doc["ingredients"] = ings;
doc["result"] = "iron-chest";
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["type"] = "recipe";
doc["energy_required"] = 3;
doc["enabled"] = false;
ings = [];
i = {};
i["type"] = "fluid";
i["amount"] = 1;
i["name"] = "light-oil";
ings.push(i);
doc["ingredients"] = ings;
doc["category"] = "chemistry";
doc["subgroup"] = "fluid-recipes";
doc["name"] = "solid-fuel-from-light-oil";
doc["icon"] = "__base__/graphics/icons/solid-fuel-from-light-oil.png";
doc["order"] = "b[fluid-chemistry]-c[solid-fuel-from-light-oil]";
res = [];
i = {};
i["amount"] = "item";
i["amount"] = 1;
i["amount"] = "solid-fuel";
res.push(i);
doc["results"] = res;
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["type"] = "recipe";
doc["energy_required"] = 25;
doc["requester_paste_multiplier"] = 1;
doc["name"] = "power-armor-mk2";
doc["enabled"] = false;
ings = [];
i = {};
i["name"] = "effectivity-module-3";
i["amount"] = 5;
ings.push(i);
i = {};
i["name"] = "speed-module-3";
i["amount"] = 5;
ings.push(i);
i = {};
i["name"] = "processing-unit";
i["amount"] = 40;
ings.push(i);
i = {};
i["name"] = "steel-plate";
i["amount"] = 40;
ings.push(i);
i = {};
i["name"] = "alien-artifact";
i["amount"] = 50;
ings.push(i);
doc["ingredients"] = ings;
doc["result"] = "power-armor-mk2";
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["type"] = "recipe";
doc["energy_required"] = 3;
doc["name"] = "steel-furnace";
doc["enabled"] = false;
ings = [];
i = {};
i["name"] = "steel-plate";
i["amount"] = 8;
ings.push(i);
i = {};
i["name"] = "stone-brick";
i["amount"] = 10;
ings.push(i);
doc["ingredients"] = ings;
doc["result"] = "steel-furnace";
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["type"] = "recipe";
doc["energy_required"] = 1;
res = [];
i = {};
i["amount"] = "item";
i["amount"] = 2;
i["amount"] = "sulfur";
res.push(i);
doc["results"] = res;
doc["name"] = "sulfur";
doc["enabled"] = false;
ings = [];
i = {};
i["type"] = "fluid";
i["amount"] = 3;
i["name"] = "water";
ings.push(i);
i = {};
i["type"] = "fluid";
i["amount"] = 3;
i["name"] = "petroleum-gas";
ings.push(i);
doc["ingredients"] = ings;
doc["category"] = "chemistry";
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["type"] = "recipe";
doc["energy_required"] = 15;
doc["name"] = "modular-armor";
doc["enabled"] = false;
ings = [];
i = {};
i["name"] = "advanced-circuit";
i["amount"] = 30;
ings.push(i);
i = {};
i["name"] = "processing-unit";
i["amount"] = 5;
ings.push(i);
i = {};
i["name"] = "steel-plate";
i["amount"] = 50;
ings.push(i);
doc["ingredients"] = ings;
doc["result"] = "modular-armor";
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["type"] = "recipe";
doc["requester_paste_multiplier"] = 4;
doc["name"] = "assembling-machine-1";
doc["enabled"] = false;
ings = [];
i = {};
i["name"] = "electronic-circuit";
i["amount"] = 3;
ings.push(i);
i = {};
i["name"] = "iron-gear-wheel";
i["amount"] = 5;
ings.push(i);
i = {};
i["name"] = "iron-plate";
i["amount"] = 9;
ings.push(i);
doc["ingredients"] = ings;
doc["result"] = "assembling-machine-1";
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["type"] = "recipe";
doc["name"] = "cargo-wagon";
doc["enabled"] = false;
ings = [];
i = {};
i["name"] = "iron-gear-wheel";
i["amount"] = 10;
ings.push(i);
i = {};
i["name"] = "iron-plate";
i["amount"] = 20;
ings.push(i);
i = {};
i["name"] = "steel-plate";
i["amount"] = 20;
ings.push(i);
doc["ingredients"] = ings;
doc["result"] = "cargo-wagon";
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["type"] = "recipe";
doc["energy_required"] = 1;
doc["enabled"] = false;
ings = [];
i = {};
i["type"] = "fluid";
i["amount"] = 25;
i["name"] = "crude-oil";
ings.push(i);
i = {};
i["type"] = "item";
i["amount"] = 1;
i["name"] = "empty-barrel";
ings.push(i);
doc["ingredients"] = ings;
doc["category"] = "crafting-with-fluid";
res = [];
i = {};
i["amount"] = "item";
i["amount"] = 1;
i["amount"] = "crude-oil-barrel";
res.push(i);
doc["results"] = res;
doc["name"] = "fill-crude-oil-barrel";
doc["subgroup"] = "barrel";
doc["order"] = "b[fill-crude-oil-barrel]";
doc["icon"] = "__base__/graphics/icons/fluid/fill-crude-oil-barrel.png";
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["type"] = "recipe";
doc["requester_paste_multiplier"] = 4;
doc["name"] = "steel-chest";
doc["enabled"] = false;
ings = [];
i = {};
i["name"] = "steel-plate";
i["amount"] = 8;
ings.push(i);
doc["ingredients"] = ings;
doc["result"] = "steel-chest";
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["type"] = "recipe";
doc["energy_required"] = 30;
doc["result"] = "small-plane";
doc["name"] = "small-plane";
doc["enabled"] = false;
ings = [];
i = {};
i["name"] = "plastic-bar";
i["amount"] = 100;
ings.push(i);
i = {};
i["name"] = "advanced-circuit";
i["amount"] = 200;
ings.push(i);
i = {};
i["name"] = "electric-engine-unit";
i["amount"] = 20;
ings.push(i);
i = {};
i["name"] = "battery";
i["amount"] = 100;
ings.push(i);
doc["ingredients"] = ings;
doc["category"] = "crafting";
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["type"] = "recipe";
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["result"] = "landfill";
doc["name"] = "landfill";
doc["enabled"] = false;
ings = [];
i = {};
i["name"] = "stone";
i["amount"] = 20;
ings.push(i);
doc["ingredients"] = ings;
doc["category"] = "crafting";
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["type"] = "recipe";
doc["name"] = "stone-furnace";
doc["requester_paste_multiplier"] = 4;
ings = [];
i = {};
i["name"] = "stone";
i["amount"] = 5;
ings.push(i);
doc["ingredients"] = ings;
doc["result"] = "stone-furnace";
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["type"] = "recipe";
doc["energy_required"] = 15;
doc["name"] = "distractor-capsule";
doc["enabled"] = false;
ings = [];
i = {};
i["name"] = "defender-capsule";
i["amount"] = 4;
ings.push(i);
i = {};
i["name"] = "advanced-circuit";
i["amount"] = 3;
ings.push(i);
doc["ingredients"] = ings;
doc["result"] = "distractor-capsule";
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["type"] = "recipe";
doc["energy_required"] = 10;
doc["name"] = "solar-panel-equipment";
doc["enabled"] = false;
ings = [];
i = {};
i["name"] = "solar-panel";
i["amount"] = 5;
ings.push(i);
i = {};
i["name"] = "processing-unit";
i["amount"] = 1;
ings.push(i);
i = {};
i["name"] = "steel-plate";
i["amount"] = 5;
ings.push(i);
doc["ingredients"] = ings;
doc["result"] = "solar-panel-equipment";
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["type"] = "recipe";
doc["energy_required"] = 5;
doc["enabled"] = false;
ings = [];
i = {};
i["type"] = "fluid";
i["amount"] = 10;
i["name"] = "crude-oil";
ings.push(i);
doc["ingredients"] = ings;
doc["category"] = "oil-processing";
doc["subgroup"] = "fluid-recipes";
doc["name"] = "basic-oil-processing";
doc["icon"] = "__base__/graphics/icons/fluid/basic-oil-processing.png";
doc["order"] = "a[oil-processing]-a[basic-oil-processing]";
res = [];
i = {};
i["amount"] = "fluid";
i["amount"] = 3;
i["amount"] = "heavy-oil";
res.push(i);
i = {};
i["amount"] = "fluid";
i["amount"] = 3;
i["amount"] = "light-oil";
res.push(i);
i = {};
i["amount"] = "fluid";
i["amount"] = 4;
i["amount"] = "petroleum-gas";
res.push(i);
doc["results"] = res;
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["type"] = "recipe";
doc["requester_paste_multiplier"] = 10;
doc["name"] = "iron-stick";
doc["result_count"] = 2;
ings = [];
i = {};
i["name"] = "iron-plate";
i["amount"] = 1;
ings.push(i);
doc["ingredients"] = ings;
doc["result"] = "iron-stick";
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["type"] = "recipe";
doc["energy_required"] = 20;
doc["name"] = "oil-refinery";
doc["enabled"] = false;
ings = [];
i = {};
i["name"] = "steel-plate";
i["amount"] = 15;
ings.push(i);
i = {};
i["name"] = "iron-gear-wheel";
i["amount"] = 10;
ings.push(i);
i = {};
i["name"] = "stone-brick";
i["amount"] = 10;
ings.push(i);
i = {};
i["name"] = "electronic-circuit";
i["amount"] = 10;
ings.push(i);
i = {};
i["name"] = "pipe";
i["amount"] = 10;
ings.push(i);
doc["ingredients"] = ings;
doc["result"] = "oil-refinery";
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["type"] = "recipe";
doc["name"] = "arithmetic-combinator";
doc["enabled"] = "false";
ings = [];
i = {};
i["name"] = "copper-cable";
i["amount"] = 5;
ings.push(i);
i = {};
i["name"] = "electronic-circuit";
i["amount"] = 5;
ings.push(i);
doc["ingredients"] = ings;
doc["result"] = "arithmetic-combinator";
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["type"] = "recipe";
doc["energy_required"] = 1;
doc["requester_paste_multiplier"] = 4;
res = [];
i = {};
i["amount"] = "item";
i["amount"] = 2;
i["amount"] = "plastic-bar";
res.push(i);
doc["results"] = res;
doc["name"] = "plastic-bar";
doc["enabled"] = false;
ings = [];
i = {};
i["type"] = "fluid";
i["amount"] = 3;
i["name"] = "petroleum-gas";
ings.push(i);
i = {};
i["type"] = "item";
i["amount"] = 1;
i["name"] = "coal";
ings.push(i);
doc["ingredients"] = ings;
doc["category"] = "chemistry";
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["type"] = "recipe";
doc["energy_required"] = 60;
doc["name"] = "effectivity-module-3";
doc["enabled"] = false;
ings = [];
i = {};
i["name"] = "effectivity-module-2";
i["amount"] = 5;
ings.push(i);
i = {};
i["name"] = "advanced-circuit";
i["amount"] = 5;
ings.push(i);
i = {};
i["name"] = "processing-unit";
i["amount"] = 5;
ings.push(i);
i = {};
i["name"] = "alien-artifact";
i["amount"] = 1;
ings.push(i);
doc["ingredients"] = ings;
doc["result"] = "effectivity-module-3";
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["type"] = "recipe";
doc["energy_required"] = 20;
doc["result"] = "electric-engine-unit";
doc["name"] = "electric-engine-unit";
doc["enabled"] = false;
ings = [];
i = {};
i["name"] = "engine-unit";
i["amount"] = 1;
ings.push(i);
i = {};
i["type"] = "fluid";
i["amount"] = 2;
i["name"] = "lubricant";
ings.push(i);
i = {};
i["name"] = "electronic-circuit";
i["amount"] = 2;
ings.push(i);
doc["ingredients"] = ings;
doc["category"] = "crafting-with-fluid";
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["type"] = "recipe";
doc["energy_required"] = 3;
doc["enabled"] = false;
ings = [];
i = {};
i["type"] = "fluid";
i["amount"] = 2;
i["name"] = "petroleum-gas";
ings.push(i);
doc["ingredients"] = ings;
doc["category"] = "chemistry";
doc["subgroup"] = "fluid-recipes";
doc["name"] = "solid-fuel-from-petroleum-gas";
doc["icon"] = "__base__/graphics/icons/solid-fuel-from-petroleum-gas.png";
doc["order"] = "b[fluid-chemistry]-d[solid-fuel-from-petroleum-gas]";
res = [];
i = {};
i["amount"] = "item";
i["amount"] = 1;
i["amount"] = "solid-fuel";
res.push(i);
doc["results"] = res;
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["type"] = "recipe";
doc["energy_required"] = 15;
doc["name"] = "beacon";
doc["enabled"] = false;
ings = [];
i = {};
i["name"] = "electronic-circuit";
i["amount"] = 20;
ings.push(i);
i = {};
i["name"] = "advanced-circuit";
i["amount"] = 20;
ings.push(i);
i = {};
i["name"] = "steel-plate";
i["amount"] = 10;
ings.push(i);
i = {};
i["name"] = "copper-cable";
i["amount"] = 10;
ings.push(i);
doc["ingredients"] = ings;
doc["result"] = "beacon";
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["type"] = "recipe";
doc["energy_required"] = 3;
doc["name"] = "fast-loader";
doc["enabled"] = false;
ings = [];
i = {};
i["name"] = "fast-transport-belt";
i["amount"] = 5;
ings.push(i);
i = {};
i["name"] = "loader";
i["amount"] = 1;
ings.push(i);
doc["ingredients"] = ings;
doc["result"] = "fast-loader";
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["type"] = "recipe";
doc["energy_required"] = 6;
doc["name"] = "science-pack-2";
ings = [];
i = {};
i["name"] = "inserter";
i["amount"] = 1;
ings.push(i);
i = {};
i["name"] = "transport-belt";
i["amount"] = 1;
ings.push(i);
doc["ingredients"] = ings;
doc["result"] = "science-pack-2";
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["type"] = "recipe";
doc["requester_paste_multiplier"] = 10;
doc["name"] = "wood";
doc["result_count"] = 2;
ings = [];
i = {};
i["name"] = "raw-wood";
i["amount"] = 1;
ings.push(i);
doc["ingredients"] = ings;
doc["result"] = "wood";
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["type"] = "recipe";
doc["energy_required"] = 8;
doc["name"] = "poison-capsule";
doc["enabled"] = false;
ings = [];
i = {};
i["name"] = "steel-plate";
i["amount"] = 3;
ings.push(i);
i = {};
i["name"] = "electronic-circuit";
i["amount"] = 3;
ings.push(i);
i = {};
i["name"] = "coal";
i["amount"] = 10;
ings.push(i);
doc["ingredients"] = ings;
doc["result"] = "poison-capsule";
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["type"] = "recipe";
doc["energy_required"] = 3;
doc["name"] = "light-armor";
doc["enabled"] = false;
ings = [];
i = {};
i["name"] = "iron-plate";
i["amount"] = 40;
ings.push(i);
doc["ingredients"] = ings;
doc["result"] = "light-armor";
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["type"] = "recipe";
doc["requester_paste_multiplier"] = 4;
doc["name"] = "assembling-machine-2";
doc["enabled"] = false;
ings = [];
i = {};
i["name"] = "iron-plate";
i["amount"] = 9;
ings.push(i);
i = {};
i["name"] = "electronic-circuit";
i["amount"] = 3;
ings.push(i);
i = {};
i["name"] = "iron-gear-wheel";
i["amount"] = 5;
ings.push(i);
i = {};
i["name"] = "assembling-machine-1";
i["amount"] = 1;
ings.push(i);
doc["ingredients"] = ings;
doc["result"] = "assembling-machine-2";
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["type"] = "recipe";
doc["energy_required"] = 8;
doc["name"] = "defender-capsule";
doc["enabled"] = false;
ings = [];
i = {};
i["name"] = "piercing-rounds-magazine";
i["amount"] = 1;
ings.push(i);
i = {};
i["name"] = "electronic-circuit";
i["amount"] = 2;
ings.push(i);
i = {};
i["name"] = "iron-gear-wheel";
i["amount"] = 3;
ings.push(i);
doc["ingredients"] = ings;
doc["result"] = "defender-capsule";
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["type"] = "recipe";
doc["energy_required"] = 20;
doc["requester_paste_multiplier"] = 1;
doc["name"] = "power-armor";
doc["enabled"] = false;
ings = [];
i = {};
i["name"] = "processing-unit";
i["amount"] = 40;
ings.push(i);
i = {};
i["name"] = "electric-engine-unit";
i["amount"] = 20;
ings.push(i);
i = {};
i["name"] = "steel-plate";
i["amount"] = 40;
ings.push(i);
i = {};
i["name"] = "alien-artifact";
i["amount"] = 10;
ings.push(i);
doc["ingredients"] = ings;
doc["result"] = "power-armor";
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["type"] = "recipe";
doc["energy_required"] = 10;
doc["name"] = "gun-turret";
doc["enabled"] = false;
ings = [];
i = {};
i["name"] = "iron-gear-wheel";
i["amount"] = 10;
ings.push(i);
i = {};
i["name"] = "copper-plate";
i["amount"] = 10;
ings.push(i);
i = {};
i["name"] = "iron-plate";
i["amount"] = 20;
ings.push(i);
doc["ingredients"] = ings;
doc["result"] = "gun-turret";
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["type"] = "recipe";
doc["requester_paste_multiplier"] = 4;
doc["name"] = "logistic-chest-passive-provider";
doc["enabled"] = false;
ings = [];
i = {};
i["name"] = "steel-chest";
i["amount"] = 1;
ings.push(i);
i = {};
i["name"] = "electronic-circuit";
i["amount"] = 3;
ings.push(i);
i = {};
i["name"] = "advanced-circuit";
i["amount"] = 1;
ings.push(i);
doc["ingredients"] = ings;
doc["result"] = "logistic-chest-passive-provider";
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["type"] = "recipe";
doc["energy_required"] = 5;
doc["result_count"] = 4;
doc["name"] = "land-mine";
doc["enabled"] = false;
ings = [];
i = {};
i["name"] = "steel-plate";
i["amount"] = 1;
ings.push(i);
i = {};
i["name"] = "explosives";
i["amount"] = 2;
ings.push(i);
doc["ingredients"] = ings;
doc["result"] = "land-mine";
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["type"] = "recipe";
doc["energy_required"] = 8;
doc["name"] = "slowdown-capsule";
doc["enabled"] = false;
ings = [];
i = {};
i["name"] = "steel-plate";
i["amount"] = 2;
ings.push(i);
i = {};
i["name"] = "electronic-circuit";
i["amount"] = 2;
ings.push(i);
i = {};
i["name"] = "coal";
i["amount"] = 5;
ings.push(i);
doc["ingredients"] = ings;
doc["result"] = "slowdown-capsule";
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["type"] = "recipe";
doc["name"] = "tank";
doc["enabled"] = false;
ings = [];
i = {};
i["name"] = "engine-unit";
i["amount"] = 16;
ings.push(i);
i = {};
i["name"] = "steel-plate";
i["amount"] = 50;
ings.push(i);
i = {};
i["name"] = "iron-gear-wheel";
i["amount"] = 15;
ings.push(i);
i = {};
i["name"] = "advanced-circuit";
i["amount"] = 5;
ings.push(i);
doc["ingredients"] = ings;
doc["result"] = "tank";
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["type"] = "recipe";
doc["requester_paste_multiplier"] = 10;
doc["name"] = "green-wire";
doc["enabled"] = false;
ings = [];
i = {};
i["name"] = "electronic-circuit";
i["amount"] = 1;
ings.push(i);
i = {};
i["name"] = "copper-cable";
i["amount"] = 1;
ings.push(i);
doc["ingredients"] = ings;
doc["result"] = "green-wire";
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["type"] = "recipe";
doc["requester_paste_multiplier"] = 10;
doc["name"] = "stone-wall";
doc["enabled"] = false;
ings = [];
i = {};
i["name"] = "stone-brick";
i["amount"] = 5;
ings.push(i);
doc["ingredients"] = ings;
doc["result"] = "stone-wall";
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["type"] = "recipe";
doc["energy_required"] = 3.5;
doc["result"] = "stone-brick";
doc["name"] = "stone-brick";
doc["enabled"] = true;
ings = [];
i = {};
i["name"] = "stone";
i["amount"] = 2;
ings.push(i);
doc["ingredients"] = ings;
doc["category"] = "smelting";
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["type"] = "recipe";
doc["energy_required"] = 3;
doc["enabled"] = false;
ings = [];
i = {};
i["type"] = "fluid";
i["amount"] = 2;
i["name"] = "heavy-oil";
ings.push(i);
doc["ingredients"] = ings;
doc["category"] = "chemistry";
doc["subgroup"] = "fluid-recipes";
doc["name"] = "solid-fuel-from-heavy-oil";
doc["icon"] = "__base__/graphics/icons/solid-fuel-from-heavy-oil.png";
doc["order"] = "b[fluid-chemistry]-e[solid-fuel-from-heavy-oil]";
res = [];
i = {};
i["amount"] = "item";
i["amount"] = 1;
i["amount"] = "solid-fuel";
res.push(i);
doc["results"] = res;
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["type"] = "recipe";
doc["name"] = "burner-inserter";
doc["requester_paste_multiplier"] = 4;
ings = [];
i = {};
i["name"] = "iron-plate";
i["amount"] = 1;
ings.push(i);
i = {};
i["name"] = "iron-gear-wheel";
i["amount"] = 1;
ings.push(i);
doc["ingredients"] = ings;
doc["result"] = "burner-inserter";
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["type"] = "recipe";
doc["energy_required"] = 10;
doc["name"] = "personal-roboport-equipment";
doc["enabled"] = false;
ings = [];
i = {};
i["name"] = "processing-unit";
i["amount"] = 10;
ings.push(i);
i = {};
i["name"] = "iron-gear-wheel";
i["amount"] = 40;
ings.push(i);
i = {};
i["name"] = "steel-plate";
i["amount"] = 20;
ings.push(i);
i = {};
i["name"] = "battery";
i["amount"] = 45;
ings.push(i);
doc["ingredients"] = ings;
doc["result"] = "personal-roboport-equipment";
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["type"] = "recipe";
doc["energy_required"] = 2;
doc["result"] = "express-splitter";
doc["name"] = "express-splitter";
doc["enabled"] = false;
ings = [];
i = {};
i["name"] = "fast-splitter";
i["amount"] = 1;
ings.push(i);
i = {};
i["name"] = "iron-gear-wheel";
i["amount"] = 10;
ings.push(i);
i = {};
i["name"] = "advanced-circuit";
i["amount"] = 10;
ings.push(i);
i = {};
i["type"] = "fluid";
i["amount"] = 8;
i["name"] = "lubricant";
ings.push(i);
doc["ingredients"] = ings;
doc["category"] = "crafting-with-fluid";
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["type"] = "recipe";
doc["energy_required"] = 30;
doc["result"] = "rocket-control-unit";
doc["name"] = "rocket-control-unit";
doc["enabled"] = false;
ings = [];
i = {};
i["name"] = "processing-unit";
i["amount"] = 1;
ings.push(i);
i = {};
i["name"] = "speed-module";
i["amount"] = 1;
ings.push(i);
doc["ingredients"] = ings;
doc["category"] = "crafting";
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["type"] = "recipe";
doc["energy_required"] = 8;
doc["name"] = "rocket";
doc["enabled"] = false;
ings = [];
i = {};
i["name"] = "electronic-circuit";
i["amount"] = 1;
ings.push(i);
i = {};
i["name"] = "explosives";
i["amount"] = 2;
ings.push(i);
i = {};
i["name"] = "iron-plate";
i["amount"] = 2;
ings.push(i);
doc["ingredients"] = ings;
doc["result"] = "rocket";
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["type"] = "recipe";
doc["energy_required"] = 30;
doc["result"] = "rocket-fuel";
doc["name"] = "rocket-fuel";
doc["enabled"] = false;
ings = [];
i = {};
i["name"] = "solid-fuel";
i["amount"] = 10;
ings.push(i);
doc["ingredients"] = ings;
doc["category"] = "crafting";
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["type"] = "recipe";
doc["energy_required"] = 1;
doc["subgroup"] = "fluid-recipes";
res = [];
i = {};
i["amount"] = "fluid";
i["amount"] = 1;
i["amount"] = "lubricant";
res.push(i);
doc["results"] = res;
doc["name"] = "lubricant";
doc["enabled"] = false;
ings = [];
i = {};
i["type"] = "fluid";
i["amount"] = 1;
i["name"] = "heavy-oil";
ings.push(i);
doc["ingredients"] = ings;
doc["category"] = "chemistry";
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["type"] = "recipe";
doc["energy_required"] = 20;
doc["name"] = "flying-robot-frame";
doc["enabled"] = false;
ings = [];
i = {};
i["name"] = "electric-engine-unit";
i["amount"] = 1;
ings.push(i);
i = {};
i["name"] = "battery";
i["amount"] = 2;
ings.push(i);
i = {};
i["name"] = "steel-plate";
i["amount"] = 1;
ings.push(i);
i = {};
i["name"] = "electronic-circuit";
i["amount"] = 3;
ings.push(i);
doc["ingredients"] = ings;
doc["result"] = "flying-robot-frame";
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["type"] = "recipe";
doc["energy_required"] = 10;
doc["name"] = "solar-panel";
doc["enabled"] = false;
ings = [];
i = {};
i["name"] = "steel-plate";
i["amount"] = 5;
ings.push(i);
i = {};
i["name"] = "electronic-circuit";
i["amount"] = 15;
ings.push(i);
i = {};
i["name"] = "copper-plate";
i["amount"] = 5;
ings.push(i);
doc["ingredients"] = ings;
doc["result"] = "solar-panel";
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["type"] = "recipe";
doc["requester_paste_multiplier"] = 4;
doc["name"] = "rail-signal";
doc["enabled"] = false;
ings = [];
i = {};
i["name"] = "electronic-circuit";
i["amount"] = 1;
ings.push(i);
i = {};
i["name"] = "iron-plate";
i["amount"] = 5;
ings.push(i);
doc["ingredients"] = ings;
doc["result"] = "rail-signal";
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["type"] = "recipe";
doc["energy_required"] = 15;
doc["name"] = "productivity-module";
doc["enabled"] = false;
ings = [];
i = {};
i["name"] = "advanced-circuit";
i["amount"] = 5;
ings.push(i);
i = {};
i["name"] = "electronic-circuit";
i["amount"] = 5;
ings.push(i);
doc["ingredients"] = ings;
doc["result"] = "productivity-module";
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["type"] = "recipe";
doc["requester_paste_multiplier"] = 4;
doc["name"] = "rail-chain-signal";
doc["enabled"] = false;
ings = [];
i = {};
i["name"] = "electronic-circuit";
i["amount"] = 1;
ings.push(i);
i = {};
i["name"] = "iron-plate";
i["amount"] = 5;
ings.push(i);
doc["ingredients"] = ings;
doc["result"] = "rail-chain-signal";
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["type"] = "recipe";
doc["energy_required"] = 10;
doc["name"] = "battery-equipment";
doc["enabled"] = false;
ings = [];
i = {};
i["name"] = "battery";
i["amount"] = 5;
ings.push(i);
i = {};
i["name"] = "steel-plate";
i["amount"] = 10;
ings.push(i);
doc["ingredients"] = ings;
doc["result"] = "battery-equipment";
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["type"] = "recipe";
doc["energy_required"] = 5;
doc["name"] = "lab";
ings = [];
i = {};
i["name"] = "electronic-circuit";
i["amount"] = 10;
ings.push(i);
i = {};
i["name"] = "iron-gear-wheel";
i["amount"] = 10;
ings.push(i);
i = {};
i["name"] = "transport-belt";
i["amount"] = 4;
ings.push(i);
doc["ingredients"] = ings;
doc["result"] = "lab";
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["type"] = "recipe";
doc["energy_required"] = 15;
doc["name"] = "effectivity-module";
doc["enabled"] = false;
ings = [];
i = {};
i["name"] = "advanced-circuit";
i["amount"] = 5;
ings.push(i);
i = {};
i["name"] = "electronic-circuit";
i["amount"] = 5;
ings.push(i);
doc["ingredients"] = ings;
doc["result"] = "effectivity-module";
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["type"] = "recipe";
doc["energy_required"] = 10;
doc["name"] = "express-loader";
doc["enabled"] = false;
ings = [];
i = {};
i["name"] = "express-transport-belt";
i["amount"] = 5;
ings.push(i);
i = {};
i["name"] = "fast-loader";
i["amount"] = 1;
ings.push(i);
doc["ingredients"] = ings;
doc["result"] = "express-loader";
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["type"] = "recipe";
doc["result"] = "steam-engine";
ings = [];
i = {};
i["name"] = "iron-gear-wheel";
i["amount"] = 5;
ings.push(i);
i = {};
i["name"] = "pipe";
i["amount"] = 5;
ings.push(i);
i = {};
i["name"] = "iron-plate";
i["amount"] = 5;
ings.push(i);
doc["ingredients"] = ings;
doc["name"] = "steam-engine";
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["type"] = "recipe";
doc["energy_required"] = 2;
doc["name"] = "firearm-magazine";
doc["result_count"] = 1;
ings = [];
i = {};
i["name"] = "iron-plate";
i["amount"] = 2;
ings.push(i);
doc["ingredients"] = ings;
doc["result"] = "firearm-magazine";
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["type"] = "recipe";
doc["energy_required"] = 5;
doc["result"] = "explosives";
doc["name"] = "explosives";
doc["enabled"] = false;
ings = [];
i = {};
i["type"] = "item";
i["amount"] = 1;
i["name"] = "sulfur";
ings.push(i);
i = {};
i["type"] = "item";
i["amount"] = 1;
i["name"] = "coal";
ings.push(i);
i = {};
i["type"] = "fluid";
i["amount"] = 1;
i["name"] = "water";
ings.push(i);
doc["ingredients"] = ings;
doc["category"] = "chemistry";
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["type"] = "recipe";
doc["name"] = "assembling-machine-3";
doc["enabled"] = false;
ings = [];
i = {};
i["name"] = "speed-module";
i["amount"] = 4;
ings.push(i);
i = {};
i["name"] = "assembling-machine-2";
i["amount"] = 2;
ings.push(i);
doc["ingredients"] = ings;
doc["result"] = "assembling-machine-3";
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["type"] = "recipe";
doc["energy_required"] = 12;
doc["name"] = "science-pack-3";
doc["enabled"] = false;
ings = [];
i = {};
i["name"] = "battery";
i["amount"] = 1;
ings.push(i);
i = {};
i["name"] = "advanced-circuit";
i["amount"] = 1;
ings.push(i);
i = {};
i["name"] = "filter-inserter";
i["amount"] = 1;
ings.push(i);
i = {};
i["name"] = "steel-plate";
i["amount"] = 1;
ings.push(i);
doc["ingredients"] = ings;
doc["result"] = "science-pack-3";
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["type"] = "recipe";
doc["energy_required"] = 10;
doc["name"] = "exoskeleton-equipment";
doc["enabled"] = false;
ings = [];
i = {};
i["name"] = "processing-unit";
i["amount"] = 10;
ings.push(i);
i = {};
i["name"] = "electric-engine-unit";
i["amount"] = 30;
ings.push(i);
i = {};
i["name"] = "steel-plate";
i["amount"] = 20;
ings.push(i);
doc["ingredients"] = ings;
doc["result"] = "exoskeleton-equipment";
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["type"] = "recipe";
doc["energy_required"] = 20;
doc["name"] = "flamethrower-turret";
doc["enabled"] = false;
ings = [];
i = {};
i["name"] = "steel-plate";
i["amount"] = 30;
ings.push(i);
i = {};
i["name"] = "iron-gear-wheel";
i["amount"] = 15;
ings.push(i);
i = {};
i["name"] = "pipe";
i["amount"] = 10;
ings.push(i);
i = {};
i["name"] = "engine-unit";
i["amount"] = 5;
ings.push(i);
doc["ingredients"] = ings;
doc["result"] = "flamethrower-turret";
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["type"] = "recipe";
doc["energy_required"] = 1;
doc["name"] = "loader";
doc["enabled"] = false;
ings = [];
i = {};
i["name"] = "inserter";
i["amount"] = 5;
ings.push(i);
i = {};
i["name"] = "electronic-circuit";
i["amount"] = 5;
ings.push(i);
i = {};
i["name"] = "iron-gear-wheel";
i["amount"] = 5;
ings.push(i);
i = {};
i["name"] = "iron-plate";
i["amount"] = 5;
ings.push(i);
i = {};
i["name"] = "transport-belt";
i["amount"] = 5;
ings.push(i);
doc["ingredients"] = ings;
doc["result"] = "loader";
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["type"] = "recipe";
doc["energy_required"] = 20;
doc["name"] = "laser-turret";
doc["enabled"] = false;
ings = [];
i = {};
i["name"] = "steel-plate";
i["amount"] = 20;
ings.push(i);
i = {};
i["name"] = "electronic-circuit";
i["amount"] = 20;
ings.push(i);
i = {};
i["name"] = "battery";
i["amount"] = 12;
ings.push(i);
doc["ingredients"] = ings;
doc["result"] = "laser-turret";
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["type"] = "recipe";
doc["energy_required"] = 5;
doc["name"] = "science-pack-1";
ings = [];
i = {};
i["name"] = "copper-plate";
i["amount"] = 1;
ings.push(i);
i = {};
i["name"] = "iron-gear-wheel";
i["amount"] = 1;
ings.push(i);
doc["ingredients"] = ings;
doc["result"] = "science-pack-1";
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["type"] = "recipe";
doc["energy_required"] = 10;
doc["name"] = "flame-thrower";
doc["enabled"] = false;
ings = [];
i = {};
i["name"] = "steel-plate";
i["amount"] = 5;
ings.push(i);
i = {};
i["name"] = "iron-gear-wheel";
i["amount"] = 10;
ings.push(i);
doc["ingredients"] = ings;
doc["result"] = "flame-thrower";
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["type"] = "recipe";
doc["energy_required"] = 5;
doc["enabled"] = false;
ings = [];
i = {};
i["type"] = "fluid";
i["amount"] = 3;
i["name"] = "water";
ings.push(i);
i = {};
i["type"] = "fluid";
i["amount"] = 4;
i["name"] = "heavy-oil";
ings.push(i);
doc["ingredients"] = ings;
doc["category"] = "chemistry";
doc["main_product"] = "";
doc["subgroup"] = "fluid-recipes";
doc["name"] = "heavy-oil-cracking";
doc["icon"] = "__base__/graphics/icons/fluid/heavy-oil-cracking.png";
doc["order"] = "b[fluid-chemistry]-a[heavy-oil-cracking]";
res = [];
i = {};
i["amount"] = "fluid";
i["amount"] = 3;
i["amount"] = "light-oil";
res.push(i);
doc["results"] = res;
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["type"] = "recipe";
doc["energy_required"] = 10;
doc["result_count"] = 10;
doc["result"] = "concrete";
doc["name"] = "concrete";
doc["enabled"] = false;
ings = [];
i = {};
i["name"] = "stone-brick";
i["amount"] = 5;
ings.push(i);
i = {};
i["name"] = "iron-ore";
i["amount"] = 1;
ings.push(i);
i = {};
i["type"] = "fluid";
i["amount"] = 10;
i["name"] = "water";
ings.push(i);
doc["ingredients"] = ings;
doc["category"] = "crafting-with-fluid";
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["type"] = "recipe";
doc["energy_required"] = 3;
doc["result"] = "satellite";
doc["name"] = "satellite";
doc["enabled"] = false;
ings = [];
i = {};
i["name"] = "low-density-structure";
i["amount"] = 100;
ings.push(i);
i = {};
i["name"] = "solar-panel";
i["amount"] = 100;
ings.push(i);
i = {};
i["name"] = "accumulator";
i["amount"] = 100;
ings.push(i);
i = {};
i["name"] = "radar";
i["amount"] = 5;
ings.push(i);
i = {};
i["name"] = "processing-unit";
i["amount"] = 100;
ings.push(i);
i = {};
i["name"] = "rocket-fuel";
i["amount"] = 50;
ings.push(i);
doc["ingredients"] = ings;
doc["category"] = "crafting";
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["type"] = "recipe";
doc["name"] = "repair-pack";
doc["requester_paste_multiplier"] = 10;
ings = [];
i = {};
i["name"] = "electronic-circuit";
i["amount"] = 1;
ings.push(i);
i = {};
i["name"] = "iron-gear-wheel";
i["amount"] = 1;
ings.push(i);
doc["ingredients"] = ings;
doc["result"] = "repair-pack";
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["type"] = "recipe";
doc["energy_required"] = 8;
doc["name"] = "railgun";
doc["enabled"] = false;
ings = [];
i = {};
i["name"] = "steel-plate";
i["amount"] = 15;
ings.push(i);
i = {};
i["name"] = "copper-plate";
i["amount"] = 15;
ings.push(i);
i = {};
i["name"] = "electronic-circuit";
i["amount"] = 10;
ings.push(i);
i = {};
i["name"] = "advanced-circuit";
i["amount"] = 5;
ings.push(i);
doc["ingredients"] = ings;
doc["result"] = "railgun";
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["type"] = "recipe";
doc["energy_required"] = 3;
doc["result"] = "rocket-part";
doc["category"] = "rocket-building";
doc["name"] = "rocket-part";
doc["enabled"] = false;
ings = [];
i = {};
i["name"] = "low-density-structure";
i["amount"] = 10;
ings.push(i);
i = {};
i["name"] = "rocket-fuel";
i["amount"] = 10;
ings.push(i);
i = {};
i["name"] = "rocket-control-unit";
i["amount"] = 10;
ings.push(i);
doc["ingredients"] = ings;
doc["hidden"] = true;
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["type"] = "recipe";
doc["energy_required"] = 30;
doc["result"] = "low-density-structure";
doc["name"] = "low-density-structure";
doc["enabled"] = false;
ings = [];
i = {};
i["name"] = "steel-plate";
i["amount"] = 10;
ings.push(i);
i = {};
i["name"] = "copper-plate";
i["amount"] = 5;
ings.push(i);
i = {};
i["name"] = "plastic-bar";
i["amount"] = 5;
ings.push(i);
doc["ingredients"] = ings;
doc["category"] = "crafting";
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["type"] = "recipe";
doc["energy_required"] = 2;
doc["name"] = "power-switch";
doc["enabled"] = "false";
ings = [];
i = {};
i["name"] = "iron-plate";
i["amount"] = 5;
ings.push(i);
i = {};
i["name"] = "copper-cable";
i["amount"] = 5;
ings.push(i);
i = {};
i["name"] = "electronic-circuit";
i["amount"] = 2;
ings.push(i);
doc["ingredients"] = ings;
doc["result"] = "power-switch";
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["type"] = "recipe";
doc["energy_required"] = 10;
doc["name"] = "energy-shield-equipment";
doc["enabled"] = false;
ings = [];
i = {};
i["name"] = "advanced-circuit";
i["amount"] = 5;
ings.push(i);
i = {};
i["name"] = "steel-plate";
i["amount"] = 10;
ings.push(i);
doc["ingredients"] = ings;
doc["result"] = "energy-shield-equipment";
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["type"] = "recipe";
doc["name"] = "constant-combinator";
doc["enabled"] = "false";
ings = [];
i = {};
i["name"] = "copper-cable";
i["amount"] = 5;
ings.push(i);
i = {};
i["name"] = "electronic-circuit";
i["amount"] = 2;
ings.push(i);
doc["ingredients"] = ings;
doc["result"] = "constant-combinator";
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["type"] = "recipe";
doc["energy_required"] = 3;
doc["name"] = "piercing-rounds-magazine";
doc["enabled"] = false;
ings = [];
i = {};
i["name"] = "copper-plate";
i["amount"] = 5;
ings.push(i);
i = {};
i["name"] = "steel-plate";
i["amount"] = 1;
ings.push(i);
doc["ingredients"] = ings;
doc["result"] = "piercing-rounds-magazine";
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["type"] = "recipe";
doc["name"] = "decider-combinator";
doc["enabled"] = "false";
ings = [];
i = {};
i["name"] = "copper-cable";
i["amount"] = 5;
ings.push(i);
i = {};
i["name"] = "electronic-circuit";
i["amount"] = 5;
ings.push(i);
doc["ingredients"] = ings;
doc["result"] = "decider-combinator";
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["type"] = "recipe";
doc["energy_required"] = 10;
doc["name"] = "night-vision-equipment";
doc["enabled"] = false;
ings = [];
i = {};
i["name"] = "advanced-circuit";
i["amount"] = 5;
ings.push(i);
i = {};
i["name"] = "steel-plate";
i["amount"] = 10;
ings.push(i);
doc["ingredients"] = ings;
doc["result"] = "night-vision-equipment";
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["type"] = "recipe";
doc["energy_required"] = 5;
doc["enabled"] = false;
ings = [];
i = {};
i["type"] = "fluid";
i["amount"] = 3;
i["name"] = "water";
ings.push(i);
i = {};
i["type"] = "fluid";
i["amount"] = 3;
i["name"] = "light-oil";
ings.push(i);
doc["ingredients"] = ings;
doc["category"] = "chemistry";
doc["main_product"] = "";
doc["subgroup"] = "fluid-recipes";
doc["name"] = "light-oil-cracking";
doc["icon"] = "__base__/graphics/icons/fluid/light-oil-cracking.png";
doc["order"] = "b[fluid-chemistry]-b[light-oil-cracking]";
res = [];
i = {};
i["amount"] = "fluid";
i["amount"] = 2;
i["amount"] = "petroleum-gas";
res.push(i);
doc["results"] = res;
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["type"] = "recipe";
doc["energy_required"] = 15;
doc["name"] = "roboport";
doc["enabled"] = false;
ings = [];
i = {};
i["name"] = "steel-plate";
i["amount"] = 45;
ings.push(i);
i = {};
i["name"] = "iron-gear-wheel";
i["amount"] = 45;
ings.push(i);
i = {};
i["name"] = "advanced-circuit";
i["amount"] = 45;
ings.push(i);
doc["ingredients"] = ings;
doc["result"] = "roboport";
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["type"] = "recipe";
doc["energy_required"] = 2;
doc["name"] = "small-pump";
doc["enabled"] = false;
ings = [];
i = {};
i["name"] = "electric-engine-unit";
i["amount"] = 1;
ings.push(i);
i = {};
i["name"] = "steel-plate";
i["amount"] = 1;
ings.push(i);
i = {};
i["name"] = "pipe";
i["amount"] = 1;
ings.push(i);
doc["ingredients"] = ings;
doc["result"] = "small-pump";
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["type"] = "recipe";
doc["energy_required"] = 8;
doc["name"] = "grenade";
doc["enabled"] = false;
ings = [];
i = {};
i["name"] = "iron-plate";
i["amount"] = 5;
ings.push(i);
i = {};
i["name"] = "coal";
i["amount"] = 10;
ings.push(i);
doc["ingredients"] = ings;
doc["result"] = "grenade";
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["type"] = "recipe";
doc["energy_required"] = 3;
doc["name"] = "storage-tank";
doc["enabled"] = false;
ings = [];
i = {};
i["name"] = "iron-plate";
i["amount"] = 20;
ings.push(i);
i = {};
i["name"] = "steel-plate";
i["amount"] = 5;
ings.push(i);
doc["ingredients"] = ings;
doc["result"] = "storage-tank";
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["type"] = "recipe";
doc["energy_required"] = 5;
doc["result"] = "battery";
doc["name"] = "battery";
doc["enabled"] = false;
ings = [];
i = {};
i["type"] = "fluid";
i["amount"] = 2;
i["name"] = "sulfuric-acid";
ings.push(i);
i = {};
i["name"] = "iron-plate";
i["amount"] = 1;
ings.push(i);
i = {};
i["name"] = "copper-plate";
i["amount"] = 1;
ings.push(i);
doc["ingredients"] = ings;
doc["category"] = "chemistry";
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["type"] = "recipe";
doc["energy_required"] = 15;
doc["name"] = "speed-module";
doc["enabled"] = false;
ings = [];
i = {};
i["name"] = "advanced-circuit";
i["amount"] = 5;
ings.push(i);
i = {};
i["name"] = "electronic-circuit";
i["amount"] = 5;
ings.push(i);
doc["ingredients"] = ings;
doc["result"] = "speed-module";
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["type"] = "recipe";
doc["name"] = "car";
doc["enabled"] = false;
ings = [];
i = {};
i["name"] = "engine-unit";
i["amount"] = 8;
ings.push(i);
i = {};
i["name"] = "iron-plate";
i["amount"] = 20;
ings.push(i);
i = {};
i["name"] = "steel-plate";
i["amount"] = 5;
ings.push(i);
doc["ingredients"] = ings;
doc["result"] = "car";
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["type"] = "recipe";
doc["energy_required"] = 15;
doc["result"] = "processing-unit";
doc["name"] = "processing-unit";
doc["enabled"] = false;
ings = [];
i = {};
i["name"] = "electronic-circuit";
i["amount"] = 20;
ings.push(i);
i = {};
i["name"] = "advanced-circuit";
i["amount"] = 2;
ings.push(i);
i = {};
i["type"] = "fluid";
i["amount"] = 0.5;
i["name"] = "sulfuric-acid";
ings.push(i);
doc["ingredients"] = ings;
doc["category"] = "crafting-with-fluid";
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["type"] = "recipe";
doc["requester_paste_multiplier"] = 10;
doc["name"] = "copper-cable";
doc["result_count"] = 2;
ings = [];
i = {};
i["name"] = "copper-plate";
i["amount"] = 1;
ings.push(i);
doc["ingredients"] = ings;
doc["result"] = "copper-cable";
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["type"] = "recipe";
doc["energy_required"] = 1;
doc["name"] = "deconstruction-planner";
doc["enabled"] = false;
ings = [];
i = {};
i["name"] = "advanced-circuit";
i["amount"] = 1;
ings.push(i);
doc["ingredients"] = ings;
doc["result"] = "deconstruction-planner";
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["type"] = "recipe";
doc["energy_required"] = 5;
doc["name"] = "blueprint-book";
doc["enabled"] = false;
ings = [];
i = {};
i["name"] = "advanced-circuit";
i["amount"] = 15;
ings.push(i);
doc["ingredients"] = ings;
doc["result"] = "blueprint-book";
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["type"] = "recipe";
doc["energy_required"] = 1;
doc["name"] = "blueprint";
doc["enabled"] = false;
ings = [];
i = {};
i["name"] = "advanced-circuit";
i["amount"] = 1;
ings.push(i);
doc["ingredients"] = ings;
doc["result"] = "blueprint";
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["type"] = "recipe";
doc["name"] = "wooden-chest";
doc["requester_paste_multiplier"] = 4;
ings = [];
i = {};
i["name"] = "wood";
i["amount"] = 4;
ings.push(i);
doc["ingredients"] = ings;
doc["result"] = "wooden-chest";
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["type"] = "recipe";
doc["energy_required"] = 8;
doc["name"] = "explosive-rocket";
doc["enabled"] = false;
ings = [];
i = {};
i["name"] = "rocket";
i["amount"] = 1;
ings.push(i);
i = {};
i["name"] = "explosives";
i["amount"] = 5;
ings.push(i);
doc["ingredients"] = ings;
doc["result"] = "explosive-rocket";
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["type"] = "recipe";
doc["requester_paste_multiplier"] = 4;
doc["name"] = "long-handed-inserter";
doc["enabled"] = false;
ings = [];
i = {};
i["name"] = "iron-gear-wheel";
i["amount"] = 1;
ings.push(i);
i = {};
i["name"] = "iron-plate";
i["amount"] = 1;
ings.push(i);
i = {};
i["name"] = "inserter";
i["amount"] = 1;
ings.push(i);
doc["ingredients"] = ings;
doc["result"] = "long-handed-inserter";
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["type"] = "recipe";
doc["requester_paste_multiplier"] = 4;
doc["name"] = "medium-electric-pole";
doc["enabled"] = false;
ings = [];
i = {};
i["name"] = "steel-plate";
i["amount"] = 2;
ings.push(i);
i = {};
i["name"] = "copper-plate";
i["amount"] = 2;
ings.push(i);
doc["ingredients"] = ings;
doc["result"] = "medium-electric-pole";
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["type"] = "recipe";
doc["name"] = "substation";
doc["enabled"] = false;
ings = [];
i = {};
i["name"] = "steel-plate";
i["amount"] = 10;
ings.push(i);
i = {};
i["name"] = "advanced-circuit";
i["amount"] = 5;
ings.push(i);
i = {};
i["name"] = "copper-plate";
i["amount"] = 5;
ings.push(i);
doc["ingredients"] = ings;
doc["result"] = "substation";
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["type"] = "recipe";
doc["requester_paste_multiplier"] = 4;
doc["name"] = "big-electric-pole";
doc["enabled"] = false;
ings = [];
i = {};
i["name"] = "steel-plate";
i["amount"] = 5;
ings.push(i);
i = {};
i["name"] = "copper-plate";
i["amount"] = 5;
ings.push(i);
doc["ingredients"] = ings;
doc["result"] = "big-electric-pole";
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["type"] = "recipe";
doc["requester_paste_multiplier"] = 4;
doc["name"] = "steel-axe";
doc["enabled"] = false;
ings = [];
i = {};
i["name"] = "steel-plate";
i["amount"] = 5;
ings.push(i);
i = {};
i["name"] = "iron-stick";
i["amount"] = 2;
ings.push(i);
doc["ingredients"] = ings;
doc["result"] = "steel-axe";
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["type"] = "recipe";
doc["name"] = "small-lamp";
doc["enabled"] = false;
ings = [];
i = {};
i["name"] = "electronic-circuit";
i["amount"] = 1;
ings.push(i);
i = {};
i["name"] = "iron-stick";
i["amount"] = 3;
ings.push(i);
i = {};
i["name"] = "iron-plate";
i["amount"] = 1;
ings.push(i);
doc["ingredients"] = ings;
doc["result"] = "small-lamp";
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["type"] = "recipe";
doc["energy_required"] = 8;
doc["name"] = "cannon-shell";
doc["enabled"] = false;
ings = [];
i = {};
i["name"] = "steel-plate";
i["amount"] = 4;
ings.push(i);
i = {};
i["name"] = "plastic-bar";
i["amount"] = 2;
ings.push(i);
i = {};
i["name"] = "explosives";
i["amount"] = 1;
ings.push(i);
doc["ingredients"] = ings;
doc["result"] = "cannon-shell";
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["type"] = "recipe";
doc["energy_required"] = 4;
doc["name"] = "shotgun";
doc["enabled"] = false;
ings = [];
i = {};
i["name"] = "iron-plate";
i["amount"] = 15;
ings.push(i);
i = {};
i["name"] = "iron-gear-wheel";
i["amount"] = 5;
ings.push(i);
i = {};
i["name"] = "copper-plate";
i["amount"] = 10;
ings.push(i);
i = {};
i["name"] = "wood";
i["amount"] = 5;
ings.push(i);
doc["ingredients"] = ings;
doc["result"] = "shotgun";
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["type"] = "recipe";
doc["energy_required"] = 10;
doc["name"] = "chemical-plant";
doc["enabled"] = false;
ings = [];
i = {};
i["name"] = "steel-plate";
i["amount"] = 5;
ings.push(i);
i = {};
i["name"] = "iron-gear-wheel";
i["amount"] = 5;
ings.push(i);
i = {};
i["name"] = "electronic-circuit";
i["amount"] = 5;
ings.push(i);
i = {};
i["name"] = "pipe";
i["amount"] = 5;
ings.push(i);
doc["ingredients"] = ings;
doc["result"] = "chemical-plant";
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["type"] = "recipe";
doc["requester_paste_multiplier"] = 4;
doc["name"] = "filter-inserter";
doc["enabled"] = false;
ings = [];
i = {};
i["name"] = "fast-inserter";
i["amount"] = 1;
ings.push(i);
i = {};
i["name"] = "electronic-circuit";
i["amount"] = 4;
ings.push(i);
doc["ingredients"] = ings;
doc["result"] = "filter-inserter";
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["type"] = "recipe";
doc["energy_required"] = 8;
doc["name"] = "combat-shotgun";
doc["enabled"] = false;
ings = [];
i = {};
i["name"] = "steel-plate";
i["amount"] = 15;
ings.push(i);
i = {};
i["name"] = "iron-gear-wheel";
i["amount"] = 5;
ings.push(i);
i = {};
i["name"] = "copper-plate";
i["amount"] = 10;
ings.push(i);
i = {};
i["name"] = "wood";
i["amount"] = 10;
ings.push(i);
doc["ingredients"] = ings;
doc["result"] = "combat-shotgun";
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["type"] = "recipe";
doc["energy_required"] = 30;
doc["requester_paste_multiplier"] = 1;
doc["name"] = "rocket-silo";
doc["enabled"] = false;
ings = [];
i = {};
i["name"] = "steel-plate";
i["amount"] = 1000;
ings.push(i);
i = {};
i["name"] = "concrete";
i["amount"] = 1000;
ings.push(i);
i = {};
i["name"] = "pipe";
i["amount"] = 100;
ings.push(i);
i = {};
i["name"] = "processing-unit";
i["amount"] = 200;
ings.push(i);
i = {};
i["name"] = "electric-engine-unit";
i["amount"] = 200;
ings.push(i);
doc["ingredients"] = ings;
doc["result"] = "rocket-silo";
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["type"] = "recipe";
doc["requester_paste_multiplier"] = 4;
doc["name"] = "logistic-chest-requester";
doc["enabled"] = false;
ings = [];
i = {};
i["name"] = "steel-chest";
i["amount"] = 1;
ings.push(i);
i = {};
i["name"] = "electronic-circuit";
i["amount"] = 3;
ings.push(i);
i = {};
i["name"] = "advanced-circuit";
i["amount"] = 1;
ings.push(i);
doc["ingredients"] = ings;
doc["result"] = "logistic-chest-requester";
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["type"] = "recipe";
doc["energy_required"] = 8;
doc["name"] = "heavy-armor";
doc["enabled"] = false;
ings = [];
i = {};
i["name"] = "copper-plate";
i["amount"] = 100;
ings.push(i);
i = {};
i["name"] = "steel-plate";
i["amount"] = 50;
ings.push(i);
doc["ingredients"] = ings;
doc["result"] = "heavy-armor";
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["type"] = "recipe";
doc["requester_paste_multiplier"] = 4;
doc["name"] = "stack-inserter";
doc["enabled"] = false;
ings = [];
i = {};
i["name"] = "iron-gear-wheel";
i["amount"] = 15;
ings.push(i);
i = {};
i["name"] = "electronic-circuit";
i["amount"] = 15;
ings.push(i);
i = {};
i["name"] = "advanced-circuit";
i["amount"] = 1;
ings.push(i);
i = {};
i["name"] = "fast-inserter";
i["amount"] = 1;
ings.push(i);
doc["ingredients"] = ings;
doc["result"] = "stack-inserter";
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["type"] = "recipe";
doc["energy_required"] = 30;
doc["name"] = "effectivity-module-2";
doc["enabled"] = false;
ings = [];
i = {};
i["name"] = "effectivity-module";
i["amount"] = 4;
ings.push(i);
i = {};
i["name"] = "advanced-circuit";
i["amount"] = 5;
ings.push(i);
i = {};
i["name"] = "processing-unit";
i["amount"] = 5;
ings.push(i);
doc["ingredients"] = ings;
doc["result"] = "effectivity-module-2";
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["type"] = "recipe";
doc["requester_paste_multiplier"] = 4;
doc["name"] = "logistic-chest-storage";
doc["enabled"] = false;
ings = [];
i = {};
i["name"] = "steel-chest";
i["amount"] = 1;
ings.push(i);
i = {};
i["name"] = "electronic-circuit";
i["amount"] = 3;
ings.push(i);
i = {};
i["name"] = "advanced-circuit";
i["amount"] = 1;
ings.push(i);
doc["ingredients"] = ings;
doc["result"] = "logistic-chest-storage";
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["type"] = "recipe";
doc["name"] = "logistic-robot";
doc["enabled"] = false;
ings = [];
i = {};
i["name"] = "flying-robot-frame";
i["amount"] = 1;
ings.push(i);
i = {};
i["name"] = "advanced-circuit";
i["amount"] = 2;
ings.push(i);
doc["ingredients"] = ings;
doc["result"] = "logistic-robot";
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["type"] = "recipe";
doc["requester_paste_multiplier"] = 4;
doc["name"] = "logistic-chest-active-provider";
doc["enabled"] = false;
ings = [];
i = {};
i["name"] = "steel-chest";
i["amount"] = 1;
ings.push(i);
i = {};
i["name"] = "electronic-circuit";
i["amount"] = 3;
ings.push(i);
i = {};
i["name"] = "advanced-circuit";
i["amount"] = 1;
ings.push(i);
doc["ingredients"] = ings;
doc["result"] = "logistic-chest-active-provider";
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["type"] = "recipe";
doc["name"] = "construction-robot";
doc["enabled"] = false;
ings = [];
i = {};
i["name"] = "flying-robot-frame";
i["amount"] = 1;
ings.push(i);
i = {};
i["name"] = "electronic-circuit";
i["amount"] = 2;
ings.push(i);
doc["ingredients"] = ings;
doc["result"] = "construction-robot";
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["type"] = "recipe";
doc["energy_required"] = 20;
doc["name"] = "pumpjack";
doc["enabled"] = false;
ings = [];
i = {};
i["name"] = "steel-plate";
i["amount"] = 15;
ings.push(i);
i = {};
i["name"] = "iron-gear-wheel";
i["amount"] = 10;
ings.push(i);
i = {};
i["name"] = "electronic-circuit";
i["amount"] = 10;
ings.push(i);
i = {};
i["name"] = "pipe";
i["amount"] = 10;
ings.push(i);
doc["ingredients"] = ings;
doc["result"] = "pumpjack";
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["type"] = "recipe";
doc["energy_required"] = 8;
doc["requester_paste_multiplier"] = 5;
doc["name"] = "advanced-circuit";
doc["enabled"] = false;
ings = [];
i = {};
i["name"] = "electronic-circuit";
i["amount"] = 2;
ings.push(i);
i = {};
i["name"] = "plastic-bar";
i["amount"] = 2;
ings.push(i);
i = {};
i["name"] = "copper-cable";
i["amount"] = 4;
ings.push(i);
doc["ingredients"] = ings;
doc["result"] = "advanced-circuit";
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["type"] = "recipe";
doc["name"] = "iron-gear-wheel";
doc["requester_paste_multiplier"] = 10;
ings = [];
i = {};
i["name"] = "iron-plate";
i["amount"] = 2;
ings.push(i);
doc["ingredients"] = ings;
doc["result"] = "iron-gear-wheel";
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["type"] = "recipe";
doc["energy_required"] = 10;
doc["name"] = "fusion-reactor-equipment";
doc["enabled"] = false;
ings = [];
i = {};
i["name"] = "processing-unit";
i["amount"] = 100;
ings.push(i);
i = {};
i["name"] = "alien-artifact";
i["amount"] = 30;
ings.push(i);
doc["ingredients"] = ings;
doc["result"] = "fusion-reactor-equipment";
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["type"] = "recipe";
doc["energy_required"] = 2;
doc["requester_paste_multiplier"] = 4;
doc["name"] = "fast-splitter";
doc["enabled"] = false;
ings = [];
i = {};
i["name"] = "splitter";
i["amount"] = 1;
ings.push(i);
i = {};
i["name"] = "iron-gear-wheel";
i["amount"] = 10;
ings.push(i);
i = {};
i["name"] = "electronic-circuit";
i["amount"] = 10;
ings.push(i);
doc["ingredients"] = ings;
doc["result"] = "fast-splitter";
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["type"] = "recipe";
doc["requester_paste_multiplier"] = 4;
doc["result"] = "fast-underground-belt";
doc["name"] = "fast-underground-belt";
doc["enabled"] = false;
ings = [];
i = {};
i["name"] = "iron-gear-wheel";
i["amount"] = 20;
ings.push(i);
i = {};
i["name"] = "underground-belt";
i["amount"] = 2;
ings.push(i);
doc["ingredients"] = ings;
doc["result_count"] = 2;
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["type"] = "recipe";
doc["energy_required"] = 1;
doc["requester_paste_multiplier"] = 4;
doc["name"] = "splitter";
doc["enabled"] = false;
ings = [];
i = {};
i["name"] = "electronic-circuit";
i["amount"] = 5;
ings.push(i);
i = {};
i["name"] = "iron-plate";
i["amount"] = 5;
ings.push(i);
i = {};
i["name"] = "transport-belt";
i["amount"] = 4;
ings.push(i);
doc["ingredients"] = ings;
doc["result"] = "splitter";
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["type"] = "recipe";
doc["requester_paste_multiplier"] = 4;
doc["name"] = "transport-belt";
doc["result_count"] = 2;
ings = [];
i = {};
i["name"] = "iron-plate";
i["amount"] = 1;
ings.push(i);
i = {};
i["name"] = "iron-gear-wheel";
i["amount"] = 1;
ings.push(i);
doc["ingredients"] = ings;
doc["result"] = "transport-belt";
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["type"] = "recipe";
doc["name"] = "train-stop";
doc["enabled"] = false;
ings = [];
i = {};
i["name"] = "electronic-circuit";
i["amount"] = 5;
ings.push(i);
i = {};
i["name"] = "iron-plate";
i["amount"] = 10;
ings.push(i);
i = {};
i["name"] = "steel-plate";
i["amount"] = 3;
ings.push(i);
doc["ingredients"] = ings;
doc["result"] = "train-stop";
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["type"] = "recipe";
doc["requester_paste_multiplier"] = 4;
doc["name"] = "pipe-to-ground";
doc["result"] = "pipe-to-ground";
ings = [];
i = {};
i["name"] = "pipe";
i["amount"] = 10;
ings.push(i);
i = {};
i["name"] = "iron-plate";
i["amount"] = 5;
ings.push(i);
doc["ingredients"] = ings;
doc["result_count"] = 2;
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["type"] = "recipe";
doc["requester_paste_multiplier"] = 4;
doc["name"] = "small-electric-pole";
doc["result_count"] = 2;
ings = [];
i = {};
i["name"] = "wood";
i["amount"] = 2;
ings.push(i);
i = {};
i["name"] = "copper-cable";
i["amount"] = 2;
ings.push(i);
doc["ingredients"] = ings;
doc["result"] = "small-electric-pole";
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["type"] = "recipe";
doc["result"] = "iron-axe";
ings = [];
i = {};
i["name"] = "iron-stick";
i["amount"] = 2;
ings.push(i);
i = {};
i["name"] = "iron-plate";
i["amount"] = 3;
ings.push(i);
doc["ingredients"] = ings;
doc["name"] = "iron-axe";
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["type"] = "recipe";
doc["energy_required"] = 5;
doc["name"] = "electric-furnace";
doc["enabled"] = false;
ings = [];
i = {};
i["name"] = "steel-plate";
i["amount"] = 15;
ings.push(i);
i = {};
i["name"] = "advanced-circuit";
i["amount"] = 5;
ings.push(i);
i = {};
i["name"] = "stone-brick";
i["amount"] = 10;
ings.push(i);
doc["ingredients"] = ings;
doc["result"] = "electric-furnace";
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["type"] = "recipe";
doc["energy_required"] = 10;
doc["name"] = "discharge-defense-equipment";
doc["enabled"] = false;
ings = [];
i = {};
i["name"] = "processing-unit";
i["amount"] = 5;
ings.push(i);
i = {};
i["name"] = "steel-plate";
i["amount"] = 20;
ings.push(i);
i = {};
i["name"] = "laser-turret";
i["amount"] = 10;
ings.push(i);
doc["ingredients"] = ings;
doc["result"] = "discharge-defense-equipment";
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["type"] = "recipe";
doc["requester_paste_multiplier"] = 4;
doc["name"] = "stack-filter-inserter";
doc["enabled"] = false;
ings = [];
i = {};
i["name"] = "stack-inserter";
i["amount"] = 1;
ings.push(i);
i = {};
i["name"] = "electronic-circuit";
i["amount"] = 5;
ings.push(i);
doc["ingredients"] = ings;
doc["result"] = "stack-filter-inserter";
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["type"] = "recipe";
doc["energy_required"] = 10;
doc["name"] = "battery-mk2-equipment";
doc["enabled"] = false;
ings = [];
i = {};
i["name"] = "battery-equipment";
i["amount"] = 10;
ings.push(i);
i = {};
i["name"] = "processing-unit";
i["amount"] = 20;
ings.push(i);
doc["ingredients"] = ings;
doc["result"] = "battery-mk2-equipment";
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["type"] = "recipe";
doc["energy_required"] = 15;
doc["name"] = "destroyer-capsule";
doc["enabled"] = false;
ings = [];
i = {};
i["name"] = "distractor-capsule";
i["amount"] = 4;
ings.push(i);
i = {};
i["name"] = "speed-module";
i["amount"] = 1;
ings.push(i);
doc["ingredients"] = ings;
doc["result"] = "destroyer-capsule";
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["type"] = "recipe";
doc["result"] = "boiler";
ings = [];
i = {};
i["name"] = "stone-furnace";
i["amount"] = 1;
ings.push(i);
i = {};
i["name"] = "pipe";
i["amount"] = 1;
ings.push(i);
doc["ingredients"] = ings;
doc["name"] = "boiler";
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["type"] = "recipe";
doc["energy_required"] = 1;
doc["requester_paste_multiplier"] = 4;
doc["result"] = "underground-belt";
doc["name"] = "underground-belt";
doc["enabled"] = false;
ings = [];
i = {};
i["name"] = "iron-plate";
i["amount"] = 10;
ings.push(i);
i = {};
i["name"] = "transport-belt";
i["amount"] = 5;
ings.push(i);
doc["ingredients"] = ings;
doc["result_count"] = 2;
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["type"] = "recipe";
doc["requester_paste_multiplier"] = 10;
doc["name"] = "red-wire";
doc["enabled"] = false;
ings = [];
i = {};
i["name"] = "electronic-circuit";
i["amount"] = 1;
ings.push(i);
i = {};
i["name"] = "copper-cable";
i["amount"] = 1;
ings.push(i);
doc["ingredients"] = ings;
doc["result"] = "red-wire";
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["type"] = "recipe";
doc["energy_required"] = 8;
doc["name"] = "cluster-grenade";
doc["enabled"] = false;
ings = [];
i = {};
i["name"] = "grenade";
i["amount"] = 7;
ings.push(i);
i = {};
i["name"] = "explosives";
i["amount"] = 5;
ings.push(i);
i = {};
i["name"] = "steel-plate";
i["amount"] = 5;
ings.push(i);
doc["ingredients"] = ings;
doc["result"] = "cluster-grenade";
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["type"] = "recipe";
doc["energy_required"] = 12;
doc["result_count"] = 10;
doc["name"] = "alien-science-pack";
doc["enabled"] = false;
ings = [];
i = {};
i["name"] = "alien-artifact";
i["amount"] = 1;
ings.push(i);
doc["ingredients"] = ings;
doc["result"] = "alien-science-pack";
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["type"] = "recipe";
doc["energy_required"] = 0.5;
doc["name"] = "electric-energy-interface";
doc["enabled"] = false;
ings = [];
i = {};
i["name"] = "iron-plate";
i["amount"] = 2;
ings.push(i);
i = {};
i["name"] = "electronic-circuit";
i["amount"] = 5;
ings.push(i);
doc["ingredients"] = ings;
doc["result"] = "electric-energy-interface";
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["type"] = "recipe";
doc["energy_required"] = 1;
doc["subgroup"] = "fluid-recipes";
res = [];
i = {};
i["amount"] = "fluid";
i["amount"] = 5;
i["amount"] = "sulfuric-acid";
res.push(i);
doc["results"] = res;
doc["name"] = "sulfuric-acid";
doc["enabled"] = false;
ings = [];
i = {};
i["type"] = "item";
i["amount"] = 5;
i["name"] = "sulfur";
ings.push(i);
i = {};
i["type"] = "item";
i["amount"] = 1;
i["name"] = "iron-plate";
ings.push(i);
i = {};
i["type"] = "fluid";
i["amount"] = 10;
i["name"] = "water";
ings.push(i);
doc["ingredients"] = ings;
doc["category"] = "chemistry";
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["type"] = "recipe";
doc["energy_required"] = 5;
doc["enabled"] = false;
ings = [];
i = {};
i["type"] = "fluid";
i["amount"] = 5;
i["name"] = "water";
ings.push(i);
i = {};
i["type"] = "fluid";
i["amount"] = 10;
i["name"] = "crude-oil";
ings.push(i);
doc["ingredients"] = ings;
doc["category"] = "oil-processing";
doc["subgroup"] = "fluid-recipes";
doc["name"] = "advanced-oil-processing";
doc["icon"] = "__base__/graphics/icons/fluid/advanced-oil-processing.png";
doc["order"] = "a[oil-processing]-b[advanced-oil-processing]";
res = [];
i = {};
i["amount"] = "fluid";
i["amount"] = 1;
i["amount"] = "heavy-oil";
res.push(i);
i = {};
i["amount"] = "fluid";
i["amount"] = 4.5;
i["amount"] = "light-oil";
res.push(i);
i = {};
i["amount"] = "fluid";
i["amount"] = 5.5;
i["amount"] = "petroleum-gas";
res.push(i);
doc["results"] = res;
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["type"] = "recipe";
doc["energy_required"] = 3.5;
doc["name"] = "iron-plate";
doc["result"] = "iron-plate";
ings = [];
i = {};
i["name"] = "iron-ore";
i["amount"] = 1;
ings.push(i);
doc["ingredients"] = ings;
doc["category"] = "smelting";
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["type"] = "recipe";
doc["result"] = "offshore-pump";
ings = [];
i = {};
i["name"] = "electronic-circuit";
i["amount"] = 2;
ings.push(i);
i = {};
i["name"] = "pipe";
i["amount"] = 1;
ings.push(i);
i = {};
i["name"] = "iron-gear-wheel";
i["amount"] = 1;
ings.push(i);
doc["ingredients"] = ings;
doc["name"] = "offshore-pump";
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["type"] = "recipe";
doc["energy_required"] = 10;
doc["name"] = "personal-laser-defense-equipment";
doc["enabled"] = false;
ings = [];
i = {};
i["name"] = "processing-unit";
i["amount"] = 1;
ings.push(i);
i = {};
i["name"] = "steel-plate";
i["amount"] = 5;
ings.push(i);
i = {};
i["name"] = "laser-turret";
i["amount"] = 5;
ings.push(i);
doc["ingredients"] = ings;
doc["result"] = "personal-laser-defense-equipment";
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["type"] = "recipe";
doc["energy_required"] = 5;
doc["name"] = "rocket-launcher";
doc["enabled"] = false;
ings = [];
i = {};
i["name"] = "iron-plate";
i["amount"] = 5;
ings.push(i);
i = {};
i["name"] = "iron-gear-wheel";
i["amount"] = 5;
ings.push(i);
i = {};
i["name"] = "electronic-circuit";
i["amount"] = 5;
ings.push(i);
doc["ingredients"] = ings;
doc["result"] = "rocket-launcher";
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["type"] = "recipe";
doc["energy_required"] = 0.25;
doc["result_count"] = 10;
doc["result"] = "hazard-concrete";
doc["name"] = "hazard-concrete";
doc["enabled"] = false;
ings = [];
i = {};
i["name"] = "concrete";
i["amount"] = 10;
ings.push(i);
doc["ingredients"] = ings;
doc["category"] = "crafting";
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["type"] = "recipe";
doc["name"] = "pipe";
doc["requester_paste_multiplier"] = 4;
ings = [];
i = {};
i["name"] = "iron-plate";
i["amount"] = 1;
ings.push(i);
doc["ingredients"] = ings;
doc["result"] = "pipe";
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["type"] = "recipe";
doc["energy_required"] = 17.5;
doc["result"] = "steel-plate";
doc["name"] = "steel-plate";
doc["enabled"] = false;
ings = [];
i = {};
i["name"] = "iron-plate";
i["amount"] = 5;
ings.push(i);
doc["ingredients"] = ings;
doc["category"] = "smelting";
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["type"] = "recipe";
doc["energy_required"] = 8;
doc["name"] = "piercing-shotgun-shell";
doc["enabled"] = false;
ings = [];
i = {};
i["name"] = "copper-plate";
i["amount"] = 2;
ings.push(i);
i = {};
i["name"] = "steel-plate";
i["amount"] = 2;
ings.push(i);
doc["ingredients"] = ings;
doc["result"] = "piercing-shotgun-shell";
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["type"] = "recipe";
doc["energy_required"] = 10;
doc["name"] = "energy-shield-mk2-equipment";
doc["enabled"] = false;
ings = [];
i = {};
i["name"] = "energy-shield-equipment";
i["amount"] = 10;
ings.push(i);
i = {};
i["name"] = "processing-unit";
i["amount"] = 10;
ings.push(i);
doc["ingredients"] = ings;
doc["result"] = "energy-shield-mk2-equipment";
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["type"] = "recipe";
doc["name"] = "player-port";
doc["enabled"] = false;
ings = [];
i = {};
i["name"] = "electronic-circuit";
i["amount"] = 10;
ings.push(i);
i = {};
i["name"] = "iron-gear-wheel";
i["amount"] = 5;
ings.push(i);
i = {};
i["name"] = "iron-plate";
i["amount"] = 1;
ings.push(i);
doc["ingredients"] = ings;
doc["result"] = "player-port";
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["type"] = "recipe";
doc["name"] = "diesel-locomotive";
doc["enabled"] = false;
ings = [];
i = {};
i["name"] = "engine-unit";
i["amount"] = 20;
ings.push(i);
i = {};
i["name"] = "electronic-circuit";
i["amount"] = 10;
ings.push(i);
i = {};
i["name"] = "steel-plate";
i["amount"] = 30;
ings.push(i);
doc["ingredients"] = ings;
doc["result"] = "diesel-locomotive";
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["type"] = "recipe";
doc["requester_paste_multiplier"] = 4;
doc["name"] = "fast-transport-belt";
doc["enabled"] = false;
ings = [];
i = {};
i["name"] = "iron-gear-wheel";
i["amount"] = 5;
ings.push(i);
i = {};
i["name"] = "transport-belt";
i["amount"] = 1;
ings.push(i);
doc["ingredients"] = ings;
doc["result"] = "fast-transport-belt";
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["type"] = "recipe";
doc["energy_required"] = 30;
doc["name"] = "speed-module-2";
doc["enabled"] = false;
ings = [];
i = {};
i["name"] = "speed-module";
i["amount"] = 4;
ings.push(i);
i = {};
i["name"] = "processing-unit";
i["amount"] = 5;
ings.push(i);
i = {};
i["name"] = "advanced-circuit";
i["amount"] = 5;
ings.push(i);
doc["ingredients"] = ings;
doc["result"] = "speed-module-2";
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["type"] = "recipe";
doc["energy_required"] = 60;
doc["name"] = "speed-module-3";
doc["enabled"] = false;
ings = [];
i = {};
i["name"] = "speed-module-2";
i["amount"] = 4;
ings.push(i);
i = {};
i["name"] = "advanced-circuit";
i["amount"] = 5;
ings.push(i);
i = {};
i["name"] = "processing-unit";
i["amount"] = 5;
ings.push(i);
i = {};
i["name"] = "alien-artifact";
i["amount"] = 1;
ings.push(i);
doc["ingredients"] = ings;
doc["result"] = "speed-module-3";
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["type"] = "recipe";
doc["energy_required"] = 2;
doc["name"] = "burner-mining-drill";
ings = [];
i = {};
i["name"] = "iron-gear-wheel";
i["amount"] = 3;
ings.push(i);
i = {};
i["name"] = "stone-furnace";
i["amount"] = 1;
ings.push(i);
i = {};
i["name"] = "iron-plate";
i["amount"] = 3;
ings.push(i);
doc["ingredients"] = ings;
doc["result"] = "burner-mining-drill";
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["type"] = "recipe";
doc["energy_required"] = 1;
doc["name"] = "pistol";
ings = [];
i = {};
i["name"] = "copper-plate";
i["amount"] = 5;
ings.push(i);
i = {};
i["name"] = "iron-plate";
i["amount"] = 5;
ings.push(i);
doc["ingredients"] = ings;
doc["result"] = "pistol";
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["type"] = "recipe";
doc["name"] = "gate";
doc["enabled"] = false;
ings = [];
i = {};
i["name"] = "stone-wall";
i["amount"] = 1;
ings.push(i);
i = {};
i["name"] = "steel-plate";
i["amount"] = 2;
ings.push(i);
i = {};
i["name"] = "electronic-circuit";
i["amount"] = 2;
ings.push(i);
doc["ingredients"] = ings;
doc["result"] = "gate";
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["type"] = "recipe";
doc["requester_paste_multiplier"] = 4;
doc["result_count"] = 2;
doc["name"] = "rail";
doc["enabled"] = false;
ings = [];
i = {};
i["name"] = "stone";
i["amount"] = 1;
ings.push(i);
i = {};
i["name"] = "iron-stick";
i["amount"] = 1;
ings.push(i);
i = {};
i["name"] = "steel-plate";
i["amount"] = 1;
ings.push(i);
doc["ingredients"] = ings;
doc["result"] = "rail";
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["type"] = "recipe";
doc["name"] = "radar";
doc["requester_paste_multiplier"] = 4;
ings = [];
i = {};
i["name"] = "electronic-circuit";
i["amount"] = 5;
ings.push(i);
i = {};
i["name"] = "iron-gear-wheel";
i["amount"] = 5;
ings.push(i);
i = {};
i["name"] = "iron-plate";
i["amount"] = 10;
ings.push(i);
doc["ingredients"] = ings;
doc["result"] = "radar";
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["type"] = "recipe";
doc["requester_paste_multiplier"] = 4;
doc["name"] = "fast-inserter";
doc["enabled"] = false;
ings = [];
i = {};
i["name"] = "electronic-circuit";
i["amount"] = 2;
ings.push(i);
i = {};
i["name"] = "iron-plate";
i["amount"] = 2;
ings.push(i);
i = {};
i["name"] = "inserter";
i["amount"] = 1;
ings.push(i);
doc["ingredients"] = ings;
doc["result"] = "fast-inserter";
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["type"] = "recipe";
doc["name"] = "electronic-circuit";
doc["requester_paste_multiplier"] = 10;
ings = [];
i = {};
i["name"] = "iron-plate";
i["amount"] = 1;
ings.push(i);
i = {};
i["name"] = "copper-cable";
i["amount"] = 3;
ings.push(i);
doc["ingredients"] = ings;
doc["result"] = "electronic-circuit";
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["type"] = "recipe";
doc["energy_required"] = 3;
doc["result"] = "flame-thrower-ammo";
doc["name"] = "flame-thrower-ammo";
doc["enabled"] = false;
ings = [];
i = {};
i["type"] = "item";
i["amount"] = 5;
i["name"] = "iron-plate";
ings.push(i);
i = {};
i["type"] = "fluid";
i["amount"] = 2.5;
i["name"] = "light-oil";
ings.push(i);
i = {};
i["type"] = "fluid";
i["amount"] = 2.5;
i["name"] = "heavy-oil";
ings.push(i);
doc["ingredients"] = ings;
doc["category"] = "chemistry";
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["type"] = "recipe";
doc["energy_required"] = 3;
doc["name"] = "submachine-gun";
doc["enabled"] = false;
ings = [];
i = {};
i["name"] = "iron-gear-wheel";
i["amount"] = 10;
ings.push(i);
i = {};
i["name"] = "copper-plate";
i["amount"] = 5;
ings.push(i);
i = {};
i["name"] = "iron-plate";
i["amount"] = 10;
ings.push(i);
doc["ingredients"] = ings;
doc["result"] = "submachine-gun";
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["type"] = "recipe";
doc["energy_required"] = 8;
doc["name"] = "explosive-cannon-shell";
doc["enabled"] = false;
ings = [];
i = {};
i["name"] = "steel-plate";
i["amount"] = 4;
ings.push(i);
i = {};
i["name"] = "plastic-bar";
i["amount"] = 2;
ings.push(i);
i = {};
i["name"] = "explosives";
i["amount"] = 4;
ings.push(i);
doc["ingredients"] = ings;
doc["result"] = "explosive-cannon-shell";
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["type"] = "recipe";
doc["energy_required"] = 1;
doc["enabled"] = false;
ings = [];
i = {};
i["type"] = "item";
i["amount"] = 1;
i["name"] = "crude-oil-barrel";
ings.push(i);
doc["ingredients"] = ings;
doc["category"] = "crafting-with-fluid";
res = [];
i = {};
i["amount"] = "fluid";
i["amount"] = 25;
i["amount"] = "crude-oil";
res.push(i);
i = {};
i["amount"] = "item";
i["amount"] = 1;
i["amount"] = "empty-barrel";
res.push(i);
doc["results"] = res;
doc["name"] = "empty-crude-oil-barrel";
doc["subgroup"] = "barrel";
doc["order"] = "c[empty-crude-oil-barrel]";
doc["icon"] = "__base__/graphics/icons/fluid/empty-crude-oil-barrel.png";
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["type"] = "recipe";
doc["energy_required"] = 30;
doc["name"] = "productivity-module-2";
doc["enabled"] = false;
ings = [];
i = {};
i["name"] = "productivity-module";
i["amount"] = 4;
ings.push(i);
i = {};
i["name"] = "advanced-circuit";
i["amount"] = 5;
ings.push(i);
i = {};
i["name"] = "processing-unit";
i["amount"] = 5;
ings.push(i);
doc["ingredients"] = ings;
doc["result"] = "productivity-module-2";
db.recipe.insert(doc);

doc = {};
doc["energy_required"] = 0.5;
doc["result_count"] = 1;
doc["type"] = "recipe";
doc["energy_required"] = 8;
doc["name"] = "railgun-dart";
doc["enabled"] = false;
ings = [];
i = {};
i["name"] = "steel-plate";
i["amount"] = 5;
ings.push(i);
i = {};
i["name"] = "electronic-circuit";
i["amount"] = 5;
ings.push(i);
doc["ingredients"] = ings;
doc["result"] = "railgun-dart";
db.recipe.insert(doc);

doc = {};
doc["type"] = "mining-tool";
flags = [];
flags.push("goes-to-main-inventory")
doc["flags"] = flags;
doc["speed"] = 4;
action = [];
action.push("direct")
action.push("table: 00000000006ba0b0")
doc["action"] = action;
doc["durability"] = 5000;
doc["stack_size"] = 20;
doc["name"] = "steel-axe";
doc["icon"] = "__base__/graphics/icons/steel-axe.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Steel-axe.png";
doc["order"] = "a[mining]-b[steel-axe]";
doc["subgroup"] = "tool";
db.item.insert(doc);

doc = {};
doc["type"] = "mining-tool";
flags = [];
flags.push("goes-to-main-inventory")
doc["flags"] = flags;
doc["speed"] = 2.5;
action = [];
action.push("direct")
action.push("table: 0000000000697c50")
doc["action"] = action;
doc["durability"] = 4000;
doc["stack_size"] = 20;
doc["name"] = "iron-axe";
doc["icon"] = "__base__/graphics/icons/iron-axe.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Iron-axe.png";
doc["order"] = "a[mining]-a[iron-axe]";
doc["subgroup"] = "tool";
db.item.insert(doc);

doc = {};
doc["type"] = "gun";
flags = [];
flags.push("goes-to-main-inventory")
flags.push("hidden")
doc["flags"] = flags;
doc["stack_size"] = 5;
attack_parameters = [];
attack_parameters.push("projectile")
attack_parameters.push("table: 0000000000699910")
attack_parameters.push(20)
attack_parameters.push(180)
attack_parameters.push(0.6)
attack_parameters.push(0.6)
attack_parameters.push("railgun")
doc["attack_parameters"] = attack_parameters;
doc["name"] = "railgun";
doc["icon"] = "__base__/graphics/icons/railgun.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Railgun.png";
doc["order"] = "c[railgun]";
doc["subgroup"] = "gun";
db.item.insert(doc);

doc = {};
doc["type"] = "gun";
flags = [];
flags.push("goes-to-main-inventory")
doc["flags"] = flags;
doc["stack_size"] = 5;
attack_parameters = [];
attack_parameters.push("projectile")
attack_parameters.push("table: 0000000000699690")
attack_parameters.push(20)
attack_parameters.push(1.2)
attack_parameters.push(30)
attack_parameters.push(0.5)
attack_parameters.push(1.125)
attack_parameters.push("shotgun-shell")
doc["attack_parameters"] = attack_parameters;
doc["name"] = "combat-shotgun";
doc["icon"] = "__base__/graphics/icons/combat-shotgun.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Combat-shotgun.png";
doc["order"] = "b[shotgun]-a[combat]";
doc["subgroup"] = "gun";
db.item.insert(doc);

doc = {};
doc["type"] = "gun";
flags = [];
flags.push("goes-to-main-inventory")
doc["flags"] = flags;
doc["stack_size"] = 5;
attack_parameters = [];
attack_parameters.push("projectile")
attack_parameters.push("table: 0000000000680770")
attack_parameters.push(15)
attack_parameters.push("table: 000000000067fe70")
attack_parameters.push(10)
attack_parameters.push(0.7)
attack_parameters.push(1.125)
attack_parameters.push("bullet")
doc["attack_parameters"] = attack_parameters;
doc["name"] = "pistol";
doc["icon"] = "__base__/graphics/icons/pistol.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Pistol.png";
doc["order"] = "a[basic-clips]-a[pistol]";
doc["subgroup"] = "gun";
db.item.insert(doc);

doc = {};
doc["type"] = "gun";
flags = [];
flags.push("goes-to-main-inventory")
doc["flags"] = flags;
doc["stack_size"] = 5;
attack_parameters = [];
attack_parameters.push("projectile")
attack_parameters.push("table: 0000000000699290")
attack_parameters.push("table: 0000000000699a90")
attack_parameters.push(22)
attack_parameters.push(60)
attack_parameters.push(0.8)
attack_parameters.push(0.6)
attack_parameters.push("rocket")
doc["attack_parameters"] = attack_parameters;
doc["name"] = "rocket-launcher";
doc["icon"] = "__base__/graphics/icons/rocket-launcher.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Rocket-launcher.png";
doc["order"] = "d[rocket-launcher]";
doc["subgroup"] = "gun";
db.item.insert(doc);

doc = {};
doc["type"] = "gun";
flags = [];
flags.push("goes-to-main-inventory")
flags.push("hidden")
doc["flags"] = flags;
doc["stack_size"] = 5;
attack_parameters = [];
attack_parameters.push("projectile")
attack_parameters.push("table: 0000000000699310")
attack_parameters.push(25)
attack_parameters.push("table: 0000000000698f90")
attack_parameters.push(90)
attack_parameters.push(0)
attack_parameters.push(1.6)
attack_parameters.push("cannon-shell")
doc["attack_parameters"] = attack_parameters;
doc["name"] = "tank-cannon";
doc["icon"] = "__base__/graphics/icons/tank-cannon.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Tank-cannon.png";
doc["order"] = "z[tank]-a[cannon]";
doc["subgroup"] = "gun";
db.item.insert(doc);

doc = {};
doc["type"] = "gun";
flags = [];
flags.push("goes-to-main-inventory")
doc["flags"] = flags;
doc["stack_size"] = 1;
attack_parameters = [];
attack_parameters.push("projectile")
attack_parameters.push("table: 000000000067ffb0")
attack_parameters.push(15)
attack_parameters.push("table: 00000000006808b0")
attack_parameters.push(4)
attack_parameters.push(0.7)
attack_parameters.push(1.125)
attack_parameters.push("bullet")
doc["attack_parameters"] = attack_parameters;
doc["name"] = "submachine-gun";
doc["icon"] = "__base__/graphics/icons/submachine-gun.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Submachine-gun.png";
doc["order"] = "a[basic-clips]-b[submachine-gun]";
doc["subgroup"] = "gun";
db.item.insert(doc);

doc = {};
doc["type"] = "gun";
flags = [];
flags.push("goes-to-main-inventory")
flags.push("hidden")
doc["flags"] = flags;
doc["stack_size"] = 1;
attack_parameters = [];
attack_parameters.push("projectile")
attack_parameters.push(4)
attack_parameters.push(0.7)
attack_parameters.push("bullet")
attack_parameters.push("table: 0000000000699250")
attack_parameters.push(20)
attack_parameters.push("table: 00000000006997d0")
attack_parameters.push(1)
attack_parameters.push("table: 0000000000699650")
doc["attack_parameters"] = attack_parameters;
doc["name"] = "tank-machine-gun";
doc["icon"] = "__base__/graphics/icons/submachine-gun.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Submachine-gun.png";
doc["order"] = "a[basic-clips]-b[tank-machine-gun]";
doc["subgroup"] = "gun";
db.item.insert(doc);

doc = {};
doc["type"] = "gun";
flags = [];
flags.push("goes-to-main-inventory")
flags.push("hidden")
doc["flags"] = flags;
doc["stack_size"] = 1;
attack_parameters = [];
attack_parameters.push("projectile")
attack_parameters.push("table: 0000000000698a50")
attack_parameters.push(20)
attack_parameters.push("table: 0000000000698390")
attack_parameters.push(4)
attack_parameters.push(0.7)
attack_parameters.push(0.65)
attack_parameters.push("bullet")
doc["attack_parameters"] = attack_parameters;
doc["name"] = "vehicle-machine-gun";
doc["icon"] = "__base__/graphics/icons/submachine-gun.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Submachine-gun.png";
doc["order"] = "a[basic-clips]-b[vehicle-machine-gun]";
doc["subgroup"] = "gun";
db.item.insert(doc);

doc = {};
doc["type"] = "gun";
flags = [];
flags.push("goes-to-main-inventory")
doc["flags"] = flags;
doc["stack_size"] = 5;
attack_parameters = [];
attack_parameters.push("stream")
attack_parameters.push(1)
attack_parameters.push(1)
attack_parameters.push(0.6)
attack_parameters.push(0.8)
attack_parameters.push("flame-thrower")
attack_parameters.push("table: 00000000006984d0")
attack_parameters.push(15)
attack_parameters.push(0.6)
attack_parameters.push("table: 0000000000698490")
doc["attack_parameters"] = attack_parameters;
doc["name"] = "flame-thrower";
doc["icon"] = "__base__/graphics/icons/flame-thrower.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Flame-thrower.png";
doc["order"] = "e[flame-thrower]";
doc["subgroup"] = "gun";
db.item.insert(doc);

doc = {};
doc["type"] = "gun";
flags = [];
flags.push("goes-to-main-inventory")
doc["flags"] = flags;
doc["stack_size"] = 5;
attack_parameters = [];
attack_parameters.push("projectile")
attack_parameters.push("table: 0000000000699990")
attack_parameters.push(20)
attack_parameters.push(60)
attack_parameters.push(0.6)
attack_parameters.push(1.125)
attack_parameters.push("shotgun-shell")
doc["attack_parameters"] = attack_parameters;
doc["name"] = "shotgun";
doc["icon"] = "__base__/graphics/icons/shotgun.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Shotgun.png";
doc["order"] = "b[shotgun]-a[basic]";
doc["subgroup"] = "gun";
db.item.insert(doc);

doc = {};
doc["type"] = "tool";
flags = [];
flags.push("goes-to-main-inventory")
doc["flags"] = flags;
doc["durability_description_key"] = "description.science-pack-remaining-amount";
doc["durability"] = 1;
doc["stack_size"] = 200;
doc["name"] = "alien-science-pack";
doc["icon"] = "__base__/graphics/icons/alien-science-pack.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Alien-science-pack.png";
doc["order"] = "d[alien-science-pack]";
doc["subgroup"] = "science-pack";
db.item.insert(doc);

doc = {};
doc["type"] = "tool";
flags = [];
flags.push("goes-to-main-inventory")
doc["flags"] = flags;
doc["durability_description_key"] = "description.science-pack-remaining-amount";
doc["durability"] = 1;
doc["stack_size"] = 200;
doc["name"] = "science-pack-2";
doc["icon"] = "__base__/graphics/icons/science-pack-2.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Science-pack-2.png";
doc["order"] = "a[science-pack-2]";
doc["subgroup"] = "science-pack";
db.item.insert(doc);

doc = {};
doc["type"] = "tool";
flags = [];
flags.push("goes-to-main-inventory")
doc["flags"] = flags;
doc["durability_description_key"] = "description.science-pack-remaining-amount";
doc["durability"] = 1;
doc["stack_size"] = 200;
doc["name"] = "science-pack-1";
doc["icon"] = "__base__/graphics/icons/science-pack-1.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Science-pack-1.png";
doc["order"] = "a[science-pack-1]";
doc["subgroup"] = "science-pack";
db.item.insert(doc);

doc = {};
doc["type"] = "tool";
flags = [];
flags.push("goes-to-main-inventory")
doc["flags"] = flags;
doc["durability_description_key"] = "description.science-pack-remaining-amount";
doc["durability"] = 1;
doc["stack_size"] = 200;
doc["name"] = "science-pack-3";
doc["icon"] = "__base__/graphics/icons/science-pack-3.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Science-pack-3.png";
doc["order"] = "a[science-pack-3]";
doc["subgroup"] = "science-pack";
db.item.insert(doc);

doc = {};
doc["type"] = "capsule";
flags = [];
flags.push("goes-to-quickbar")
doc["flags"] = flags;
doc["stack_size"] = 100;
doc["subgroup"] = "capsule";
doc["name"] = "cluster-grenade";
doc["icon"] = "__base__/graphics/icons/cluster-grenade.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Cluster-grenade.png";
doc["order"] = "a[grenade]-b[cluster]";
capsule_action = [];
capsule_action.push("throw")
capsule_action.push("table: 00000000006837b0")
doc["capsule_action"] = capsule_action;
db.item.insert(doc);

doc = {};
doc["type"] = "capsule";
flags = [];
flags.push("goes-to-quickbar")
doc["flags"] = flags;
doc["stack_size"] = 100;
doc["subgroup"] = "capsule";
doc["name"] = "poison-capsule";
doc["icon"] = "__base__/graphics/icons/poison-capsule.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Poison-capsule.png";
doc["order"] = "b[poison-capsule]";
capsule_action = [];
capsule_action.push("throw")
capsule_action.push("table: 00000000006835b0")
doc["capsule_action"] = capsule_action;
db.item.insert(doc);

doc = {};
doc["type"] = "capsule";
flags = [];
flags.push("goes-to-quickbar")
doc["flags"] = flags;
doc["stack_size"] = 100;
doc["subgroup"] = "raw-resource";
doc["name"] = "raw-fish";
doc["icon"] = "__base__/graphics/icons/fish.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Fish.png";
doc["order"] = "f-e-a";
capsule_action = [];
capsule_action.push("use-on-self")
capsule_action.push("table: 00000000006822b0")
doc["capsule_action"] = capsule_action;
db.item.insert(doc);

doc = {};
doc["type"] = "capsule";
flags = [];
flags.push("goes-to-quickbar")
doc["flags"] = flags;
doc["stack_size"] = 1;
doc["subgroup"] = "capsule";
doc["name"] = "discharge-defense-remote";
doc["icon"] = "__base__/graphics/equipment/discharge-defense-equipment-ability.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Discharge-defense-equipment-ability.png";
doc["order"] = "z";
capsule_action = [];
capsule_action.push("equipment-remote")
capsule_action.push("discharge-defense-equipment")
doc["capsule_action"] = capsule_action;
db.item.insert(doc);

doc = {};
doc["type"] = "capsule";
flags = [];
flags.push("goes-to-quickbar")
doc["flags"] = flags;
doc["stack_size"] = 100;
doc["subgroup"] = "capsule";
doc["name"] = "slowdown-capsule";
doc["icon"] = "__base__/graphics/icons/slowdown-capsule.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Slowdown-capsule.png";
doc["order"] = "c[slowdown-capsule]";
capsule_action = [];
capsule_action.push("throw")
capsule_action.push("table: 0000000000683670")
doc["capsule_action"] = capsule_action;
db.item.insert(doc);

doc = {};
doc["type"] = "capsule";
flags = [];
flags.push("goes-to-quickbar")
doc["flags"] = flags;
doc["stack_size"] = 100;
doc["subgroup"] = "capsule";
doc["name"] = "grenade";
doc["icon"] = "__base__/graphics/icons/grenade.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Grenade.png";
doc["order"] = "a[grenade]-a[normal]";
capsule_action = [];
capsule_action.push("throw")
capsule_action.push("table: 0000000000683070")
doc["capsule_action"] = capsule_action;
db.item.insert(doc);

doc = {};
doc["type"] = "capsule";
flags = [];
flags.push("goes-to-quickbar")
doc["flags"] = flags;
doc["stack_size"] = 100;
doc["subgroup"] = "capsule";
doc["name"] = "destroyer-capsule";
doc["icon"] = "__base__/graphics/icons/destroyer-capsule.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Destroyer-capsule.png";
doc["order"] = "f[destroyer-capsule]";
capsule_action = [];
capsule_action.push("throw")
capsule_action.push("table: 0000000000683370")
doc["capsule_action"] = capsule_action;
db.item.insert(doc);

doc = {};
doc["type"] = "capsule";
flags = [];
flags.push("goes-to-quickbar")
doc["flags"] = flags;
doc["stack_size"] = 100;
doc["subgroup"] = "capsule";
doc["name"] = "defender-capsule";
doc["icon"] = "__base__/graphics/icons/defender-capsule.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Defender-capsule.png";
doc["order"] = "d[defender-capsule]";
capsule_action = [];
capsule_action.push("throw")
capsule_action.push("table: 0000000000682eb0")
doc["capsule_action"] = capsule_action;
db.item.insert(doc);

doc = {};
doc["type"] = "capsule";
flags = [];
flags.push("goes-to-quickbar")
doc["flags"] = flags;
doc["stack_size"] = 100;
doc["subgroup"] = "capsule";
doc["name"] = "distractor-capsule";
doc["icon"] = "__base__/graphics/icons/distractor-capsule.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Distractor-capsule.png";
doc["order"] = "e[defender-capsule]";
capsule_action = [];
capsule_action.push("throw")
capsule_action.push("table: 0000000000682ff0")
doc["capsule_action"] = capsule_action;
db.item.insert(doc);

doc = {};
doc["type"] = "blueprint";
flags = [];
flags.push("goes-to-quickbar")
doc["flags"] = flags;
doc["alt_selection_cursor_box_type"] = "copy";
selection_color = [];
selection_color.push(0)
selection_color.push(1)
selection_color.push(0)
doc["selection_color"] = selection_color;
doc["subgroup"] = "tool";
doc["draw_label_for_cursor_render"] = true;
alt_selection_mode = [];
alt_selection_mode.push("blueprint")
doc["alt_selection_mode"] = alt_selection_mode;
selection_mode = [];
selection_mode.push("blueprint")
doc["selection_mode"] = selection_mode;
doc["selection_cursor_box_type"] = "copy";
doc["item_to_clear"] = "electronic-circuit";
alt_selection_color = [];
alt_selection_color.push(0)
alt_selection_color.push(1)
alt_selection_color.push(0)
doc["alt_selection_color"] = alt_selection_color;
doc["stack_size"] = 1;
doc["name"] = "blueprint";
doc["icon"] = "__base__/graphics/icons/blueprint.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Blueprint.png";
doc["order"] = "c[automated-construction]-a[blueprint]";
doc["stackable"] = false;
db.item.insert(doc);

doc = {};
doc["type"] = "repair-tool";
flags = [];
flags.push("goes-to-quickbar")
doc["flags"] = flags;
doc["speed"] = 1;
doc["durability"] = 200;
doc["stack_size"] = 100;
doc["name"] = "repair-pack";
doc["icon"] = "__base__/graphics/icons/repair-pack.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Repair-pack.png";
doc["order"] = "b[repair]-a[repair-pack]";
doc["subgroup"] = "tool";
db.item.insert(doc);

doc = {};
doc["type"] = "ammo";
flags = [];
flags.push("goes-to-main-inventory")
doc["flags"] = flags;
doc["stack_size"] = 100;
doc["subgroup"] = "ammo";
doc["name"] = "rocket";
doc["icon"] = "__base__/graphics/icons/rocket.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Rocket.png";
doc["order"] = "d[rocket-launcher]-a[basic]";
ammo_type = [];
ammo_type.push("table: 0000000000678f80")
ammo_type.push("rocket")
doc["ammo_type"] = ammo_type;
db.item.insert(doc);

doc = {};
doc["type"] = "ammo";
flags = [];
flags.push("goes-to-main-inventory")
doc["flags"] = flags;
ammo_type = [];
ammo_type.push("table: 0000000000679200")
ammo_type.push("bullet")
doc["ammo_type"] = ammo_type;
doc["stack_size"] = 100;
doc["order"] = "a[basic-clips]-b[piercing-rounds-magazine]";
doc["name"] = "piercing-rounds-magazine";
doc["icon"] = "__base__/graphics/icons/piercing-rounds-magazine.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Piercing-rounds-magazine.png";
doc["magazine_size"] = 10;
doc["subgroup"] = "ammo";
db.item.insert(doc);

doc = {};
doc["type"] = "ammo";
flags = [];
flags.push("goes-to-main-inventory")
doc["flags"] = flags;
doc["stack_size"] = 100;
doc["subgroup"] = "ammo";
doc["name"] = "explosive-rocket";
doc["icon"] = "__base__/graphics/icons/explosive-rocket.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Explosive-rocket.png";
doc["order"] = "d[rocket-launcher]-b[explosive]";
ammo_type = [];
ammo_type.push("table: 00000000006764c0")
ammo_type.push("rocket")
doc["ammo_type"] = ammo_type;
db.item.insert(doc);

doc = {};
doc["type"] = "ammo";
flags = [];
flags.push("goes-to-main-inventory")
flags.push("hidden")
doc["flags"] = flags;
ammo_type = [];
ammo_type.push("direction")
ammo_type.push("table: 00000000006766c0")
ammo_type.push("railgun")
doc["ammo_type"] = ammo_type;
doc["stack_size"] = 100;
doc["order"] = "c[railgun]";
doc["name"] = "railgun-dart";
doc["icon"] = "__base__/graphics/icons/railgun-ammo.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Railgun-ammo.png";
doc["magazine_size"] = 4;
doc["subgroup"] = "ammo";
db.item.insert(doc);

doc = {};
doc["type"] = "ammo";
flags = [];
flags.push("goes-to-main-inventory")
doc["flags"] = flags;
doc["stack_size"] = 100;
doc["subgroup"] = "ammo";
doc["name"] = "explosive-cannon-shell";
doc["icon"] = "__base__/graphics/icons/explosive-cannon-shell.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Explosive-cannon-shell.png";
doc["order"] = "d[cannon-shell]-b[explosive]";
ammo_type = [];
ammo_type.push("direction")
ammo_type.push("table: 0000000000676100")
ammo_type.push("cannon-shell")
doc["ammo_type"] = ammo_type;
db.item.insert(doc);

doc = {};
doc["type"] = "ammo";
flags = [];
flags.push("goes-to-main-inventory")
doc["flags"] = flags;
ammo_type = [];
ammo_type.push("position")
ammo_type.push("table: 0000000000679380")
ammo_type.push(true)
ammo_type.push("flame-thrower")
doc["ammo_type"] = ammo_type;
doc["stack_size"] = 50;
doc["order"] = "e[flame-thrower]";
doc["name"] = "flame-thrower-ammo";
doc["icon"] = "__base__/graphics/icons/flame-thrower-ammo.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Flame-thrower-ammo.png";
doc["magazine_size"] = 100;
doc["subgroup"] = "ammo";
db.item.insert(doc);

doc = {};
doc["type"] = "ammo";
flags = [];
flags.push("goes-to-main-inventory")
doc["flags"] = flags;
ammo_type = [];
ammo_type.push("table: 00000000006802b0")
ammo_type.push("bullet")
doc["ammo_type"] = ammo_type;
doc["stack_size"] = 100;
doc["order"] = "a[basic-clips]-a[firearm-magazine]";
doc["name"] = "firearm-magazine";
doc["icon"] = "__base__/graphics/icons/firearm-magazine.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Firearm-magazine.png";
doc["magazine_size"] = 10;
doc["subgroup"] = "ammo";
db.item.insert(doc);

doc = {};
doc["type"] = "ammo";
flags = [];
flags.push("goes-to-main-inventory")
doc["flags"] = flags;
ammo_type = [];
ammo_type.push("direction")
ammo_type.push("table: 00000000006762c0")
ammo_type.push("shotgun-shell")
doc["ammo_type"] = ammo_type;
doc["stack_size"] = 100;
doc["order"] = "b[shotgun]-b[piercing]";
doc["name"] = "piercing-shotgun-shell";
doc["icon"] = "__base__/graphics/icons/piercing-shotgun-shell.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Piercing-shotgun-shell.png";
doc["magazine_size"] = 10;
doc["subgroup"] = "ammo";
db.item.insert(doc);

doc = {};
doc["type"] = "ammo";
flags = [];
flags.push("goes-to-main-inventory")
doc["flags"] = flags;
doc["stack_size"] = 100;
doc["subgroup"] = "ammo";
doc["name"] = "cannon-shell";
doc["icon"] = "__base__/graphics/icons/cannon-shell.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Cannon-shell.png";
doc["order"] = "d[cannon-shell]-a[basic]";
ammo_type = [];
ammo_type.push("direction")
ammo_type.push("table: 0000000000675d80")
ammo_type.push("cannon-shell")
doc["ammo_type"] = ammo_type;
db.item.insert(doc);

doc = {};
doc["type"] = "ammo";
flags = [];
flags.push("goes-to-main-inventory")
doc["flags"] = flags;
ammo_type = [];
ammo_type.push("direction")
ammo_type.push("table: 0000000000676000")
ammo_type.push("shotgun-shell")
doc["ammo_type"] = ammo_type;
doc["stack_size"] = 100;
doc["order"] = "b[shotgun]-a[basic]";
doc["name"] = "shotgun-shell";
doc["icon"] = "__base__/graphics/icons/shotgun-shell.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Shotgun-shell.png";
doc["magazine_size"] = 10;
doc["subgroup"] = "ammo";
db.item.insert(doc);

doc = {};
doc["type"] = "module";
flags = [];
flags.push("goes-to-main-inventory")
doc["flags"] = flags;
doc["tier"] = 3;
doc["category"] = "speed";
effect = [];
effect.push("table: 00000000006b6730")
effect.push("table: 00000000006b65f0")
doc["effect"] = effect;
doc["default_request_amount"] = 10;
doc["stack_size"] = 50;
doc["name"] = "speed-module-3";
doc["icon"] = "__base__/graphics/icons/speed-module-3.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Speed-module-3.png";
doc["order"] = "a[speed]-c[speed-module-3]";
doc["subgroup"] = "module";
db.item.insert(doc);

doc = {};
doc["type"] = "module";
flags = [];
flags.push("goes-to-main-inventory")
doc["flags"] = flags;
doc["tier"] = 1;
doc["category"] = "effectivity";
effect = [];
effect.push("table: 00000000006b6af0")
doc["effect"] = effect;
doc["default_request_amount"] = 10;
doc["stack_size"] = 50;
doc["name"] = "effectivity-module";
doc["icon"] = "__base__/graphics/icons/effectivity-module.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Effectivity-module.png";
doc["order"] = "c[effectivity]-a[effectivity-module-1]";
doc["subgroup"] = "module";
db.item.insert(doc);

doc = {};
doc["type"] = "module";
flags = [];
flags.push("goes-to-main-inventory")
doc["flags"] = flags;
doc["tier"] = 2;
doc["category"] = "speed";
effect = [];
effect.push("table: 00000000006b6a70")
effect.push("table: 00000000006b63f0")
doc["effect"] = effect;
doc["default_request_amount"] = 10;
doc["stack_size"] = 50;
doc["name"] = "speed-module-2";
doc["icon"] = "__base__/graphics/icons/speed-module-2.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Speed-module-2.png";
doc["order"] = "a[speed]-b[speed-module-2]";
doc["subgroup"] = "module";
db.item.insert(doc);

doc = {};
doc["type"] = "module";
flags = [];
flags.push("goes-to-main-inventory")
doc["flags"] = flags;
doc["tier"] = 3;
doc["category"] = "effectivity";
effect = [];
effect.push("table: 00000000006b6830")
doc["effect"] = effect;
doc["default_request_amount"] = 10;
doc["stack_size"] = 50;
doc["name"] = "effectivity-module-3";
doc["icon"] = "__base__/graphics/icons/effectivity-module-3.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Effectivity-module-3.png";
doc["order"] = "c[effectivity]-c[effectivity-module-3]";
doc["subgroup"] = "module";
db.item.insert(doc);

doc = {};
doc["type"] = "module";
flags = [];
flags.push("goes-to-main-inventory")
doc["flags"] = flags;
doc["tier"] = 3;
limitation = [];
limitation.push("sulfuric-acid")
limitation.push("basic-oil-processing")
limitation.push("advanced-oil-processing")
limitation.push("heavy-oil-cracking")
limitation.push("light-oil-cracking")
limitation.push("solid-fuel-from-light-oil")
limitation.push("solid-fuel-from-heavy-oil")
limitation.push("solid-fuel-from-petroleum-gas")
limitation.push("lubricant")
limitation.push("iron-plate")
limitation.push("copper-plate")
limitation.push("steel-plate")
limitation.push("stone-brick")
limitation.push("sulfur")
limitation.push("plastic-bar")
limitation.push("empty-barrel")
limitation.push("iron-stick")
limitation.push("iron-gear-wheel")
limitation.push("copper-cable")
limitation.push("electronic-circuit")
limitation.push("advanced-circuit")
limitation.push("engine-unit")
limitation.push("electric-engine-unit")
limitation.push("processing-unit")
limitation.push("explosives")
limitation.push("battery")
limitation.push("flying-robot-frame")
limitation.push("science-pack-1")
limitation.push("science-pack-2")
limitation.push("science-pack-3")
limitation.push("alien-science-pack")
limitation.push("low-density-structure")
limitation.push("rocket-fuel")
limitation.push("rocket-control-unit")
limitation.push("rocket-part")
doc["limitation"] = limitation;
doc["category"] = "productivity";
doc["limitation_message_key"] = "production-module-usable-only-on-intermediates";
effect = [];
effect.push("table: 00000000006b64f0")
effect.push("table: 00000000006b6470")
effect.push("table: 00000000006b6530")
effect.push("table: 00000000006b70f0")
doc["effect"] = effect;
doc["default_request_amount"] = 10;
doc["stack_size"] = 50;
doc["name"] = "productivity-module-3";
doc["icon"] = "__base__/graphics/icons/productivity-module-3.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Productivity-module-3.png";
doc["order"] = "c[productivity]-c[productivity-module-3]";
doc["subgroup"] = "module";
db.item.insert(doc);

doc = {};
doc["type"] = "module";
flags = [];
flags.push("goes-to-main-inventory")
doc["flags"] = flags;
doc["tier"] = 1;
limitation = [];
limitation.push("sulfuric-acid")
limitation.push("basic-oil-processing")
limitation.push("advanced-oil-processing")
limitation.push("heavy-oil-cracking")
limitation.push("light-oil-cracking")
limitation.push("solid-fuel-from-light-oil")
limitation.push("solid-fuel-from-heavy-oil")
limitation.push("solid-fuel-from-petroleum-gas")
limitation.push("lubricant")
limitation.push("iron-plate")
limitation.push("copper-plate")
limitation.push("steel-plate")
limitation.push("stone-brick")
limitation.push("sulfur")
limitation.push("plastic-bar")
limitation.push("empty-barrel")
limitation.push("iron-stick")
limitation.push("iron-gear-wheel")
limitation.push("copper-cable")
limitation.push("electronic-circuit")
limitation.push("advanced-circuit")
limitation.push("engine-unit")
limitation.push("electric-engine-unit")
limitation.push("processing-unit")
limitation.push("explosives")
limitation.push("battery")
limitation.push("flying-robot-frame")
limitation.push("science-pack-1")
limitation.push("science-pack-2")
limitation.push("science-pack-3")
limitation.push("alien-science-pack")
limitation.push("low-density-structure")
limitation.push("rocket-fuel")
limitation.push("rocket-control-unit")
limitation.push("rocket-part")
doc["limitation"] = limitation;
doc["category"] = "productivity";
doc["limitation_message_key"] = "production-module-usable-only-on-intermediates";
effect = [];
effect.push("table: 00000000006b68b0")
effect.push("table: 00000000006b6db0")
effect.push("table: 00000000006b6870")
effect.push("table: 00000000006b6430")
doc["effect"] = effect;
doc["default_request_amount"] = 10;
doc["stack_size"] = 50;
doc["name"] = "productivity-module";
doc["icon"] = "__base__/graphics/icons/productivity-module.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Productivity-module.png";
doc["order"] = "c[productivity]-a[productivity-module-1]";
doc["subgroup"] = "module";
db.item.insert(doc);

doc = {};
doc["type"] = "module";
flags = [];
flags.push("goes-to-main-inventory")
doc["flags"] = flags;
doc["tier"] = 2;
doc["category"] = "effectivity";
effect = [];
effect.push("table: 00000000006b6b70")
doc["effect"] = effect;
doc["default_request_amount"] = 10;
doc["stack_size"] = 50;
doc["name"] = "effectivity-module-2";
doc["icon"] = "__base__/graphics/icons/effectivity-module-2.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Effectivity-module-2.png";
doc["order"] = "c[effectivity]-b[effectivity-module-2]";
doc["subgroup"] = "module";
db.item.insert(doc);

doc = {};
doc["type"] = "module";
flags = [];
flags.push("goes-to-main-inventory")
doc["flags"] = flags;
doc["tier"] = 2;
limitation = [];
limitation.push("sulfuric-acid")
limitation.push("basic-oil-processing")
limitation.push("advanced-oil-processing")
limitation.push("heavy-oil-cracking")
limitation.push("light-oil-cracking")
limitation.push("solid-fuel-from-light-oil")
limitation.push("solid-fuel-from-heavy-oil")
limitation.push("solid-fuel-from-petroleum-gas")
limitation.push("lubricant")
limitation.push("iron-plate")
limitation.push("copper-plate")
limitation.push("steel-plate")
limitation.push("stone-brick")
limitation.push("sulfur")
limitation.push("plastic-bar")
limitation.push("empty-barrel")
limitation.push("iron-stick")
limitation.push("iron-gear-wheel")
limitation.push("copper-cable")
limitation.push("electronic-circuit")
limitation.push("advanced-circuit")
limitation.push("engine-unit")
limitation.push("electric-engine-unit")
limitation.push("processing-unit")
limitation.push("explosives")
limitation.push("battery")
limitation.push("flying-robot-frame")
limitation.push("science-pack-1")
limitation.push("science-pack-2")
limitation.push("science-pack-3")
limitation.push("alien-science-pack")
limitation.push("low-density-structure")
limitation.push("rocket-fuel")
limitation.push("rocket-control-unit")
limitation.push("rocket-part")
doc["limitation"] = limitation;
doc["category"] = "productivity";
doc["limitation_message_key"] = "production-module-usable-only-on-intermediates";
effect = [];
effect.push("table: 00000000006b7230")
effect.push("table: 00000000006b6fb0")
effect.push("table: 00000000006b6d30")
effect.push("table: 00000000006b6f70")
doc["effect"] = effect;
doc["default_request_amount"] = 10;
doc["stack_size"] = 50;
doc["name"] = "productivity-module-2";
doc["icon"] = "__base__/graphics/icons/productivity-module-2.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Productivity-module-2.png";
doc["order"] = "c[productivity]-b[productivity-module-2]";
doc["subgroup"] = "module";
db.item.insert(doc);

doc = {};
doc["type"] = "module";
flags = [];
flags.push("goes-to-main-inventory")
doc["flags"] = flags;
doc["tier"] = 1;
doc["category"] = "speed";
effect = [];
effect.push("table: 00000000006b6c30")
effect.push("table: 00000000006b6df0")
doc["effect"] = effect;
doc["default_request_amount"] = 10;
doc["stack_size"] = 50;
doc["name"] = "speed-module";
doc["icon"] = "__base__/graphics/icons/speed-module.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Speed-module.png";
doc["order"] = "a[speed]-a[speed-module-1]";
doc["subgroup"] = "module";
db.item.insert(doc);

doc = {};
doc["type"] = "item-with-entity-data";
flags = [];
flags.push("goes-to-quickbar")
doc["flags"] = flags;
doc["stack_size"] = 1;
doc["subgroup"] = "transport";
doc["name"] = "car";
doc["icon"] = "__base__/graphics/icons/car.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Car.png";
doc["order"] = "b[personal-transport]-a[car]";
doc["place_result"] = "car";
db.item.insert(doc);

doc = {};
doc["type"] = "item-with-entity-data";
flags = [];
flags.push("goes-to-quickbar")
doc["flags"] = flags;
doc["stack_size"] = 5;
doc["subgroup"] = "transport";
doc["name"] = "cargo-wagon";
doc["icon"] = "__base__/graphics/icons/cargo-wagon.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Cargo-wagon.png";
doc["order"] = "a[train-system]-g[cargo-wagon]";
doc["place_result"] = "cargo-wagon";
db.item.insert(doc);

doc = {};
doc["type"] = "item-with-entity-data";
flags = [];
flags.push("goes-to-quickbar")
doc["flags"] = flags;
doc["stack_size"] = 5;
doc["subgroup"] = "transport";
doc["name"] = "diesel-locomotive";
doc["icon"] = "__base__/graphics/icons/diesel-locomotive.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Diesel-locomotive.png";
doc["order"] = "a[train-system]-f[diesel-locomotive]";
doc["place_result"] = "diesel-locomotive";
db.item.insert(doc);

doc = {};
doc["type"] = "item-with-entity-data";
flags = [];
flags.push("goes-to-quickbar")
doc["flags"] = flags;
doc["stack_size"] = 1;
doc["subgroup"] = "transport";
doc["name"] = "tank";
doc["icon"] = "__base__/graphics/icons/tank.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Tank.png";
doc["order"] = "b[personal-transport]-b[tank]";
doc["place_result"] = "tank";
db.item.insert(doc);

doc = {};
doc["type"] = "rail-planner";
flags = [];
flags.push("goes-to-quickbar")
doc["flags"] = flags;
doc["place_result"] = "straight-rail";
doc["straight_rail"] = "straight-rail";
doc["curved_rail"] = "curved-rail";
doc["stack_size"] = 100;
doc["name"] = "rail";
doc["icon"] = "__base__/graphics/icons/rail.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Rail.png";
doc["order"] = "a[train-system]-a[rail]";
doc["subgroup"] = "transport";
db.item.insert(doc);

doc = {};
doc["type"] = "item";
flags = [];
flags.push("goes-to-quickbar")
doc["flags"] = flags;
doc["stack_size"] = 50;
doc["subgroup"] = "energy";
doc["name"] = "solar-panel";
doc["icon"] = "__base__/graphics/icons/solar-panel.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Solar-panel.png";
doc["order"] = "d[solar-panel]-a[solar-panel]";
doc["place_result"] = "solar-panel";
db.item.insert(doc);

doc = {};
doc["type"] = "item";
flags = [];
flags.push("goes-to-main-inventory")
doc["flags"] = flags;
doc["stack_size"] = 100;
doc["name"] = "copper-plate";
doc["icon"] = "__base__/graphics/icons/copper-plate.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Copper-plate.png";
doc["order"] = "c[copper-plate]";
doc["subgroup"] = "raw-material";
db.item.insert(doc);

doc = {};
doc["type"] = "item";
flags = [];
flags.push("goes-to-quickbar")
doc["flags"] = flags;
doc["stack_size"] = 1;
doc["subgroup"] = "defensive-structure";
doc["name"] = "rocket-silo";
doc["icon"] = "__base__/graphics/icons/rocket-silo.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Rocket-silo.png";
doc["order"] = "e[rocket-silo]";
doc["place_result"] = "rocket-silo";
db.item.insert(doc);

doc = {};
doc["type"] = "item";
flags = [];
flags.push("goes-to-quickbar")
doc["flags"] = flags;
doc["stack_size"] = 50;
doc["subgroup"] = "transport";
doc["name"] = "rail-chain-signal";
doc["icon"] = "__base__/graphics/icons/rail-chain-signal.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Rail-chain-signal.png";
doc["order"] = "a[train-system]-e[rail-signal-chain]";
doc["place_result"] = "rail-chain-signal";
db.item.insert(doc);

doc = {};
doc["type"] = "item";
flags = [];
flags.push("goes-to-main-inventory")
doc["flags"] = flags;
doc["stack_size"] = 50;
doc["default_request_amount"] = 10;
doc["placed_as_equipment_result"] = "battery-equipment";
doc["name"] = "battery-equipment";
doc["icon"] = "__base__/graphics/icons/battery-equipment.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Battery-equipment.png";
doc["order"] = "c[battery]-a[battery-equipment]";
doc["subgroup"] = "equipment";
db.item.insert(doc);

doc = {};
doc["type"] = "item";
flags = [];
flags.push("goes-to-quickbar")
doc["flags"] = flags;
doc["place_result"] = "wooden-chest";
doc["fuel_value"] = "4MJ";
doc["stack_size"] = 50;
doc["name"] = "wooden-chest";
doc["icon"] = "__base__/graphics/icons/wooden-chest.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Wooden-chest.png";
doc["order"] = "a[items]-a[wooden-chest]";
doc["subgroup"] = "storage";
db.item.insert(doc);

doc = {};
doc["type"] = "item";
flags = [];
flags.push("goes-to-main-inventory")
doc["flags"] = flags;
doc["stack_size"] = 50;
doc["name"] = "iron-ore";
doc["icon"] = "__base__/graphics/icons/iron-ore.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Iron-ore.png";
doc["order"] = "e[iron-ore]";
doc["subgroup"] = "raw-resource";
db.item.insert(doc);

doc = {};
doc["type"] = "item";
flags = [];
flags.push("goes-to-quickbar")
doc["flags"] = flags;
doc["stack_size"] = 50;
doc["subgroup"] = "inserter";
doc["name"] = "inserter";
doc["icon"] = "__base__/graphics/icons/inserter.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Inserter.png";
doc["order"] = "b[inserter]";
doc["place_result"] = "inserter";
db.item.insert(doc);

doc = {};
doc["type"] = "item";
flags = [];
flags.push("goes-to-quickbar")
doc["flags"] = flags;
doc["stack_size"] = 50;
doc["subgroup"] = "extraction-machine";
doc["name"] = "electric-mining-drill";
doc["icon"] = "__base__/graphics/icons/electric-mining-drill.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Electric-mining-drill.png";
doc["order"] = "a[items]-b[electric-mining-drill]";
doc["place_result"] = "electric-mining-drill";
db.item.insert(doc);

doc = {};
doc["type"] = "item";
flags = [];
flags.push("goes-to-quickbar")
doc["flags"] = flags;
doc["stack_size"] = 10;
doc["subgroup"] = "energy";
doc["name"] = "steam-engine";
doc["icon"] = "__base__/graphics/icons/steam-engine.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Steam-engine.png";
doc["order"] = "b[steam-power]-b[steam-engine]";
doc["place_result"] = "steam-engine";
db.item.insert(doc);

doc = {};
doc["type"] = "item";
flags = [];
flags.push("goes-to-main-inventory")
doc["flags"] = flags;
doc["stack_size"] = 50;
doc["name"] = "explosives";
doc["icon"] = "__base__/graphics/icons/explosives.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Explosives.png";
doc["order"] = "i[explosives]";
doc["subgroup"] = "intermediate-product";
db.item.insert(doc);

doc = {};
doc["type"] = "item";
flags = [];
flags.push("goes-to-main-inventory")
doc["flags"] = flags;
doc["default_request_amount"] = 10;
doc["stack_size"] = 500;
doc["name"] = "alien-artifact";
doc["icon"] = "__base__/graphics/icons/alien-artifact.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Alien-artifact.png";
doc["order"] = "g[alien-artifact]";
doc["subgroup"] = "raw-material";
db.item.insert(doc);

doc = {};
doc["type"] = "item";
flags = [];
flags.push("goes-to-quickbar")
doc["flags"] = flags;
doc["stack_size"] = 50;
doc["subgroup"] = "production-machine";
doc["name"] = "assembling-machine-3";
doc["icon"] = "__base__/graphics/icons/assembling-machine-3.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Assembling-machine-3.png";
doc["order"] = "c[assembling-machine-3]";
doc["place_result"] = "assembling-machine-3";
db.item.insert(doc);

doc = {};
doc["type"] = "item";
flags = [];
flags.push("goes-to-quickbar")
doc["flags"] = flags;
doc["stack_size"] = 50;
doc["subgroup"] = "defensive-structure";
doc["name"] = "flamethrower-turret";
doc["icon"] = "__base__/graphics/icons/flamethrower-turret.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Flamethrower-turret.png";
doc["order"] = "b[turret]-a[flamethrower-turret]";
doc["place_result"] = "flamethrower-turret";
db.item.insert(doc);

doc = {};
doc["type"] = "item";
flags = [];
flags.push("goes-to-quickbar")
doc["flags"] = flags;
doc["stack_size"] = 50;
doc["subgroup"] = "defensive-structure";
doc["name"] = "laser-turret";
doc["icon"] = "__base__/graphics/icons/laser-turret.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Laser-turret.png";
doc["order"] = "b[turret]-b[laser-turret]";
doc["place_result"] = "laser-turret";
db.item.insert(doc);

doc = {};
doc["type"] = "item";
flags = [];
flags.push("goes-to-quickbar")
doc["flags"] = flags;
doc["stack_size"] = 50;
doc["subgroup"] = "belt";
doc["name"] = "express-transport-belt";
doc["icon"] = "__base__/graphics/icons/express-transport-belt.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Express-transport-belt.png";
doc["order"] = "a[transport-belt]-c[express-transport-belt]";
doc["place_result"] = "express-transport-belt";
db.item.insert(doc);

doc = {};
doc["type"] = "item";
flags = [];
flags.push("goes-to-quickbar")
doc["flags"] = flags;
doc["stack_size"] = 50;
doc["subgroup"] = "storage";
doc["name"] = "iron-chest";
doc["icon"] = "__base__/graphics/icons/iron-chest.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Iron-chest.png";
doc["order"] = "a[items]-b[iron-chest]";
doc["place_result"] = "iron-chest";
db.item.insert(doc);

doc = {};
doc["type"] = "item";
flags = [];
flags.push("goes-to-quickbar")
doc["flags"] = flags;
doc["stack_size"] = 50;
doc["subgroup"] = "belt";
doc["name"] = "express-underground-belt";
doc["icon"] = "__base__/graphics/icons/express-underground-belt.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Express-underground-belt.png";
doc["order"] = "b[underground-belt]-c[express-underground-belt]";
doc["place_result"] = "express-underground-belt";
db.item.insert(doc);

doc = {};
doc["type"] = "item";
flags = [];
flags.push("goes-to-main-inventory")
doc["flags"] = flags;
doc["stack_size"] = 50;
doc["name"] = "engine-unit";
doc["icon"] = "__base__/graphics/icons/engine-unit.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Engine-unit.png";
doc["order"] = "g[engine-unit]";
doc["subgroup"] = "intermediate-product";
db.item.insert(doc);

doc = {};
doc["type"] = "item";
flags = [];
flags.push("goes-to-main-inventory")
doc["flags"] = flags;
place_as_tile = [];
place_as_tile.push("hazard-concrete-left")
place_as_tile.push(4)
place_as_tile.push("table: 00000000006b9fb0")
doc["place_as_tile"] = place_as_tile;
doc["stack_size"] = 100;
doc["name"] = "hazard-concrete";
doc["icon"] = "__base__/graphics/icons/hazard-concrete.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Hazard-concrete.png";
doc["order"] = "b[concrete]-b[hazard]";
doc["subgroup"] = "terrain";
db.item.insert(doc);

doc = {};
doc["type"] = "item";
flags = [];
flags.push("goes-to-quickbar")
flags.push("hidden")
doc["flags"] = flags;
doc["stack_size"] = 50;
doc["subgroup"] = "belt";
doc["name"] = "loader";
doc["icon"] = "__base__/graphics/icons/loader.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Loader.png";
doc["order"] = "d[loader]-a[basic-loader]";
doc["place_result"] = "loader";
db.item.insert(doc);

doc = {};
doc["type"] = "item";
flags = [];
flags.push("goes-to-main-inventory")
doc["flags"] = flags;
place_as_tile = [];
place_as_tile.push("concrete")
place_as_tile.push(4)
place_as_tile.push("table: 00000000006ba0f0")
doc["place_as_tile"] = place_as_tile;
doc["stack_size"] = 100;
doc["name"] = "concrete";
doc["icon"] = "__base__/graphics/icons/concrete.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Concrete.png";
doc["order"] = "b[concrete]-a[plain]";
doc["subgroup"] = "terrain";
db.item.insert(doc);

doc = {};
doc["type"] = "item";
flags = [];
flags.push("goes-to-main-inventory")
doc["flags"] = flags;
doc["stack_size"] = 50;
doc["name"] = "sulfur";
doc["icon"] = "__base__/graphics/icons/sulfur.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Sulfur.png";
doc["order"] = "f[sulfur]";
doc["subgroup"] = "raw-material";
db.item.insert(doc);

doc = {};
doc["type"] = "item";
flags = [];
flags.push("goes-to-main-inventory")
doc["flags"] = flags;
doc["stack_size"] = 1;
doc["name"] = "satellite";
doc["icon"] = "__base__/graphics/icons/satellite.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Satellite.png";
doc["order"] = "p[satellite]";
doc["subgroup"] = "intermediate-product";
db.item.insert(doc);

doc = {};
doc["type"] = "item";
flags = [];
flags.push("goes-to-main-inventory")
flags.push("hidden")
doc["flags"] = flags;
doc["stack_size"] = 5;
doc["name"] = "rocket-part";
doc["icon"] = "__base__/graphics/icons/rocket-part.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Rocket-part.png";
doc["order"] = "o[rocket-part]";
doc["subgroup"] = "intermediate-product";
db.item.insert(doc);

doc = {};
doc["type"] = "item";
flags = [];
flags.push("goes-to-quickbar")
doc["flags"] = flags;
doc["stack_size"] = 50;
doc["subgroup"] = "energy-pipe-distribution";
doc["name"] = "pipe-to-ground";
doc["icon"] = "__base__/graphics/icons/pipe-to-ground.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Pipe-to-ground.png";
doc["order"] = "a[pipe]-b[pipe-to-ground]";
doc["place_result"] = "pipe-to-ground";
db.item.insert(doc);

doc = {};
doc["type"] = "item";
flags = [];
flags.push("goes-to-main-inventory")
doc["flags"] = flags;
doc["stack_size"] = 10;
doc["subgroup"] = "intermediate-product";
doc["name"] = "rocket-fuel";
doc["icon"] = "__base__/graphics/icons/rocket-fuel.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Rocket-fuel.png";
doc["order"] = "m[rocket-fuel]";
doc["fuel_value"] = "225MJ";
db.item.insert(doc);

doc = {};
doc["type"] = "item";
flags = [];
flags.push("goes-to-quickbar")
doc["flags"] = flags;
doc["stack_size"] = 50;
doc["subgroup"] = "production-machine";
doc["name"] = "assembling-machine-1";
doc["icon"] = "__base__/graphics/icons/assembling-machine-1.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Assembling-machine-1.png";
doc["order"] = "a[assembling-machine-1]";
doc["place_result"] = "assembling-machine-1";
db.item.insert(doc);

doc = {};
doc["type"] = "item";
flags = [];
flags.push("goes-to-main-inventory")
doc["flags"] = flags;
doc["stack_size"] = 50;
doc["subgroup"] = "raw-resource";
doc["name"] = "solid-fuel";
doc["icon"] = "__base__/graphics/icons/solid-fuel.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Solid-fuel.png";
doc["order"] = "c[solid-fuel]";
doc["fuel_value"] = "25MJ";
db.item.insert(doc);

doc = {};
doc["type"] = "item";
flags = [];
flags.push("goes-to-main-inventory")
doc["flags"] = flags;
doc["stack_size"] = 10;
doc["name"] = "low-density-structure";
doc["icon"] = "__base__/graphics/icons/rocket-structure.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Rocket-structure.png";
doc["order"] = "l[rocket-structure]";
doc["subgroup"] = "intermediate-product";
db.item.insert(doc);

doc = {};
doc["type"] = "item";
flags = [];
flags.push("goes-to-quickbar")
doc["flags"] = flags;
doc["stack_size"] = 50;
doc["subgroup"] = "energy-pipe-distribution";
doc["name"] = "medium-electric-pole";
doc["icon"] = "__base__/graphics/icons/medium-electric-pole.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Medium-electric-pole.png";
doc["order"] = "a[energy]-b[medium-electric-pole]";
doc["place_result"] = "medium-electric-pole";
db.item.insert(doc);

doc = {};
doc["type"] = "item";
flags = [];
flags.push("goes-to-quickbar")
doc["flags"] = flags;
doc["stack_size"] = 50;
doc["subgroup"] = "circuit-network";
doc["name"] = "power-switch";
doc["icon"] = "__base__/graphics/icons/power-switch.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Power-switch.png";
doc["order"] = "c[other]-a[power-switch]";
doc["place_result"] = "power-switch";
db.item.insert(doc);

doc = {};
doc["type"] = "item";
flags = [];
flags.push("goes-to-quickbar")
doc["flags"] = flags;
doc["stack_size"] = 20;
doc["subgroup"] = "extraction-machine";
doc["name"] = "offshore-pump";
doc["icon"] = "__base__/graphics/icons/offshore-pump.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Offshore-pump.png";
doc["order"] = "b[fluids]-a[offshore-pump]";
doc["place_result"] = "offshore-pump";
db.item.insert(doc);

doc = {};
doc["type"] = "item";
flags = [];
flags.push("goes-to-quickbar")
doc["flags"] = flags;
doc["stack_size"] = 50;
doc["subgroup"] = "circuit-network";
doc["name"] = "constant-combinator";
doc["icon"] = "__base__/graphics/icons/constant-combinator.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Constant-combinator.png";
doc["order"] = "b[combinators]-c[constant-combinator]";
doc["place_result"] = "constant-combinator";
db.item.insert(doc);

doc = {};
doc["type"] = "item";
flags = [];
flags.push("goes-to-quickbar")
flags.push("hidden")
doc["flags"] = flags;
doc["stack_size"] = 1;
doc["name"] = "small-plane";
doc["icon"] = "__base__/graphics/icons/small-plane.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Small-plane.png";
doc["order"] = "h[small-plane]";
doc["subgroup"] = "defensive-structure";
db.item.insert(doc);

doc = {};
doc["type"] = "item";
flags = [];
flags.push("goes-to-quickbar")
doc["flags"] = flags;
doc["stack_size"] = 50;
doc["subgroup"] = "circuit-network";
doc["name"] = "decider-combinator";
doc["icon"] = "__base__/graphics/icons/decider-combinator.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Decider-combinator.png";
doc["order"] = "b[combinators]-b[decider-combinator]";
doc["place_result"] = "decider-combinator";
db.item.insert(doc);

doc = {};
doc["type"] = "item";
flags = [];
flags.push("goes-to-main-inventory")
doc["flags"] = flags;
doc["stack_size"] = 20;
doc["placed_as_equipment_result"] = "night-vision-equipment";
doc["name"] = "night-vision-equipment";
doc["icon"] = "__base__/graphics/icons/night-vision-equipment.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Night-vision-equipment.png";
doc["order"] = "f[night-vision]-a[night-vision-equipment]";
doc["subgroup"] = "equipment";
db.item.insert(doc);

doc = {};
doc["type"] = "item";
flags = [];
flags.push("goes-to-main-inventory")
doc["flags"] = flags;
doc["stack_size"] = 10;
doc["name"] = "empty-barrel";
doc["icon"] = "__base__/graphics/icons/fluid/empty-barrel.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Empty-barrel.png";
doc["order"] = "a[empty-barrel]";
doc["subgroup"] = "barrel";
db.item.insert(doc);

doc = {};
doc["type"] = "item";
flags = [];
flags.push("goes-to-quickbar")
doc["flags"] = flags;
doc["stack_size"] = 50;
doc["subgroup"] = "storage";
doc["name"] = "steel-chest";
doc["icon"] = "__base__/graphics/icons/steel-chest.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Steel-chest.png";
doc["order"] = "a[items]-c[steel-chest]";
doc["place_result"] = "steel-chest";
db.item.insert(doc);

doc = {};
doc["type"] = "item";
flags = [];
flags.push("goes-to-main-inventory")
doc["flags"] = flags;
doc["stack_size"] = 200;
doc["name"] = "battery";
doc["icon"] = "__base__/graphics/icons/battery.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Battery.png";
doc["order"] = "j[battery]";
doc["subgroup"] = "intermediate-product";
db.item.insert(doc);

doc = {};
doc["type"] = "item";
flags = [];
flags.push("goes-to-quickbar")
doc["flags"] = flags;
doc["stack_size"] = 50;
doc["subgroup"] = "inserter";
doc["name"] = "stack-filter-inserter";
doc["icon"] = "__base__/graphics/icons/stack-filter-inserter.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Stack-filter-inserter.png";
doc["order"] = "g[stack-filter-inserter]";
doc["place_result"] = "stack-filter-inserter";
db.item.insert(doc);

doc = {};
doc["type"] = "item";
flags = [];
flags.push("goes-to-main-inventory")
doc["flags"] = flags;
place_as_tile = [];
place_as_tile.push("grass")
place_as_tile.push(1)
place_as_tile.push("table: 00000000006b9970")
doc["place_as_tile"] = place_as_tile;
doc["stack_size"] = 100;
doc["name"] = "landfill";
doc["icon"] = "__base__/graphics/icons/landfill.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Landfill.png";
doc["order"] = "c[landfill]-a[dirt]";
doc["subgroup"] = "terrain";
db.item.insert(doc);

doc = {};
doc["type"] = "item";
flags = [];
flags.push("goes-to-quickbar")
doc["flags"] = flags;
doc["stack_size"] = 50;
doc["subgroup"] = "smelting-machine";
doc["name"] = "stone-furnace";
doc["icon"] = "__base__/graphics/icons/stone-furnace.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Stone-furnace.png";
doc["order"] = "a[stone-furnace]";
doc["place_result"] = "stone-furnace";
db.item.insert(doc);

doc = {};
doc["type"] = "item";
flags = [];
flags.push("goes-to-main-inventory")
doc["flags"] = flags;
doc["stack_size"] = 100;
doc["name"] = "plastic-bar";
doc["icon"] = "__base__/graphics/icons/plastic-bar.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Plastic-bar.png";
doc["order"] = "g[plastic-bar]";
doc["subgroup"] = "raw-material";
db.item.insert(doc);

doc = {};
doc["type"] = "item";
flags = [];
flags.push("goes-to-main-inventory")
doc["flags"] = flags;
doc["stack_size"] = 20;
doc["placed_as_equipment_result"] = "solar-panel-equipment";
doc["name"] = "solar-panel-equipment";
doc["icon"] = "__base__/graphics/icons/solar-panel-equipment.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Solar-panel-equipment.png";
doc["order"] = "a[energy-source]-a[solar-panel]";
doc["subgroup"] = "equipment";
db.item.insert(doc);

doc = {};
doc["type"] = "item";
flags = [];
flags.push("goes-to-main-inventory")
doc["flags"] = flags;
doc["stack_size"] = 50;
doc["name"] = "copper-ore";
doc["icon"] = "__base__/graphics/icons/copper-ore.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Copper-ore.png";
doc["order"] = "f[copper-ore]";
doc["subgroup"] = "raw-resource";
db.item.insert(doc);

doc = {};
doc["type"] = "item";
flags = [];
flags.push("goes-to-main-inventory")
doc["flags"] = flags;
doc["stack_size"] = 200;
doc["name"] = "copper-cable";
doc["icon"] = "__base__/graphics/icons/copper-cable.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Copper-cable.png";
doc["order"] = "a[copper-cable]";
doc["subgroup"] = "intermediate-product";
db.item.insert(doc);

doc = {};
doc["type"] = "item";
flags = [];
flags.push("goes-to-main-inventory")
doc["flags"] = flags;
doc["stack_size"] = 10;
doc["name"] = "crude-oil-barrel";
doc["icon"] = "__base__/graphics/icons/fluid/crude-oil-barrel.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Crude-oil-barrel.png";
doc["order"] = "b[crude-oil-barrel]";
doc["subgroup"] = "barrel";
db.item.insert(doc);

doc = {};
doc["type"] = "item";
flags = [];
flags.push("goes-to-main-inventory")
doc["flags"] = flags;
doc["stack_size"] = 100;
doc["name"] = "iron-stick";
doc["icon"] = "__base__/graphics/icons/iron-stick.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Iron-stick.png";
doc["order"] = "b[iron-stick]";
doc["subgroup"] = "intermediate-product";
db.item.insert(doc);

doc = {};
doc["type"] = "item";
flags = [];
flags.push("goes-to-quickbar")
doc["flags"] = flags;
doc["stack_size"] = 10;
doc["subgroup"] = "production-machine";
doc["name"] = "oil-refinery";
doc["icon"] = "__base__/graphics/icons/oil-refinery.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Oil-refinery.png";
doc["order"] = "d[refinery]";
doc["place_result"] = "oil-refinery";
db.item.insert(doc);

doc = {};
doc["type"] = "item";
flags = [];
flags.push("goes-to-quickbar")
doc["flags"] = flags;
doc["stack_size"] = 50;
doc["subgroup"] = "circuit-network";
doc["name"] = "arithmetic-combinator";
doc["icon"] = "__base__/graphics/icons/arithmetic-combinator.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Arithmetic-combinator.png";
doc["order"] = "b[combinators]-a[arithmetic-combinator]";
doc["place_result"] = "arithmetic-combinator";
db.item.insert(doc);

doc = {};
doc["type"] = "item";
flags = [];
flags.push("goes-to-quickbar")
doc["flags"] = flags;
doc["stack_size"] = 10;
doc["subgroup"] = "production-machine";
doc["name"] = "chemical-plant";
doc["icon"] = "__base__/graphics/icons/chemical-plant.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Chemical-plant.png";
doc["order"] = "e[chemical-plant]";
doc["place_result"] = "chemical-plant";
db.item.insert(doc);

doc = {};
doc["type"] = "item";
flags = [];
flags.push("goes-to-quickbar")
doc["flags"] = flags;
doc["stack_size"] = 200;
doc["name"] = "red-wire";
doc["icon"] = "__base__/graphics/icons/red-wire.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Red-wire.png";
doc["order"] = "a[wires]-b[red-wire]";
doc["subgroup"] = "circuit-network";
db.item.insert(doc);

doc = {};
doc["type"] = "item";
flags = [];
flags.push("goes-to-quickbar")
doc["flags"] = flags;
doc["stack_size"] = 50;
doc["subgroup"] = "logistic-network";
doc["name"] = "logistic-chest-storage";
doc["icon"] = "__base__/graphics/icons/logistic-chest-storage.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Logistic-chest-storage.png";
doc["order"] = "b[storage]-c[logistic-chest-storage]";
doc["place_result"] = "logistic-chest-storage";
db.item.insert(doc);

doc = {};
doc["type"] = "item";
flags = [];
flags.push("goes-to-quickbar")
doc["flags"] = flags;
doc["stack_size"] = 50;
doc["subgroup"] = "energy-pipe-distribution";
doc["name"] = "small-pump";
doc["icon"] = "__base__/graphics/icons/small-pump.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Small-pump.png";
doc["order"] = "b[pipe]-c[small-pump]";
doc["place_result"] = "small-pump";
db.item.insert(doc);

doc = {};
doc["type"] = "item";
flags = [];
flags.push("goes-to-main-inventory")
doc["flags"] = flags;
doc["stack_size"] = 50;
doc["name"] = "electric-engine-unit";
doc["icon"] = "__base__/graphics/icons/electric-engine-unit.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Electric-engine-unit.png";
doc["order"] = "h[electric-engine-unit]";
doc["subgroup"] = "intermediate-product";
db.item.insert(doc);

doc = {};
doc["type"] = "item";
flags = [];
flags.push("goes-to-quickbar")
flags.push("hidden")
doc["flags"] = flags;
doc["stack_size"] = 50;
doc["subgroup"] = "belt";
doc["name"] = "express-loader";
doc["icon"] = "__base__/graphics/icons/express-loader.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Express-loader.png";
doc["order"] = "d[loader]-c[express-loader]";
doc["place_result"] = "express-loader";
db.item.insert(doc);

doc = {};
doc["type"] = "item";
flags = [];
flags.push("goes-to-quickbar")
doc["flags"] = flags;
doc["stack_size"] = 50;
doc["subgroup"] = "energy";
doc["name"] = "small-lamp";
doc["icon"] = "__base__/graphics/icons/small-lamp.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Small-lamp.png";
doc["order"] = "c[light]-a[small-lamp]";
doc["place_result"] = "small-lamp";
db.item.insert(doc);

doc = {};
doc["type"] = "item";
flags = [];
flags.push("goes-to-quickbar")
doc["flags"] = flags;
doc["stack_size"] = 10;
doc["subgroup"] = "module";
doc["name"] = "beacon";
doc["icon"] = "__base__/graphics/icons/beacon.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Beacon.png";
doc["order"] = "a[beacon]";
doc["place_result"] = "beacon";
db.item.insert(doc);

doc = {};
doc["type"] = "item";
flags = [];
flags.push("goes-to-quickbar")
doc["flags"] = flags;
doc["stack_size"] = 50;
doc["subgroup"] = "smelting-machine";
doc["name"] = "steel-furnace";
doc["icon"] = "__base__/graphics/icons/steel-furnace.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Steel-furnace.png";
doc["order"] = "b[steel-furnace]";
doc["place_result"] = "steel-furnace";
db.item.insert(doc);

doc = {};
doc["type"] = "item";
flags = [];
flags.push("goes-to-quickbar")
flags.push("hidden")
doc["flags"] = flags;
doc["stack_size"] = 50;
doc["subgroup"] = "belt";
doc["name"] = "fast-loader";
doc["icon"] = "__base__/graphics/icons/fast-loader.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Fast-loader.png";
doc["order"] = "d[loader]-b[fast-loader]";
doc["place_result"] = "fast-loader";
db.item.insert(doc);

doc = {};
doc["type"] = "item";
flags = [];
flags.push("goes-to-main-inventory")
doc["flags"] = flags;
doc["stack_size"] = 50;
doc["default_request_amount"] = 10;
doc["placed_as_equipment_result"] = "energy-shield-mk2-equipment";
doc["name"] = "energy-shield-mk2-equipment";
doc["icon"] = "__base__/graphics/icons/energy-shield-mk2-equipment.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Energy-shield-mk2-equipment.png";
doc["order"] = "b[shield]-b[energy-shield-equipment-mk2]";
doc["subgroup"] = "equipment";
db.item.insert(doc);

doc = {};
doc["type"] = "item";
flags = [];
flags.push("goes-to-main-inventory")
doc["flags"] = flags;
doc["stack_size"] = 50;
doc["subgroup"] = "raw-material";
doc["name"] = "wood";
doc["icon"] = "__base__/graphics/icons/wood.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Wood.png";
doc["order"] = "a[wood]";
doc["fuel_value"] = "2MJ";
db.item.insert(doc);

doc = {};
doc["type"] = "item";
flags = [];
flags.push("goes-to-quickbar")
doc["flags"] = flags;
doc["stack_size"] = 50;
doc["subgroup"] = "energy";
doc["name"] = "accumulator";
doc["icon"] = "__base__/graphics/icons/accumulator.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Accumulator.png";
doc["order"] = "e[accumulator]-a[accumulator]";
doc["place_result"] = "accumulator";
db.item.insert(doc);

doc = {};
doc["type"] = "item";
flags = [];
flags.push("goes-to-quickbar")
doc["flags"] = flags;
doc["stack_size"] = 50;
doc["subgroup"] = "energy-pipe-distribution";
doc["name"] = "substation";
doc["icon"] = "__base__/graphics/icons/substation.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Substation.png";
doc["order"] = "a[energy]-d[substation]";
doc["place_result"] = "substation";
db.item.insert(doc);

doc = {};
doc["type"] = "item";
flags = [];
flags.push("goes-to-quickbar")
doc["flags"] = flags;
doc["stack_size"] = 50;
doc["subgroup"] = "energy-pipe-distribution";
doc["name"] = "big-electric-pole";
doc["icon"] = "__base__/graphics/icons/big-electric-pole.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Big-electric-pole.png";
doc["order"] = "a[energy]-c[big-electric-pole]";
doc["place_result"] = "big-electric-pole";
db.item.insert(doc);

doc = {};
doc["type"] = "item";
flags = [];
flags.push("goes-to-quickbar")
doc["flags"] = flags;
doc["stack_size"] = 50;
doc["subgroup"] = "inserter";
doc["name"] = "stack-inserter";
doc["icon"] = "__base__/graphics/icons/stack-inserter.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Stack-inserter.png";
doc["order"] = "f[stack-inserter]";
doc["place_result"] = "stack-inserter";
db.item.insert(doc);

doc = {};
doc["type"] = "item";
flags = [];
flags.push("goes-to-quickbar")
doc["flags"] = flags;
doc["stack_size"] = 50;
doc["subgroup"] = "inserter";
doc["name"] = "burner-inserter";
doc["icon"] = "__base__/graphics/icons/burner-inserter.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Burner-inserter.png";
doc["order"] = "a[burner-inserter]";
doc["place_result"] = "burner-inserter";
db.item.insert(doc);

doc = {};
doc["type"] = "item";
flags = [];
flags.push("goes-to-quickbar")
doc["flags"] = flags;
doc["stack_size"] = 5;
doc["subgroup"] = "logistic-network";
doc["name"] = "roboport";
doc["icon"] = "__base__/graphics/icons/roboport.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Roboport.png";
doc["order"] = "c[signal]-a[roboport]";
doc["place_result"] = "roboport";
db.item.insert(doc);

doc = {};
doc["type"] = "item";
flags = [];
flags.push("goes-to-main-inventory")
doc["flags"] = flags;
doc["stack_size"] = 50;
doc["name"] = "stone";
doc["icon"] = "__base__/graphics/icons/stone.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Stone.png";
doc["order"] = "d[stone]";
doc["subgroup"] = "raw-resource";
db.item.insert(doc);

doc = {};
doc["type"] = "item";
flags = [];
flags.push("goes-to-quickbar")
doc["flags"] = flags;
doc["stack_size"] = 50;
doc["subgroup"] = "production-machine";
doc["name"] = "assembling-machine-2";
doc["icon"] = "__base__/graphics/icons/assembling-machine-2.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Assembling-machine-2.png";
doc["order"] = "b[assembling-machine-2]";
doc["place_result"] = "assembling-machine-2";
db.item.insert(doc);

doc = {};
doc["type"] = "item";
flags = [];
flags.push("goes-to-quickbar")
doc["flags"] = flags;
doc["stack_size"] = 50;
doc["subgroup"] = "logistic-network";
doc["name"] = "logistic-chest-requester";
doc["icon"] = "__base__/graphics/icons/logistic-chest-requester.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Logistic-chest-requester.png";
doc["order"] = "b[storage]-c[logistic-chest-requester]";
doc["place_result"] = "logistic-chest-requester";
db.item.insert(doc);

doc = {};
doc["type"] = "item";
flags = [];
flags.push("goes-to-quickbar")
doc["flags"] = flags;
doc["stack_size"] = 20;
doc["subgroup"] = "extraction-machine";
doc["name"] = "pumpjack";
doc["icon"] = "__base__/graphics/icons/pumpjack.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Pumpjack.png";
doc["order"] = "b[fluids]-b[pumpjack]";
doc["place_result"] = "pumpjack";
db.item.insert(doc);

doc = {};
doc["type"] = "item";
flags = [];
flags.push("goes-to-quickbar")
doc["flags"] = flags;
doc["stack_size"] = 50;
doc["subgroup"] = "logistic-network";
doc["name"] = "logistic-chest-active-provider";
doc["icon"] = "__base__/graphics/icons/logistic-chest-active-provider.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Logistic-chest-active-provider.png";
doc["order"] = "b[storage]-c[logistic-chest-active-provider]";
doc["place_result"] = "logistic-chest-active-provider";
db.item.insert(doc);

doc = {};
doc["type"] = "item";
flags = [];
flags.push("goes-to-main-inventory")
doc["flags"] = flags;
doc["stack_size"] = 100;
doc["name"] = "iron-gear-wheel";
doc["icon"] = "__base__/graphics/icons/iron-gear-wheel.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Iron-gear-wheel.png";
doc["order"] = "c[iron-gear-wheel]";
doc["subgroup"] = "intermediate-product";
db.item.insert(doc);

doc = {};
doc["type"] = "item";
flags = [];
flags.push("goes-to-main-inventory")
doc["flags"] = flags;
doc["stack_size"] = 20;
doc["placed_as_equipment_result"] = "fusion-reactor-equipment";
doc["name"] = "fusion-reactor-equipment";
doc["icon"] = "__base__/graphics/icons/fusion-reactor-equipment.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Fusion-reactor-equipment.png";
doc["order"] = "a[energy-source]-b[fusion-reactor]";
doc["subgroup"] = "equipment";
db.item.insert(doc);

doc = {};
doc["type"] = "item";
flags = [];
flags.push("goes-to-main-inventory")
doc["flags"] = flags;
doc["stack_size"] = 200;
doc["name"] = "advanced-circuit";
doc["icon"] = "__base__/graphics/icons/advanced-circuit.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Advanced-circuit.png";
doc["order"] = "e[advanced-circuit]";
doc["subgroup"] = "intermediate-product";
db.item.insert(doc);

doc = {};
doc["type"] = "item";
flags = [];
flags.push("goes-to-quickbar")
doc["flags"] = flags;
doc["stack_size"] = 50;
doc["subgroup"] = "belt";
doc["name"] = "fast-underground-belt";
doc["icon"] = "__base__/graphics/icons/fast-underground-belt.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Fast-underground-belt.png";
doc["order"] = "b[underground-belt]-b[fast-underground-belt]";
doc["place_result"] = "fast-underground-belt";
db.item.insert(doc);

doc = {};
doc["type"] = "item";
flags = [];
flags.push("goes-to-main-inventory")
doc["flags"] = flags;
doc["stack_size"] = 50;
doc["subgroup"] = "logistic-network";
doc["name"] = "construction-robot";
doc["icon"] = "__base__/graphics/icons/construction-robot.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Construction-robot.png";
doc["order"] = "a[robot]-b[construction-robot]";
doc["place_result"] = "construction-robot";
db.item.insert(doc);

doc = {};
doc["type"] = "item";
flags = [];
flags.push("goes-to-quickbar")
doc["flags"] = flags;
doc["stack_size"] = 50;
doc["subgroup"] = "defensive-structure";
doc["name"] = "gun-turret";
doc["icon"] = "__base__/graphics/icons/gun-turret.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Gun-turret.png";
doc["order"] = "b[turret]-a[gun-turret]";
doc["place_result"] = "gun-turret";
db.item.insert(doc);

doc = {};
doc["type"] = "item";
flags = [];
flags.push("goes-to-quickbar")
doc["flags"] = flags;
doc["stack_size"] = 50;
doc["subgroup"] = "logistic-network";
doc["name"] = "logistic-robot";
doc["icon"] = "__base__/graphics/icons/logistic-robot.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Logistic-robot.png";
doc["order"] = "a[robot]-a[logistic-robot]";
doc["place_result"] = "logistic-robot";
db.item.insert(doc);

doc = {};
doc["type"] = "item";
flags = [];
flags.push("goes-to-main-inventory")
doc["flags"] = flags;
doc["stack_size"] = 100;
doc["name"] = "processing-unit";
doc["icon"] = "__base__/graphics/icons/processing-unit.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Processing-unit.png";
doc["order"] = "f[processing-unit]";
doc["subgroup"] = "intermediate-product";
db.item.insert(doc);

doc = {};
doc["type"] = "item";
flags = [];
flags.push("goes-to-quickbar")
doc["flags"] = flags;
doc["place_result"] = "small-electric-pole";
doc["fuel_value"] = "4MJ";
doc["stack_size"] = 50;
doc["name"] = "small-electric-pole";
doc["icon"] = "__base__/graphics/icons/small-electric-pole.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Small-electric-pole.png";
doc["order"] = "a[energy]-a[small-electric-pole]";
doc["subgroup"] = "energy-pipe-distribution";
db.item.insert(doc);

doc = {};
doc["type"] = "item";
flags = [];
flags.push("goes-to-quickbar")
doc["flags"] = flags;
doc["stack_size"] = 50;
doc["subgroup"] = "logistic-network";
doc["name"] = "logistic-chest-passive-provider";
doc["icon"] = "__base__/graphics/icons/logistic-chest-passive-provider.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Logistic-chest-passive-provider.png";
doc["order"] = "b[storage]-c[logistic-chest-passive-provider]";
doc["place_result"] = "logistic-chest-passive-provider";
db.item.insert(doc);

doc = {};
doc["type"] = "item";
flags = [];
flags.push("goes-to-quickbar")
doc["flags"] = flags;
doc["stack_size"] = 50;
doc["subgroup"] = "smelting-machine";
doc["name"] = "electric-furnace";
doc["icon"] = "__base__/graphics/icons/electric-furnace.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Electric-furnace.png";
doc["order"] = "c[electric-furnace]";
doc["place_result"] = "electric-furnace";
db.item.insert(doc);

doc = {};
doc["type"] = "item";
flags = [];
flags.push("goes-to-main-inventory")
doc["flags"] = flags;
doc["stack_size"] = 20;
doc["placed_as_equipment_result"] = "discharge-defense-equipment";
doc["name"] = "discharge-defense-equipment";
doc["icon"] = "__base__/graphics/icons/discharge-defense-equipment.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Discharge-defense-equipment.png";
doc["order"] = "d[active-defense]-b[discharge-defense-equipment]";
doc["subgroup"] = "equipment";
db.item.insert(doc);

doc = {};
doc["type"] = "item";
flags = [];
flags.push("goes-to-quickbar")
doc["flags"] = flags;
doc["trigger_radius"] = 1;
doc["place_result"] = "land-mine";
doc["stack_size"] = 20;
doc["subgroup"] = "gun";
doc["name"] = "land-mine";
doc["icon"] = "__base__/graphics/icons/land-mine.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Land-mine.png";
doc["order"] = "f[land-mine]";
doc["damage_radius"] = 5;
db.item.insert(doc);

doc = {};
doc["type"] = "item";
flags = [];
flags.push("goes-to-main-inventory")
doc["flags"] = flags;
doc["stack_size"] = 50;
doc["default_request_amount"] = 10;
doc["placed_as_equipment_result"] = "battery-mk2-equipment";
doc["name"] = "battery-mk2-equipment";
doc["icon"] = "__base__/graphics/icons/battery-mk2-equipment.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Battery-mk2-equipment.png";
doc["order"] = "c[battery]-b[battery-equipment-mk2]";
doc["subgroup"] = "equipment";
db.item.insert(doc);

doc = {};
doc["type"] = "item";
flags = [];
flags.push("goes-to-quickbar")
doc["flags"] = flags;
doc["stack_size"] = 50;
doc["subgroup"] = "extraction-machine";
doc["name"] = "burner-mining-drill";
doc["icon"] = "__base__/graphics/icons/burner-mining-drill.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Burner-mining-drill.png";
doc["order"] = "a[items]-a[burner-mining-drill]";
doc["place_result"] = "burner-mining-drill";
db.item.insert(doc);

doc = {};
doc["type"] = "item";
flags = [];
flags.push("goes-to-quickbar")
doc["flags"] = flags;
doc["stack_size"] = 50;
doc["subgroup"] = "energy";
doc["name"] = "boiler";
doc["icon"] = "__base__/graphics/icons/boiler.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Boiler.png";
doc["order"] = "b[steam-power]-a[boiler]";
doc["place_result"] = "boiler";
db.item.insert(doc);

doc = {};
doc["type"] = "item";
flags = [];
flags.push("goes-to-quickbar")
doc["flags"] = flags;
doc["stack_size"] = 50;
doc["subgroup"] = "transport";
doc["name"] = "rail-signal";
doc["icon"] = "__base__/graphics/icons/rail-signal.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Rail-signal.png";
doc["order"] = "a[train-system]-d[rail-signal]";
doc["place_result"] = "rail-signal";
db.item.insert(doc);

doc = {};
doc["type"] = "item";
flags = [];
flags.push("goes-to-quickbar")
doc["flags"] = flags;
doc["stack_size"] = 50;
doc["subgroup"] = "belt";
doc["name"] = "fast-splitter";
doc["icon"] = "__base__/graphics/icons/fast-splitter.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Fast-splitter.png";
doc["order"] = "c[splitter]-b[fast-splitter]";
doc["place_result"] = "fast-splitter";
db.item.insert(doc);

doc = {};
doc["type"] = "item";
flags = [];
flags.push("goes-to-quickbar")
doc["flags"] = flags;
doc["stack_size"] = 200;
doc["name"] = "green-wire";
doc["icon"] = "__base__/graphics/icons/green-wire.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Green-wire.png";
doc["order"] = "a[wires]-c[green-wire]";
doc["subgroup"] = "circuit-network";
db.item.insert(doc);

doc = {};
doc["type"] = "item";
flags = [];
flags.push("goes-to-quickbar")
doc["flags"] = flags;
doc["stack_size"] = 50;
doc["subgroup"] = "belt";
doc["name"] = "splitter";
doc["icon"] = "__base__/graphics/icons/splitter.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Splitter.png";
doc["order"] = "c[splitter]-a[splitter]";
doc["place_result"] = "splitter";
db.item.insert(doc);

doc = {};
doc["type"] = "item";
flags = [];
flags.push("goes-to-quickbar")
flags.push("hidden")
doc["flags"] = flags;
doc["stack_size"] = 50;
doc["subgroup"] = "energy";
doc["name"] = "electric-energy-interface";
doc["icon"] = "__base__/graphics/icons/accumulator.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Accumulator.png";
doc["order"] = "e[electric-energy-interface]-b[electric-energy-interface]";
doc["place_result"] = "electric-energy-interface";
db.item.insert(doc);

doc = {};
doc["type"] = "item";
flags = [];
flags.push("goes-to-quickbar")
doc["flags"] = flags;
doc["stack_size"] = 50;
doc["subgroup"] = "defensive-structure";
doc["name"] = "stone-wall";
doc["icon"] = "__base__/graphics/icons/stone-wall.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Stone-wall.png";
doc["order"] = "a[stone-wall]-a[stone-wall]";
doc["place_result"] = "stone-wall";
db.item.insert(doc);

doc = {};
doc["type"] = "item";
flags = [];
flags.push("goes-to-main-inventory")
doc["flags"] = flags;
place_as_tile = [];
place_as_tile.push("stone-path")
place_as_tile.push(4)
place_as_tile.push("table: 00000000006811b0")
doc["place_as_tile"] = place_as_tile;
doc["stack_size"] = 100;
doc["name"] = "stone-brick";
doc["icon"] = "__base__/graphics/icons/stone-brick.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Stone-brick.png";
doc["order"] = "a[stone-brick]";
doc["subgroup"] = "terrain";
db.item.insert(doc);

doc = {};
doc["type"] = "item";
flags = [];
flags.push("goes-to-main-inventory")
doc["flags"] = flags;
doc["stack_size"] = 100;
doc["name"] = "iron-plate";
doc["icon"] = "__base__/graphics/icons/iron-plate.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Iron-plate.png";
doc["order"] = "b[iron-plate]";
doc["subgroup"] = "raw-material";
db.item.insert(doc);

doc = {};
doc["type"] = "item";
flags = [];
flags.push("goes-to-quickbar")
doc["flags"] = flags;
doc["stack_size"] = 50;
doc["subgroup"] = "belt";
doc["name"] = "underground-belt";
doc["icon"] = "__base__/graphics/icons/underground-belt.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Underground-belt.png";
doc["order"] = "b[underground-belt]-a[underground-belt]";
doc["place_result"] = "underground-belt";
db.item.insert(doc);

doc = {};
doc["type"] = "item";
flags = [];
flags.push("goes-to-main-inventory")
doc["flags"] = flags;
doc["stack_size"] = 20;
doc["placed_as_equipment_result"] = "personal-laser-defense-equipment";
doc["name"] = "personal-laser-defense-equipment";
doc["icon"] = "__base__/graphics/icons/personal-laser-defense-equipment.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Personal-laser-defense-equipment.png";
doc["order"] = "d[active-defense]-a[personal-laser-defense-equipment]";
doc["subgroup"] = "equipment";
db.item.insert(doc);

doc = {};
doc["type"] = "item";
flags = [];
flags.push("goes-to-main-inventory")
doc["flags"] = flags;
doc["fuel_value"] = "8MJ";
doc["stack_size"] = 50;
doc["subgroup"] = "raw-material";
doc["name"] = "coal";
doc["icon"] = "__base__/graphics/icons/coal.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Coal.png";
doc["order"] = "b[coal]";
doc["dark_background_icon"] = "__base__/graphics/icons/coal-dark-background.png";
db.item.insert(doc);

doc = {};
doc["type"] = "item";
flags = [];
flags.push("goes-to-main-inventory")
doc["flags"] = flags;
doc["stack_size"] = 5;
doc["placed_as_equipment_result"] = "personal-roboport-equipment";
doc["name"] = "personal-roboport-equipment";
doc["icon"] = "__base__/graphics/icons/personal-roboport-equipment.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Personal-roboport-equipment.png";
doc["order"] = "e[robotics]-a[personal-roboport-equipment]";
doc["subgroup"] = "equipment";
db.item.insert(doc);

doc = {};
doc["type"] = "item";
flags = [];
flags.push("goes-to-quickbar")
flags.push("hidden")
doc["flags"] = flags;
doc["stack_size"] = 1;
doc["name"] = "computer";
doc["icon"] = "__base__/graphics/icons/computer.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Computer.png";
doc["order"] = "g[computer]";
doc["subgroup"] = "defensive-structure";
db.item.insert(doc);

doc = {};
doc["type"] = "item";
flags = [];
flags.push("goes-to-main-inventory")
doc["flags"] = flags;
doc["stack_size"] = 100;
doc["name"] = "steel-plate";
doc["icon"] = "__base__/graphics/icons/steel-plate.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Steel-plate.png";
doc["order"] = "d[steel-plate]";
doc["subgroup"] = "raw-material";
db.item.insert(doc);

doc = {};
doc["type"] = "item";
flags = [];
flags.push("goes-to-quickbar")
doc["flags"] = flags;
doc["stack_size"] = 50;
doc["subgroup"] = "belt";
doc["name"] = "express-splitter";
doc["icon"] = "__base__/graphics/icons/express-splitter.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Express-splitter.png";
doc["order"] = "c[splitter]-c[express-splitter]";
doc["place_result"] = "express-splitter";
db.item.insert(doc);

doc = {};
doc["type"] = "item";
flags = [];
flags.push("goes-to-quickbar")
doc["flags"] = flags;
doc["stack_size"] = 10;
doc["subgroup"] = "transport";
doc["name"] = "train-stop";
doc["icon"] = "__base__/graphics/icons/train-stop.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Train-stop.png";
doc["order"] = "a[train-system]-c[train-stop]";
doc["place_result"] = "train-stop";
db.item.insert(doc);

doc = {};
doc["type"] = "item";
flags = [];
flags.push("goes-to-quickbar")
flags.push("hidd  en")
doc["flags"] = flags;
doc["stack_size"] = 50;
doc["subgroup"] = "defensive-structure";
doc["name"] = "player-port";
doc["icon"] = "__base__/graphics/icons/player-port.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Player-port.png";
doc["order"] = "z[not-used]";
doc["place_result"] = "player-port";
db.item.insert(doc);

doc = {};
doc["type"] = "item";
flags = [];
flags.push("goes-to-quickbar")
doc["flags"] = flags;
doc["stack_size"] = 10;
doc["subgroup"] = "production-machine";
doc["name"] = "lab";
doc["icon"] = "__base__/graphics/icons/lab.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Lab.png";
doc["order"] = "g[lab]";
doc["place_result"] = "lab";
db.item.insert(doc);

doc = {};
doc["type"] = "item";
flags = [];
flags.push("goes-to-main-inventory")
doc["flags"] = flags;
doc["stack_size"] = 10;
doc["name"] = "rocket-control-unit";
doc["icon"] = "__base__/graphics/icons/rocket-control-unit.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Rocket-control-unit.png";
doc["order"] = "n[rocket-control-unit]";
doc["subgroup"] = "intermediate-product";
db.item.insert(doc);

doc = {};
doc["type"] = "item";
flags = [];
flags.push("goes-to-main-inventory")
doc["flags"] = flags;
doc["stack_size"] = 50;
doc["default_request_amount"] = 10;
doc["placed_as_equipment_result"] = "energy-shield-equipment";
doc["name"] = "energy-shield-equipment";
doc["icon"] = "__base__/graphics/icons/energy-shield-equipment.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Energy-shield-equipment.png";
doc["order"] = "b[shield]-a[energy-shield-equipment]";
doc["subgroup"] = "equipment";
db.item.insert(doc);

doc = {};
doc["type"] = "item";
flags = [];
flags.push("goes-to-quickbar")
doc["flags"] = flags;
doc["stack_size"] = 50;
doc["subgroup"] = "storage";
doc["name"] = "storage-tank";
doc["icon"] = "__base__/graphics/icons/storage-tank.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Storage-tank.png";
doc["order"] = "b[fluid]-a[storage-tank]";
doc["place_result"] = "storage-tank";
db.item.insert(doc);

doc = {};
doc["type"] = "item";
flags = [];
flags.push("goes-to-quickbar")
doc["flags"] = flags;
doc["stack_size"] = 50;
doc["subgroup"] = "belt";
doc["name"] = "transport-belt";
doc["icon"] = "__base__/graphics/icons/transport-belt.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Transport-belt.png";
doc["order"] = "a[transport-belt]-a[transport-belt]";
doc["place_result"] = "transport-belt";
db.item.insert(doc);

doc = {};
doc["type"] = "item";
flags = [];
flags.push("goes-to-main-inventory")
doc["flags"] = flags;
doc["stack_size"] = 10;
doc["placed_as_equipment_result"] = "exoskeleton-equipment";
doc["name"] = "exoskeleton-equipment";
doc["icon"] = "__base__/graphics/icons/exoskeleton-equipment.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Exoskeleton-equipment.png";
doc["order"] = "e[exoskeleton]-a[exoskeleton-equipment]";
doc["subgroup"] = "equipment";
db.item.insert(doc);

doc = {};
doc["type"] = "item";
flags = [];
flags.push("goes-to-quickbar")
doc["flags"] = flags;
doc["stack_size"] = 50;
doc["subgroup"] = "defensive-structure";
doc["name"] = "gate";
doc["icon"] = "__base__/graphics/icons/gate.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Gate.png";
doc["order"] = "a[wall]-b[gate]";
doc["place_result"] = "gate";
db.item.insert(doc);

doc = {};
doc["type"] = "item";
flags = [];
flags.push("goes-to-quickbar")
doc["flags"] = flags;
doc["stack_size"] = 50;
doc["subgroup"] = "inserter";
doc["name"] = "filter-inserter";
doc["icon"] = "__base__/graphics/icons/filter-inserter.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Filter-inserter.png";
doc["order"] = "e[filter-inserter]";
doc["place_result"] = "filter-inserter";
db.item.insert(doc);

doc = {};
doc["type"] = "item";
flags = [];
flags.push("goes-to-quickbar")
doc["flags"] = flags;
doc["stack_size"] = 50;
doc["subgroup"] = "defensive-structure";
doc["name"] = "radar";
doc["icon"] = "__base__/graphics/icons/radar.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Radar.png";
doc["order"] = "d[radar]-a[radar]";
doc["place_result"] = "radar";
db.item.insert(doc);

doc = {};
doc["type"] = "item";
flags = [];
flags.push("goes-to-quickbar")
doc["flags"] = flags;
doc["stack_size"] = 50;
doc["subgroup"] = "inserter";
doc["name"] = "long-handed-inserter";
doc["icon"] = "__base__/graphics/icons/long-handed-inserter.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Long-handed-inserter.png";
doc["order"] = "c[long-handed-inserter]";
doc["place_result"] = "long-handed-inserter";
db.item.insert(doc);

doc = {};
doc["type"] = "item";
flags = [];
flags.push("goes-to-main-inventory")
doc["flags"] = flags;
doc["stack_size"] = 200;
doc["name"] = "electronic-circuit";
doc["icon"] = "__base__/graphics/icons/electronic-circuit.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Electronic-circuit.png";
doc["order"] = "d[electronic-circuit]";
doc["subgroup"] = "intermediate-product";
db.item.insert(doc);

doc = {};
doc["type"] = "item";
flags = [];
flags.push("goes-to-main-inventory")
doc["flags"] = flags;
doc["stack_size"] = 100;
doc["subgroup"] = "raw-material";
doc["name"] = "raw-wood";
doc["icon"] = "__base__/graphics/icons/raw-wood.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Raw-wood.png";
doc["order"] = "a[raw-wood]";
doc["fuel_value"] = "4MJ";
db.item.insert(doc);

doc = {};
doc["type"] = "item";
flags = [];
flags.push("goes-to-quickbar")
doc["flags"] = flags;
doc["stack_size"] = 50;
doc["subgroup"] = "inserter";
doc["name"] = "fast-inserter";
doc["icon"] = "__base__/graphics/icons/fast-inserter.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Fast-inserter.png";
doc["order"] = "d[fast-inserter]";
doc["place_result"] = "fast-inserter";
db.item.insert(doc);

doc = {};
doc["type"] = "item";
flags = [];
flags.push("goes-to-quickbar")
doc["flags"] = flags;
doc["stack_size"] = 50;
doc["subgroup"] = "belt";
doc["name"] = "fast-transport-belt";
doc["icon"] = "__base__/graphics/icons/fast-transport-belt.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Fast-transport-belt.png";
doc["order"] = "a[transport-belt]-b[fast-transport-belt]";
doc["place_result"] = "fast-transport-belt";
db.item.insert(doc);

doc = {};
doc["type"] = "item";
flags = [];
flags.push("goes-to-main-inventory")
doc["flags"] = flags;
doc["stack_size"] = 50;
doc["name"] = "flying-robot-frame";
doc["icon"] = "__base__/graphics/icons/flying-robot-frame.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Flying-robot-frame.png";
doc["order"] = "k[flying-robot-frame]";
doc["subgroup"] = "intermediate-product";
db.item.insert(doc);

doc = {};
doc["type"] = "item";
flags = [];
flags.push("goes-to-quickbar")
flags.push("hidden")
doc["flags"] = flags;
doc["stack_size"] = 100000;
doc["name"] = "coin";
doc["icon"] = "__base__/graphics/icons/coin.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Coin.png";
doc["order"] = "y";
doc["subgroup"] = "science-pack";
db.item.insert(doc);

doc = {};
doc["type"] = "item";
flags = [];
flags.push("goes-to-quickbar")
doc["flags"] = flags;
doc["stack_size"] = 50;
doc["subgroup"] = "energy-pipe-distribution";
doc["name"] = "pipe";
doc["icon"] = "__base__/graphics/icons/pipe.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Pipe.png";
doc["order"] = "a[pipe]-a[pipe]";
doc["place_result"] = "pipe";
db.item.insert(doc);

doc = {};
doc["type"] = "deconstruction-item";
flags = [];
flags.push("goes-to-quickbar")
doc["flags"] = flags;
selection_color = [];
selection_color.push(1)
selection_color.push(0)
selection_color.push(0)
doc["selection_color"] = selection_color;
doc["alt_selection_cursor_box_type"] = "not-allowed";
selection_mode = [];
selection_mode.push("deconstruct")
doc["selection_mode"] = selection_mode;
doc["selection_cursor_box_type"] = "not-allowed";
alt_selection_mode = [];
alt_selection_mode.push("cancel-deconstruct")
doc["alt_selection_mode"] = alt_selection_mode;
alt_selection_color = [];
alt_selection_color.push(0)
alt_selection_color.push(0)
alt_selection_color.push(1)
doc["alt_selection_color"] = alt_selection_color;
doc["stack_size"] = 1;
doc["name"] = "deconstruction-planner";
doc["icon"] = "__base__/graphics/icons/deconstruction-planner.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Deconstruction-planner.png";
doc["order"] = "c[automated-construction]-b[deconstruction-planner]";
doc["subgroup"] = "tool";
db.item.insert(doc);

doc = {};
doc["type"] = "blueprint-book";
flags = [];
flags.push("goes-to-quickbar")
doc["flags"] = flags;
doc["inventory_size"] = 30;
doc["stack_size"] = 1;
doc["name"] = "blueprint-book";
doc["icon"] = "__base__/graphics/icons/blueprint-book.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Blueprint-book.png";
doc["order"] = "c[automated-construction]-c[blueprint-book]";
doc["subgroup"] = "tool";
db.item.insert(doc);

doc = {};
doc["type"] = "armor";
flags = [];
flags.push("goes-to-main-inventory")
doc["flags"] = flags;
resistances = [];
resistances.push("table: 000000000067fd30")
resistances.push("table: 000000000067faf0")
resistances.push("table: 000000000067fc30")
resistances.push("table: 0000000000680170")
doc["resistances"] = resistances;
doc["durability"] = 1000;
doc["stack_size"] = 10;
doc["name"] = "light-armor";
doc["icon"] = "__base__/graphics/icons/light-armor.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Light-armor.png";
doc["order"] = "a[light-armor]";
doc["subgroup"] = "armor";
db.item.insert(doc);

doc = {};
doc["type"] = "armor";
flags = [];
flags.push("goes-to-main-inventory")
doc["flags"] = flags;
doc["inventory_size_bonus"] = 30;
doc["equipment_grid"] = "large-equipment-grid";
resistances = [];
resistances.push("table: 00000000006311d0")
resistances.push("table: 0000000000630dd0")
resistances.push("table: 0000000000630710")
resistances.push("table: 0000000000630e50")
doc["resistances"] = resistances;
doc["durability"] = 20000;
doc["stack_size"] = 1;
doc["name"] = "power-armor-mk2";
doc["icon"] = "__base__/graphics/icons/power-armor-mk2.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Power-armor-mk2.png";
doc["order"] = "e[power-armor-mk2]";
doc["subgroup"] = "armor";
db.item.insert(doc);

doc = {};
doc["type"] = "armor";
flags = [];
flags.push("goes-to-main-inventory")
doc["flags"] = flags;
resistances = [];
resistances.push("table: 0000000000675a40")
resistances.push("table: 0000000000675ac0")
resistances.push("table: 0000000000675e80")
resistances.push("table: 0000000000675f00")
doc["resistances"] = resistances;
doc["durability"] = 5000;
doc["stack_size"] = 10;
doc["name"] = "heavy-armor";
doc["icon"] = "__base__/graphics/icons/heavy-armor.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Heavy-armor.png";
doc["order"] = "b[heavy-armor]";
doc["subgroup"] = "armor";
db.item.insert(doc);

doc = {};
doc["type"] = "armor";
flags = [];
flags.push("goes-to-main-inventory")
doc["flags"] = flags;
doc["inventory_size_bonus"] = 10;
doc["equipment_grid"] = "small-equipment-grid";
resistances = [];
resistances.push("table: 0000000000652850")
resistances.push("table: 00000000006524d0")
resistances.push("table: 0000000000652510")
resistances.push("table: 0000000000652750")
doc["resistances"] = resistances;
doc["durability"] = 10000;
doc["stack_size"] = 1;
doc["name"] = "modular-armor";
doc["icon"] = "__base__/graphics/icons/modular-armor.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Modular-armor.png";
doc["order"] = "c[modular-armor]";
doc["subgroup"] = "armor";
db.item.insert(doc);

doc = {};
doc["type"] = "armor";
flags = [];
flags.push("goes-to-main-inventory")
doc["flags"] = flags;
doc["inventory_size_bonus"] = 20;
doc["equipment_grid"] = "medium-equipment-grid";
resistances = [];
resistances.push("table: 0000000000647890")
resistances.push("table: 0000000000646e50")
resistances.push("table: 0000000000647910")
resistances.push("table: 0000000000647410")
doc["resistances"] = resistances;
doc["durability"] = 15000;
doc["stack_size"] = 1;
doc["name"] = "power-armor";
doc["icon"] = "__base__/graphics/icons/power-armor.png";
doc["iconurl"] = "https://wiki.factorio.com/images/Power-armor.png";
doc["order"] = "d[power-armor]";
doc["subgroup"] = "armor";
db.item.insert(doc);

db.item.update({name:"repair-pack"}, {$set: {eng_name:"Repair pack"}});
db.item.update({name:"stone"}, {$set: {eng_name:"Stone"}});
db.item.update({name:"wood"}, {$set: {eng_name:"Wood"}});
db.item.update({name:"raw-wood"}, {$set: {eng_name:"Raw wood"}});
db.item.update({name:"copper-ore"}, {$set: {eng_name:"Copper ore"}});
db.item.update({name:"iron-ore"}, {$set: {eng_name:"Iron ore"}});
db.item.update({name:"coal"}, {$set: {eng_name:"Coal"}});
db.item.update({name:"copper-plate"}, {$set: {eng_name:"Copper plate"}});
db.item.update({name:"iron-plate"}, {$set: {eng_name:"Iron plate"}});
db.item.update({name:"steel-plate"}, {$set: {eng_name:"Steel plate"}});
db.item.update({name:"stone-brick"}, {$set: {eng_name:"Stone brick"}});
db.item.update({name:"iron-axe"}, {$set: {eng_name:"Iron axe"}});
db.item.update({name:"steel-axe"}, {$set: {eng_name:"Steel axe"}});
db.item.update({name:"iron-gear-wheel"}, {$set: {eng_name:"Iron gear wheel"}});
db.item.update({name:"iron-stick"}, {$set: {eng_name:"Iron stick"}});
db.item.update({name:"copper-cable"}, {$set: {eng_name:"Copper cable"}});
db.item.update({name:"pistol"}, {$set: {eng_name:"Pistol"}});
db.item.update({name:"submachine-gun"}, {$set: {eng_name:"Submachine gun"}});
db.item.update({name:"vehicle-machine-gun"}, {$set: {eng_name:"Vehicle machine gun"}});
db.item.update({name:"tank-machine-gun"}, {$set: {eng_name:"Vehicle machine gun"}});
db.item.update({name:"rocket-launcher"}, {$set: {eng_name:"Rocket launcher"}});
db.item.update({name:"flame-thrower"}, {$set: {eng_name:"Flamethrower"}});
db.item.update({name:"flame-thrower-ammo"}, {$set: {eng_name:"Flamethrower ammo"}});
db.item.update({name:"flamethrower-turret"}, {$set: {eng_name:"Flamethrower turret"}});
db.item.update({name:"electronic-circuit"}, {$set: {eng_name:"Electronic circuit"}});
db.item.update({name:"advanced-circuit"}, {$set: {eng_name:"Advanced circuit"}});
db.item.update({name:"processing-unit"}, {$set: {eng_name:"Processing unit"}});
db.item.update({name:"light-armor"}, {$set: {eng_name:"Light armor"}});
db.item.update({name:"heavy-armor"}, {$set: {eng_name:"Heavy armor"}});
db.item.update({name:"modular-armor"}, {$set: {eng_name:"Modular armor"}});
db.item.update({name:"power-armor"}, {$set: {eng_name:"Power armor"}});
db.item.update({name:"power-armor-mk2"}, {$set: {eng_name:"Power armor MK2"}});
db.item.update({name:"rocket"}, {$set: {eng_name:"Rocket"}});
db.item.update({name:"explosive-rocket"}, {$set: {eng_name:"Explosive rocket"}});
db.item.update({name:"firearm-magazine"}, {$set: {eng_name:"Firearm magazine"}});
db.item.update({name:"piercing-rounds-magazine"}, {$set: {eng_name:"Piercing rounds magazine"}});
db.item.update({name:"laser-turret"}, {$set: {eng_name:"Laser turret"}});
db.item.update({name:"solar-panel"}, {$set: {eng_name:"Solar panel"}});
db.item.update({name:"fish"}, {$set: {eng_name:"Fish"}});
db.item.update({name:"raw-fish"}, {$set: {eng_name:"Raw fish"}});
db.item.update({name:"computer"}, {$set: {eng_name:"Computer"}});
db.item.update({name:"lab"}, {$set: {eng_name:"Lab"}});
db.item.update({name:"science-pack-1"}, {$set: {eng_name:"Science pack 1"}});
db.item.update({name:"science-pack-2"}, {$set: {eng_name:"Science pack 2"}});
db.item.update({name:"science-pack-3"}, {$set: {eng_name:"Science pack 3"}});
db.item.update({name:"alien-science-pack"}, {$set: {eng_name:"Alien science pack"}});
db.item.update({name:"red-wire"}, {$set: {eng_name:"Red wire"}});
db.item.update({name:"green-wire"}, {$set: {eng_name:"Green wire"}});
db.item.update({name:"alien-artifact"}, {$set: {eng_name:"Alien artifact"}});
db.item.update({name:"speed-module"}, {$set: {eng_name:"Speed module"}});
db.item.update({name:"speed-module-2"}, {$set: {eng_name:"Speed module 2"}});
db.item.update({name:"speed-module-3"}, {$set: {eng_name:"Speed module 3"}});
db.item.update({name:"productivity-module"}, {$set: {eng_name:"Productivity module"}});
db.item.update({name:"productivity-module-2"}, {$set: {eng_name:"Productivity module 2"}});
db.item.update({name:"productivity-module-3"}, {$set: {eng_name:"Productivity module 3"}});
db.item.update({name:"effectivity-module"}, {$set: {eng_name:"Efficiency module"}});
db.item.update({name:"effectivity-module-2"}, {$set: {eng_name:"Efficiency module 2"}});
db.item.update({name:"effectivity-module-3"}, {$set: {eng_name:"Efficiency module 3"}});
db.item.update({name:"shotgun"}, {$set: {eng_name:"Shotgun"}});
db.item.update({name:"combat-shotgun"}, {$set: {eng_name:"Combat shotgun"}});
db.item.update({name:"shotgun-shell"}, {$set: {eng_name:"Shotgun shells"}});
db.item.update({name:"piercing-shotgun-shell"}, {$set: {eng_name:"Piercing shotgun shells"}});
db.item.update({name:"railgun"}, {$set: {eng_name:"Railgun"}});
db.item.update({name:"railgun-dart"}, {$set: {eng_name:"Railgun darts"}});
db.item.update({name:"defender-capsule"}, {$set: {eng_name:"Defender capsule"}});
db.item.update({name:"distractor-capsule"}, {$set: {eng_name:"Distractor capsule"}});
db.item.update({name:"destroyer-capsule"}, {$set: {eng_name:"Destroyer capsule"}});
db.item.update({name:"poison-capsule"}, {$set: {eng_name:"Poison capsule"}});
db.item.update({name:"slowdown-capsule"}, {$set: {eng_name:"Slowdown capsule"}});
db.item.update({name:"grenade"}, {$set: {eng_name:"Grenade"}});
db.item.update({name:"cluster-grenade"}, {$set: {eng_name:"Cluster grenade"}});
db.item.update({name:"discharge-defense-remote"}, {$set: {eng_name:"Discharge defense remote"}});
db.item.update({name:"blueprint"}, {$set: {eng_name:"Blueprint"}});
db.item.update({name:"blueprint-book"}, {$set: {eng_name:"Blueprint book"}});
db.item.update({name:"rail-planner"}, {$set: {eng_name:"Rail planner"}});
db.item.update({name:"deconstruction-planner"}, {$set: {eng_name:"Deconstruction planner"}});
db.item.update({name:"sulfur"}, {$set: {eng_name:"Sulfur"}});
db.item.update({name:"solid-fuel"}, {$set: {eng_name:"Solid fuel"}});
db.item.update({name:"plastic-bar"}, {$set: {eng_name:"Plastic bar"}});
db.item.update({name:"engine-unit"}, {$set: {eng_name:"Engine unit"}});
db.item.update({name:"electric-engine-unit"}, {$set: {eng_name:"Electric engine unit"}});
db.item.update({name:"flying-robot-frame"}, {$set: {eng_name:"Flying robot frame"}});
db.item.update({name:"explosives"}, {$set: {eng_name:"Explosives"}});
db.item.update({name:"battery"}, {$set: {eng_name:"Battery"}});
db.item.update({name:"empty-barrel"}, {$set: {eng_name:"Empty barrel"}});
db.item.update({name:"crude-oil-barrel"}, {$set: {eng_name:"Crude oil barrel"}});
db.item.update({name:"small-plane"}, {$set: {eng_name:"Small plane"}});
db.item.update({name:"coin"}, {$set: {eng_name:"Coin"}});
db.item.update({name:"cannon-shell"}, {$set: {eng_name:"Cannon shell"}});
db.item.update({name:"explosive-cannon-shell"}, {$set: {eng_name:"Explosive cannon shell"}});
db.item.update({name:"tank-cannon"}, {$set: {eng_name:"Tank cannon"}});
db.item.update({name:"low-density-structure"}, {$set: {eng_name:"Low density structure"}});
db.item.update({name:"rocket-fuel"}, {$set: {eng_name:"Rocket fuel"}});
db.item.update({name:"rocket-control-unit"}, {$set: {eng_name:"Rocket control unit"}});
db.item.update({name:"rocket-part"}, {$set: {eng_name:"Rocket part"}});
db.item.update({name:"satellite"}, {$set: {eng_name:"Satellite"}});
db.item.update({name:"stone-path"}, {$set: {eng_name:"Stone path"}});
db.item.update({name:"concrete"}, {$set: {eng_name:"Concrete"}});
db.item.update({name:"hazard-concrete"}, {$set: {eng_name:"Hazard concrete"}});
db.item.update({name:"rail"}, {$set: {eng_name:"Rail"}});
db.item.update({name:"landfill"}, {$set: {eng_name:"Landfill"}});
db.item.update({name:"electric-energy-interface "}, {$set: {eng_name:" Electric energy interface"}});
db.item.update({name:"stone"}, {$set: {eng_name:"Stone"}});
db.item.update({name:"wooden-chest"}, {$set: {eng_name:"Wooden chest"}});
db.item.update({name:"copper-ore"}, {$set: {eng_name:"Copper ore"}});
db.item.update({name:"iron-ore"}, {$set: {eng_name:"Iron ore"}});
db.item.update({name:"coal"}, {$set: {eng_name:"Coal"}});
db.item.update({name:"stone-furnace"}, {$set: {eng_name:"Stone furnace"}});
db.item.update({name:"steel-furnace"}, {$set: {eng_name:"Steel furnace"}});
db.item.update({name:"electric-furnace"}, {$set: {eng_name:"Electric furnace"}});
db.item.update({name:"transport-belt"}, {$set: {eng_name:"Transport belt"}});
db.item.update({name:"fast-transport-belt"}, {$set: {eng_name:"Fast transport belt"}});
db.item.update({name:"express-transport-belt"}, {$set: {eng_name:"Express transport belt"}});
db.item.update({name:"underground-belt"}, {$set: {eng_name:"Underground belt"}});
db.item.update({name:"fast-underground-belt"}, {$set: {eng_name:"Fast underground belt"}});
db.item.update({name:"express-underground-belt"}, {$set: {eng_name:"Express underground belt"}});
db.item.update({name:"loader"}, {$set: {eng_name:"Loader"}});
db.item.update({name:"fast-loader"}, {$set: {eng_name:"Fast loader"}});
db.item.update({name:"express-loader"}, {$set: {eng_name:"Express loader"}});
db.item.update({name:"electric-mining-drill"}, {$set: {eng_name:"Electric mining drill"}});
db.item.update({name:"burner-mining-drill"}, {$set: {eng_name:"Burner mining drill"}});
db.item.update({name:"gun-turret"}, {$set: {eng_name:"Gun turret"}});
db.item.update({name:"rocket-turret"}, {$set: {eng_name:"Rocket turret"}});
db.item.update({name:"laser-turret"}, {$set: {eng_name:"Laser turret"}});
db.item.update({name:"flamethrower-turret"}, {$set: {eng_name:"Flamethrower turret"}});
db.item.update({name:"burner-inserter"}, {$set: {eng_name:"Burner inserter"}});
db.item.update({name:"inserter"}, {$set: {eng_name:"Inserter"}});
db.item.update({name:"long-handed-inserter"}, {$set: {eng_name:"Long handed inserter"}});
db.item.update({name:"fast-inserter"}, {$set: {eng_name:"Fast inserter"}});
db.item.update({name:"filter-inserter"}, {$set: {eng_name:"Filter inserter"}});
db.item.update({name:"stack-inserter"}, {$set: {eng_name:"Stack inserter"}});
db.item.update({name:"stack-filter-inserter"}, {$set: {eng_name:"Stack filter inserter"}});
db.item.update({name:"iron-chest"}, {$set: {eng_name:"Iron chest"}});
db.item.update({name:"steel-chest"}, {$set: {eng_name:"Steel chest"}});
db.item.update({name:"construction-robot"}, {$set: {eng_name:"Construction robot"}});
db.item.update({name:"logistic-robot"}, {$set: {eng_name:"Logistic robot"}});
db.item.update({name:"logistic-chest-active-provider"}, {$set: {eng_name:"Active provider chest"}});
db.item.update({name:"logistic-chest-passive-provider"}, {$set: {eng_name:"Passive provider chest"}});
db.item.update({name:"logistic-chest-storage"}, {$set: {eng_name:"Storage chest"}});
db.item.update({name:"logistic-chest-requester"}, {$set: {eng_name:"Requester chest"}});
db.item.update({name:"beacon"}, {$set: {eng_name:"Beacon"}});
db.item.update({name:"car"}, {$set: {eng_name:"Car"}});
db.item.update({name:"tank"}, {$set: {eng_name:"Tank"}});
db.item.update({name:"straight-rail"}, {$set: {eng_name:"Straight rail"}});
db.item.update({name:"straight-rail-remnants"}, {$set: {eng_name:"Straight rail remnants"}});
db.item.update({name:"curved-rail"}, {$set: {eng_name:"Curved rail"}});
db.item.update({name:"curved-rail-remnants"}, {$set: {eng_name:"Curved rail remnants"}});
db.item.update({name:"offshore-pump"}, {$set: {eng_name:"Offshore pump"}});
db.item.update({name:"small-pump"}, {$set: {eng_name:"Small pump"}});
db.item.update({name:"pipe"}, {$set: {eng_name:"Pipe"}});
db.item.update({name:"pipe-to-ground"}, {$set: {eng_name:"Pipe to ground"}});
db.item.update({name:"diesel-locomotive"}, {$set: {eng_name:"Diesel locomotive"}});
db.item.update({name:"boiler"}, {$set: {eng_name:"Boiler"}});
db.item.update({name:"copper-cable"}, {$set: {eng_name:"Copper cable"}});
db.item.update({name:"small-electric-pole"}, {$set: {eng_name:"Small electric pole"}});
db.item.update({name:"steam-engine"}, {$set: {eng_name:"Steam engine"}});
db.item.update({name:"assembling-machine-1"}, {$set: {eng_name:"Assembling machine 1"}});
db.item.update({name:"assembling-machine-2"}, {$set: {eng_name:"Assembling machine 2"}});
db.item.update({name:"assembling-machine-3"}, {$set: {eng_name:"Assembling machine 3"}});
db.item.update({name:"oil-refinery"}, {$set: {eng_name:"Oil refinery"}});
db.item.update({name:"chemical-plant"}, {$set: {eng_name:"Chemical plant"}});
db.item.update({name:"biter-spawner"}, {$set: {eng_name:"Biter spawner"}});
db.item.update({name:"rocket"}, {$set: {eng_name:"Rocket"}});
db.item.update({name:"land-mine"}, {$set: {eng_name:"Land mine"}});
db.item.update({name:"fish"}, {$set: {eng_name:"Fish"}});
db.item.update({name:"solar-panel"}, {$set: {eng_name:"Solar panel"}});
db.item.update({name:"small-biter"}, {$set: {eng_name:"Small biter"}});
db.item.update({name:"small-biter-corpse"}, {$set: {eng_name:"Small biter corpse"}});
db.item.update({name:"medium-biter"}, {$set: {eng_name:"Medium biter"}});
db.item.update({name:"medium-biter-corpse"}, {$set: {eng_name:"Medium biter corpse"}});
db.item.update({name:"big-biter"}, {$set: {eng_name:"Big biter"}});
db.item.update({name:"behemoth-biter"}, {$set: {eng_name:"Behemoth biter"}});
db.item.update({name:"big-biter-corpse"}, {$set: {eng_name:"Big biter corpse"}});
db.item.update({name:"behemoth-biter-corpse"}, {$set: {eng_name:"Behemoth biter corpse"}});
db.item.update({name:"biter-spawner-corpse"}, {$set: {eng_name:"Biter spawner corpse"}});
db.item.update({name:"small-spitter"}, {$set: {eng_name:"Small spitter"}});
db.item.update({name:"small-spitter-corpse"}, {$set: {eng_name:"Small spitter corpse"}});
db.item.update({name:"medium-spitter"}, {$set: {eng_name:"Medium spitter"}});
db.item.update({name:"medium-spitter-corpse"}, {$set: {eng_name:"Medium spitter corpse"}});
db.item.update({name:"big-spitter"}, {$set: {eng_name:"Big spitter"}});
db.item.update({name:"behemoth-spitter"}, {$set: {eng_name:"Behemoth spitter"}});
db.item.update({name:"big-spitter-corpse"}, {$set: {eng_name:"Big spitter corpse"}});
db.item.update({name:"behemoth-spitter-corpse"}, {$set: {eng_name:"Behemoth spitter corpse"}});
db.item.update({name:"spitter-spawner"}, {$set: {eng_name:"Spitter spawner"}});
db.item.update({name:"spitter-spawner-corpse"}, {$set: {eng_name:"Spitter spawner corpse"}});
db.item.update({name:"radar"}, {$set: {eng_name:"Radar"}});
db.item.update({name:"stone-wall"}, {$set: {eng_name:"Stone wall"}});
db.item.update({name:"gate"}, {$set: {eng_name:"Gate"}});
db.item.update({name:"lab"}, {$set: {eng_name:"Lab"}});
db.item.update({name:"player"}, {$set: {eng_name:"Player"}});
db.item.update({name:"player-port"}, {$set: {eng_name:"Player port"}});
db.item.update({name:"item-on-ground"}, {$set: {eng_name:"Item on ground"}});
db.item.update({name:"small-lamp"}, {$set: {eng_name:"Lamp"}});
db.item.update({name:"space-module-wreck"}, {$set: {eng_name:"Space module wreckage"}});
db.item.update({name:"rocket-silo"}, {$set: {eng_name:"Rocket silo"}});
db.item.update({name:"roboport"}, {$set: {eng_name:"Roboport"}});
db.item.update({name:"splitter"}, {$set: {eng_name:"Splitter"}});
db.item.update({name:"fast-splitter"}, {$set: {eng_name:"Fast splitter"}});
db.item.update({name:"express-splitter"}, {$set: {eng_name:"Express splitter"}});
db.item.update({name:"market"}, {$set: {eng_name:"Market"}});
db.item.update({name:"train-stop"}, {$set: {eng_name:"Train stop"}});
db.item.update({name:"rail-signal"}, {$set: {eng_name:"Rail signal"}});
db.item.update({name:"rail-chain-signal"}, {$set: {eng_name:"Rail chain signal"}});
db.item.update({name:"cargo-wagon"}, {$set: {eng_name:"Cargo wagon"}});
db.item.update({name:"decider-combinator"}, {$set: {eng_name:"Decider combinator"}});
db.item.update({name:"arithmetic-combinator"}, {$set: {eng_name:"Arithmetic combinator"}});
db.item.update({name:"constant-combinator"}, {$set: {eng_name:"Constant combinator"}});
db.item.update({name:"power-switch"}, {$set: {eng_name:"Power switch"}});
db.item.update({name:"big-electric-pole"}, {$set: {eng_name:"Big electric pole"}});
db.item.update({name:"medium-electric-pole"}, {$set: {eng_name:"Medium electric pole"}});
db.item.update({name:"accumulator"}, {$set: {eng_name:"Accumulator"}});
db.item.update({name:"substation"}, {$set: {eng_name:"Substation"}});
db.item.update({name:"small-worm-turret"}, {$set: {eng_name:"Small worm"}});
db.item.update({name:"medium-worm-turret"}, {$set: {eng_name:"Medium worm"}});
db.item.update({name:"big-worm-turret"}, {$set: {eng_name:"Big worm"}});
db.item.update({name:"small-worm-corpse"}, {$set: {eng_name:"Small worm corpse"}});
db.item.update({name:"medium-worm-corpse"}, {$set: {eng_name:"Medium worm corpse"}});
db.item.update({name:"big-worm-corpse"}, {$set: {eng_name:"Big worm corpse"}});
db.item.update({name:"defender"}, {$set: {eng_name:"Defender"}});
db.item.update({name:"distractor"}, {$set: {eng_name:"Distractor"}});
db.item.update({name:"destroyer"}, {$set: {eng_name:"Destroyer"}});
db.item.update({name:"small-remnants"}, {$set: {eng_name:"Small remnants"}});
db.item.update({name:"medium-remnants"}, {$set: {eng_name:"Medium remnants"}});
db.item.update({name:"big-remnants"}, {$set: {eng_name:"Big Remnants"}});
db.item.update({name:"small-scorchmark"}, {$set: {eng_name:"Small scorchmark"}});
db.item.update({name:"wall-remnants"}, {$set: {eng_name:"Wall remnants"}});
db.item.update({name:"storage-tank"}, {$set: {eng_name:"Storage tank"}});
db.item.update({name:"pumpjack"}, {$set: {eng_name:"Pumpjack"}});
db.item.update({name:"energy-shield-equipment"}, {$set: {eng_name:"Energy shield"}});
db.item.update({name:"energy-shield-mk2-equipment"}, {$set: {eng_name:"Energy shield MK2"}});
db.item.update({name:"battery-equipment"}, {$set: {eng_name:"Battery"}});
db.item.update({name:"battery-mk2-equipment"}, {$set: {eng_name:"Battery MK2"}});
db.item.update({name:"solar-panel-equipment"}, {$set: {eng_name:"Portable solar panel"}});
db.item.update({name:"fusion-reactor-equipment"}, {$set: {eng_name:"Portable fusion reactor"}});
db.item.update({name:"personal-laser-defense-equipment"}, {$set: {eng_name:"Personal laser defense"}});
db.item.update({name:"discharge-defense-equipment"}, {$set: {eng_name:"Discharge defense"}});
db.item.update({name:"exoskeleton-equipment"}, {$set: {eng_name:"Exoskeleton"}});
db.item.update({name:"night-vision-equipment"}, {$set: {eng_name:"Nightvision"}});
db.item.update({name:"personal-roboport-equipment"}, {$set: {eng_name:"Personal roboport"}});
db.item.update({name:"accumulator"}, {$set: {iconurl:"https://wiki.factorio.com/images/Basic-accumulator.png"}});
db.item.update({name:"beacon"}, {$set: {iconurl:"https://wiki.factorio.com/images/Basic-beacon.png"}});
db.item.update({name:"rail"}, {$set: {iconurl:"https://wiki.factorio.com/images/Straight-rail.png"}});
db.item.update({name:"transport-belt"}, {$set: {iconurl:"https://wiki.factorio.com/images/Basic-transport-belt.png"}});
db.item.update({name:"underground-belt"}, {$set: {iconurl:"https://wiki.factorio.com/images/Basic-transport-belt-to-ground.png"}});
db.item.update({name:"fast-underground-belt"}, {$set: {iconurl:"https://wiki.factorio.com/images/Fast-transport-belt-to-ground.png"}});
db.item.update({name:"express-underground-belt"}, {$set: {iconurl:"https://wiki.factorio.com/images/Express-transport-belt-to-ground.png"}});
db.item.update({name:"splitter"}, {$set: {iconurl:"https://wiki.factorio.com/images/Basic-splitter.png"}});
db.item.update({name:"personal-laser-defense-equipment"}, {$set: {iconurl:"https://wiki.factorio.com/images/Basic-laser-defense-equipment.png"}});
db.item.update({name:"discharge-defense-equipment"}, {$set: {iconurl:"https://wiki.factorio.com/images/Basic-electric-discharge-defense-equipment.png"}});
db.item.update({name:"exoskeleton-equipment"}, {$set: {iconurl:"https://wiki.factorio.com/images/thumb/Basic-exoskeleton-equipment.png/32px-Basic-exoskeleton-equipment.png"}});
db.item.update({name:"inserter"}, {$set: {iconurl:"https://wiki.factorio.com/images/Inserter-icon.png"}});
db.item.update({name:"stack-filter-inserter"}, {$set: {iconurl:"https://wiki.factorio.com/images/Stack_filter_inserter.png"}});
db.item.update({name:"blueprint-book"}, {$set: {iconurl:"https://wiki.factorio.com/images/Blueprint_book.png"}});
db.item.update({name:"grenade"}, {$set: {iconurl:"https://wiki.factorio.com/images/Basic-grenade.png"}});
db.item.update({name:"cluster-grenade"}, {$set: {iconurl:"https://wiki.factorio.com/images/Cluster_grenade.png"}});
db.item.update({name:"discharge-defense-remote"}, {$set: {iconurl:"https://wiki.factorio.com/images/Basic-electric-discharge-defense-remote.png"}});
db.item.update({name:"electric-mining-drill"}, {$set: {iconurl:"https://wiki.factorio.com/images/Basic-mining-drill.png"}});
db.item.update({name:"light-armor"}, {$set: {iconurl:"https://wiki.factorio.com/images/Basic-armor.png"}});
db.item.update({name:"modular-armor"}, {$set: {iconurl:"https://wiki.factorio.com/images/Basic-modular-armor.png"}});
db.item.update({name:"firearm-magazine"}, {$set: {iconurl:"https://wiki.factorio.com/images/Basic-bullet-magazine.png"}});
db.item.update({name:"piercing-rounds-magazine"}, {$set: {iconurl:"https://wiki.factorio.com/images/Piercing-bullet-magazine.png"}});
