import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();
  return (
    <div className="h-screen bg-zinc-950">
      <div className="p-20">
        <h2 className="text-2xl font-semibold text-slate-200">Hello World</h2>
      </div>
    </div>
  );
};

export default ProductDetail;
