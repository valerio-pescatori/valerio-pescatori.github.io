import Card from "./Card";
import Me from "./Me";
import { AnimatePresence, motion } from "framer-motion";

const cards = [
  {
    imgSrc: "imgs/person-re-id.png",
    title: "Person Re-ID",
    textIt:
      "Person Re-Id è un'applicazione di machine learning che realizza re-identificazione di persone tamite features estratte da uno skeleton 3D. Il framework è stato realizzato utilizzando Unity e PyTorch.",
    text: "Person Re-Id is a machine learning application for synthetic person re-identification based on features extracted from a 3D skeleton. The re-identification is done by a neural network that learns to recognize individual by the way they walk and move, the application was built using the PyTorch framework and Unity.",
    tags: ["csharp.svg", "unity.svg", "pytorch.svg"],
    link: "https://github.com/valerio-pescatori/person_re-id",
  },
  {
    imgSrc: "imgs/godflex.jpg",
    title: "React Netflix Clone",
    text: "Collaborative project in which we reproduced a small subset of the main Netflix pages front-end. We used the TMDB Api to get data about movies. The app is build with React (v. 18), the React Router v6 and CSS Modules for the styling. ",
    tags: ["react.svg", "react-router.svg"],
    link: "https://github.com/valerio-pescatori/react-netflix",
  },
  {
    imgSrc: "imgs/solidjs.png",
    title: "SolidJS App",
    text: "Simple webapp built in SolidJS, a very small (6kb of budle size) reactive declarative framework. It's a webapp that lets you search and read information about countries in the world using the REST Countries API. It is actually my attempt at a FrontendMentor.io challenge which is linked in the github repo.",
    tags: ["solidjs.svg"],
    link: "https://github.com/valerio-pescatori/solidjs-rest-countries",
  },
  {
    imgSrc: "imgs/clonegram-small.png",
    title: "Clonegram",
    textIt:
      "Clonegram è un social network dove gli utenti possono condividere i propri ricordi con i loro amici. Clonegram, come suggerisce il nome, vuole essere un 'clone' di Instagram, è basato uno stack LEMP (Linux, Nginx, MySQL, PHP) installato su un component Docker. Tra i framework utilizzati per il back-end e il front-end ci sono CodeIgniter, Vue.js, JQuery.",
    text: "Clonegram is a collaborative project for the 'Linguaggi e Tecnologie per il Web' course from A.A. 2019/20. It's a social network that, as the name suggests, aims to be a clone of Instagram. It is based on a LEMP stack installed on a multi-container Docker application (Docker Compose). The back-end is based on CodeIgniter, a popular PHP framework, while the front-end is made using primarily Vue.js and JQuery.",
    tags: ["docker.svg", "codeigniter.svg", "vue.svg", "jquery.svg"],
    link: "https://github.com/valerio-pescatori/Ltw-Clonegram",
  },
  {
    imgSrc: "imgs/subito.png",
    title: "Subito.it Clone",
    text: "Front-end replica of the Subito.it website realized using only HTML5 + CSS3. It's a very small project completed in a matter of hours, nothing fancy. The main goal was to reproduce the website as precisely as possible, making it also responsive. I've started using the BEM methodology since this project as it is actually very helpful in naming css classes and keeping the stylesheet very organized.",
    tags: ["html5.svg", "css3.svg"],
    link: "https://github.com/valerio-pescatori/solidjs-rest-countries",
  },
  {
    imgSrc: "imgs/this-website.png",
    title: "This website",
    text: "This website has been developed using React, it is a single page divided in two sections. I used React for the layout, pure CSS for styling and Framer Motion for the animations. I always try to test new technologies to increment my abilities and keep myself updated on new trends. ",
    tags: ["react.svg", "framer.svg"],
    link: "https://github.com/valerio-pescatori/valerio-pescatori.github.io/tree/source",
  },
  {
    imgSrc: "imgs/jsweet-small.png",
    title: "Small Jsweet website",
    textIt:
      "Piccolo sito web realizzato per il corso di Metodologie di Programmazione A.A. 2018/2019. Entrambe le componenti, front-end e back-end, sono state scritte completamente in java, il codice è stato poi transpilato in JavaScript tramite JSweet. Il sito web realizza una piattaforma collaborativa di annotazione e validazione di dati linguistici e visuali.",
    text: "Small Jsweet website realised as a final project for the 'Metodologie di Programmazione' course from A.A. 2018/19. Both front-end and back-end was written exclusively in Java, code was then transipled to JavaScript through JSweet. The website works as a cooperative platform for annotation and validation of linguistic and visual data.",
    tags: ["java.svg", "jsweet.png"],
    link: "https://github.com/valerio-pescatori/metodologie_Pescatori.1807838",
  },
];

const Body = ({ active }) => {
  return (
    <>
      <AnimatePresence exitBeforeEnter={true}>
        {!active ? (
          <Me key="me" />
        ) : (
          <motion.div
            className="container flex-column"
            initial={{ x: "100vw" }}
            animate={{ x: "0vw" }}
            exit={{ x: "100vw" }}
            key="cards"
          >
            {cards.map((x, i) => (
              <Card key={i} imgSrc={x.imgSrc} title={x.title} text={x.text} tags={x.tags} link={x.link} />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Body;
