// import PropTypes from "prop-types";

// function List(props) {
//   const chaiItems = props.items;
//   const category = props.category;
//   //  chaiItems.sort((a, b) => a.name.localeCompare(b.name));
//   //   chaiItems.sort((a, b) => b.name.localeCompare(a.name)); // Reverse Sort

//   const listItems = chaiItems.map((chai) => (
//     <li key={chai.id}>
//       {chai.name} : <b>{chai.calories}</b>
//     </li>
//   ));
//   return (
//     <>
//       {" "}
//       <h3>{category}</h3>
//       <ul>{listItems}</ul>
//     </>
//   );
// }

// List.PropTypes = {
//   category: PropTypes.string,
//   items: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number,
//       name: PropTypes.string,
//       categories: PropTypes.number,
//     }),
//   ),
// };

// export default List;



function List(props) {
  const chaiItems = props.items;

  const lowCalorieItems = chaiItems
    .filter(chaiItem => chaiItem.calories >= 20)
    .map(chaiItem => (
      <li key={chaiItem.id}>
        {chaiItem.name}
      </li>
    ));

  return (
    <>
      <ul>{lowCalorieItems}</ul>
    </>
  );
}

export default List;



























