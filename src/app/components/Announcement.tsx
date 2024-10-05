import Image from "next/image";

const Announcement = () => {
  return (
    <div className="bg-white p-4 rounded-md">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold my-4">Announcements</h1>
        {/* <Image src="/moreDark.png" alt="" height={20} width={20} /> */}
        <span className="text-xs text-gray-400">View all</span>
      </div>
      <div className="flex flex-col gap-4 mt-4">
        <div className="bg-skylight rounded-md p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-medium">Lorem, omnis!</h2>
            <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">
              2024-10-10
            </span>
          </div>
          <p className="text-sm text-gray-400 mt-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            laudantium omnis aut, aspernatur aliquid quidem quaerat, ullam dolor
            cupiditate, eius deserunt quam eveniet cum quasi! Esse quos quisquam
            natus officiis. Velit maiores aspernatur, voluptatem doloremque
            possimus eaque hic cum eius perspiciatis ea commodi quae nobis,
            minus consequuntur molestias ratione, optio cumque voluptatibus
            accusamus laborum porro provident necessitatibus! Tempore,
            architecto sint.
          </p>
        </div>
        <div className="bg-purple rounded-md p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-medium">Lorem ipsum dolor </h2>
            <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">
              2024-10-10
            </span>
          </div>
          <p className="text-sm text-gray-400 mt-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            laudantium omnis aut, aspernatur aliquid quidem quaerat, ullam dolor
            cupiditate, eius deserunt quam eveniet cum quasi! Esse quos quisquam
            natus officiis. Velit maiores aspernatur, voluptatem doloremque
            possimus eaque hic cum eius perspiciatis ea commodi quae nobis,
            minus consequuntur molestias ratione, optio cumque voluptatibus
            accusamus laborum porro provident necessitatibus! Tempore,
            architecto sint.
          </p>
        </div>
        <div className="bg-sky rounded-md p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-medium">Lorem, ipsum dolor</h2>
            <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">
              2024-10-10
            </span>
          </div>
          <p className="text-sm text-gray-400 mt-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            laudantium omnis aut, aspernatur aliquid quidem quaerat, ullam dolor
            cupiditate, eius deserunt quam eveniet cum quasi! Esse quos quisquam
            natus officiis. Velit maiores aspernatur, voluptatem doloremque
            possimus eaque hic cum eius perspiciatis ea commodi quae nobis,
            minus consequuntur molestias ratione, optio cumque voluptatibus
            accusamus laborum porro provident necessitatibus! Tempore,
            architecto sint.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Announcement;
