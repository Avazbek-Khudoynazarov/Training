import { gsap } from "gsap-trial";
import { SplitText } from "gsap-trial/SplitText";
import { ScrollTrigger } from "gsap-trial/ScrollTrigger";

gsap.registerPlugin(SplitText, ScrollTrigger);
gsap.config({ trialWarn: false });

export function animateSplitText() {
  let mySplitText = new SplitText(".title", { type: "chars" });
  let chars = mySplitText.chars;
  gsap.from(chars, {
    yPercent: 130,
    stagger: 0.02,
    ease: "back.out",
    duration: 1,
    ScrollTrigger: {
      trigger: "split",
      start: "top 80%",
      markers: true,
    },
  });
}
