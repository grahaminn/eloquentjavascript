verify(/ca(r|t)/,
       ["my car", "bad cats"],
       ["camper", "high art"]);

verify(/p(o|ro)p/,
       ["pop culture", "mad props"],
       ["plop", "prrrop"]);

verify(/ferr(et|ari|y)/,
       ["ferret", "ferry", "ferrari"],
       ["ferrum", "transfer A"]);

verify(/\w+ious\b/,
       ["how delicious", "spacious room"],
       ["ruinous", "consciousness"]);

verify(/\s(,|\.|:|;)/,
       ["bad punctuation ."],
       ["escape the period"]);

verify(/\w{6,}/,
       ["hottentottententen"],
       ["no", "hotten totten tenten"]);

verify(/(\b[abcdfghijklmnopqrstuvwxyz]+\b)/i,
       ["red platypus", "wobbling nest"],
       ["earth bed", "learning ape", "BEET"]);

function verify(regexp, yes, no) {
  // Ignore unfinished exercises
  if (regexp.source == "...") return;
  failed = false;
  for (let str of yes) if (!regexp.test(str)) {
    failed = true;
    console.log(`Failure to match '${str}'`);
  }
  for (let str of no) if (regexp.test(str)) {
    failed = true;
    console.log(`Unexpected match for '${str}'`);
  }
  if (!failed) {
    console.log("Passed!");
  }
}


