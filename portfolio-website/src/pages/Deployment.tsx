import Vercel from "/src/assets/vercel.webp";
import Cloudflare from "/src/assets/cloudflare.webp";
import Netlify from "/src/assets/netlify.webp";
import Hostinger from "/src/assets/hostinger.webp";

export default function Deployment() {
  type Deployments = {
    id: number;
    title: string;
    image: string;
    description: string;
  };
  const deployment: Deployments[] = [
    {
      id: 1,
      title: "Vercel",
      image: Vercel,
      description: "Cloud platform for fast frontend deployment and scaling.",
    },
    {
      id: 2,
      title: "Cloudflare Pages",
      image: Cloudflare,
      description: "JAMstack hosting with fast global edge deployment.",
    },
    {
      id: 3,
      title: "Netlify",
      image: Netlify,
      description: "All-in-one platform for deploying and managing web apps.",
    },
    {
      id: 4,
      title: "Hostinger",
      image: Hostinger,
      description: "From Shared Hosting and Domains to VPS and Cloud plans.",
    },
  ];
  return (
    <>
      <div className="mx-auto my-20 flex w-full max-w-6xl flex-col px-1 text-center sm:px-4">
        <h2 className="text-5xl font-bold uppercase text-white md:text-6xl">
          Deployment
        </h2>
        <p className="text-5xl font-bold uppercase text-zinc-800 md:text-6xl">
          Tools
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {deployment.map((deployment) => (
            <div
              key={deployment.id}
              className="flex min-h-28 items-center gap-5 rounded-3xl p-5 transition hover:scale-[1.01] hover:bg-neutral-900 sm:p-6"
            >
              <img
                src={deployment.image}
                alt="JavaScript"
                className="h-16 w-16 rounded-md object-cover"
              />

              <div className="flex-1 text-left text-white">
                <p className="text-xl font-bold sm:text-2xl mb-2">
                  {deployment.title}
                </p>
                <p className="text-sm text-neutral-500 sm:text-base">
                  {deployment.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
