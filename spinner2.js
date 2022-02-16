const spinArr = ["\r|", "\r/", "\r-", "\r\\", "\r|", "\r/", "\r-", "\r\\", "\r|"];
let duration = 0;
for (let elm of spinArr) {
  setTimeout(() => {
  process.stdout.write(elm);
  }, duration += 200);
};