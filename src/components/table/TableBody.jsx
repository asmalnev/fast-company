import User from '../User';

const TableBody = ({ data, ...rest }) => {
  return (
    <tbody>
    {data.map((user) => (
      <User key={user._id} user={user} {...rest} />
    ))}
    </tbody>
  );
};

export default TableBody;