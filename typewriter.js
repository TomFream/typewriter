let sentence = "hello there from lighthouse labs";

const typewriter = function(sentence) {
  sentence = sentence += '\n';
  for (const index in sentence) {
    setTimeout(() => {
      process.stdout.write(sentence[index]);
    }, index * 100);
  }
};

typewriter(sentence);