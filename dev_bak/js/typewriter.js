const titles = ["Consultant", "Engineer", "Doctor", "Teacher"];
let index = 0;

setInterval(() => {
  const title = titles[index];
  const article = 'aeiou'.includes(title[0].toLowerCase()) ? 'an' : 'a';
  document.querySelector('#article').textContent = article;
  document.querySelector('#title').textContent = title;
  index = (index + 1) % titles.length;
}, 2000);
