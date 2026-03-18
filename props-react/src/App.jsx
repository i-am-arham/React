// props =  read-only properties that are shared between components.
//          A parent component can send data to a child component.
//          key=value

// propTypes = a mechanism that ensures that the passed value
//                        is of the correct datatype.
//                       age: PropTypes.number

// defaultProps = default values for props in case they are not
//                            passed from the parent component
//                            name: "Guest"

import Student from "./student";
function App() {
  return (
    <>
      <Student name="Arham" age={19} isStudent={true} />
      <Student name="Ali" age={30} isStudent={false} />
      <Student name="Saif" age={25} isStudent={true} />
      <Student />
    </>
  );
}

export default App;
