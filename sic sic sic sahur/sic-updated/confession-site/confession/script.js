/* =====================================================
   CONFESSION SITE - SCRIPT
   PART 1 is the only part you need to edit.
   ===================================================== */

/* ---------- PART 1: EDIT ME ---------- */
const CONFIG = {
  name: "Lily",                       // her name, shown under the heart

  // How I fell for you. Each block becomes one envelope. When she opens it, the photo (img) and words (text) pop up side by side.
  // Add or remove blocks: { img, title, text }. They alternate left/right by themselves.
  timeline: [
    { img: "assets/t1.jpg", title: "Charm", text: "I take this everywhere I go and honestly, it's like a lucky charm. I don't like keychains normally but what you gave me was very special and I take care of it to the best of my abilities. It makes me feel like you're near me somehow and I really like it. Whenever school gets stressful I dissociate, the plush makes me feel at ease. It's like a mini version of you beside me although you're tiny already so mini-er? Kidding, okay. I just wanna say that I really enjoy your prescense although you aren't really here :(" },
    { img: "assets/t2.png", title: "You", text: "Now, you. Hehe this pic of you is so adorable omg. I gotta treat Andrew something for blessing me with this coz I'm kinda kicking my feet on the chair while editing this. Seeing you again after quite a while was really fun. You don't seem to have changed though. You still look really captivating and you're still quirky as ever which I really adore. You have so many qualities that I wanna talk about like the way you talk for example, like omg? I find it so attractive. You yap a lot and it's really cute and funny I enjoy all of it. It's almost like I'm absorbing the energy from you but you can't run out of it. Either way, I really want you to know that I love everything when it comes to youu." },
    { img: "assets/t3.jpg", title: "Diary", text: "So, I'm not sure if you remember but I have a book in which I write about you. Almost all of it is filled with spontaneous thoughts yk I just write down whatever's on my mind which, again, is you and always you. I used to write these in my notes on my phone but I thought a handwritten one was better. Unfortunately, I did crash out a bit, a tiny tiny bit and wrote some funny stuff erm. That aside, it's all about how you are unknowingly living in my head like seriously tho, I can't ever get you off my head. I'd be waiting all the time for you to reply, even during school days but it's worth it coz you make me feel happy just by being yourself. That's what matters the most and when we meet outside, I'll make sure to give this book to you, precious." },
    { img: "assets/t4.jpg", title: "Us", text: "At last, you and I. I don't know about you but I enjoyed our day at the photobooth so much that I often dream about it. I barely dream on a daily basis but after having you on my mind all the time, I keep dreaming of you. That day was a Friday, and I ditched my afternoon classes for you heh. I can genuinely still see how you looked like back on that day ugh, so pretty. It was like just you and me alone, having fun because I totally forgot about Amelia there at some point. I remember us skating really well actually. We both were somewhat struggling but still having fun and it was just very memorable. I was really trying so hard not to fall in front of you but I still did once. Either way you seem really happy at that moment and I just took my time taking it in. Finally, the best part, photobooth. I cannot count how many times I've looked back at those 4 pictures and geeked. It was unexpected so I didn't know how to pose and stuff I'm sorry TT. Regardless, that little booth at that moment felt so special because it was just you and me BUT I apologize for being hesitant coz I was very VERY dumbfounded at that time and I didn't want to make you feel uncomfortable. Sorry you had to read all of that but I want you to know that it was the best day of my life ever, literally." }
  ],

  // Songs that sound like her (3x3 grid = 9 songs). link = the song's Spotify link (Share > Copy Song Link).
  songs: [
    { title: "Rearrange My World", artist: "Daniel Caesar", cover: "assets/c11.jpg", link: "https://open.spotify.com/track/3Ku0VYAQ4b6IomnonhjdVv?si=7298a073064645d5" },
    { title: "Fallingforyou", artist: "The 1975", cover: "assets/c12.jpg", link: "https://open.spotify.com/track/7LbUv7w2z7rEbNqp1uIL9U?si=bbd1762e56144f32" },
    { title: "Violet", artist: "Daniel Caesar", cover: "assets/c13.jpg", link: "https://open.spotify.com/track/6CVciPxACaLYZfx49VGSPy?si=f76eb5d7408245d2" },
    { title: "I'm In Love With You", artist: "The 1975", cover: "assets/c14.jpg", link: "https://open.spotify.com/track/0Scic4FpsSQ2c6kAY4YhPj?si=d738a2db69634ff8" },
    { title: "ujsnonlyu", artist: "Sic", cover: "assets/c15.jpg", link: "https://open.spotify.com/playlist/0PIyqIJbp48CpRr572Qihr?si=Kio28IGjR-SW4Snw5t0-tQ" },
    { title: "It's Not Living (If It's Not With You)", artist: "The 1975", cover: "assets/c16.jpg", link: "https://open.spotify.com/track/3TgMcrV32NUKjEG2ujn9eh?si=b88b647788244934" },
    { title: "Sanctuary", artist: "Joji", cover: "assets/c17.jpg", link: "https://open.spotify.com/track/4VQH4VluDUOsOuDxccTeyN?si=6006cffc36984d8c" },
    { title: "It Had To Be You", artist: "Frank Sinatra", cover: "assets/c18.jpg", link: "https://open.spotify.com/track/0Ab4lEHfPY98aqtQrKQbUu?si=7ff79ef8da214d61" },
    { title: "20191009 I Like Her", artist: "Mac DeMarco", cover: "assets/c19.jpg", link: "https://open.spotify.com/track/3oUn55qKRZ1JFzfQNbJjS1?si=4739ea750c2b479f" },
    ,
  ],

  // The confession letter. One string per paragraph.
  letter: {
    greeting: "Dearest Lily,",
    paragraphs: [
      "I'm guessing you must not have known I've prepared this because I wanted to surprise you. Before I tell you how I feel, all of this was done with the help of my friend and I was mainly responsible for editing colors and texts so big thanks to him as well.",
      "We've been in contact for a while now and you must've notice me pushing my way closer to you. I thought a lot about whether I should tell you this or not but it's now or never I assume.(Maybe not never, I'm just exaggerating)",
      "I like you. Well, it's a lot more than that and it's more like I admire you. As I've said, I love the way you are naturally - quirky, silly, cute and a lot more. You just make me feel really happy whenver we're talking and that has been giving me the energy to deal with people at school. ",
      "You're all I need to be very honest and I'd feel complete with you. However, I'm not willing to push you to make a decision on whether you wanna be with me or not so, the choice is all yours to make. Take your time.",
      "You're the first I've said it to soooo I love you :P",
    ],
    signature: "Sic"
  },

  // The question at the end. noMessages: one line is shown each time she presses No.
  question: {
    title: "Will you go out with me?",
    yes: "Yes",
    no: "No",
    noMessages: [
      "Are you sure?",
      "Think about it once more...",
      "I made this whole website for you.",
      "Look how big Yes is getting.",
      "Okay, there's only one answer left."
    ],
    yesTitle: "You just made me the happiest person alive",
    yesText: "Write what happens next here. Dinner on Friday?"
  }
};

