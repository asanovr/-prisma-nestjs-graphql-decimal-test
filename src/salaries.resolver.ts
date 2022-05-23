import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { SalaryCreateInput } from './@generated/prisma-nestjs-graphql/salary/salary-create.input';
import { Salary as SalaryModel } from './@generated/prisma-nestjs-graphql/salary/salary.model';
import { PrismaService } from './prisma/prisma.service';
import { Prisma, Salary, Job } from '@prisma/client';
import { JobCreateInput } from './@generated/prisma-nestjs-graphql/job/job-create.input';
import { Job as JobModel } from './@generated/prisma-nestjs-graphql/job/job.model';

@Resolver(() => SalaryModel)
export class TestResolver {
  constructor(private readonly prisma: PrismaService) {}

  @Query(() => SalaryModel)
  async salary() {
    return this.prisma.salary.findFirst();
  }

  @Mutation(() => SalaryModel)
  async createSalary(@Args('input') input: SalaryCreateInput) {
    return {
      id: 1,
    };
  }

  @Mutation(() => JobModel)
  async createJob(@Args('input') input: JobCreateInput) {
    return {
      id: 1,
    };
  }
}
