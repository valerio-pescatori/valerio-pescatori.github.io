import { useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import { getBreakPoint, debounce } from "./../utils";

function handleResize() {
  var bodyElements = document.getElementsByClassName("card-body");
  var textElements = document.getElementsByClassName("card-text");

  if (getBreakPoint(window.innerWidth) === "sm") {
    for (let element of bodyElements) {
      element.style.height = element.previousElementSibling.clientHeight + "px";
      element.style.justifyContent = "flex-end";
      element.style.marginTop = -element.clientHeight + "px";
      element.style.background = "rgba(0, 0, 0, 0.60)";
    }

    //handle text
    for (let element of textElements) {
      if (element.scrollHeight > element.clientHeight && element.childElementCount < 1) {
        var s = element.innerHTML;
        element.innerHTML = s.substring(0, s.length / 2) + "..." + "<p style='display:none'>" + s + "</p>";
      }
    }
  } else {
    // reset
    for (let element of bodyElements) {
      element.style.justifyContent = "space-between";
      element.style.height = null;
      element.style.marginTop = null;
      element.style.background = null;
    }

    for (let element of textElements) {
      if (element.childElementCount > 0) element.innerHTML = element.removeChild(element.firstElementChild).textContent;
    }
  }
}

const Card = (props) => {
  useEffect(() => {
    // wrappo la chiamata a debounce in una variabile
    const debouncedHandleResize = debounce(handleResize, 50);
    // aggiungo l'event listener
    window.addEventListener("resize", debouncedHandleResize);

    // cleanup
    return () => {
      window.removeEventListener("resize", debouncedHandleResize);
    };
  });

  const { ref, inView } = useInView({
    threshold: 0.7,
  });

  const animation = useAnimation();

  // intersection observer animation
  useEffect(() => {
    if (inView)
      animation.start({
        opacity: 1,
      });
  }, [inView]);

  return (
    <motion.div initial={{ opacity: 0 }} animate={animation} ref={ref}>
      <h3 className="card-title">{props.title}</h3>
      <motion.a className="card" href={props.link} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <img className="card-img" src={props.imgSrc} onLoad={handleResize}></img>
        <div className="card-body">
          <p className="card-text">{props.text}</p>
          <div className="tags-wrapper">
            {props.tags.map((t, i) => (
              <img className="tag" src={"icons/" + t} key={i}></img>
            ))}
          </div>
        </div>
      </motion.a>
    </motion.div>
  );
};

export default Card;
