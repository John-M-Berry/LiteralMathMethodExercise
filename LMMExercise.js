// 1A
let warmHugs="Hi, I'm Olaf and I like warm hugs.";
// 1B
console.log(warmHugs.toUpperCase());
// 1C
console.log(warmHugs.replace("like", "love"));
warmHugs=(warmHugs.replace("like", "love"));
console.log(warmHugs);
// 2A
let beenImpaled="Oh, look at that. I've been impaled.";
// 2B
console.log(beenImpaled.slice(beenImpaled.indexOf("I")));
// 3A
let dotDotDot="...";
// 3B
let skullBones=`I don't have a skull${dotDotDot}or bones.`;
console.log(skullBones);
// 4
console.log(Math.PI);
//  5
let randomNumber=Math.random();
console.log(randomNumber);
randomNumber*=3;
console.log(randomNumber);
randomNumber=Math.floor(randomNumber);
console.log(randomNumber);
randomNumber++
console.log(randomNumber);

// BONUS 6

console.log(" Let It Go!".repeat(2).trim().toUpperCase());

// BONUS 7A
let reindeers="Reindeers are better than people."

// BONUS 7B
reindeers=reindeers.replace(/ /g,"_")
console.log(reindeers);

// BONUS 8
console.log(Math.sqrt(2));
let num=2
console.log(2**(1/2));

// BONUS 9
let newRandomNumber=Math.floor(Math.random() * 17) + 7;

console.log(newRandomNumber);