/* ---------- PART 2: BUILD THE PAGE (you don't need to edit below) ---------- */
const $ = s => document.querySelector(s);
const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
// esc() makes text safe to put inside HTML (so quotes or & in your text can't break the page)
const esc = s => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

$("#partnerName").textContent = CONFIG.name;
document.title = "For " + CONFIG.name;

// Timeline: one envelope per memory. Each gets a random tilt between -5 and +5 degrees.
// data-i remembers which CONFIG.timeline entry the envelope belongs to.
$("#steps").innerHTML = CONFIG.timeline.map((t, i) =>
  `<article class="step"><button class="envelope" type="button" data-i="${i}" style="--r:${(Math.random() * 10 - 5).toFixed(1)}deg" aria-label="Open memory: ${esc(t.title)}"><span class="paper"></span><span class="front"></span><span class="flap"></span><span class="seal">&hearts;</span></button><div class="label"><h3>${esc(t.title)}</h3><p class="hint">Tap to open</p></div></article>`).join("");

// Songs
$("#songGrid").innerHTML = CONFIG.songs.map(s =>
  `<a class="song" href="${esc(s.link)}" target="_blank" rel="noopener"><div class="cover"><img src="${esc(s.cover)}" alt=""><span class="play" aria-hidden="true">&#9654;</span></div><b>${esc(s.title)}</b><small>${esc(s.artist)}</small></a>`).join("");

// Letter
const L = CONFIG.letter;
$("#letterBody").innerHTML = `<h2 id="letterTitle">${esc(L.greeting)}</h2>` +
  L.paragraphs.map(p => `<p>${esc(p)}</p>`).join("") + `<p class="sign">${esc(L.signature)}</p>`;

// 3D heart: 15 flat hearts, each pushed a little further forward (translateZ) and a little lighter
const heart = $("#heart");
for (let z = -14; z <= 14; z += 2) {
  const layer = document.createElement("i");
  layer.style.setProperty("--c", `hsl(345 75% ${42 + z}%)`);   // colour for this layer (the heart halves read it)
  layer.style.transform = `translateZ(${z}px)`;
  heart.appendChild(layer);
}

/* ---------- OPEN MY HEART ---------- */
$("#openBtn").addEventListener("click", () => {
  $("#intro").hidden = true;
  $("#reveal").hidden = false;
  $("#story").hidden = false;                    // show the rest of the site
  document.body.classList.remove("locked");      // allow scrolling
  startAnimations();                             // set up scroll animations AFTER the content is visible
});

