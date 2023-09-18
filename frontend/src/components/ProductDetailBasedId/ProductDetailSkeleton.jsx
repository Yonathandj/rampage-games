const ProductDetailSkeleton = () => {
  const gameDetail = {
    id: 1,
    name: "Rampage Games",
    publisher: "Rampage Games",
    background_image: "https://placehold.co/400x400",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    genre: "Action",
    store: "Rampage Games",
  };
  return (
    <div>
      <section>
        <img
          src={gameDetail.background_image}
          alt={gameDetail.name}
          className="mx-auto rounded-lg shadow-lg"
        />
        <p className="flex gap-2 items-center mt-2 text-center text-slate-200">
          By:{" "}
          <span className="rounded-lg py-1 px-1 bg-slate-600">
            {gameDetail.publisher}
          </span>
        </p>
      </section>
      <section className="mt-6">
        <h2 className="text-4xl font-medium text-slate-200">
          {gameDetail.name}
        </h2>
        <p className="text-lg font-normal my-2 text-slate-200">Description :</p>
        <p className="text-base text-justify font-normal text-slate-200">
          {gameDetail.description}
        </p>
        <p className="text-base font-normal my-2 text-slate-200 flex gap-2 items-center">
          Genre :{" "}
          <span className="rounded-lg px-2 py-1 bg-red-500">
            {gameDetail.genre}
          </span>
        </p>
        <p className="text-base font-normal my-2 text-slate-200 flex gap-2 items-center">
          Store :{" "}
          <span className="rounded-lg px-2 py-1 bg-red-500">
            {gameDetail.store}
          </span>
        </p>
      </section>
    </div>
  );
};
export default ProductDetailSkeleton;
