import { createContext, useState } from "react";

const Idcontext = createContext();

const IdcontextProvider = ({ children }) => {
  const [id, setid] = useState("");
  const [rating, setRating] = useState("");
  const [description, setDescription] = useState("");
  const updateid = (id) => {
    setid(id);
  };
  const updateRating = (rating) => {
    setRating(rating);
  };
  const updateDescription = (desc) => {
    setDescription(desc);
  };
  console.log(id);
  return (
    <>
      <Idcontext.Provider
        value={{
          id,
          updateid,
          rating,
          updateRating,
          description,
          updateDescription,
        }}
      >
        {children}
      </Idcontext.Provider>
    </>
  );
};

export { Idcontext, IdcontextProvider };
