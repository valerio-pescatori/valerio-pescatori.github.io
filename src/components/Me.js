import { motion } from "framer-motion";

const Me = () => {
  return (
    <div className="container flex-column">
      <motion.img
        className="profile-pic"
        src="https://dummyimage.com/300x300/fff/950740"
        initial={{ x: "-100vw", opacity: 0 }}
        animate={{ x: "0vw", opacity: 1 }}
        exit={{ x: "-100vw", opacity: 0 }}
      />
      <motion.div
        className="me-card"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ x: "-100vw", opacity: 0 }}
      >
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 0.5 } }}
          exit={{ x: "-100vw", opacity: 0 }}
        >
          Hi, I'm Valerio.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 1 } }}
          exit={{ x: "-100vw", opacity: 0 }}
        >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam nostrum pariatur architecto harum nulla numquam
          provident doloremque sit alias, sequi soluta natus atque vero cum culpa autem perferendis eius illum fuga
          eveniet enim? Deserunt pariatur, rerum delectus repudiandae, sapiente excepturi rem illum quis quo voluptas in
          corporis provident, aliquam ex sed quasi! Earum quasi quod ullam ipsam cupiditate incidunt cum iure rem alias
          perspiciatis, ea commodi? Quis harum veniam reiciendis eveniet excepturi eos possimus, deleniti magnam
          voluptatibus unde eum? Quae maiores iure id odit reiciendis doloribus, adipisci excepturi inventore, quibusdam
          illum, libero illo aperiam modi consequuntur hic recusandae iste culpa! Fugiat, animi. Dicta inventore
          reiciendis cum molestiae quidem tenetur nam autem esse sit consequuntur, accusantium provident alias vero
          obcaecati facere molestias labore aliquid architecto officia eligendi magni quos. Quaerat consequatur
          consectetur quos laboriosam nam, quod, sequi in ea assumenda, sed voluptas eaque qui blanditiis delectus
          eveniet labore beatae facilis dolores.
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Me;
