
const UserDetails = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  return (
    <div>User Profile: {id}</div>
  );
};

export default UserDetails;