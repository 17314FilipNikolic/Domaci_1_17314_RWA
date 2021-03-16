

export class Book{
    public title: string;
    public author: string;
    public yearOfPublication: number;
    public container: HTMLElement;
    constructor(title: string, author: string, yearOfPublication: number){
        this.title = title;
        this.author = author;
        this.yearOfPublication = yearOfPublication;
    }
    showInfo(){
        /*console.log(`Naslov: ${this.title}, Autor: ${this.author}, Godina izdavanja: ${this.yearOfPublication}`);*/
        this.container = document.createElement("div");
        this.container.innerHTML = "Naslov: " + this.title + ", Autor: " + this.author + ", Godina izdavanja: " + this.yearOfPublication;
        this.container.className = "book";
        document.body.appendChild(this.container);
    }
}