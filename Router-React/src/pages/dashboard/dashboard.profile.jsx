import { useParams } from "react-router-dom";

function Profile() {
  const { id } = useParams();
  return <> Profile ID : {id} </>;
}

export default Profile;
