import { Link } from "react-router-dom";

import { Button } from "flowbite-react";

const Error = () => {
  return (
    <div className="flex justify-center items-center flex-col gap-6 h-screen bg-zinc-900">
      <h2 className="text-4xl font-semibold text-center text-slate-200">
        Sorry, there is no url you have been looking for
      </h2>
      <Button>
        <Link to="/">Back Home</Link>
      </Button>
    </div>
  );
};

export default Error;
