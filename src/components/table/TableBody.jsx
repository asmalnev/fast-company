import User from '../User';

const TableBody = ({ data, ...rest }) => {
  return (
    <tbody>
    {data.map((user, index) => (
      <User key={index} user={user} {...rest} />
    ))}
    </tbody>
  );
};

export default TableBody;