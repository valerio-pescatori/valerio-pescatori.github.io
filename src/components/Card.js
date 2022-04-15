import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

function formatTags(tags) {
  return tags.map((t, i) => <img className="tag" src={"icons/" + t + ".png"} key={i}></img>);
}

function debounce(fn, ms) {
  let timer;
  return (_) => {
    clearTimeout(timer);
    timer = setTimeout((_) => {
      timer = null;
      fn.apply(this);
    }, ms);
  };
}

function getBreakPoint(windowWidth) {
  if (windowWidth) {
    if (windowWidth <= 688) {
      return "sm";
    } else if (windowWidth < 1024) {
      return "md";
    } else if (windowWidth < 1200) {
      return "lg";
    } else {
      return "xlg";
    }
  } else {
    return undefined;
  }
}

function handleResize() {
  //handle resize code
  var elements = document.getElementsByClassName("card-body");
  if (getBreakPoint(window.innerWidth) === "sm") {
    for (let element of elements) {
      element.style.height = element.previousElementSibling.innerHeight + "px";
      element.style.justifyContent = "flex-end";
      element.style.marginTop = -element.clientHeight + "px";
      element.style.background = "linear-gradient(transparent, rgba(0, 0, 0, 0.75) 40%, rgba(0, 0, 0, 1) 70%)";
    }
  } else {
    for (let element of elements) {
      element.style.justifyContent = "space-between";
      element.style.height = null;
      element.style.marginTop = null;
      element.style.background = null;
    }
  }
}

const Card = (props) => {
  useEffect(() => {
    //la prima rirenderizzazione non dipende dal resize
    handleResize();
  }, []);

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
        <img src={props.imgSrc} id="img" className="card-img"></img>
        <div className="card-body">
          <p className="card-text">{props.text}</p>
          <div className="tags-wrapper">{formatTags(props.tags)}</div>
        </div>
      </motion.a>
    </motion.div>
  );
};

export default Card;
