import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { SalaryCreateInput } from './@generated/prisma-nestjs-graphql/salary/salary-create.input';
import { Salary as SalaryModel } from './@generated/prisma-nestjs-graphql/salary/salary.model';
import { PrismaService } from './prisma/prisma.service';
import { JobCreateInput } from './@generated/prisma-nestjs-graphql/job/job-create.input';
import { Job as JobModel } from './@generated/prisma-nestjs-graphql/job/job.model';
import { Employee } from './@generated/prisma-nestjs-graphql/employee/employee.model';
import { EmployeeUpdateInput } from './@generated/prisma-nestjs-graphql/employee/employee-update.input';

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

  @Mutation(() => Employee)
  async updateEmployee(
    @Args('id') id: string,
    @Args('input') input: EmployeeUpdateInput,
  ) {
    return {
      id: 1,
    };
  }
}
