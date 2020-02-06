export class Book {
    constructor(title, author, description, pages, currentPage){
        this.title = title;
        this.author = author;
        this.description = description;
        this.pages = pages;
        this.currentPage  = currentPage;
        this.read = false;
    }

    readBook(page){
        console.log("vous etes a la page " + this.currentPage);
        if (page < 0)
            return 0;
        else if(page >= 1 && page < this.pages){
            this.currentPage += page;
            return 1;
        }
        else if(page == this.pages){
            this.read = true;
            this.currentPage = this.pages;
            return 1;
        }
    }
}

let book1 = new Book("test1", "author1", "description1", 56, 5);
let book2 = new Book("test2", "author2", "description2", 225, 0);
let book3 = new Book("test3", "author3", "description3", 12, 11);

export const books = [book1, book2, book3];
