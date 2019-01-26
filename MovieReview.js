//MY BOOKSHELF

// drawing shelves
background(163, 128, 93);
var m = 1;
while(m<3)
{
    fill(173, 117, 33);
    rect(-3, 141*m+-22, width, 10);
    m++;
}

//array containing all the info of books in objects
var bookShelf1 = [
    {
        title: "The Book of Negroes", //book 1
        author: "Hill",
        stars: 5,
        recommend: true,
        color: color(166, 63, 104) 
    },
    {
        title: "The Illegal", //book 2
        author: "Hill",
        stars: 3,
        recommend: false,
        color: color(136, 232, 210)
    },
    {
        title: "Harry Potter", //book 3
        author: "Rowling",
        stars: 5,
        recommend: true, 
        color: color(38, 122, 5)
    }
];

//array containing all info on books on 2nd shelf
var bookShelf2 = [
    {
        title: "Paper Towns", //book 4
        author: "Green",
        stars: 4,
        recommend: true,
        color: color(237, 232, 98)
    },
    {
        title: "Hunger Games", //book 5
        author: "Collins",
        stars: 3,
        recommend: true,
        color: color(255, 162, 0)
    },
    {
        title: "The Help", //book 6
        author: "Stockett",
        stars: 5,
        recommend: true,
        color: color(102, 134, 237)
    }
];

//displaying books and their info on shelf 1
for (var j=0; j<bookShelf1.length; j++)
{
        //creating book rectangle
        var printbook = bookShelf1[j];
        fill(printbook.color);
        rect((134*j+18)-6, 14, 88, 106);
        fill(255, 255, 255);
        rect((134*j+18)-6, 16, 84, 104);
        fill(printbook.color);
        rect((134*j+18)-10, 20, 80, 100);
        line((134*j+18)-9, 21, (134*j+18)-4, 16);
        //displaying the book's title
        fill(3, 0, 0);
        text(printbook.title, 134*j+20, 30, 60, 38);
        //displaying the author
        fill(255, 255, 255);
        text(printbook.author, 134*j+20, 63, 60, 20);
        //number of stars given 
        for (var s = 0; s < printbook.stars; s++)
        {
            image(getImage("cute/Star"), 134*j+10+13*s, 89, 16,             30);
        }
        //given an x or a checkmark depending on if I recommend the book
        if (printbook.recommend===true)
        {
            fill(255, 0, 0);
            text("✓", 132*j+15, 82, 20, 30);
        }
        else 
        {
            fill(255, 0, 0);
            text("X", 132*j+15, 82, 27, 42);
        }
}

//displaying books and their info on shelf 2
for (var i=0; i<bookShelf2.length; i++)
{
        //creating book rectangle
        var printbook2 = bookShelf2[i];
        fill(printbook2.color);
        rect((134*i+18)-6, 154, 88, 106);
        fill(255, 255, 255);
        rect((134*i+18)-6, 157, 84, 103);
        fill(printbook2.color);
        rect((134*i+18)-10, 160, 80, 100);
        line((134*i+18)-9, 160, (134*i+18)-4, 154);
        //displaying title
        fill(3, 0, 0);
        text(printbook2.title, 134*i+20, 169, 60, 38);
        fill(255, 255, 255);
        //displaying author
        text(printbook2.author, 134*i+20, 202, 60, 20); 
        //number of stars given 
        for (var s = 0; s < printbook2.stars; s++)
        {
            image(getImage("cute/Star"), 134*i+10+13*s, 230, 20,             30);
        }
        //given an x or a checkmark depending on if I recommend the book
        if (printbook2.recommend===true)
        {
            fill(255, 0, 0);
            text("✓", 137*i+11, 225, 20, 30);
        }
        else
        {
            fill(255, 0, 0);
            text("X", 137*i+11, 225, 20, 30);
        }
}
fill(255, 255, 255);
text("The check-marked books are books that I recommend while the ones with an x are books that I don't recommend.", 10, 327, 386, 40);
