let table = document.querySelector(".table"); 

let bookList = [];
let bookNumber = 0;

if(window.localStorage.getItem('books')) {
  bookList = JSON.parse(window.localStorage.getItem('books'));
  bookNumber += bookList.length;

  bookList.map(book => {
    let tr = document.createElement('tr');
    for(let prop in book) {
      let td = document.createElement('td');
      td.innerHTML = book[prop];
      tr.append(td);
    };
    table.append(tr);
  });
};

const handleSubmit = (event) => {
  event.preventDefault();

  bookNumber += 1;

  const { title, author, priority, category } = event.target.elements;

  const objBook = {
    id: bookNumber,
    title: title.value,
    author: author.value,
    priority: priority.value,
    category: category.value,
  };

  let tr = document.createElement('tr');
  for(let prop in objBook) {
    let td = document.createElement('td');
    td.innerHTML = objBook[prop];
    tr.append(td);
  };
  table.append(tr);

  bookList.push(objBook);

  window.localStorage.setItem('books', JSON.stringify(bookList));

  let form = document.querySelector(".form");
  form.reset();
};

