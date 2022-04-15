import Card from "./Card";
import Me from "./Me";
import { AnimatePresence, motion } from "framer-motion";

const cards = [
  {
    imgSrc: "imgs/person-re-id.png",
    title: "Person Re-ID",
    text: "Person Re-Id è un'applicazione di machine learning che realizza re-identificazione di persone tamite features estratte da uno skeleton 3D. Il framework è stato realizzato utilizzando Unity e PyTorch.",
    tags: ["csharp", "unity", "pytorch"],
    link: "https://github.com/valerio-pescatori/person_re-id",
  },
  {
    imgSrc: "imgs/clonegram-small.png",
    title: "Clonegram",
    text: "Clonegram è un social network dove gli utenti possono condividere i propri ricordi con i loro amici. Clonegram, come suggerisce il nome, vuole essere un 'clone' di Instagram, è basato uno stack LEMP (Linux, Nginx, MySQL, PHP) installato su un component Docker. Tra i framework utilizzati per il back-end e il front-end ci sono CodeIgniter, Vue.js, JQuery.",
    tags: ["docker", "codeigniter", "vue", "jquery"],
    link: "https://github.com/valerio-pescatori/Ltw-Clonegram",
  },
  {
    imgSrc: "https://dummyimage.com/640x360/fff/aaa",
    title: "Small Jsweet website",
    text: "Piccolo sito web realizzato per il corso di Metodologie di Programmazione A.A. 2018/2019. Entrambe le componenti, front-end e back-end, sono state scritte completamente in java, il codice è stato poi transpilato in JavaScript tramite JSweet. Il sito web realizza una piattaforma collaborativa di annotazione e validazione di dati linguistici e visuali.",
    tags: ["java", "jsweet"],
    link: "#",
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
