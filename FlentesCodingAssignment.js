// Input file path
const inputFile = './input.txt';
// Read input File and pass to main method
fs = require('fs');
fs.readFile(inputFile, 'utf8', function (err, input) {
  if (err) {
    return console.log(err);
  }
  // Sanitize input
  input = input.replace(/([^0-9\n\s]*)/g, '');
  input = input.replace(/([\r]*)/g, '');
  // Send arrayed input (split by new line) to main
  main(input.split('\n'));
});

function main(input) {
  let T = parseInt(input[0]); // Test cases
  // Iterate for each testcase
  for (let line = 1; line < input.length; line += 2) {
    const N = parseInt(input[line]); // no of people
    let A = input[line + 1].split(' ').map((cost) => parseInt(cost)); // cost array
    // create 2d array dynamicArr for dynamic prog
    let dynamicArr = new Array(1 << 20);
    for (let i = 0; i < dynamicArr.length; i++) {
      dynamicArr[i] = new Array(2);
    }
    for (let i = 0; i < 1 << 20; i++) {
      dynamicArr[i][0] = -1;
      dynamicArr[i][1] = -1;
    }
    let mask = (1 << N) - 1;
    // Print Min cost for this test case
    console.log(calculateMinCost(mask, 0, A, dynamicArr));
  }
}
// Function to calculate min cost
function calculateMinCost(mask, direction, A, dynamicArr) {
  let n = A.length;
  // nobody left to go
  if (mask === 0) return 0;

  if (dynamicArr[mask][direction] !== -1) return dynamicArr[mask][direction];

  let transferredMask = ((1 << n) - 1) ^ mask;
  let res = 0;

  // transfer from dest to start
  if (direction === 1) {
    let minRow = Number.MAX_SAFE_INTEGER;
    let person = 0;
    for (let i = 0; i < n; i += 1) {
      // chose person with smallest cost to cross
      if ((transferredMask & (1 << i)) > 0) {
        if (minRow > A[i]) {
          person = i;
          minRow = A[i];
        }
      }
    }
    // now send this man to dest and solve for smaller probs
    res =
      A[person] +
      calculateMinCost(mask | (1 << person), direction ^ 1, A, dynamicArr);
  } else {
    // Count bits in mask
    if (countBits(mask) == 1) {
      for (let i = 0; i < n; i += 1) {
        // since only 1 person on start, return him/her
        if ((mask & (1 << i)) != 0) {
          res = a[i];
          break;
        }
      }
    } else {
      // solve for each pair and find min time
      res = Number.MAX_SAFE_INTEGER;
      for (let i = 0; i < n; i += 1) {
        // Do nothing if ith person not on right side
        if ((mask & (1 << i)) == 0) continue;
        // find another person to try cross bridge
        for (let j = i + 1; j < n; j += 1) {
          if ((mask & (1 << j)) > 0) {
            // time taken by current pair to cross bridge
            let val = Math.max(A[i], A[j]);
            // solve for even smaller probs
            val += calculateMinCost(
              mask ^ (1 << i) ^ (1 << j),
              direction ^ 1,
              A,
              dynamicArr
            );
            // ans update
            res = Math.min(res, val);
          }
        }
      }
    }
  }
  return (dynamicArr[mask][direction] = res);
}

function countBits(n) {
  let nn = n;
  let count = 0;
  while (n > 0) {
    if ((n & 1) == 1) count++;
    n = n / 2;
  }
  n = nn;
  return count;
}
