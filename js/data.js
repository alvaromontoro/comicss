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
  }
]