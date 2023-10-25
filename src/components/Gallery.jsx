import HornedBeast from "./HornedBeast";

export default function Gallery({ data }) {
  return (
    <>
      {data.map((beast) => {
        return (
          <HornedBeast
            key={beast._id}
            title={beast.title}
            imageUrl={beast.imageUrl}
            description={beast.description}
          />
        );
      })}
    </>
  );
}
