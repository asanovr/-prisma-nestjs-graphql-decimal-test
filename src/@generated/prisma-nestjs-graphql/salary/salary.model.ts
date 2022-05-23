import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { Decimal } from '@prisma/client/runtime';
import { Job } from '../job/job.model';
import { SalaryCount } from './salary-count.output';

@ObjectType()
export class Salary {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    currencyId!: number;

    @Field(() => GraphQLDecimal, {nullable:false})
    from!: Decimal;

    @Field(() => GraphQLDecimal, {nullable:false})
    to!: Decimal;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => [Job], {nullable:true})
    job?: Array<Job>;

    @Field(() => SalaryCount, {nullable:false})
    _count?: SalaryCount;
}
