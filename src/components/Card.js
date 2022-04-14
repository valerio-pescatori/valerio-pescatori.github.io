import { useEffect } from "react";
import { motion } from "framer-motion";

function formatTags(tags) {
  return tags.map((t, i) => <img className="tag" src={"icons/" + t + ".png"} key={i}></img>);
}

function debounce(fn, ms) {
  let timer;
  return (_) => {
    clearTimeout(timer);
    timer = setTimeout((_) => {
      timer = null;
      fn.apply(this, arguments);
    }, ms);
  };
}

function getBreakPoint(windowWidth) {
  if (windowWidth) {
    if (windowWidth < 688) {
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

const Card = (props) => {
  //use Effect viene chiamato ogni volta che viene ri-renderizzata la UI
  useEffect(() => {
    // wrappo la chiamata a debounce in una variabile
    const debouncedHandleResize = debounce(() => {
      //handle resize code
      var elements = document.getElementsByClassName("card-body");
      if (getBreakPoint(window.innerWidth) === "sm") {
        for (let element of elements) {
          element.style.height = element.previousSibling.clientHeight + "px";
          element.style.justifyContent = "flex-end";
          element.style.marginTop = -element.clientHeight + "px";
        }
      } else {
        for (let element of elements) {
          element.style.justifyContent = "space-between";
          element.style.height = null;
          element.style.marginTop = null;
        }
      }
    }, 50);

    // aggiungo l'event listener
    window.addEventListener("resize", debouncedHandleResize);

    // cleanup
    return () => {
      window.removeEventListener("resize", debouncedHandleResize);
    };
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h3 className="card-title">{props.title}</h3>
      <a className="card" href={props.link}>
        <img src={props.imgSrc} className="card-img"></img>
        <div className="card-body">
          <p className="card-text">{props.text}</p>
          <div className="tags-wrapper">{formatTags(props.tags)}</div>
        </div>
      </a>
    </motion.div>
  );
};

export default Card;
