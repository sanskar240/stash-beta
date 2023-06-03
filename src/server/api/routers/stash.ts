import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";
import { create } from "domain";

//creates endpoint named getAll that fetches all "stash" items from the database
export const stashRouter = createTRPCRouter({
  getAll: publicProcedure.query(async ({ ctx }) => {
    const stashItems = await ctx.prisma.stash.findMany();
    return stashItems;
  }),

  //new endpoint
  //create a new item,store it in the database
  create: publicProcedure
    .input(z.object({ title: z.string(), description: z.string() }))
    .mutation(async ({ input, ctx }) => {
      //create and save something to the database
      const stashs = await ctx.prisma.stash.create({
        data: input,
      });
      return stashs;
    }),
    //delete endpoint
    deleteStash:publicProcedure
    .input(z.object({id:z.string()
    })
    )
    .mutation(async({ctx,input})=>{
      const {id} = input;
      try{
        return await ctx.prisma.stash.delete({
          where:{
            id,
          }
        });
      }catch(error){
        console.log("Server Problems");
      }
    })
    
});
