import TableBody from './TableBody';
import TableHead from './TableHead';

const Table = ({ ...rest }) => {
  return (
    <table className="table">
      <TableHead/>
      <TableBody {...rest}/>
    </table>
  );
};

export default Table;