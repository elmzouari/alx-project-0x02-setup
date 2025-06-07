import Card from "@/components/common/Card";
import Modal from "@/components/common/PostModal";
import PostModal from "@/components/common/PostModal";
import Header from "@/components/layout/Header";
import { CardProps } from "@/interfaces";
import { useState } from "react";

const Home = () => {
  const content_list: CardProps[] = [
    {
      title: "Card 1",
      content: "This is the content of card 1",
    },
    {
      title: "Card 2",
      content: "This is the content of card 2",
    },
    {
      title: "Card 3",
      content: "This is the content of card 3",
    },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [content, setContent] = useState<CardProps[]>(content_list);

  const handleSubmit = (newCard: CardProps) => {
    setContent((prev) => [...prev, newCard]);
    setIsOpen(false); 
  };
  return (
    <>
      <section>
        <Header />
        <h3>Welcome HOME2</h3>
        <button
          onClick={() => setIsOpen(true)}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg"
        >
          Open Modal
        </button>
      </section>
      <section>
        <Modal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          onSubmit={handleSubmit}
        ></Modal>
      </section>
      <section>
        {content.map((item) => (
          <Card key={item.title} {...item} />
        ))}
      </section>
    </>
  );
};

export default Home;
