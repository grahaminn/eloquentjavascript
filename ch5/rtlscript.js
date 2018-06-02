function reduce(array, combine, start) {
  let current = start;
  for (let element of array) {
    current = combine(current, element);
  }
  return current;
}

function characterScript(code) {
  for (let script of SCRIPTS) {
    if (script.ranges.some(([from, to]) => {
      return code >= from && code < to;
    })) {
      return script;
    }
  }
  return null;
}

function countBy(items, groupName) {
  let counts = [];
  for (let item of items) {
    let name = groupName(item);
    let known = counts.findIndex(c => c.name == name);
    if (known == -1) {
      counts.push({name, count: 1});
    } else {
      counts[known].count++;
    }
  }
  return counts;
}

function log(output) {
	if (typeof console == 'object') {
                console.log(output);
        }
        else {
                print(output);
        }
}

function dominantDirection(text) {
  let scriptDirection = function(t) {
  	let script = characterScript(t.codePointAt(0));
    return script?script.direction:null;
  };  
  counts = countBy(text, scriptDirection);
        let nc = {name:null, count:0};
        for (let c of counts) {
                if (c.count > nc.count) {
                        nc = c;
                }
        } 
        return nc.name;
}

log(dominantDirection("Hello!"));
log(dominantDirection("Hey, مساء الخير"));
