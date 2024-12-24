class Library {
    constructor(year, author, title) {
        this.year = year;
        this.author = author;
        this.title = title;
    }
    getdetails() {
        console.log(`Was Written in ${this.year} by ${this.author}. The book is called ${this.title}`);
    }
}

class Book extends Library {
    constructor(year, author, title, genre) {
        super(year, author, title);
        this.genre = genre;
    }
    getbook() {
        console.log(`Genre is ${this.genre}`);
    }
}

class Magazine extends Book {
    constructor(year, author, title, genre, issue) {
        super(year, author, title, genre);
        this.issue = issue;
    }
    getmagazine() {
        console.log(`${this.issue}`);
    }
}
const bookone = new Magazine(1847, "Charlotte Bronte", "Jane Eyre", "romance, social criticism", "Issue number")
bookone.getdetails();
bookone.getbook();
bookone.getmagazine();