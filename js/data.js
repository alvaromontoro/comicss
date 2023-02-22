const posts = [
  {
    id: 1,
    uid: "flexing",
    boxes: 2,
    title: "Flexing",
    ariaLabel: "A cartoon with two panels. In the first one, there's a black-and-white character small in the box, and says 'sometimes I feel quite small'. In the second panel, the character looks big in the box, and says 'then I flex a little'"
  },
  {
    id: 2,
    uid: "word-breaking",
    boxes: 1,
    title: "Word Breaking",
    ariaLabel: "A cartoon with one panel. A serious-looking black-and-white character over the repeating message 'The world is a really peculiar place. There are times when you feel like break-dancing, and some other times, when you just feel like word-breaking...'"
  },
  {
    id: 3,
    uid: "lioncorn",
    boxes: 1,
    title: "Look I'm a unicorn!",
    video: "3MIMN8fUPUU",
    ariaLabel: "Cartoon showing a lion with a unicorn hat saying 'I am a unicorn! Roar!... and so forth'. And an ashamed unicorn smiling next to it."
  },
  {
    id: 4,
    uid: "unilion",
    boxes: 1,
    title: "Look I'm a lion!",
    video: "3MIMN8fUPUU",
    ariaLabel: "Cartoon showing a unicorn with a lion mane wig hat saying 'I am a lion! Roar!... and so forth'. And an ashamed lion smiling next to it."
  },
  {
    id: 5,
    uid: "barbershop",
    boxes: 2,
    title: "At the barbershop",
    ariaLabel: "A comic strip with two panels showing a barber with a razor and a client. In the first one, the barber asks 'do you prefer the neckline square or rounded?'. In the second one, the client replies 'border-radius: 100% / 20%' to the surprise of the barber."
  },
  {
    id: 6,
    uid: "texas-freeze-i",
    boxes: 2,
    title: "Texas Freeze (I)",
    ariaLabel: "Comic strip with two panels. The first one reads: 'A cold front approaches Texas... again...'' and it has a white man reading a text message on his phone: *message from parents* It is freezing in Texas. What are you doing to stay warm?. In the second panel, the man replies: Don't worry. I'm fine. I'm holding a laptop and opened one of my CSS animations."
  },
  {
    id: 7,
    uid: "texas-freeze-ii",
    boxes: 2,
    title: "Texas Freeze (II)",
    ariaLabel: "Comic strip with two panels. The first one reads: 'A cold front approaches Texas... again...' and it has a white man reading a text message on his phone: *message from parents* Temperatures will drop to the single digits. In the second panel, the man replies: Got it! Then I'll open the 3D animations."
  },
  {
    id: 8,
    uid: "texas-freeze-iii",
    boxes: 2,
    title: "Texas Freeze (III)",
    ariaLabel: "Comic strip with two panels. The first one reads: 'A cold front approaches Texas... again...' and it has a white man reading a text message on his phone: *message from parents* This is serious!! It could get really cold!!!. In the second panel, the man replies: Ok, ok. I'll use Chrome to open the animations."
  },
  {
    id: 9,
    uid: "accessory",
    boxes: 2,
    title: "You cannot write...",
    ariaLabel: "Comic strip with two panels. The first one shows a white man saying: 'You cannot write accessibility without CSS'. The second panel is a view of the same white man from behind, he is holding a blood-soaked knife and says: nor accessory to murder... but let's put a display:none on that one for now."
  },
  {
    id: 10,
    uid: "impossible-love",
    boxes: 1,
    title: "Their love was impossible",
    vertical: true,
    video: "0FxH1GdRLWs",
    ariaLabel: "Comic strip with a single panel showing a fly and a spider smiling at each other with a heart in between"
  },
  {
    id: 11,
    uid: "superherocss",
    boxes: 2,
    title: "Superheroes.css",
    ariaLabel: "Comic strip showing CSS code that describes different comic superheroes. The code is too long to put in an alt text, please see the demo."
  },
  {
    id: 12,
    uid: "pikachu",
    boxes: 1,
    title: "Surprised Pikachu",
    vertical: true,
    ariaLabel: "Comic strip showing the surprised Pikachu meme, with the text: Me: *builds CSS animation*. *Computer fan goes crazy*"
  },
  {
    id: 13,
    uid: "scroll-snap",
    boxes: 6,
    title: "Scroll Snap",
    vertical: true,
    video: "vLVBlxXD2dw",
    ariaLabel: "Comic strip with 6 stacked panels. The first, third, and fifth one show a man scrolling a mouse in front of the computer. The second and fourth show the man snapping his fingers. The sixth shows the man worried as someones says 'that's not how you do scroll snap!'"
  },
  {
    id: 14,
    uid: "accent-color",
    boxes: 5,
    title: "Accent Colors",
    vertical: true,
    video: "i_B6LI2fq2Y",
    ariaLabel: "Comic strip with 5 panels showing a white man getting angrier and angrier while updating the color value on CSS to verde, grün, vert, and зелений. In the final panel he asks 'Hey, honey! How did you say accent-color worked in CSS?'"
  },
  {
    id: 15,
    uid: "democracy",
    boxes: 1,
    vertical: true,
    title: "My CSS is to development",
    video: "icKWKEcsAIE",
    ariaLabel: "Cartoon of a man looking at a laptop and saying 'My CSS is to Web Development what Communism is to Democracy!' (based on a classic Mafalda cartoon)"
  },
  {
    id: 16,
    uid: "fastest",
    boxes: 3,
    vertical: true,
    title: "Fast, Faster, Fastest",
    ariaLabel: "Cartoon with 3 panels. The first one shows the IE11 logo crossing a finish line. The second panel shows the IE logo taunting 'SUCK IT, LOSERS!! I WON!!! IE IS THE FASTEST!! IE IS THE BEST!!!!' at other browsers logos that discuss about who will talk to IE. In the third and last panel, the Chrome logo is whispering to IE logo's ear. The IE logo looks shocked and says: 'What do you mean Rio was over six years ago?.... Tokyo? That's like 11,000 miles away!'"
  },
  {
    id: 17,
    uid: "debate",
    horizontal: true,
    boxes: 4,
    title: "2022 CSS Presidential Debate",
    ariaLabel: "Comic strip with 4 panels. The first one has the title '2022 CSS Presidential Debate', there are two comentators and one says 'next question is for both candidates: what is the main issue impacting CSS today?' In the second panel, one candidate replies 'Definitely, the lack of support of key features by some browsers', the other candidate goes in a non-sensical attack to the first candidate using a lot of CSS terms. In the third panel, the second candidate floods the conversation with his nonsensical speech while the first candidate looks confused and says 'wait... what? are you just chaining random CSS keywords?'. In the last panel, the moderators are back and one says smiling: 'Wow! I dont want to influence people, but I think we have a clear winner.'"
  },
  {
    id: 18,
    uid: "ghost-costume",
    vertical: true,
    boxes: 4,
    title: "Ghost Costume",
    ariaLabel: "Comic strip with 4 panels. The first one shows the IE logo dressed up with a white blanket on top and saying 'Hey!' to a confused Chrome logo that says 'Errr.... hello?' and murmurs 'is it summer already?'. The second panel shows the IE logo saying 'sup?' to a scary-looking Safari logo yelling AIEEEE! In the third panel, the IE logo says 'morning' to the Opera logo that looks intrigued saying 'What the...'. In the final panel, the IE logo smiles happily saying 'Wow! my new ghost costume is going to kill it this Halloween', while a conversation happens off-panel: 'Halloween?', 'Mhmm', 'But June 15', 'I know', 'We need to tell IE', 'Why? Look how happy it is', 'But...', 'No!'"
  },
  {
    id: 19,
    uid: "eeny-meeny-miny-moe",
    vertical: true,
    boxes: 4,
    title: "Eeny Meeny Miny Moe",
    ariaLabel: "Cartoon with the lyrics of the song 'Eeny, meeny, miny, moe. Catch a tiger by the toe. If he hollers, let him go. Eeny, meeny, miny, moe!' printed over different browser logos (with scared faces): Chrome, Samsung Internet, Opera, Yandex, Maxthon, Tor, Vivaldi, and Safari (where there the song ends). In the last panel, a bubble has the text 'It is decided! Safari, from now on, youll be known as The New IE' And a crying Safari logo replies 'But... but... I am a fine browser. I am not as bad as before, I support many things... please... I support Lab and LCH... container queries... cascade layers... I swear, 15.4 is amazing... Dont do this to me...' And in a corner of the panel the IE logo says from a distance 'Hey, friends, Not trying to rain on your parade, but... I am still alive, you know?' and a voice in off says 'shut up, IE!'"
  },
  {
    id: 20,
    uid: "private",
    boxes: 2,
    title: "A Very Private Browser",
    ariaLabel: "Cartoon with two panels. The first one shows the Chrome and Safari browser logos talking. Chrome says: 'So... what do we know about the new guy?' and Safari replies 'Not much...'. In the second panel, the Tor logo is covered with sun glasses, a coat and a hat. The Safari logo continues talking: 'but you can tell they are really private'"
  },
  {
    id: 21,
    uid: "animation-train",
    boxes: 5,
    vertical: true,
    title: "Animation Train",
    ariaLabel: "Cartoon with 5 panels divided in two parts, one showing CSS code and the other a landscape with a train. The first panel code is an animation from left 0 to 100% applied to an element of class .train with a duration of 8s. The second panel is for a #Japan .train, the duration is 0.7 the regular duration. The third panel is for a #USA .train, the duration is 1.5 the regular duration. The fourth panel is for a #Iceland .train, it has a display none and no train is displayed. The last panel is for #UK .train, it has am animation delay of 2s and the animation-play-state is 'paused'."
  },
  {
    id: 22,
    uid: "grandpa",
    boxes: 1,
    title: "Grandpa Browser",
    ariaLabel: "Cartoon showing the Netscape Navigator logo using a walker and saying 'And for a while, I was the most popular browser on the Internet. Even more than IE! And everyone loved my cool icon animation with shooting stars...'. The Chrome logo is helping and rolling its eyes says 'Sure, grandpa. Now let's get you to bed...'"
  },
  {
    id: 23,
    uid: "css-artists",
    boxes: 5,
    title: "Types of CSS Artists",
    ariaLabel: "Recognize the CSS artist by their style!"
  },
  {
    id: 24,
    uid: "the-slap",
    boxes: 4,
    // horizontal: true,
    title: "The Slap",
    ariaLabel: "Cartoon with 4 panels similar to a previous cartoon by Stephan Pastis. In the first panel two men are talking: 'hey, Al! What are you doing?' and 'Drawing a silly joke about this devs wife who has some weird styles on a main element'. The second panel has Will Smith slapping the man that said the last part (who drops to the floor). In the third panel (outside of frame), Will Smith yells 'Keep my wifes main out of your [expletive] mouth!'. In the last panel, the first man says to the one on the floor: 'There is a lesson in all this, but I fear it may not be the one you think'."
  },
  {
    id: 25,
    uid: "soy-milk-i",
    boxes: 4,
    vertical: true,
    title: "Soy Milk (I)",
    video: "0Aqid1I6vFE",
    ariaLabel: "Cartoon showing a cute milk carton and a stick of butter. The milk says 'Hi, Soy Milk' and the butter replies 'Hola, soy Mantequilla'"
  },
  {
    id: 26,
    uid: "soy-milk-ii",
    boxes: 4,
    vertical: true,
    video: "0Aqid1I6vFE",
    title: "Soy Milk (II)",
    ariaLabel: "Cartoon showing a cute soy milk carton and a stick of butter. The butter says 'Hi, Soy Milk' and the butter replies 'No, tu eres Mantequilla'"
  },
  {
    id: 27,
    uid: "soy-milk-3d",
    boxes: 4,
    vertical: true,
    video: "Hme50KUMqZY",
    title: "Soy Milk (3D)",
    ariaLabel: "Cartoon showing a cute soy milk carton and a stick of butter. The butter says 'Hi, Soy Milk' and the butter replies 'No, tu eres Mantequilla'"
  },
  {
    id: 28,
    uid: "cross-stitch",
    boxes: 2,
    vertical: true,
    title: "Cross-Stitch",
    ariaLabel: "Cartoon with two panels. The first one shows a nice cross-stitch pattern that reads CSStitch ART, with the legend 'how the web page looks like'. The second panel is the back of the cross-stitch, really messy, and a legend says 'how the CSS code actually looks like'"
  },
  {
    id: 29,
    uid: "combinators",
    boxes: 5,
    horizontal: true,
    title: "Four Combinators walk into a bar...",
    ariaLabel: "Cartoon with 5 stacked panels. All panels show a bar with 4 stools with people, a CSS combinator saying 'hey waiter! our next round on me!', and another 4 stools with people. In the first panel, the child combinator (>) invites to the rounds and someone off-panel says 'thanks, dad!'. In the second panel, the adjacent sibling combinator (+) invites to the next round, and the person to its right says 'thanks, bro'. In the third panel, the general sibling combinator (~) invites to the next round, and all the people to its right yell 'woohoo!, Thank you, dude!'. In the fourth panel, the universal selector (*) invites to the next round and all the people in the panel (to its right and left) start celebrating. In the final panel, the column combinator (||) invites to the next round, and the other combinators (off-panel) say 'Thank you!'"
  },
  {
    id: 30,
    uid: "electronic-party",
    boxes: 2,
    title: "Electronic Party",
    ariaLabel: "Cartoon with 5 stacked panels. All panels show a bar with 4 stools with people, a CSS combinator saying 'hey waiter! our next round on me!', and another 4 stools with people. In the first panel, the child combinator (>) invites to the rounds and someone off-panel says 'thanks, dad!'. In the second panel, the adjacent sibling combinator (+) invites to the next round, and the person to its right says 'thanks, bro'. In the third panel, the general sibling combinator (~) invites to the next round, and all the people to its right yell 'woohoo!, Thank you, dude!'. In the fourth panel, the universal selector (*) invites to the next round and all the people in the panel (to its right and left) start celebrating. In the final panel, the column combinator (||) invites to the next round, and the other combinators (off-panel) say 'Thank you!'"
  },
  {
    id: 31,
    uid: "superherocss-v2",
    boxes: 2,
    title: "Superhero.CSS v2.0",
    ariaLabel: "Cartoon with CSS code used to describe different superheroes"
  },
  {
    id: 32,
    uid: "justify-content",
    boxes: 6,
    horizontal: true,
    title: "justify-content",
    video: "KX8hr2QksXA",
    ariaLabel: "Cartoon with six panels showing the different values of justify-content by placing the eyes of a cartoon character in different positions."
  },
  {
    id: 33,
    uid: "cssoomba",
    boxes: 3,
    vertical: true,
    title: "CSSoomba",
    ariaLabel: "Cartoon with three panels. The firs one has some verbose CSS code. The second one shows a Roomba with the text CSSoomba going over the code. The third panel has the same code as the first panel but in a less verbose way."
  },
  {
    id: 34,
    uid: "integrate",
    boxes: 1,
    vertical: true,
    video: "X7v5BUryOxo",
    title: "Integrate",
    ariaLabel: "Cartoon showing mathematical expressions 'a' and 'x to the square' saying 'Cmon mate!  Join the party! Integrate!' to another mathematical expression 'e to the power of x' that replies 'What's the point? it will be the same'"
  },
  {
    id: 35,
    uid: "decaf",
    boxes: 2,
    horizontal: true,
    title: "Decaf",
    ariaLabel: "Cartoon with 2 panels. The first one shows two people talking. One says: the 'CSS is not a programming language are really quiet lately'. The other one replies: 'I know!', and in the second panel he adds 'I switched the coffee with decaf'. In the background there's a room full of people sleeping."
  },
  {
    id: 36,
    uid: "flex-pikachu",
    vertical: true,
    boxes: 3,
    title: "Flex Pikachu",
    ariaLabel: "Cartoon with three panels, all of them showing the Surprised Pikachu meme. The first one is 'regular'. The second one has all the face elements in a row and has the title 'after adding flex'. The third panel has all the face elements in a column and has the title 'after adding flex-direction:column'"
  },
  {
    id: 37,
    uid: "blend-in",
    horizontal: true,
    boxes: 6,
    title: "Blend in",
    ariaLabel: "Cartoon with 6 panels showing a minimalistic character that says 'Sometimes I feel awkward and out of place... then I try to blend in... until... no on... can barely... see me.'. Different mix-blend-modes have been applied to the character so in each panel it looks more transparent or with grayer/paler colors."
  },
  {
    id: 38,
    uid: "roses-are-f00",
    boxes: 1,
    vertical: true,
    title: "Roses are #f00",
    ariaLabel: "Roses are #FF0000. Violets are #EE82EE. If you see them #0000FF, you may need glasses."
  },
  {
    id: 39,
    uid: "not-important",
    boxes: 3,
    vertical: true,
    title: "Not Important",
    ariaLabel: "Cartoon with three panels. The first two show a white man in front of a computer with the text: 'A back-end software developer merrily working on a front-end project with HTML and CSS, getting confused af because the color of the text is not correct. Even when he clearly specified that the text color should be blue, because the orange value is not important' Followed by some CSS code where a paragraph has the style color: orange !important;"
  },
  {
    id: 40,
    uid: "magic-trick",
    boxes: 1,
    vertical: true,
    title: "Magic Trick",
    ariaLabel: "Cartoon of a magician with the text: 'Visit the code to see this interactive magic trick in action. Will The Great Al guess your card?'"
  },
  {
    id: 41,
    uid: "the-death-of-ie",
    boxes: 9,
    vertical: true,
    title: "The Death of IE",
    ariaLabel: "Cartoon page divided in 3 sections with multiple panels each. In the first section, IE is dead and the rest of the browsers get together to honor it. In the second section, two suited men (Big and Corp) visit the necromancer asking to bring IE back to life because it's their favorite way of torturing employees. In the last section, IE is back as a ghost, the other browsers run scared to IE despair, and the ghost of the Flash logo tries to cheer IE up... to be continued?"
  },
  {
    id: 42,
    uid: "moses-flexing-the-read-sea",
    boxes: 1,
    vertical: true,
    title: "Moses Flexing the Red Sea",
    ariaLabel: "Cartoon of a man (Moses) wearing a tunic and holding a stick between a body of water parted in two. He is saying '#red.sea { display: flex; justify-content: space-between; }'"
  },
  {
    id: 43,
    uid: "pandoras-box-model",
    boxes: 2,
    title: "Pandora's Box Model",
    ariaLabel: "Comic with 4 panels. All of them showing a Greek woman with a tunic opening a box. The first one is titled Pandora's box and out of the box comes words like 'death', 'illness', 'pestilence'. The second panel is titled Pandora's box model and the words are 'margin', 'border', 'padding', and 'content'. The third panel is titled Pandora's box-shadow, the words coming out of the box are 'offset', 'blur', 'spread', and 'color', the panel has three shadows. The last panel is titled Pandora's CodeSandBox, out of the box there's the codesandbox logo (a three-dimensional cube)."
  },
  {
    id: 44,
    uid: "flexcuse",
    boxes: 2,
    vertical: true,
    title: "Flexcuses",
    ariaLabel: "Comic strip with two panels showing two characters talking. In the first panel, a character is in front of a poster showing two buildings and a car in between, ane explains in a complex way using CSS Flexbox that the car cannot reach one of the buildings because the building has a margin. In the second panel, the other person replies with something in the line of 'why not just say you were late due to traffic?'"
  },
  {
    id: 45,
    uid: "nightmare",
    boxes: 5,
    vertical: true,
    title: "Nightmare",
    ariaLabel: "Comic strip showing two characters talking. One says 'great news! we got a new project supporting IE11!'. the other character replies 'that is gr... wait... what?!' and its face goes more and more concerned."
  },
  {
    id: 46,
    uid: "black-coffee",
    boxes: 1,
    vertical: true,
    title: "Black Coffee",
    ariaLabel: "cartoon showing a man asking a barista 'I'll take a #000 coffee'"
  },
  {
    id: 47,
    uid: "css-angry-wojak",
    boxes: 1,
    vertical: true,
    title: "CSS Angry NPC Wojak",
    ariaLabel: "Poor version of the Angry Wojak meme showing 4 panels with two people talking. The first panel shows a person saying 'You cannot create memes in CSS'. The second panel has the other person replying 'Of course you can!' The third and fourth panels show the first person, first normal (without saying anything) and then with an angry look."
  },
  {
    id: 48,
    uid: "oop",
    boxes: 7,
    vertical: true,
    title: "CSS OOP",
    ariaLabel: "Modified version of the Angry Wojak meme showing 4 panels with two people talking. The first panel shows a person saying 'CSS is not a programming language'. The second panel has the other person replying 'Of course it is! What are the main concepts of OOP?' Then proceeds to 'explain' how CSS 'has' encapsulation, inheritance, abstraction, and polymorphism, so it should be considered an object-oriented programming language.The last two panels show the first person, first normal (without saying anything) and then with an angry look."
  },
  {
    id: 49,
    uid: "js-hulk",
    boxes: 5,
    title: "JS Hulk",
    ariaLabel: "A man turns into the hulk (a big green version of himself) after getting angry because someone suggested he used CSS for doing animations instead of JavaScript."
  },
  {
    id: 50,
    uid: "wedding-invitation",
    horizontal: true,
    boxes: 14,
    title: "Wedding Invitation",
    ariaLabel: "Cartoon with multiple panels showing Robin and Batman fighting over Batman being a penny pincher and writing #000 Canary instead of Black Canary in some wedding invitations in order to save money."
  },
  {
    id: 51,
    uid: "floatin-dirty",
    boxes: 2,
    title: "Floatin' Dirty",
    ariaLabel: "Cartoon with two panels showing a fish in a fishbowl with the captions: They see me floatin' They Hatin'"
  },
  {
    id: 52,
    uid: "clear-both",
    boxes: 4,
    title: "Clear Both",
    ariaLabel: "Cartoon with 4 panels showing two fish swimming at the same level. One complains that the fishbowl is too small for both of them. The other one replies that it has a solution: clear:both! And now they are at different levels."
  },
  {
    id: 53,
    uid: "anchor",
    boxes: 1,
    vertical: true,
    title: "Anchor",
    ariaLabel: "Why did the web developer struggle to style the link? Because anchors don't float"
  },
  {
    id: 54,
    uid: "interwebs",
    boxes: 1,
    video: "8Z0XRXI2cNU",
    vertical: true,
    title: "Interwebs",
    ariaLabel: "Cartoon with a group of spiders hanging from a spider web. The ones at the extremes move like in a Newton's cradle, and one in the middle says 'To be honest, I dont know what people find so great about the interwebs.'"
  },
  {
    id: 55,
    uid: "yellow-snow",
    boxes: 1,
    vertical: true,
    title: "Yellow Snow",
    ariaLabel: "Cartoon of a yeti saying 'Trust an expert: never eat #ff0 snow!'"
  },
  {
    id: 56,
    uid: "jaws",
    boxes: 1,
    vertical: true,
    video: "U_tEyUmHlQQ",
    title: "Jaws",
    ariaLabel: "Cartoon parodying the Jaws poster, with a shark threatening a swimmer (in this case a laptop on a floatie) with the text FLEX"
  },
  {
    id: 57,
    uid: "zombie-apocalypse",
    boxes: 2,
    vertical: true,
    title: "Zombie Apocalypse",
    ariaLabel: "Cartoon with to panels showing zombies lurking around a person using a computer, they leave and one zombie asks 'why not eat?', another zombie replies 'JS developer', and the first zombie replies '*sigh* no brain'."
  },
  {
    id: 58,
    uid: "pomodorito",
    boxes: 1,
    vertical: true,
    title: "The Pomodorito Technique",
    ariaLabel: "Cartoon comparing the pomodoro technique (25 minutes working, 5 minute break, repeat 4 times, then take longer break) and the Pomodorito technique (25 minutes eating doritos, 5 minutes work, repeat 4 times, then take a longer break to go buy more doritos."
  },
  {
    id: 59,
    uid: "they-never-knew",
    boxes: 2,
    vertical: true,
    title: "They Never Knew",
    ariaLabel: "Cartoon with two panels, a UX Designer and a Developer meets at a tech conference and they immediately click. They decide to meet at the UID cafe, but one ends up in the User Interface Design Cafe, and the other at the Unique IDentifier Cafe. They never knew what went wrong."
  },
  {
    id: 60,
    uid: "hobbits-and-web",
    boxes: 2,
    vertical: true,
    title: "Hobbits and Web",
    ariaLabel: "Two cartoons showing two hobbits. The first cartoon is titled 'Hobbits biggest contribution to web development' and one hobbit saying: 'We have had grid, yes. What about sub-grid?'. The second cartoon is titled 'the reason the hobbits were expelled of the CSSWG', one of the hobbits says and one hobbit saying: 'We have had grid and sub-grid, yes. What about sub-sub-grid?'"
  },
  {
    id: 61,
    uid: "is-that",
    horizontal: true,
    boxes: 9,
    title: "Is that...?",
    ariaLabel: "Comic with 9 panels. A character walks carrying a panel with a diagonal line. Another character asks 'Is that a linear-gradient or are you happy to see me?'. The first character replies: 'It is obviously a 135deg yellow and black linear-gradient.' After an awkward exchange, the second character ends shyly: 'then you are not happy to see me?'. The last panel reads 'Web Developers and inappropriate innuendos... oil and water'."
  },
  {
    id: 62,
    uid: "clank",
    boxes: 2,
    title: "Clank",
    ariaLabel: "Comic with 2 panels. Sometimes while cooking, a pan slips and falls, and I feel terrible thinking about how annoying the noise must be to the neighbors...Then I remember how they are web developers who use <div> as buttons, and the pan 'mysteriously' slips through my fingers and falls again."
  },
  {
    id: 63,
    uid: "miss-me-yet",
    boxes: 2,
    title: "Miss me yet?",
    ariaLabel: "Comic with 2 panels. Cartoon with two panels. In the first one the Internet Explorer logo is wearing sunglasses and holding a margarita while saying 'miss me yet?'. In the second panel there's a big yell 'NO!' and Safari logo small in a corner retorts: 'maybe a little... just because they call me the new IE'"
  },
  {
    id: 64,
    uid: "cubic-bezier-life",
    boxes: 2,
    title: "Cubic Bézier Life",
    ariaLabel: "A cartoonish character says 'Life is a like a cubic Bézier curve: sometimes it goes up, sometimes it goes down, sometimes it goes up & down... but it always moves forward.'. A smaller version of it pops up outside the panel saying 'Unless you change the value of animation-direction... then $#&% can get real messy.'"
  },
  {
    id: 65,
    uid: "image-decision-tree",
    boxes: 1,
    vertical: true,
    title: "Image Format Decision Tree",
    ariaLabel: "A decision tree to pick the best file format for your project. Most of the options have been scratched and the only that remains is a handwritten question: 'Is it a cat video?' if yes, GIF; if not, PNG if you need transparency or JPG if you don't. Ignore the rest of formats."
  },
  {
    id: 66,
    uid: "blind-date",
    boxes: 3,
    horizontal: true,
    title: "Blind Date",
    ariaLabel: "Comic with three panels. In the first two a woman looks bored while a man talks and talks and talks nonstop. In the third panel, the woman is walking alone talking on the phone: 'I really appreciate you setting up the blind date. But, please, next time not a developer who just released a library!'"
  },
  {
    id: 67,
    uid: "toothbrush",
    boxes: 3,
    horizontal: true,
    title: "Toothbrush",
    ariaLabel: "comic with three panels. In the first two an alligator looks sad while holding a tootbrush with a regular-size brush branded Colga-T (panel 1) and Oral-C (panel 2). In the third panel, the alligator is happy, holding a toothbrush with an oversized brush. The toothbrush brand is flex:1."
  },
  {
    id: 68,
    uid: "keyboard-trap",
    boxes: 1,
    vertical: true,
    title: "Keyboard Trap",
    ariaLabel: "Cartoon showing an animal trap (a box held up with a stick, and keyboard keys as bait). Someone is talking off-panel: 'First: what you created is a keyboard trap, not a focus trap. Second: that is not how it's done. And third: PUT THOSE KEYS BACK IN MY KEYBOARD!!!'"
  },
  {
    id: 69,
    uid: "a-different-angle",
    boxes: 1,
    vertical: true,
    title: "A Different Angle",
    ariaLabel: "When I get lost, I try seeing things from a different 'angle'"
  },
  {
    id: 70,
    uid: "twelfth-day-of-christmas",
    boxes: 1,
    vertical: true,
    title: "Twelfth Day of Christmas",
    ariaLabel: "On the twelfth day of Christmas, my CSS sent to me... Twelve image-renderings, Eleven pixels padding, Ten spans a-flexing, Nine letter-spacing, Eight divs with vmin, Seven none font-kernings, Six videos :playing, Five :not() with :is()! Four border-width, Three place-self, Two rules with :has(), And a column in a red grid."
  },
  {
    id: 71,
    uid: "metamorphosis",
    boxes: 1,
    vertical: true,
    title: "Metamorphosis",
    ariaLabel: "A butterfly smiles at a caterpillar and says: 'It's simpler than it looks. You add some colors and then: filter, transform, and animation.'"
  },
  {
    id: 72,
    uid: "tailwind-dog",
    boxes: 1,
    vertical: true,
    title: "Tailwind Dog",
    ariaLabel: "A man asks 'TailwindCSS? Isn't that a weird name for a dog?' The dog owners replies 'I have my reasons...' The dog stands besides them, next to a pile of dog poop bigger than the dog itself."
  },
  {
    id: 73,
    uid: "wendys",
    boxes: 2,
    title: "Wendy's",
    ariaLabel: "A man goes in a long rant about how CSS should be considered a drawing language. A person replies 'Sir... this is a Wendys'"
  },
  {
    id: 74,
    uid: "an-apple-a-day",
    boxes: 1,
    vertical: true,
    title: "An Apple A Day...",
    ariaLabel: "Cartoon with one panel with the headline 'They say an apple a day keeps the doctor away... But the CSS Developer has more faith in a margin.' It has a man in the position of the lotus smiles as a doctor tries to reach out to him unsuccessfully. A bubble has the code :has(.doctor) #me { margin: 15vmin; }."
  },
  {
    id: 75,
    uid: "oop-class",
    boxes: 14,
    horizontal: true,
    title: "OOP Beginners' Class",
    ariaLabel: "An Object-Oriented Programming professor berates CSS then goes explaining how OOP is real programming, but students don't fully understand the syntax so he came up with a new notation. After applying some changes, the notation looks exactly like CSS, so all the students raise the hands confused",
    maxWidth: 800
  }
]