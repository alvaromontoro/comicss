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
  },
  {
    id: 76,
    uid: "game",
    boxes: 1,
    vertical: true,
    title: "CSS Game",
    ariaLabel: "Today's cartoon is a CSS game! And I'm your host, Grid Harvey! In the game, you have to guess the name of different brand  based on a code provided in CSS. Click in the link to play!"
  },
  {
    id: 77,
    uid: "wrap-battling",
    boxes: 1,
    vertical: true,
    title: "Wrap Battling",
    ariaLabel: "Cartoon titled 'Wrap Battling' showing two rappers singing/battling about flex-wrap"
  },
  {
    id: 78,
    uid: "the-eye-of-sauron",
    boxes: 1,
    vertical: true,
    title: "The Eye of Sauron",
    ariaLabel: "The tower of Mordor with the eye of Sauron speakign: 'I once suggested the eye tag. It would track every visible interaction within the wrapped content, but the HTML group rejected my precious idea... So I created Google instead.'"
  },
  {
    id: 79,
    uid: "video-problems",
    boxes: 1,
    vertical: true,
    title: "Video Problems",
    ariaLabel: "Cartoon of a sad looking video player with the text: the video element had many problems... and it didn't have a ::cue how to fix them"
  },
  {
    id: 80,
    uid: "css-is-dead",
    boxes: 3,
    vertical: true,
    title: "CSS Is Dead",
    ariaLabel: "Cartoon in three panels: Death (a skeleton wearing a dark cloak with a smythe) receives a text message from JavaScript saying 'CSS is dead!' Disappointed, Death sighs: That guy is so annoying... Maybe it's time I take anohter of its frameworks away..."
  },
  {
    id: 81,
    uid: "selectors-fight",
    boxes: 1,
    vertical: true,
    title: "Selectors' Fight",
    ariaLabel: "Cartoon showing a CSS class selector telling an id selector: 'you have no class'. The id selector replies: 'You need to be more specific!'"
  },
  {
    id: 82,
    uid: "how-many",
    boxes: 3,
    vertical: true,
    title: "How many...?",
    ariaLabel: "How many CSS developers does it take to change a lightbulb? None. It is a JavaScript issue. - How many CSS developers does it take to change a lightbulb? None. They are OK working in dark mode. - How many JS developers does it take to change a lightbulb? One. But they'll need 5GB in node_modules, TailwindCSS, their own implementation of the lefty-loosey.js library (dependent on righty-tighty.js), and the latest MacBook Pro to handle everything. The resulting JS file will be 8MB and only change the light bulb if the room has Chrome in it."
  },
  {
    id: 83,
    uid: "off-the-grid",
    boxes: 1,
    vertical: true,
    title: "Off-the-grid",
    ariaLabel: "How many CSS developers does it take to change a lightbulb? None. It is a JavaScript issue. - How many CSS developers does it take to change a lightbulb? None. They are OK working in dark mode. - How many JS developers does it take to change a lightbulb? One. But they'll need 5GB in node_modules, TailwindCSS, their own implementation of the lefty-loosey.js library (dependent on righty-tighty.js), and the latest MacBook Pro to handle everything. The resulting JS file will be 8MB and only change the light bulb if the room has Chrome in it."
  },
  {
    id: 84,
    uid: "css-doom",
    boxes: 4,
    vertical: true,
    title: "CSS Doom",
    video: "RW1zIN0TgJU",
    ariaLabel: "Cartoon with 4 panels showing two people walking. One says 'you look down, did the layoffs impact you?' Then they start a conversation about how everything seems to be going poorly and it has been that way for a long time (2016 to be precise). One says that has been doing research and thinks that has found the root cause, shows the CSS wikipedia article: CSS latest version was published in April 12, 2016."
  },
  {
    id: 85,
    uid: "never-late",
    boxes: 1,
    vertical: true,
    title: "Never Late",
    ariaLabel: "Cartoon showing a bearded wizard wearing a gray clock and pointy hat (Gandalf from the Lord of the Rings) saying: 'A wizard is never late, nor is he early. He arrives precisely when the animation-delay means to.'"
  },
  {
    id: 86,
    uid: "css-grid-or-not-css-grid",
    boxes: 1,
    vertical: true,
    title: "To Grid or Not To Grid",
    video: "7_3EEHjf3Z0",
    ariaLabel: "Cartoon with a man wearing shakesperean clothing while holding a skull and saying 'CSS Grid or not CSS Grid, that is the question'. Off panel someone sighs 'Web developers really like drama...'"
  },
  {
    id: 87,
    uid: "coffee-as-a-css-color",
    boxes: 1,
    vertical: true,
    title: "Coffee as a CSS color",
    ariaLabel: "Cartoon titled 'Coffee Style Sheet' with different types of coffee described as CSS colors. Black coffee is hwb(0 0 100%), Americano is hwb(50% 0 50%), Lungo is hwb(50% 0 50%), cafe au lait is hwb(0 50% 50%), latte is hwb(0 66% 33%), macchiato is hwb(0 33% 66%), cappuccino is hwb(0 66% 33%), espresso is hwb(0 0 33%), and 'Need more coffee!' is hwb(0 0 0)."
  },
  {
    id: 88,
    uid: "styling-as-human-languages",
    boxes: 9,
    avertical: true,
    title: "If web styling technologies were human languages...",
    ariaLabel: "Comic titled 'If web styling technologies were human languages...' with 9 panels. CSS would be Spanish, Bootstrap would be Latin, BEM would be French, CSS-in-JS would be Esperanto, CSS Modules would be Japanese, Bulma would be Sanskrit, Tailwind would be German, Less would be American English, and Sass would be British English. For a more detailed description check the source code (linked below)."
  },
  {
    id: 89,
    uid: "ouija",
    boxes: 1,
    vertical: true,
    video: "uXYAJLeSzKM",
    title: "Ouija",
    ariaLabel: "Cartoon with two people around an ouija board, they are reading C - E - N - T - E - R"
  },
  {
    id: 90,
    uid: "the-css-of-man",
    boxes: 1,
    vertical: true,
    title: "The CSS of Man",
    ariaLabel: "Magritte's The Son of Man painting (a man with an apple in front of his face). There are many CSS properties and selectors overlapping the painting and pointing to different parts: the apple has a z-index:3, and the man a z-index:2 (and both are pointed by a position:absolute), the hat has a top:0, the background a linear-gradient(#ddd 50%,#78b 0), the tie is a conic-gradient, and the two jacket buttons are pointed by button:first-child and button:last-child"
  },
  {
    id: 91,
    uid: "you-shall-not-pass",
    boxes: 1,
    vertical: true,
    title: "You Shall Not Pass",
    ariaLabel: "Cartoon parody of The Lord of the Rings, showing a bridge with a horned monster on one side carrying a box with the HTML element center inside. On the other side of the bridge, there's a gray-cloaked wizard holding a sword and a stick saying 'You shall not pass!!', protecting the HTML5 logo."
  },
  {
    id: 92,
    uid: "one-ring",
    boxes: 1,
    vertical: true,
    title: "One Ring To Rule Them All...",
    ariaLabel: "Cartoon parody of The Lord of the Rings, showing a ring with elvish-looking letters that read 'Tailwind to rule them all and in the darkness bind them'"
  },
  {
    id: 93,
    uid: "whales",
    boxes: 6,
    vertical: true,
    title: "Whales' Gradients",
    ariaLabel: "Cartoon with 6 panels: three whales showing off how they spray water by using different CSS gradients. The last one makes a really complex one and the other whales call him out on it."
  },
  {
    id: 94,
    uid: "r2d2",
    boxes: 1,
    vertical: true,
    video: "VpzllyPHs08",
    title: "Style Wars",
    ariaLabel: "Cartoon showing R2D2, a roboto from the movie Star Wars, projecting a hologram that reads: 'Help me, CSS. You are my only hope!'"
  },
  {
    id: 95,
    uid: "abc-css",
    boxes: 27,
    title: "ABCs of CSS",
    ariaLabel: "Cartoon showing the letters in the alphabet associated to different CSS properties/values. To get a more detailed description, visit the demo where each letter is individually labelled"
  },
  {
    id: 96,
    uid: "css-md",
    boxes: 1,
    vertical: true,
    title: "CSS MD",
    ariaLabel: "Cartoon showing a patient with red boxes surrounding eyes, ears, face, and other body parts; and a concerned doctor that says 'I am really sorry, Mr Smith. I have done everything I know, but I cannot see what is wrong.'"
  },
  {
    id: 97,
    uid: "duck-test",
    boxes: 2,
    vertical: true,
    title: "Duck Test",
    ariaLabel: "If it looks like a duck, swims like a duck, and quacks like a duck, it probably is a duck. If it has filters like a drawing language, gradients like a drawing language, and blend modes like a drawing language... It is clearly a styling language! Nothing to do with drawings and graphics. Absolutely nothing! OK?"
  },
  {
    id: 98,
    uid: "magic-cards",
    boxes: 5,
    title: "Magic Cards",
    ariaLabel: "Set of five web development/CSS-themed cards in the style of Magic the Gathering"
  },
  {
    id: 99,
    uid: "lost-in-translation",
    boxes: 6,
    title: "Lost in Translation",
    ariaLabel: "Comic with 6 panels showing a man sitting in front of a computer. The screen goes off and the person asks for help. Another person off-panel says the problem is a translateY and to wait one more panel. In the next panel (below to the one where the screen disappeared), the code appears to the confusion of the person."
  },
  {
    id: 100,
    uid: "jack-and-rose",
    boxes: 2,
    vertical: true,
    title: "Jack and Rose",
    ariaLabel: "Comic with 2 panels parody of a scene of the movie Titanic. In the first panel, a man (Jack) and a woman (Rose) are at the front of a ship named Titanic, with their arms extended and smiling. Rose says: 'I have a secret Jack: I use divs as buttons'. In the second panel, Jack has pushed Rose over the rails and she falls into the ocean."
  },
  {
    id: 101,
    uid: "brains",
    boxes: 1,
    vertical: true,
    title: "Brains",
    ariaLabel: "Cartoon with an ashamed-looking brain (drawn in kawaii style) next to the text: Brains are amazing. they work nonstop 24/7 from the moment you are born until the moment you need to remember if it's align-text or text-align."
  },
  {
    id: 102,
    uid: "red-border",
    boxes: 4,
    title: "Red Border",
    ariaLabel: "Comic strip with 4 panels. A figure walks into a CSS code that generates a red border and exclaims 'oh, wow! a CSS debugging red border!' Then adds 'This could be the same red border that helped debugging and learning to people like Rachel Andrew, or Eric Meyer, or Jen Simmons, or Harry Roberts, or Sara Soueidan, or...'. In the third panel, the character remains silent thinking. And finally pleads 'Please, red border, inspire me, and let me learn as much as them!'"
  },
  {
    id: 103,
    uid: "news",
    boxes: 1,
    vertical: true,
    title: "News",
    ariaLabel: "Cartoon with two newscasters (a white man and a Black woman) reading the news from a paper. The mustached man says 'After a very long time, this week did not get a new CSS feature released by the CSS working group, or supported by any of the major browsers.' The woman adds, 'Police have already arrested the culprit, who, we hope, will spend a long time behind bars.'"
  },
  {
    id: 104,
    uid: "evolution",
    boxes: 2,
    vertical: true,
    title: "Then and Now",
    ariaLabel: "Comic with 2 rows. The first one is titled 'Web programming in 2003'. A person says 'I am off to develop a website', and comes back 5 hours later saying it completed the landing page, and found some cool effects. The row below is titled 'Web development in 2023'. The same person says 'I am off to develop a website', and comes back angry after 5 hours, no web development done, it has all been setting up the dev environment (and it's not done yet)"
  },
  {
    id: 105,
    uid: "divtober",
    boxes: 1,
    vertical: true,
    title: "Divtober",
    ariaLabel: "Cartoon with two characters talking. One happily says 'Now that divtober is over, our author can finally focus on comiCSS and forget about single-div drawings'. A loomy-looking character replies 'Yeah... about that...' -Author's note: the cartoon is a single-div drawing"
  },
  {
    id: 106,
    uid: "text-wrap",
    boxes: 1,
    vertical: true,
    title: "text-wrap",
    ariaLabel: "cartoon with three characters whose body is the text 'my body is a very long text that wraps along four or maybe five lines' squeezed together and have stick legs. The first character is on a skateboard, it has the body text well balanced, and is saying 'looking prety...' to the second character. The second character is wearing boots, its body text has two words in the last line, and replies 'looking balanced' to the first character. The last character looks sad/tired, its body text is grayer and the last line only contains an unbalanced one word. It says looking at the other characters 'I hate you two...'"
  },
  {
    id: 107,
    uid: "reactions-meme",
    boxes: 1,
    vertical: true,
    title: "Reactions (Meme)",
    ariaLabel: "Cartoon with a bell chart titled 'Reactions to CSS Art'. At the bottom left, a figure of a surprised junior developer says 'That is cool'. At the top center, a mid-level developer cries 'No! That is wrong! You should be using SVG instead!'. At the bottom right, a senior developer grins and says 'That is cool'"
  },
  {
    id: 108,
    uid: "sharing-demo",
    boxes: 9,
    vertical: false,
    title: "Sharing Demos Online: Social Media Reaction",
    ariaLabel: "Cartoon with a 3x3 grid titled 'sharing a demo online: social media reactions'. From Left to Right, Top to Bottom. Beginner Devs: a woman wearing a Mexico jerseys says 'Wow! This is so cool! Let me save it in a bookmark that I will never check again.' Snob Devs: a man wearing a turtle neck and glasses say 'That is great, but why not using something like [name of property supported by only 1 percent of the browsers]'. Designers: a person with yellow and pink hair says 'Wow! and THAT is why developers should NEVER design!' Recruiters: a robot says 'Hey! I saw your cool JavaScript demo. I have a Java opening that would be perfect for you! Javascript and Java are the same, right?' Your professors: a Black man with gray hair says 'Four years teaching them... for this? sigh... Retirement cannot arrive soon enough.' Grifters: a guy saying 'check this demo *I* totally coded myself.' Your partner: a Woman wearing a dress and pearls sobs: 'They say that sh*t took them 6 hours to code... I bet they are cheating!' Your manager: a big man wearing a suit and smoking a cigar complains: 'If they have time to build this sh*t off work, they have time to work... double their tasks!' Friends and family: a angry-looking person complains 'again with this sh*t? can they not post normal stuff like everyone else? Unfollow!'"
  },
  {
    id: 109,
    uid: "coincidence",
    boxes: 1,
    vertical: true,
    title: "Coincidence?",
    ariaLabel: "Cartoon with a table showing the different planets of the solar system in order closer to farther from the Sun. All of them show 0 deaths and no CSS, except for Earth that has CSS and 117,020,448,575 deaths. Below the table there's a question: coincidence?"
  },
  {
    id: 110,
    uid: "riddle",
    boxes: 2,
    vertical: true,
    title: "Riddle",
    ariaLabel: "Card with a cartoon of Santa Claus and the question 'Who comes in Christmas and says Oh Oh Oh?' Clicking/tapping on the card will flip it 180 degrees revealing the answer: Santa Claus with a rotateY(180deg)."
  },
  {
    id: 111,
    uid: "nightmare",
    boxes: 2,
    vertical: true,
    title: "Nightmare",
    ariaLabel: "Cartoon with two panels. In the first panel, a white man wakes up yelling from a dream with The New York Thymes newspaper announcing 'W3C Shocks Internet: Tailwind Replaces CSS' in big letters. In the second panel, an off-screen person says 'Wow! That must have been a heck of a nightmare', to which the previous character replies 'How am I supposed to know? I am just a React Developer!'"
  },
  {
    id: 112,
    uid: "eleventy-one",
    boxes: 4,
    vertical: true,
    title: "Eleventy-One",
    ariaLabel: "Cartoon with four vertical panels parodying the farewell speech by Bilbo Baggins in The Lord of the Rings. A hobbit says farewell and disappears during his birthday speech, to the surprise of all the attendants. He then pops back next to his house saying 'Ha! You always work like a charm, my precious friend!' The last panel is a close-up of a ring with the CSS code: 'display: none; opacity: 0; visibility: hidden !important'"
  },
  {
    id: 113,
    uid: "goldilocks",
    boxes: 4,
    horizontal: true,
    title: "Goldilocks",
    ariaLabel: "comic strip with 4 panels. The first one is a cover for Goldilocks and the Three Bears, with a girl and three bear heads, the names have been scratched and rewritten to GoldiloCSS and the Three Breaks. The following panels show some code and the result of it with a comment from GoldiloCSS. In the first one, she uses word-break: break-all, and all the words break at inconvenient places. She says 'too hard'. In the second one she uses word-break: keep-all. The words wrap to the next line unless they wouldn't fit, thent hey exceed the space allocated to them. GoldiloCSS comments 'Too soft'. In the last panel, she uses word-break:break-word and the words wrap to the next line unless they wouldn't fit, then they break. GoldiloCSS comments 'Just right... kind of...'"
  },
  {
    id: 114,
    uid: "headaches",
    boxes: 1,
    vertical: true,
    video: "jpNWEWnhyjU",
    title: "Headaches",
    ariaLabel: "Comic strip titled 'Types of headaches' with four panels showing a person with a red are indicating the zone of the headache, and a title underneath it indicating the type of headache. The first panel is for Migraine, and the red area occupies the right side of the forehead and eye. The second panel is for stress, and the red area is the forehead and both sides of the head. The third panel is for tension, and the red area is around the forehead. The fourth panel is for Tailwind, and the whole head and body are red."
  },
  {
    id: 115,
    uid: "counting-sheep",
    boxes: 9,
    vertical: true,
    title: "Do Web Developers Dream of CSSheep?",
    ariaLabel: "comic with 9 vertical panels, all of them showing a person in bed with a timer at the bottom right side of the panel. Panel 1: 22:30. The person smiles: 'as a web developer, I do not count sheep to go to sleep. I count front-end technologies that I would like to learn'. Panel 2: 22:31. The person starts falling asleep while dreaming/counting the CSS3 logo. Panel 3: 22:32. The person is sleeping merrilly while dreaming/counting the CSS3 and BEM logos. Panel 4: 22:33. The person opens an eye slightly while counting the CSS3, BEM, and Tailwind logos. Panel 5: 22:34. The person is startled while counting the CSS, BEM, Tailwind, and Bootstrap logos. Panel 6: 22:35. The person starts frawning while counting the CSS, BEM, Tailwind, Bootstrap, and Less logos. Panel 7: 22:36. The person looks worried while counting the CSS, BEM, Tailwind, Bootstrap, Less, and CSS-in-JS (JSS) logos. Panel 8: 22:45. The dream/counting bubble bursts with a worried looking person. Panel 9: 06:55. The person looks sad and sleepy, with bags under the eyes from not sleeping all night."
  },
  {
    id: 116,
    uid: "cloud-developer",
    boxes: 1,
    vertical: true,
    title: "Cloud Developer",
    ariaLabel: "Cartoon of a person using a computer with clouds in the background, next to a box with the following CSS code: .cloud-developer { background: azure; isolation: isolate; rest: none; stress: 100; content: none; }"
  },
  {
    id: 117,
    uid: "king",
    boxes: 1,
    vertical: true,
    title: "King",
    ariaLabel: "Cartoon of a man with a beard, wearing a crown and holding a sceptre, next to a box with the following CSS code: .king { position: absolute; richness: 100; color: RoyalBlue; :first-child { all: inherit; } }"
  },
  {
    id: 118,
    uid: "phantom-of-the-opera",
    boxes: 1,
    vertical: true,
    title: "Phantom of the Opera",
    ariaLabel: "Cartoon of the phantom of the opera (a man with a cape and a mask hiding his face) holding a rose next to the following CSS code: #phantom-of-the-opera { mask:url(#face); backface-visibility:hidden; visibility:hidden; pitch:low; volume:soft; }"
  },
  {
    id: 119,
    uid: "winner",
    boxes: 1,
    vertical: true,
    title: "Winner",
    ariaLabel: "Cartoon of a person with an arm up holding a trophy while confetti falls round them. Next to the scene there's the following CSS code: #winner { order: 1; running: first; color: gold; &::after { content: '🏆'; } }"
  },
  {
    id: 120,
    uid: "dictator",
    boxes: 1,
    vertical: true,
    title: "Dictator",
    ariaLabel: "Dictator: a minimalistic cartoon of a man in military attire with medals and sun glasses, next to the following CSS code: .dictator { position: fixed !important; will-change: order !important; opacity: 0 !important; border: double solid !important; .country:has(&) :not(.supporter) { will-change: orphans, widows !important; translate: 100vmax 0 !important; } }"
  },
  {
    id: 121,
    uid: "basketball-player",
    boxes: 1,
    vertical: true,
    title: "Basketball Player",
    ariaLabel: "Basketball player: a minimalistic cartoon of a man spinning a basketball with one finger next to the following CSS code: .basketball-player { elevation: higher; min-height: 75in; max-height: 91in; will-change: position; play-during: url(#game); position: running(ball); flow: 'offense'; }"
  },
  {
    id: 122,
    uid: "astronaut",
    boxes: 1,
    vertical: true,
    title: "Astronaut",
    ariaLabel: "astronaut: a minimalistic cartoon of a person in an astronaut suit with many stars in the. background. Next to the following CSS code: .astronaut { elevation: above; isolation: isolate; flow-from: spaceship; flow-to: outerspace; transition: float; }"
  },
  {
    id: 123,
    uid: "politics",
    boxes: 1,
    vertical: true,
    title: "US Politics",
    ariaLabel: "Minimalistic cartoon of Abraham Lincoln next to three boxes of CSS code: on the top left .democrat{left:100%}; on the center top .undecided{align-self:center}; and on the top right .republican{right:100%}"
  },
  {
    id: 124,
    uid: "keeping-your-distance",
    boxes: 1,
    vertical: true,
    title: "Keeping Your Distance",
    ariaLabel: "Cartoon with a person separated by an arrow from other people. Each line, the arrow is longer (as it contains a longer CSS name). From top to bottom (shorter to longer): covid-19 (empty arrow), CSS, Bootstrap, BEM, CSS-in-JS, and TailwindCSS."
  },
  {
    id: 125,
    uid: "neo",
    boxes: 1,
    vertical: true,
    title: "Neo",
    ariaLabel: "Cartoon with a man wearing sunglasses and a long robe with Japanese characters falling behind him (like in The Matrix). Next to the following CSS code: #Neo { will-change: all; all: unset; transform: matrix(1, 0, 1, 0, 1, 1); &::after { all: revert; } }"
  },
  {
    id: 126,
    uid: "transformer",
    boxes: 1,
    vertical: true,
    title: "Transformer",
    ariaLabel: "Cartoon of Optimus Prime (a robot character from the Transformers series) next to the following CSS code: .autobot, .decepticon { font-family: roboto; appearance: auto; will-change: appearance, transform; transform: scale(0.5); }"
  },
  {
    id: 127,
    uid: "pr-reviews",
    boxes: 2,
    title: "PR Reviews",
    ariaLabel: "Cartoon with two panels title Web developers reviewing JS and 'CSS' (CSS is quoted). The first panel shows an angry-looking person saying 'Wow!! Four parameters in a function call??!! That's way too many!!! PR rejected!'. The second panel shows the same person reading a really long list of Tailwind class names and saying 'That CSS class looks stylish! Approved!'"
  },
  {
    id: 128,
    uid: "layers",
    boxes: 1,
    title: "Layers",
    vertical: true,
    ariaLabel: "Cartoon showing CSS code with many nested at-layers. Off-panel someone complains that it may be cold but the code doesn't need so many layers"
  },
  {
    id: 129,
    uid: "appliance",
    boxes: 1,
    title: "Appliance",
    vertical: true,
    ariaLabel: "Appliance: cartoon of a broken blender leaking its content. It is next to some CSS code: .appliance { color: lightsteelblue; counter-set: top; :has(.warranty) { break-before:avoid; break-after: always; }}"
  },
  {
    id: 130,
    uid: "springbreak",
    boxes: 4,
    title: "Spring Break",
    vertical: true,
    ariaLabel: "a big cartoon with plenty of white space, an undefined character pops up moving around and asking several times 'comiCSS?'. Finally it stops in front of a beach chair where a person is drinking. The character asks 'comiCSS?!' and the person replies 'spring breaCSS'"
  },
  {
    id: 131,
    uid: "kids-fighting",
    boxes: 5,
    title: "Kids Fighting",
    vertical: true,
    ariaLabel: "Comic with 5 panels showing two kids who start to fight yelling at each other 'display:grid' and 'display:flex'. Their angry mother stops them by saying 'animation: none !important', and the separates them by saying 'justify-content: space-between !important'"
  },
  {
    id: 132,
    uid: "not-you-i",
    boxes: 1,
    title: "Not You (I)",
    vertical: true,
    ariaLabel: "Grid with 9 boxes with a word and a browser logo. The sentence reads: 'Thank you for building faster internet for everyone'. The center panel (with the IE logo) reads 'not you'"
  },
  {
    id: 133,
    uid: "not-you-ii",
    boxes: 1,
    title: "Not You (II)",
    vertical: true,
    ariaLabel: "Grid with 9 panels with CSS and styling technology logos. Each logo has a word that form the sentence 'Thank you for making web styling better for everyone' except TailwindCSS logo (in the center) with the sentence 'not you'"
  },
  {
    id: 134,
    uid: "evolution",
    boxes: 1,
    title: "Evolution",
    horizontal: true,
    ariaLabel: "Cartoon titled 'Evolution' with drawings of a 5.25 floppy disk, a CD-ROM, an USB drive, an SD card, and a button with the word 'Upload' and an arrow pointing up into a cloud."
  },
  {
    id: 135,
    uid: "dungeon",
    boxes: 1,
    title: "Dungeon",
    vertical: true,
    ariaLabel: "cartoon with three men hang chained in a dungeon. Two look sad, one looks happy. One of the sad ones says 'he used to be a web developer. he says this is 1,000 times better'"
  },
  {
    id: 136,
    uid: "stay-on-top",
    boxes: 1,
    title: "Stay on Top",
    vertical: true,
    ariaLabel: "cartoon with a list titled 'How to stay on top of things': 1. make a list (striked through); 2. track your time; 3. time box your tasks; 4. more difficult tasks first; 5. take breaks; 6. focus, don't multitask; 7. z-index: 4 (striked through); 8. z-index: 9999 (striked through); 9. z-index: 99999999 (striked through); 10. z-index: max(infinity)"
  },
  {
    id: 137,
    uid: "may-the-fourth",
    boxes: 1,
    title: "May the Fourth",
    vertical: true,
    ariaLabel: "Cartoon of a floppy disk telling an SD Card 'I am your father'. The SD card, on its knees, yells painfully 'NOOOOOOOOO!'"
  },
  {
    id: 138,
    uid: "may-the-fourth-ii",
    boxes: 1,
    title: "May the Fourth (II)",
    vertical: true,
    ariaLabel: "cartoon of the HTML tag table saying 'I am your father', and the CSS property grid on its knees yelling painfully 'NOOOOOO!'"
  },
  {
    id: 139,
    uid: "grief",
    boxes: 1,
    vertical: true,
    title: "Grief",
    ariaLabel: "Comic with six panels with a character going through the stages of grief: 1. denial, the person says 'Why this? Why me? This is not possible! It has to be a mistake!' 2. Anger, the person angrily says 'I cannot stand for this! I will not! Check again! you are wrong!' 3. bargaining, the person smiles 'if you take it away, I will help you later. One for me, one for you...' 4. Depression, the person sadly says 'All the work I have done... Everything... for nothing...' 5. Acceptance, the person shrugs 'I guess this is the way life works...' In the sixth panel, a different person looks confused and says 'I... I only left a comment in your PR asking to use EM instead of PX...'"
  },
  {
    id: 140,
    uid: "framework-fans",
    boxes: 2,
    title: "Framework Fans vs. Framework Bros",
    vertical: true,
    ariaLabel: "Two versions of the same 4-panel comic showing the same situation: a person receives a message on their phone and says 'Oh! The developer of that framework you like is trending', a second person smiles waving a flag with the text 'That Framework'. Then the first person looks shocked at the phone that shows a message with emojis for fire and angry people 'Oh... Oh no...' says while reading the developer's hot take. The last panel is different in both parts. In the first one (titled Framework Fans), the second person looks shocks and ashamed and drops the flag. In the second one (titled Framework Bros), the second person keeps smiling and now they are waving more flags, with flags coming out of ears and mouth, and even the t-shirt is from That Framework."
  },
  {
    id: 141,
    uid: "technical-support",
    boxes: 10,
    horizontal: true,
    title: "Technical Support",
    ariaLabel: "Cartoon of a person wearing a headset in front of a computer, replyng to a phone call. The conversation is about how the caller is having issues when translating an element horizontally, it moves fine, then drops to the bottom rapidly. The technical support person asks the caller to open the dev tools and look for other animations. The  caller replies 'I will do it right meow' shocking the technical support, who asks 'are we talking about CSS?' The last panel is a drawing of a cat pushing a glass off a ledge and saying 'What is CSS?'"
  },
  {
    id: 142,
    uid: "spelling-bee",
    boxes: 1,
    title: "Spelling Bee",
    vertical: true,
    ariaLabel: "Spelling bee contestant: a minimalistic cartoon of a person in front of a microphone, with some CSS code next to it: .speeling-bee { .contestant { speak: spell-out; word-break: break-all; stress: 100; } }"
  },
  {
    id: 143,
    uid: "cheese-attack",
    boxes: 4,
    title: "Cheese Attack",
    ariaLabel: "Comic with four panels showing a person talking down to another character next to a comiCSS sign, about how drawing in CSS is not good, SVG is better, chatGPT can do it, Tailwind is better... a third character shows up in the second panel and throws a slice of cheese to the character that is doing all the talking 'Cheese Attack!!'. In the last panel, that third character says that the person with the slice of cheese will be distracted for a while and it's time to leave before they come back."
  },
  {
    id: 144,
    uid: "sleep-like-a-baby",
    boxes: 4,
    title: "Sleep like a baby",
    ariaLabel: "Comic with four panels in a 2x2 grid. It has two characters talking. The first one asks 'Hey! I haven't seen you in a while. How's the new project? Lots of hours? Do you even sleep?' The second replies 'Oh, I sleep like a baby' The first one asks 'deeply and well?' And the second one replies sadly 'No. I wake up every 3 hours crying and calling for my mom'"
  },
  {
    id: 145,
    uid: "haircut",
    boxes: 2,
    title: "Haircut",
    ariaLabel: "cartoon with two panels showing two people talking. One has long spiky hair, the other one has a more classic hair and says 'cool haircut! did you go to the hairdresser?'. The person with spiky hair replies: 'No, I was just reviewing the new Junior's PR'"
  },
  {
    id: 146,
    uid: "order",
    boxes: 4,
    title: "Order",
    ariaLabel: "cartoon with 4 panels showing a disorganized book shelf. Then two characters talking: 'your shelf is always messy!', then the other one replies '.shelf .book order:unset' all the books in the shelf become ordered. The first character replies 'I get why that worked, but it makes no sense'"
  },
  {
    id: 147,
    uid: "floating-on-air",
    boxes: 2,
    title: "Floating on Air",
    vertical: true,
    ariaLabel: "Cartoon with 3 panels, the first show two show a person smiling and with hearts for eyes saying 'she makes me so happy, I could float on air'. In the last panel, two people tagged as Flex and Grid say simultaneously: 'Don't even think about it!'"
  },
  {
    id: 148,
    uid: "favorite-drink",
    boxes: 1,
    title: "Favorite Drink",
    vertical: true,
    ariaLabel: "What is web developers' favorite drink? :root beer"
  },
  {
    id: 149,
    uid: "great-dancers",
    boxes: 1,
    title: "Great Dancers",
    vertical: true,
    ariaLabel: "Why are CSS Developers great dancers? Because they know all the steps()"
  },
  {
    id: 150,
    uid: "drivers-license",
    boxes: 1,
    title: "Driver's License",
    vertical: true,
    ariaLabel: "Why do Web Developers have a tough time getting a driver's license? They pass the written test or the driving test, but they rarely clear:both"
  },
  {
    id: 151,
    uid: "frankensteins-monster",
    boxes: 4,
    title: "Frankenstein's Monster",
    ariaLabel: "Comic with 4 panels. In the first one Frankenstein's Monster looks menacing yelling 'Be very scared of Frankenstein's Monster!'. A person replies 'You are not a monster, you are just misunderstood'. The monster replies 'I use divs as buttons... on purpose'. The person looks disappointed and terrified in the last panel."
  },
  {
    id: 152,
    uid: "costumes",
    boxes: 4,
    title: "CSS Halloween Party",
    ariaLabel: "Cartoon with 4 panels titled 'halloween costumes'. First panel: the CSS3 logo with a skeleton make up on, and the text 'CSS will go as a skeleton... because it is at the core of all styling'. Second panel: the CSS modules logo with Frankenstein's monster features, and the text 'CSS Modules will go as Frankenstein because it is made of many parts and components'. Third panel: The boostrap logo wrapped in clothe, and the text: 'Bootstrap will go as a mummy... because it is old and dusty, but it gets the job done'. In the last panel, the Tailwind logo with fangs and the text: 'Tailwind will be Dracula... because it sucks.'"
  },
  {
    id: 153,
    uid: "lazy-river",
    boxes: 1,
    title: "Lazy River",
    vertical: true,
    ariaLabel: "why did the web developer stop going to the lazy river? they had to use a float"
  },
  {
    id: 154,
    uid: "negative-animation-delay",
    boxes: 1,
    title: "Negative Animation Delay",
    vertical: true,
    ariaLabel: "I was going to tell you a joke about negative animation-delay... but you didn't get it"
  },
  {
    id: 155,
    uid: "blue-not-heavy",
    boxes: 1,
    title: "What is blue...?",
    vertical: true,
    ariaLabel: "What is blue and not too heavy? LightBlue"
  },
  {
    id: 156,
    uid: "optimistic",
    boxes: 1,
    title: "Optimistic",
    vertical: true,
    ariaLabel: "why are CSS developers so optimistic? they never see the glass half :empty"
  },
  {
    id: 157,
    uid: "svg-dentist",
    boxes: 1,
    title: "Why did the SVG go to the dentist?",
    vertical: true,
    ariaLabel: "Why did the svg go to the dentist? it lost a filling"
  },
  {
    id: 158,
    uid: "html-parties",
    boxes: 1,
    title: "What does HTML...",
    vertical: true,
    ariaLabel: "what does html wear at parties? address"
  },
  {
    id: 159,
    uid: "color-search",
    boxes: 1,
    title: "Color Search",
    vertical: true,
    ariaLabel: "I looked for the perfect grayish-purplish color. It took a long time, but I finally found it in a DECADE"
  },
  {
    id: 160,
    uid: "repeating-conic-gradient",
    boxes: 1,
    title: "Leaving the University",
    vertical: true,
    ariaLabel: "why did the repeating-conic-gradient leave the university? It already had 360 degrees"
  },
  {
    id: 161,
    uid: "reading",
    boxes: 4,
    title: "Reading",
    ariaLabel: "comic with for panels, there are two characters talking about what they have been reading and talking about how long it is compared to previous works from the same author, it took them a long time to read it. A third person arrives and asks what novel they are reading. They reply they are not reading any novel, they are reviewing some Tailwind code."
  },
  {
    id: 162,
    uid: "organs",
    boxes: 4,
    title: "Organs",
    ariaLabel: "comic with four panels showcasing organs. The lungs say 'we breathe air for you', the heart says 'I pump blood for you', the liver says 'I filter was for you', and the brain says 'use table layout, floats everywhere, hardcode all values'"
  },
  {
    id: 163,
    uid: "logic-gates",
    boxes: 6,
    horizontal: true,
    title: "Halloween Logic Gates",
    ariaLabel: "Cartoon with different panels showing a pumpkin made with two circles. Only some parts of it have colors: trick OR treat has the whole pumpkin in orange; trick AND treat only the part where the circles intersect; etc."
  },
  {
    id: 164,
    uid: "ai-edits",
    boxes: 4,
    title: "AI Edits",
    ariaLabel: "Comic with 4 panels in a 2x2 grid. A woman and a man are talking - Man: 'Hey, Ann! Long time no see here on comiCSS! How are you doing?' Woman: 'Yeah... I've been worried about showing up around here since people started using AI to edit cartoons and images. It always takes a sexist turn...' Man: And you think Alvaro will use AI to edit the CSS comics?. Woman (changed in this last panel to look slimmer and taller, and to have darker skin, cleavage, and bigger breasts): 'I dunno... But I have a suspicion he just started...'"
  },
  {
    id: 165,
    uid: "hell",
    boxes: 4,
    title: "Hell",
    ariaLabel: "A person is at the gate of Hell, a demon says 'you are not in the list', he replies 'of course not! I cared about everyone, even added aria-label to every HTML tag'. The demon replies 'I see, follow me' and guides him to a place called Double Hell"
  },
  {
    id: 166,
    uid: "web3",
    boxes: 4,
    title: "Homework",
    ariaLabel: "Comic with 4 panels in a 2x2 grid. A child goes talk to their grandparent and says in school they are studying history of the Internet but doesn't understand why they went from web to web 2.0 to web 4. The grandparent replies: we don't talk about web3"
  },
  {
    id: 167,
    uid: "push-ups",
    boxes: 4,
    title: "Push-ups",
    ariaLabel: "comic with 4 panels in a 2x2 grid. There are two characters, one of them has the tshirt off and shows a lot of muscles. The other one asks 'Wow, Dave! How did you get like that? You are a web developer!' Dave replies: 'every time I add a Tailwind class... I do one push-up'. In the last panel he adds 'I started with the tutorial yesterday, and have not finished my first page yet... please help...'"
  },
  {
    id: 168,
    uid: "seasons-inputs",
    boxes: 1,
    title: "Seasons Inputs",
    vertical: true,
    ariaLabel: "different 'creative' password inputs: a regular password field shows dots instead of letters, summer password has suns instead, winter password has snowflakes, spring password has flowers, christmas password has santas, june corporate passwords has dots but they are the colors of the pride flag"
  },
  {
    id: 169,
    uid: "mouse-cookie",
    boxes: 2,
    video: "fP0QHyT1fYQ",
    title: "If you give a mouse a cookie",
    ariaLabel: "Cartoon with two panels showing a mouse with a cookie. In the first panel, the mouse is smiling and looking happy, and has the text 'if you give a mouse a cookie...'. The second panel shows an angry mouse along with the text (partially covered by the mouse): ...he is going to ask what the **** is this? No HTTPS? No domain or expiration date? Have you not heard about GDPR? Who did even let you close to this code? This sucks! And you call yourself a developer? Can I talk to your manager? Do they know what a ****** developer you are? Aren't you ashame? You should be ashamed! ...An that's why you never give a mouse a ****ing cookie. The end."
  },
  {
    id: 170,
    uid: "argument",
    boxes: 4,
    title: "Argument",
    ariaLabel: "comic with 4 panels in a 2x2 grid. All of them have 3 people, two of them are talking about how CSS or Tailwind is better than the other, while the third person is more and more interested in the conversation. In the last panel, the two people agree that everything is ok as long as they are using what's best for each other, and the third person is disappointed because they didn't fight 'That is not how it is supposed to go!!'"
  },
  {
    id: 171,
    uid: "wherewolf",
    boxes: 1,
    title: ":where(.wolf)",
    vertical: true,
    ariaLabel: "Cartoon of a wolf's head talking some CSS code, witht he title :where(.wolf)"
  },
  {
    id: 172,
    uid: "decaff-coffee",
    boxes: 1,
    title: "#DECAFF #C0FFEE at 200 Degrees",
    vertical: true,
    ariaLabel: "a color gradient from purple to light blue"
  },
  {
    id: 173,
    uid: "gdpr",
    boxes: 6,
    title: "GDPR",
    ariaLabel: "cartoon showing two characters, one is complaining that GDPR is a terrible policy then starts complaining of how privacy is lacking in the USA and how it would be great to have some law to protect it while the other character repeatedly replies to every complaint 'GDPR'"
  },
  {
    id: 174,
    uid: "ai-act",
    boxes: 6,
    title: "AI Act",
    ariaLabel: "cartoon showing two characters. One is complaining that the AI Act is terrible and slows down progress in the EU. Then a panel describes an apocalyptic situation after AI replaces humans beings. The complaining character asks for potential solutions and ignores the other character when they continuosly reply 'AI Act'. In the last panel, a terminator has killed both characters."
  },
  {
    id: 175,
    uid: "primes",
    boxes: 1,
    title: "Primes",
    vertical: true,
    ariaLabel: "prime symbols: single prime, double prime, triple prime,  quadruple prime, and Optimus Prime (with a drawing of the transformer instead of any prime symbol)"
  },
  {
    id: 176,
    uid: "signal",
    boxes: 1,
    vertical: true,
    title: "I was secretly added to a CSS security Signal chat",
    ariaLabel: "The punch emoji, the CSS logo, and the fire emoji"
  },
  {
    id: 177,
    uid: "vibe-coding",
    boxes: 1,
    vertical: true,
    title: "Vibe Coding Keyboard",
    ariaLabel: "illustration of a keyboard with a single Tab key"
  },
  {
    id: 178,
    uid: "tariffs",
    boxes: 1,
    title: "Tariffs",
    vertical: true,
    ariaLabel: "a fake tv newscast showing that the US governement has imposed tariffs on the use of JavaScript and CSS because they have too many imports and exports"
  },
  {
    id: 179,
    uid: "standing-desk",
    boxes: 6,
    vertical: true,
    title: "Standing Desk",
    ariaLabel: "cartoon with several cartoons showing a character working at a work station with the desk down, then up, then down, then up, then down... and at the end of the day the character looks sad saying 'I was so busy going up and down that I forgot to work!'"
  },
  {
    id: 180,
    uid: "github-users",
    boxes: 7,
    title: "Types of GitHub Users",
    vertical: true,
    ariaLabel: "illustration mimicking the GitHub contribution diagram for different types of people: regular developer (different sharesgreen in different locations), the overachiever (everything in dark green), the 'I am looking for a new job' (no contributions until suddenly a big one), the Macarena (the graphic looks like a cartoon dancing in different poses)"
  },
  {
    id: 181,
    uid: "unattended-children",
    boxes: 1,
    title: "Unattended Children",
    vertical: true,
    ariaLabel: "cartoon of a sign with a child drinking coffee and the text 'unattended children will be given an espresso and a class in CSS'"
  },
  {
    id: 182,
    uid: "hi-im-css",
    boxes: 3,
    horizontal: true,
    title: "Hi, I'm CSS...",
    ariaLabel: "comic with three panels showing the new CSS logo (a purple square with the letters CSS inside) with a face saying 'Hi, my name is CSS, but when people see me, they call me FUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUC'"
  },
  {
    id: 183,
    uid: "upwind-downwind-headwind-tailwind",
    boxes: 4,
    title: "Upwind. Downwind. Headwind. Tailwind.",
    ariaLabel: "upwind-downwind-headwind-tailwind"
  },
  {
    id: 184,
    uid: "everything-is-cascading",
    boxes: 1,
    title: "Everything is Cascading",
    vertical: true,
    ariaLabel: "parody of the book cover for Everything is Tuberculosis by John Green: a yellow background with the tile (Everything is Cascading) and the author (Al Montoro) in big laters, a subtitle below the author (Not a bestselling author of the comiCSS series). The center of the drawing looks like a microscope preview with the text The History and Persistence of the Most Hated Language"
  },
  {
    id: 185,
    uid: "css-alignment",
    boxes: 1,
    title: "CSS Alignment",
    vertical: true,
    ariaLabel: "the same snippet of CSS formatted in different ways organized based on the Dungeons and Dragons alignment grid of: good, netrual, and evil; vs lawful, neutral, and chaotic"
  },
  {
    id: 186,
    uid: "may-the-fourth-iii",
    boxes: 1,
    title: "May the Fourth (III)",
    vertical: true,
    ariaLabel: "Cartoon of the CSS logo holding a lightsaber and saying 'I am your father', while the Tailwind logo kneels in despair yelling 'NOOOOOOOOOO!'"
  },
  {
    id: 187,
    uid: "visited-link",
    boxes: 1,
    title: "Visited Link",
    vertical: true,
    ariaLabel: "Cartoon with the CSS and JS logos looking at a visited link. CSS continuously claims it's purple while JS claims it's blue. In the end JS believes CSS and is worried about being colorblind"
  },
  {
    id: 188,
    uid: "faces-of-css",
    boxes: 9,
    horizontal: true,
    title: "The Many Faces of CSS",
    ariaLabel: "cartoon with CSS saying 'Many complain about how difficult I am, but I want to prove I'm easy and versatile. To show... The Many Faces of CSS (because changing styles is my thing)'. Vanilla: new CSS loapolitan: yellow, brown and pink logo. Dark: logo that looks like batman. Kawaii: cute pinkish logo. 3D: logo with lights and shadows. Halloween: logo wearing a JS costume. Halloween 2: logo wearing a Tailwind mask. Vintage: the old CSS logo. Cubist: new CSS logo with multiple colors and all the letters in different spots"
  },
  {
    id: 189,
    uid: "better-shape",
    boxes: 1,
    title: "Better Shape()",
    vertical: true,
    ariaLabel: "Cartoon with the CSS logo modified to have legs, arms, and a face. It has big muscles and says 'They say I am old, but I have never been in better shape() in my life'"
  },
  {
    id: 190,
    uid: "sheriff",
    boxes: 2,
    title: "Sheriff",
    ariaLabel: "cartoon with two panels. The first one shows a sheriff with a curly mustache, curly cowboy hat, curly eyebrows, and additional shadows that make it 'fancy'; it is titled Sheriff. The second one is the same sheriff, but the mustache is straight also the eyebrows and the cowboy hat; it is titled Sans-Sheriff."
  },
  {
    id: 191,
    uid: "kerning-the-frog",
    boxes: 1,
    vertical: true,
    title: "Kerning the Frog",
    ariaLabel: "cartoon of a puppet frog saying 'It is not easy being #00800' with poor kerning (the letters are oddly spaced). It has the title (bad) kerning the frog"
  },
  {
    id: 192,
    uid: "css-nightmare",
    boxes: 4,
    title: "CSS Nightmare",
    ariaLabel: "comic with 4 panels in a 2x2 grid. Two characters talk: one says 'last night I dreamed that all CSS frameworks disappeared and web developers could only code using vanilla CSS'. The second person replies 'Oh, my! That sounds awful! What a terrible nightmare!' The first person first surprised, then ashamed says 'yes... of course... a nightmare...'"
  },
  {
    id: 193,
    uid: "benefits-of-tailwind",
    boxes: 1,
    title: "Benefits of Tailwind",
    video: "HurdPSFAXGA",
    vertical: true,
    ariaLabel: "Pie chart titled Benefits of Using TailwindCSS. The chart is 30% green, 55% yellow, and 15% orange. The legend is Reduced Code Bloat (red), Maintainability (blue), and Learning Curve (pink)"
  },
  {
    id: 194,
    uid: "independence-day-i",
    boxes: 3,
    title: "Independence Day (I)",
    ariaLabel: "Comic strip with 3 panels. The first one happens on July 4, 2025, the IE logo is smiling while saying 'Happy Independence Day! Because you cannot write independence without IE! I'm back, baby!' The second panel has the Chrome and Safari logos looking disgusted and disappointed. The third panel is happening on July 4, 2026, the Chrome and Safari logos cheerfully saying 'Happy Autonomy Day!' while an angry IE logo is seeing in a corner of the panel saying 'jerks!'"
  },
  {
    id: 195,
    uid: "independence-day-ii",
    boxes: 2,
    title: "Independence Day (II)",
    ariaLabel: "Comic strip with 2 panels, the first one has a cheerful IE logo saying 'Happy Independence Day! Because you cannot write independence without IE! I am back, baby!' The second panel has many speech bubbles from characters off-panel saying 'Neither inefficient... or embarrassing... or inferior... or asinine... weird... simpleton... retired... ancient...' And a disappointed looking IE logo replies 'OK... I get it! I'll leave now'"
  },
  {
    id: 196,
    uid: "summer-at-venn",
    boxes: 1,
    title: "Summer at the Venns' House",
    video: "qhmZqHgpnmU",
    vertical: true,
    ariaLabel: "Cartoon with two ice cream cones overlapping each other looking like a Venn diagram"
  },
  {
    id: 197,
    uid: "levels-of-wcag-conformance",
    boxes: 4,
    horizontal: true,
    video: "4B-yudjkXRY",
    title: "Levels of WCAG Conformance",
    ariaLabel: "Comic with 4 panels titled 'Levels of WCAG Conformance'. The first panel is titled 'A' and shows a smiling person saying 'piece of cake!'. The second panel is titled 'AA' and shows the same person with some concern on their face while sighing 'tricky!'. The third panel is titled 'AAA' and shows the same person with a panicking face saying 'this is tough...'. The fourth panel is titled 'AAAAAAAAARGH' and it shows the same person hitting their head against the computer while saying 'I hate this!'"
  },
  {
    id: 198,
    uid: "color-shopping-list",
    boxes: 4,
    title: "Color Shopping List",
    ariaLabel: "comic with 4 panels in a 2x2 grid. A character is working on a computer and saying 'tomato... salmon... tuna... tuna? Oh no! This is not my Figma color list, this is the shopping list! Which means...' The last panel is another character confused, pushing a shopping cart and asking 'Excuse me, do you know when I can find some chartreuse? And how do you even cook a gainsboro?' and sighs 'and what the heck is a lemon chiffon?'"
  },
  {
    id: 199,
    uid: "tanning",
    boxes: 4,
    title: "Tanning",
    ariaLabel: "comic with 4 panels showing three people talking. Person 1: We have a coupon for the tanning salon. Want to come with us? Person 2: I want a tan too, but I can't go coz of my sinus infection. Maybe tomorrow? Person 1: It expires today. That salon is pricey, I couldn’t afford such a cost without a coupon. It’d be a sin not to use it. Would a tangerine help? Person 2: W... What...? Hmmm... Hypothesis: the cartoonist is randomly inserting trigonometric functions into the comic. Person 3: EIGHT!"
  },
  {
    id: 200,
    uid: "pyramid-of-greatness",
    boxes: 1,
    title: "CSS Pyramid of Greatness",
    vertical: true,
    ariaLabel: "Cartoon showing a triangle titled 'CSS Pyramid of Greatness'. The triangle contains 55 rectangles with information and key features of CSS. From 'Animations: moving things around and keeping you warm in winter' to 'Tailwind: Avoid it'. Check the live demo for more information and all 55 of them."
  },
  {
    id: 201,
    uid: "the-old-way",
    boxes: 4,
    title: "The Old Way",
    ariaLabel: "comic with 4 panels in a 2x2 grid. In the first panel, a character asks 'Hey, dude! What are you up to?' a second character replies 'Just building a website... the old way: no frameworks, no webpack, no AI, no libraries... Just crafting HTML, JS, and CSS. It is so much fun!' to the shock of the first character who backs away slowly, to go and tell a different person 'I tell you! He has lost his ******* mind!' in the last panel"
  },
  {
    id: 202,
    uid: "pedro-pascal",
    boxes: 4,
    title: "Pedro Pascal",
    ariaLabel: "comic with 4 panels in a 2x2 grid showing 2 characters talking. A person says 'Check this out! I created a library for comiCSS that...' and a econd character interrupts him 'Let me stop you right there! A comic? Really? That's a dead medium! Seriously... A comic... and about CSS... No one will read that! You should focus on something more interesting like movies or series... something with Pedro Pascal. Pedro Pascal is everywhere, and it's all good. But CSS? In a comic? Nope!' and adding as he leaves 'I would stop with the CSS nonsense and include something with Pedro Pascal, you'll get views and traction... But it's your call. Bye bye!'. In the last panel, it is revealed that the first person was Pedro Pascal wearing a mask (a caricature of him). Pedro says 'I can't connect with the character. What's his deal? Is he happy? Sad? ...and what is CSS? And the dialog? Terrible! Of course I'm everywhere. I'm Pedro ******* Pascal!'"
  },
  {
    id: 203,
    uid: "hippopotenuse",
    boxes: 1,
    title: "Hippopotenuse",
    vertical: true,
    video: "JedgPLVlxjU",
    ariaLabel: "Cartoon of a hippopotamus sleeping on the hypotenuse of a right triangle"
  },
]
