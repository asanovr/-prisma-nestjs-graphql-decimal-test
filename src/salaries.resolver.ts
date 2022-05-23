import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { SalaryCreateInput } from './@generated/prisma-nestjs-graphql/salary/salary-create.input';
import { Salary as SalaryModel } from './@generated/prisma-nestjs-graphql/salary/salary.model';
import { PrismaService } from './prisma/prisma.service';
import { Prisma, Salary } from '@prisma/client';

@Resolver(() => SalaryModel)
export class SalariesResolver {
  constructor(private readonly prisma: PrismaService) {}

  @Query(() => SalaryModel)
  async salary() {
    return this.prisma.salary.findFirst();
  }

  @Mutation(() => SalaryModel)
  async createSalary(@Args('input') input: SalaryCreateInput): Promise<Salary> {
    return await this.prisma.salary.create({
      data: input as unknown as Prisma.SalaryCreateInput,
    });
  }
}
