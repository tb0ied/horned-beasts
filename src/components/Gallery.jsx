import HornedBeast from "./HornedBeast";

export default function Gallery({ data, horns }) {
  // TODO 03 filter the data array so it only shows the beasts with horns equal to "horns"

  const filteredData = data.filter(function (beast) {
    return beast.horns == horns || horns == ""; // beast horns is the same as our horns variable
  });

  // how to filter an array of objects javascript
  return (
    <>
      {filteredData.map((beast) => {
        return (
          <HornedBeast
            key={beast._id}
            title={beast.title}
            imageUrl={beast.image_url}
            description={beast.description}
          />
        );
      })}
    </>
  );
}
