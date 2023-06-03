
import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { stashRouter } from "~/server/api/routers/stash";
import { api } from "~/utils/api";
import { useMutation } from "@tanstack/react-query";


const Home: NextPage = () => {

  const {data} = api.stashes.getAll.useQuery();
 

  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col items-center justify-center h-screen">
  <h1 className="text-4xl mb-4">Hello, World!</h1>
  <Link href="/add-a-stash" className="px-4 py-2 bg-blue-500 text-white rounded inline-block text-center">Add a Stash</Link>
<div>
 
</div>
  {data?.map((item)=>(
   <div>
    {item.title}
    {item.description}
    <button>Delete</button>
   </div>
  ))}
</div>


    </>
  );
};

export default Home;
