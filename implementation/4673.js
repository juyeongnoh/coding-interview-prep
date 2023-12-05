let d = [];
for (let i = 1; i < 10000; i++) {
  let num = i;
  String(i)
    .split("")
    .map(Number)
    .forEach((n) => {
      num += n;
    });
  d.push(num);
}

for (let i = 1; i < 10000; i++) {
  if (d.includes(i)) continue;
  console.log(i);
}
