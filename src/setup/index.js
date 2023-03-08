// import React, { useState, useReducer } from "react";
// import Modal from "./Modal";
// import { data } from "../data";

// //reducer f-on
// const reducer = (state, action) => {
//   if (action.type === "ADD_ITEM") {
//     const newPeople = [...state.people, action.payload];
//     return {
//       ...state,
//       //   people: data,
//       //   people: [],
//       people: [...data, newPeople],
//       isModalOpen: true,
//       modalContent: "item added",
//     };
//   }
//   if (action.type === "NO_VALUE") {
//     return {
//       ...state,
//       isModalOpen: true,
//       modalContent: "please enter value",
//     };
//   }
//   throw new Error("no matching action type");
// };

// const defaultState = {
//   people: [],
//   isModalOpen: false,
//   modalContent: "",
// };
// const Index = () => {
//   const [name, setName] = useState("");
//   //   const [people, setPeople] = useState(data);
//   //   const [showModal, setShowModal] = useState(false);
//   const [state, dispatch] = useReducer(reducer, defaultState);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (name) {
//       const newItem = { id: new Date().getTime().toString(), name };
//       //   setShowModal(true);
//       //   setPeople([...people, { id: new Date().getTime().toString(), name }]);
//       //setName("");
//       dispatch({ type: "ADD_ITEM", payload: newItem });
//       setName("");
//     } else {
//       //   setShowModal(true);
//       dispatch({ type: "NO_VALUE" });
//     }
//   };
//   return (
//     <>
//       {/* {showModal && <Modal />} */}
//       {state.isModalOpen && (<Modal modalContent={state.modalContent)} />}
//       <form onSubmit={handleSubmit} className="form">
//         <div>
//           <input
//             type="text"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />
//         </div>
//         <button type="submit">
//           add
//         </button>
//       </form>
//       {/* {people.map((person) => { */}
//       {state.people.map((person) => {
//         return (
//           <div key={person.id}>
//             <h4>{person.name}</h4>
//           </div>
//         );
//       })}
//     </>
//   );
// };

// export default Index;

import React, { useState, useReducer } from "react";
import Modal from "./Modal";

// reducer function
import { reducer } from "./reducer";
const defaultState = {
  people: [],
  isModalOpen: false,
  modalContent: "",
};
const Index = () => {
  const [name, setName] = useState("");
  const [state, dispatch] = useReducer(reducer, defaultState);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      const newItem = { id: new Date().getTime().toString(), name };
      dispatch({ type: "ADD_ITEM", payload: newItem });
      setName("");
    } else {
      dispatch({ type: "NO_VALUE" });
    }
  };
  const closeModal = () => {
    dispatch({ type: "CLOSE_MODAL" });
  };
  return (
    <>
      {state.isModalOpen && (
        <Modal closeModal={closeModal} modalContent={state.modalContent} />
      )}
      <h2>useReducer hook</h2>
      <h3>EXAMPLE</h3>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-control" >
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button type="submit">add </button>
      </form>
      {state.people.map((person) => {
        return (
          <div key={person.id} className="item">
            <h4>{person.name}</h4>
            <button
              onClick={() =>
                dispatch({ type: "REMOVE_ITEM", payload: person.id })
              }
            >
              remove
            </button>
          </div>
        );
      })}
    </>
  );
};

export default Index;
