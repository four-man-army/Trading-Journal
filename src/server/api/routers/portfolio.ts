import { createTRPCRouter, protectedProcedure, publicProcedure } from "@/server/api/trpc";
import { z } from "zod";

export const portfolioRouter = createTRPCRouter({
  getAllPortfolios: publicProcedure.query(async ({ ctx }) => {
    return await ctx.db.portfolio.findMany({include: { user: true }});
  }),
  createPortfolio: protectedProcedure
    .input(z.object({ title: z.string() }))
    .mutation(({ ctx, input }) => {
      return ctx.db.portfolio.create({
        data: {
          title: input.title,
          user: { connect: { id: ctx.session.user.id } },
        },
      });
    }),
});
