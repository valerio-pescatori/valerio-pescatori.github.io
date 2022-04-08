import Card from "./Card";
import Me from "./Me";

const Body = ({ active }) => {
  return (
    <>
      {!active ? (
        <div className="container flex-column">
          <img src="https://dummyimage.com/300x300/fff/950740" className="profile-pic" alt="My profile picture" />
          <Me />
        </div>
      ) : (
        <div className="container flex-column">
          <Card
            imgSrc="imgs/person-re-id.png"
            title="Person Re-ID"
            text="Person Re-Id è un framework che realizza re-identificazione di persone attraverso features 
                estratte da uno skeleton 3D. Il framework è stato realizzato utilizzando Unity e PyTorch."
            tags={["csharp", "unity", "pytorch"]}
          />
          <Card
            imgSrc="https://dummyimage.com/640x360/fff/aaa"
            title="Clonegram"
            text="Clonegram è un social network dove gli utenti possono condividere i propri ricordi con i loro amici.
            Nasce da un progetto per il corso di Linguaggi e Tecnologie per il Web.
            Clonegram, come suggerisce il nome, vuole essere un 'clone' di Instagram.
            È stato realizzato utilizzando uno stack LEMP (Linux, Nginx, MySQL, PHP) installato su un component Docker.
            Tra i framework utilizzati per il back-end e il front-end ci sono CodeIgniter, Vue.js, JQuery."
            tags={["unity", "unity", "unity", "unity"]}
          />
          <Card
            imgSrc="https://dummyimage.com/640x360/fff/aaa"
            title="Small Jsweet website"
            text="Piccolo sito web realizzato per il corso di Metodologie di Programmazione A.A. 2018/2019.
            Entrambe le componenti, front-end e back-end, sono state scritte completamente in java, il codice è stato poi transpilato in JavaScript tramite JSweet.
            Il sito web realizza una piattaforma collaborativa di annotazione e validazione di dati linguistici e visuali."
            tags={["java", "jsweet"]}
          />
        </div>
      )}
    </>
  );
};

export default Body;
