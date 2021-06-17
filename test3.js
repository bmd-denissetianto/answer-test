function findFactor(num) {
  console.log(`The factors of ${num} is:`);

  let total = 0;
  for (let i = 1; i <= num; i++) {
    if (num % i == 0) {
      total = total + 1;
    }
  }

  console.log(total);
}

findFactor(262144);
findFactor(134217728);
