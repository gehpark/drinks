function Liquid(name, color) {
	this.nam = name;
	this.color = color;
	this.type = null;
	this.ABV = null;
}

// Alcohol
var vodka = new Liquid("Vodka", "#b7adad");
var rum = new Liquid("Rum", "#935b22");
var whiterum = new Liquid("White Rum", "#f5f2f2");
var soju = new Liquid("Soju", "#eefaec");
var whitewine = new Liquid("White Wine", "#f7f7e4");
var redwine = new Liquid("Red Wine", "#a81e00");
var gin = new Liquid("gin", "#f7f7e4");
var peppermint = new Liquid("Peppermint Schnapps", "#fd8484");
var kalhua = new Liquid("kalhua", "#5f4000");
var whiskey = new Liquid("Whiskey", "#986506");
var baileys = new Liquid("Bailey's", "#b17d19");
var tequila = new Liquid("Tequila", "#817878");
var brandy = new Liquid("Brandy ", "#eab817");
var ol= new Liquid("Orange Liqueur", 'Orange');
var triplesec= new Liquid("Triple Sec", '#db5e38');
// var = new Liquid("", '#FFFFFF');

// Mixers
var oj = new Liquid("Orange Juice", "orange");
var grenadine = new Liquid("grenadine","#d93b3b");
var limejuice = new Liquid("Lime Juice", "#9de587");
var sodawater = new Liquid("Soda Water", "#a1c3d6");
var h2o = new Liquid("H2O", '#c2e6ff')
var milk = new Liquid("Milk", "#FFFFFF")
var cream = new Liquid("Cream", "#FFFFFF")
var syrup = new Liquid("Syrup", '#fff300');
var coke = new Liquid("Coke", '#603a07');
var sns= new Liquid("SweetNSour", '#fa56d5');
var gingerbeer = new Liquid("Ginger Beer", '#cb8600');
var lemonade = new Liquid("Lemonade", '#f4ff00');
var cranberryj = new Liquid("Cranberry Juice", '#e31e80');
var yogurt = new Liquid("Yogurt", '#fa8a68');


function Garnish(name) {
	this.nam = name
}
var ice = new Garnish("Ice");
var mint = new Garnish("Mint");
var lime = new Garnish("Lime");
var salt = new Garnish("Salt")

var garlist = ['Ice', 'Mint', 'Lime', 'Salt']
// Recipes
function Recipe(name, ingredients, gar) {
	this.nam = name;
	this.ingredients = ingredients;
	this.gar = gar;
}

var tequilasunrise = new Recipe("Tequila Sunrise", [[tequila, 43], [oj, 33], [grenadine, 23]], []);
var screwdriver = new Recipe("Screwdriver", [[vodka,30], [oj, 70]], []);
var mojito = new Recipe("Mojito", [[limejuice,10], [whiterum,30], [sodawater,60]], [mint, ice]);
var water = new Recipe("Water", [[h2o,100]], []);
var cosmo = new Recipe("Cosmopolitan", [[vodka, 30],[triplesec, 15], [cranberryj, 40], [limejuice, 15]], [ice]);
var whiterussian = new Recipe("White Russian", [[vodka, 20], [kalhua, 20], [milk, 30], [baileys,30]], []);
var cobulldog = new Recipe("Colorado Bulldog", [[vodka, 20], [kalhua, 20], [cream, 30], [coke,30]], []);
var blackrussian = new Recipe("Black Russian", [[vodka, 30], [kalhua, 30], [baileys,40]], []);
var sneakypete = new Recipe("Sneaky Pete", [[whiskey, 20], [kalhua, 20], [baileys,30], [milk, 30]], []);
var moscowmule = new Recipe("Moscow Mule", [[gingerbeer, 65], [vodka, 25], [limejuice, 10]], [lime]);
var rumncoke = new Recipe("Rum and Coke", [[rum, 25], [whiterum, 10], [coke, 65]], []);
var margarita = new Recipe("Margarita", [[tequila, 30], [limejuice, 20], [syrup, 20], [ol, 5], [lemonade, 20]], [ice]);
var lemondrop = new Recipe("Lemon Drop", [[lemonade, 75],[vodka, 25]], [ice]);
var longisland = new Recipe("Long Island Tea", [[vodka, 17], [whiterum, 17], [gin, 20] ,[tequila, 15] ,[lemonade, 10] ,[coke, 15]], []);
var red= new Recipe("Red Wine", [[redwine,100]], []);
var white= new Recipe("White Wine", [[whitewine, 100]], []);
var yogsoju= new Recipe("Yogurt Soju", [[yogurt, 50],[soju, 50]], []);
//var = new Recipe("", [], []);

var drinks = [tequilasunrise, screwdriver, mojito, cosmo, whiterussian, cobulldog, blackrussian, sneakypete, moscowmule, rumncoke, margarita, lemondrop, longisland, red, white, yogsoju];
