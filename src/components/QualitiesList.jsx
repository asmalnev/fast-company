import Quality from "./Quality";

const QualitiesList = ({ qualities }) => {
  return (
    <>
      {qualities.map((q) => (
        <Quality key={q._id} {...q} />
      ))}
    </>
  );
};

export default QualitiesList;
