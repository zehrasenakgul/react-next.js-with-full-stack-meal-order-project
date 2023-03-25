import React from "react";
import Header from "../components/layouts/header";
import Footer from "../components/layouts/footer";
import { FaHome } from "react-icons/fa";

const about = () => {
  return (
    <div>
      <Header />
      <div
        className="banner pt-10 pb-10"
        style={{
          backgroundImage: "url(/img/background.png)",
        }}
      >
        <div className="container mx-auto">
          <div className="flex items-center">
            <div className="w-full">
              <div className="title-area-data">
                <h2 className="font-fredoka font-bold text-6xl">About Us</h2>
                <p>A magical combination that sent aromas to the taste buds</p>
              </div>
              <ol className="breadcrumb bg-pink font-fredoka">
                <li className="breadcrumb-item">
                  <a href="" className="flex items-center">
                    <FaHome /> <span className="ml-3">Home</span>
                  </a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  about
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      <section className="gap">
        <div className="container mx-auto">
          <div className="flex items-center">
            <div className="w-full">
              <div className="parties-events-text">
                <h2 className="font-fredoka font-bold text-4xl text-black">
                  Parties, events and <br />
                  special occasions
                </h2>
                <p className="font-fredoka mt-3">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Perferendis, nostrum quisquam tempore sapiente harum accusamus
                  consequuntur culpa libero sit, exercitationem iste tenetur?
                  Temporibus enim nulla cum fugit minima quaerat saepe eligendi
                  alias mollitia. Dolores vel aliquid fugit atque magnam ipsum
                  facere, maxime non perspiciatis. Exercitationem illo, ducimus
                  doloribus recusandae, unde sunt ipsa, expedita ipsum similique
                  possimus maiores consequuntur harum delectus laborum cum
                  explicabo distinctio laudantium architecto consequatur?
                  Corporis hic fugiat repellat, accusamus impedit dolorem facere
                  earum voluptatibus architecto laborum vitae fugit consectetur
                  eligendi unde, voluptates beatae harum. Alias hic, quae, ad
                  nostrum pariatur saepe vel aut harum inventore id cum veniam
                  a, corporis ut ea vitae! Esse qui voluptatum, iure officia
                  expedita, facilis natus repellendus et quae tenetur dolorum
                  commodi. Praesentium commodi quidem necessitatibus corrupti
                  exercitationem expedita. Blanditiis maxime ut vero impedit
                  ratione quis nemo culpa explicabo ab. Debitis qui ducimus
                  dolorem sapiente illo eveniet recusandae nihil accusamus
                  corrupti nemo?
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default about;
