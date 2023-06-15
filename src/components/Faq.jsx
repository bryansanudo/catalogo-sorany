import React from "react";
import Section from "@/components/common/Section";

const Faq = () => {
  const questions = [
    {
      id: 1,
      question: "¿ Pregunta 1 ? ",
      answer: "respuesta",
    },
    {
      id: 2,
      question: "¿ Pregunta 2 ? ",
      answer: "respuesta",
    },
    {
      id: 3,
      question: "¿ Pregunta 3 ? ",
      answer: "respuesta",
    },
    {
      id: 4,
      question: "¿ Pregunta 4 ? ",
      answer: "respuesta",
    },
    {
      id: 5,
      question: "¿ Pregunta 5 ? ",
      answer: "respuesta",
    },
    {
      id: 6,
      question: "¿ Pregunta 6 ? ",
      answer: "respuesta",
    },
    {
      id: 7,
      question: "¿ Pregunta 7 ? ",
      answer: "respuesta",
    },
  ];

  return (
    <div>
      <Section name="portafolio" title="Preguntas Frecuentes ">
        {/* subtitle={`
    Disfruta los mejores destilados hibridos de 1.2ML de contenido y concentrados al 98%. Las cepas varian según la disponibilidad.

   `} */}
        <div className="mx-auto flex h-full w-full max-w-screen-lg flex-col justify-center  ">
          <div className="flex flex-col items-center justify-center max-w-[1000px]">
            {questions.map((item) => (
              <div
                key={item.id}
                tabIndex={0}
                className="collapse collapse-arrow border border-[#ffcdc2] bg-base-100 rounded-box w-full"
              >
                <div className="collapse-title text-xl font-medium ">
                  {item.question}
                </div>
                <div className="collapse-content text-left">
                  <p>{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Faq;
