import { notFound } from "next/navigation";
import { data } from "@/data";
import Image from "next/image";
import Link from "next/link";

// Update static paths
export async function generateStaticParams() {
  return data.map((item) => ({ id: item.id.toString() }));
}

// Fix the component signature to expect a Promise
export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params; // ✅ await here

  const product = data.find((item) => item.id.toString() === id);
  if (!product) return notFound();

  const recommendations = data
    .filter((item) => item.id.toString() !== id)
    .slice(0, 4);

  return (
    <div className="w-full min-h-screen justify-center items-center bg-white">
      <div className="p-6 max-w-6xl mx-auto ">
        {/* Product */}
        <div className="flex flex-col md:flex-row gap-6 mb-10">
          <div className="w-full md:w-1/2 bg-gray-100 rounded-2xl">
            <Image
              src={product.src}
              alt={product.title}
              width={600}
              height={600}
              className="rounded-lg w-full h-auto"
            />
          </div>
          <div className="w-full md:w-1/2">
            <h1 className="text-2xl font-bold mb-2 text-zinc-900">
              {product.title}
            </h1>
            <p className="text-zinc-900 mb-2">{product.category}</p>
            <p className="text-zinc-900 font-bold text-xl mb-4">
              ${product.price.toFixed(2)}
            </p>
            <div className="text-gray-900">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
              reprehenderit quia modi harum incidunt. Quas, consequatur
              reiciendis. Nisi corporis earum, et quod sed dolore, reiciendis
              ipsa tenetur molestiae corrupti accusantium!
            </div>
            <div className="flex items-center gap-2 mt-8">
              <button className="bg-[#111] text-gray-200 px-4 py-2 rounded-md">
                Add to Cart
              </button>
              <button className="bg-[#111] text-gray-200 px-4 py-2 rounded-md">
                Buy Now
              </button>
            </div>
          </div>
        </div>

        {/* Recommendations */}
        <div className="mt-36">
          <h2 className="text-3xl text-zinc-900 font-semibold mb-4">
            You may also like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {recommendations.map((item) => (
              <Link
                key={item.id}
                href={`/products/${item.id}`}
                className="cursor-pointer bg-gray-100 p-3 rounded-xl shadow hover:shadow-md text-center"
              >
                <Image
                  src={item.src}
                  alt={item.title}
                  width={300}
                  height={300}
                  className="w-full h-auto rounded mb-2"
                />
                <h3 className="text-sm font-medium">{item.title}</h3>
                <p className="text-green-600 text-sm">
                  ${item.price.toFixed(2)}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
