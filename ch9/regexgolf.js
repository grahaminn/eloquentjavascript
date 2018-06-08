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

verify(/^(\b\w*(e|E)\w*\b)/,
       ["red platypus", "wobbling nest"],
       ["earth bed", "learning ape", "BEET"]);
