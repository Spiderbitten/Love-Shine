// Animation Timeline
const animationTimeline = () => {
  const textBoxChars = document.getElementsByClassName("hbd-chatbox")[0];
  const hbd = document.getElementsByClassName("wish-hbd")[0];

  textBoxChars.innerHTML = `<span>${textBoxChars.innerHTML
    .split("")
    .join("</span><span>")}</span>`;

  hbd.innerHTML = `<span>${hbd.innerHTML
    .split("")
    .join("</span><span>")}</span>`;

  const ideaTextTrans = {
    opacity: 0,
    y: -20,
    rotationX: 5,
    skewX: "15deg",
  };

  const ideaTextTransLeave = {
    opacity: 0,
    y: 20,
    rotationY: 5,
    skewX: "-15deg",
  };

  const tl = new TimelineMax();

  tl.to(".container", 0.1, { visibility: "visible" })
    .from(".one", 0.7, { opacity: 0, y: 10 })
    .from(".two", 0.4, { opacity: 0, y: 10 })
    .to(".one", 0.7, { opacity: 0, y: 10 }, "+=2.5")
    .to(".two", 0.7, { opacity: 0, y: 10 }, "-=1")
    .from(".three", 0.7, { opacity: 0, y: 10 })
    .to(".three", 0.7, { opacity: 0, y: 10 }, "+=2")
    .from(".four", 0.7, { scale: 0.2, opacity: 0 })
    .from(".fake-btn", 0.3, { scale: 0.2, opacity: 0 })
    .staggerTo(".hbd-chatbox span", 0.5, { visibility: "visible" }, 0.05)
    .to(".fake-btn", 0.1, { backgroundColor: "rgb(127, 206, 248)" })
    .to(".four", 0.5, { scale: 0.2, opacity: 0, y: -150 }, "+=0.7")
    .from(".idea-1", 0.7, ideaTextTrans)
    .to(".idea-1", 0.7, ideaTextTransLeave, "+=1.5")
    .from(".idea-2", 0.7, ideaTextTrans)
    .to(".idea-2", 0.7, ideaTextTransLeave, "+=1.5")
    .from(".idea-3", 0.7, ideaTextTrans)
    .to(".idea-3 strong", 0.5, {
      scale: 1.2,
      x: 10,
      backgroundColor: "rgb(21, 161, 237)",
      color: "#fff",
    })
    .to(".idea-3", 0.7, ideaTextTransLeave, "+=1.5")
    .from(".idea-4", 0.7, ideaTextTrans)
    .to(".idea-4", 0.7, ideaTextTransLeave, "+=1.5")
    .staggerFrom(".idea-6 span", 0.8, {
      scale: 3,
      opacity: 0,
      rotation: 15,
      ease: Expo.easeOut,
    }, 0.2)
    .staggerFromTo(".baloons img", 2.5,
      { opacity: 0.9, y: 1400 },
      { opacity: 1, y: -1000 },
      0.2
    )
    .from(".girl-dp", 0.5, {
      scale: 3.5,
      opacity: 0,
      x: 25,
      y: -25,
      rotationZ: -45,
    }, "-=2")
    .staggerFrom(".wish-hbd span", 0.7, {
      opacity: 0,
      y: -50,
      rotation: 150,
      skewX: "30deg",
      ease: Elastic.easeOut.config(1, 0.5),
    }, 0.1)
    .from(".wish h5", 0.5, {
      opacity: 0,
      y: 10,
      skewX: "-15deg",
    })
    .staggerFrom(".nine p", 1, ideaTextTrans, 1.2);

  document.getElementById("replay").addEventListener("click", () => {
    tl.restart();
  });
};


// 🔥 REMOVE customize.json COMPLETELY
// DIRECTLY SET YOUR NAME HERE

const setCustomData = () => {
  document.getElementById("name").innerText = "Shineeee";
  document.getElementById("greetingText").innerText =
    "Happy Valentine's Day Shineeee ❤️";
  document.getElementById("wishText").innerText =
    "This year of our togetherness has been so beautiful. I love you so much ❤️";
};


// Run Everything
setCustomData();
animationTimeline();
