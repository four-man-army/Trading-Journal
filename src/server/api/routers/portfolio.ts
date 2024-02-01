import { createTRPCRouter, protectedProcedure } from "@/server/api/trpc";
import { z } from "zod";

export const portfolioRouter = createTRPCRouter({
  getAllPortfolios: protectedProcedure.query(({ ctx }) => {
    return ctx.db.potfolio.findMany({ where: { user: ctx.session.user } });
  }),
  createPortfolio: protectedProcedure
    .input(z.object({ title: z.string() }))
    .mutation(({ ctx, input }) => {
      return ctx.db.potfolio.create({
        data: {
          title: input.title,
          user: { connect: { id: ctx.session.user.id } },
        },
      });
    }),
});
