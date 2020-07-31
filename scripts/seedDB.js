const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://heroku_c6m6cxd1:cv86i11lben30lo8b2ql4baebo@ds161446.mlab.com:61446/heroku_c6m6cxd1");

const bookSeed = {
  authors: ["William Golding"],
  description:
    "As provocative today as when it was first published in 1954, Lord of the Flies continues to ignite passionate debate with its startling, brutal portrait of human nature. William Golding’s compelling story about a group of very ordinary boys marooned on a coral island has been labeled a parable, an allegory, a myth, a morality tale, a parody, a political treatise, and even a vision of the apocalypse. But above all, it has earned its place as one of the indisputable classics of the twentieth century for readers of any age.",
  image:
    "https://books.google.com/books/content?id=r6eoCwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&imgtk=AFLRE73wZh8emKTsOiy-K6i2cWKfvoK3Zlubd2MY21u2Zt5TMnJCtBfUuVkDT9Rj_8ee2WOJY9hvyvKs32h39YWUnUlU31DrW_pSAcRbwrBak5OB1Up43y2U9OyrE0jF6bep-pKoNP1a",
  link:
    "https://books.google.com/books?id=r6eoCwAAQBAJ&newbks=1&newbks_redir=0&printsec=frontcover&dq=lord+of+the+flies&hl=en#v=onepage&q=lord%20of%20the%20flies&f=false",
  title: "Lord of the Flies",
};

db.Book.remove({})
  .then(() => db.Book.collection.insert(bookSeed))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
