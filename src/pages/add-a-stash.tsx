import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { api } from "~/utils/api";


type AddStashForm = {
  title: string;
  description: string;
};

const AddStash: NextPage = () => {
  const createStash = api.stashes.create.useMutation();
  const { register, handleSubmit } = useForm<AddStashForm>();
  const router = useRouter();
  
  const onSubmit = (formData: AddStashForm) => {
    createStash.mutateAsync(formData);
  };

  

  
  return (
    <>

      <Head>
        <title>Add A Stash</title>

      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gray-800">
        <div className="container flex flex-col gap-12 px-4 py-16 ">
          <h1 className=" text-white text-4xl">Add A Stash</h1>
          <form
              // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-misused-promises
             
            className="flex flex-col gap-4"
            onSubmit={handleSubmit(onSubmit)}

          >
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"

              >
                Title
              </label>
              <input
                {...register("title", { required: true })}
                id="title"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"

              />
            </div>

            <div>
              <label
                htmlFor="description"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"

              >

                Description
              </label>
              <textarea
                {...register("description", { required: true })}
                id="description"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"

              />
            </div>



            <button
              type="submit"
              className="mb-2 mr-2 rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Create
            </button>
          </form>
        </div>
      </main>
    </>


  );
};

export default AddStash;
