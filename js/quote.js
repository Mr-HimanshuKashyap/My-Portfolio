var data={ "notes": [
  {
    "title": "Carrying the Fire",
    "author": 'Louis L’Amour',
    "quote": "Start writing, no matter what. The water does not flow until the faucet is turned on"
  },
  {
    "title" : "Kitchen Confidential",
    "author": "William Faulkner",
    "quote": "Get it down. Take chances. It may be bad, but it's the only way you can do anything really good."
  },
  {
    "title" : "Oracle Night",
    "author": "Terry Pratchett",
    "quote": "The first draft is just you telling yourself the story."
  },
  {
    "title": "The Sirens of Titan",
    "author": "Octavia E. Butler",
    "quote": "You don’t start out writing good stuff. You start out writing crap and thinking it’s good stuff, and then gradually you get better at it."
  },
  {
    "title": "The Martian",
    "author": "Steven Pressfield",
    "quote": "Start before you’re ready."
  },
  {
    "title": "The Food Traveler&rsquo;s Handbook",
    "author": " Jodi Picoult",
    "quote": "You can always edit a bad page. You can’t edit a blank page"
  },
  {
    "title": "The Lathe of Heaven",
    "author": "Jack London",
    "quote": "You can’t wait for inspiration. You have to go after it with a club."
  },
  {
    "title": "Verdigris Deep",
    "author": "Robert Frost",
    "quote": "I have never started a poem yet whose end I knew. Writing a poem is discovering."
  },
  {
    "title": "Coraline",
    "author": "Toni Morrison",
    "quote": "If there's a book that you want to read, but it hasn't been written yet, then you must write it."
  },
  {
    "title": "The Getting of Wisdom",
    "author": "Shannon Hale",
    "quote": "I'm writing a first draft and reminding myself that I'm simply shoveling sand into a box so that later I can build castles"
  },
  {
    "title": "Inspector Singh Investigates: A Most Peculiar Malaysian Murder",
    "author": "Ruth Rendell",
    "quote": "I get a lot of letters from people. They say, I want to be a writer. What should I do? I tell them to stop writing to me and get on with it."
  },
  {
    "title": "Henry VI, Part 1",
    "author": "Stephen King",
    "quote": "Description begins in the writer’s imagination but should finish in the reader’s"
  },
  {
    "title": "When Heaven and Earth Changed Places",
    "author": "Stephen King",
    "quote": "If you want to be a writer, you must do two things above all others: read a lot and write a lot."
  },
  {
    "title": "Henry VI, Part 2",
    "author": "William Shakespeare",
    "quote": "The first thing we do, let's kill all the lawyers."
  },
  {
    "title": "Inspector Singh Investigates: A Bali Conspiracy Most Foul",
    "author": "C. J. Cherryh",
    "quote": "It is perfectly okay to write garbage as long as you edit brilliantly."
  },
  {
    "title": "'Just a Human Being' and Other Tales from Contemporary Cambodia",
    "author": "Mike Rich",
    "quote": "Write your first draft with your heart. Rewrite with your head."
  }, 
  {
    "title": "The Latehomecomer: A Hmong Family Memoir",
    "author": "Douglas Adams",
    "quote": "I love deadlines. I like the whooshing sound they make as they fly by."
  },
  {
    "title": "Henry VI, Part 3",
    "author": "Malcolm X",
    "quote": "If you have no critics, you’ll likely have no success."
  },
  {
    "title": "Shadow and Bone",
    "author": "Somerset Maugham",
    "quote": "If you can tell stories, create characters, devise incidents, and have sincerity and passion, it doesn’t matter a damn how you write."
  },
  {
    "title": "Siege and Storm",
    "author": "Leigh Bardugo",
    "quote": "The less you say, the more weight your words will carry."
  },
  {
    "title": "Ruin and Rising",
    "author": "Wally Lamb",
    "quote": "If the book is true, it will find an audience that is meant to read it."
  },
  {
    "title": "Outlander",
    "author": "Margaret Atwood",
    "quote": "If I waited for perfection, I would never write a word."
  },
  {
    "title": "Dragonfly in Amber",
    "author": "Lady Gaga",
    "quote": "Ignore all hatred and criticism. Live for what you create, and die protecting it."
  },
  {
    "title": "Voyager",
    "author": "Albert Einstein",
    "quote": "Imagination is everything. It is the preview of life’s coming attractions."
  },
  {
    "title": "Drums of Autumn",
    "author": "C. J. Cherryh",
    "quote": "It is perfectly okay to write garbage—as long as you edit brilliantly."
  },
  {
    "title": "Richard III",
    "author": "William Faulkner",
    "quote": "Get it down. Take chances. It may be bad, but it's the only way you can do anything really good."
  }
 ]
};

function randomize() {
  var range = data.notes.length;
  var random_index = Math.floor(Math.random() * range);
  var item = data.notes[random_index];
  
  $('.quote-content').html(item.quote); 
  // $('.quote-book').html(item.title);
  $('.quote-author').html(item.author);
}

function getQuote() {
  var $button = $('.next')

  $button.on('click', randomize);
}

$(document).ready(function() {
  randomize();
  getQuote();
});
