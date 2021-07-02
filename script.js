/* .js files add interaction to your website */
//Array containing 15 facts for the generator
var factArray = ["Bees are responsible for 1/3 of the food we eat.","A honeybee can visit 50-1,000 flowers in one trip, but they're more likely to visit 50-100.","The hexagons that bees make in honeycomb are very efficient - they hold the most honey possible while using the smallest amount of beeswax necessary to make them.","The buzzing sound that bees make is created by the beating of their wings, which they do 200 times per second.","Despite the usage of the phrase 'the bee's knees' in reference to something awesome, bees don't actually have knees but do have jointed legs.","Bee venom can be used to treat conditions like arthritis and high blood pressure.","The honeybee population in the US has declined by 60% since 1947.","There are more than 4,000 species of bees in the US, with over 20,000 worldwide.","Bees are responsible for about 80% of all pollination in the world.","Bees pollinate over 90 crops in the US, including almonds, apples, blueberries, cucumbers, carrots, and onions.","Bees and almonds have a symbiotic relationship - almond blossoms need many visits from bees to be pollinated, and almond pollen is very nutritious for bees, as it has all 10 essential amino acids that bees need.","In the US, 1 in 4 wild bee species is at the risk of extinction.","Hawaii's only native bees, the seven yellow-faced bee species, were listed for protection by the Endangered Species Act in 2016, the first endangered bees in the US.","The first bee species in the continental US to be listed as endangered was the rusty patched bumblebee in 2017.","Bees can recognize and remember human faces."];
console.log(factArray.length);
//creates the variable for the fact to go in the space it's meant to be, designated by the html; factButton creates the variable for the button using the html, and factCount creates the variable to be used for the fact indexing
var fact = document.getElementById("fact");
var factButton = document.getElementById("factButton");
var factCount = 0;
//makes sure that the button shows up/checks that it exists if html takes a while to display because of too much content
if (factButton) {
  factButton.addEventListener("click",displayFact);
}
//function used to display facts when the button is clicked; changes the html value of the fact to show the fact stored at the factCount number index; increments factCount to show the next fact in the array when the button is clicked; conditional checks to see if the array is over, and if so, resets factCount to 0 to start displaying the facts from the beginning again
function displayFact() {
  fact.innerHTML = factArray[factCount];
  factCount += 1;
  if (factCount == factArray.length) {
    factCount = 0;
  }
}