/* ---------- SCROLL ANIMATIONS (GSAP) ---------- */
function startAnimations() {
  if (!window.gsap || !window.ScrollTrigger || reduce) return;   // offline or reduced motion: skip, page still works
  gsap.registerPlugin(ScrollTrigger);
  const when = (trigger, start = "top 85%") => ({ trigger, start });  // "when the top of the element hits 85% down the screen"

  gsap.utils.toArray("h2").forEach(h => gsap.from(h, { y: 30, opacity: 0, duration: .8, scrollTrigger: when(h) }));

  // Timeline: odd envelopes slide in from the left, even ones from the right (clearProps hands hover back to CSS)
  gsap.utils.toArray(".step").forEach((step, i) => {
    gsap.from(step, { x: 90 * (i % 2 ? 1 : -1), opacity: 0, duration: 1, ease: "power2.out", clearProps: "all", scrollTrigger: when(step, "top 85%") });
  });

  gsap.from(".song", { x: -60, opacity: 0, duration: .7, stagger: .12, ease: "power2.out", clearProps: "all", scrollTrigger: when("#songGrid") });
  gsap.from("#envelope", { scale: .8, opacity: 0, duration: .8, ease: "back.out(2)", clearProps: "all", scrollTrigger: when("#envelope", "top 90%") });
  gsap.from("#answers", { scale: .85, opacity: 0, duration: .8, ease: "back.out(2)", clearProps: "all", scrollTrigger: when("#answers", "top 90%") });
  ScrollTrigger.refresh();
}

/* ---------- ENVELOPES + POP-UPS: the flap opens first, then the pop-up appears ---------- */
// One helper serves every envelope on the page (the letter AND all the timeline memories).
function openEnvelope(env, dlg) {
  if (env.classList.contains("open")) return;                          // ignore double-clicks
  env.classList.add("open");                                           // CSS animates the flap and the paper
  setTimeout(() => dlg.showModal(), reduce ? 0 : 900);                 // wait for the animation, then show the pop-up
  dlg.addEventListener("close", () => env.classList.remove("open"), { once: true });   // closing resets the envelope
}

// Letter envelope
$("#envelope").addEventListener("click", e => openEnvelope(e.currentTarget, $("#letterDialog")));

// Memory envelopes: fill the shared pop-up with this envelope's photo and words, then open it
const memoryDialog = $("#memoryDialog");
document.querySelectorAll("#steps .envelope").forEach(env => {
  env.addEventListener("click", () => {
    const m = CONFIG.timeline[env.dataset.i];
    $("#memoryImg").src = m.img;
    $("#memoryImg").alt = m.title;
    $("#memoryTitle").textContent = m.title;
    $("#memoryText").textContent = m.text;
    openEnvelope(env, memoryDialog);
  });
});

// Every pop-up: the X button closes it, and so does a click outside the card
document.querySelectorAll("dialog").forEach(dlg => {
  dlg.querySelector(".close").addEventListener("click", () => dlg.close());
  dlg.addEventListener("click", e => {
    const r = dlg.getBoundingClientRect();
    if (e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom) dlg.close();
  });
});

/* ---------- THE QUESTION: Yes grows, No shrinks and hops away ---------- */
const Q = CONFIG.question;
const yesBtn = $("#yesBtn"), noBtn = $("#noBtn"), hint = $("#noHint");
$("#questionTitle").textContent = Q.title;
yesBtn.textContent = Q.yes;
noBtn.textContent = Q.no;
let noCount = 0;

// Mouse only: the No button hops to a random spot when the pointer comes near. Touch and keyboard users can still press it.
noBtn.addEventListener("pointerenter", e => {
  if (e.pointerType !== "mouse" || reduce) return;
  noBtn.style.setProperty("--nx", (Math.random() * 160 - 80) + "px");
  noBtn.style.setProperty("--ny", (Math.random() * 80 - 40) + "px");
});

noBtn.addEventListener("click", () => {
  hint.textContent = Q.noMessages[Math.min(noCount, Q.noMessages.length - 1)];   // next message from the list
  noCount++;
  yesBtn.style.setProperty("--yes", Math.min(1 + noCount * 0.18, 2.2));         // Yes grows
  noBtn.style.setProperty("--no", Math.max(1 - noCount * 0.12, 0.4));           // No shrinks
  if (noCount >= Q.noMessages.length) noBtn.hidden = true;                      // out of messages: No disappears
});

yesBtn.addEventListener("click", () => {
  $("#answers").hidden = true;
  hint.hidden = true;
  $("#yesTitle").textContent = Q.yesTitle;
  $("#yesText").textContent = Q.yesText;
  $("#yesBox").hidden = false;
  if (!reduce) confetti();
});

// Falling hearts: 45 small hearts, each with a random position, size and speed, removed after a few seconds
function confetti() {
  for (let i = 0; i < 45; i++) {
    const heartEl = document.createElement("span");
    heartEl.className = "fall";
    heartEl.textContent = "\u2665";
    heartEl.style.cssText = `left:${Math.random() * 100}vw;font-size:${14 + Math.random() * 26}px;` +
      `animation-duration:${3 + Math.random() * 3}s;animation-delay:${Math.random() * 1.5}s`;
    document.body.appendChild(heartEl);
    setTimeout(() => heartEl.remove(), 7500);
  }
}
