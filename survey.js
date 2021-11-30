const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What\'s your name? Nicknames are also acceptable ', (answer) => {
  console.log(`Hi, ${answer}`);
  rl.question('What\'s an activity you like doing? ', (answer1) => {
    console.log(`Great, ${answer1} is super fun`);
    rl.question('What do you listen to while doing that? ', (answer2) => {
      console.log(`${answer2} is pretty good`);
      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.) ', (answer3) => {
        console.log(`${answer3} is my favourite too`);
        rl.question('What\'s your favourite thing to eat for that meal? ', (answer4) => {
          console.log(`${answer4} is delicious`);
          rl.question('Which sport is your absolute favourite? ', (answer5) => {
            console.log(`${answer5} is cool`);
            rl.question('What is your superpower? In a few words, tell us what you are amazing at! ', (answer6) => {
              console.log(`Wow, ${answer6}, that sounds awesome`);
              console.log(`${answer} loves listening to ${answer2} while ${answer1}, devouring ${answer4} for ${answer3}, prefers ${answer5} over any other sport, and is amazing at ${answer6}.`);

              rl.close();
            });
          });
        });
      });
    });
  });
});