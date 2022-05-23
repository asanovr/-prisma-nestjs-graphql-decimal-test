import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Decimal } from '@prisma/client/runtime';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { SalaryCountAggregate } from './salary-count-aggregate.output';
import { SalaryAvgAggregate } from './salary-avg-aggregate.output';
import { SalarySumAggregate } from './salary-sum-aggregate.output';
import { SalaryMinAggregate } from './salary-min-aggregate.output';
import { SalaryMaxAggregate } from './salary-max-aggregate.output';

@ObjectType()
export class SalaryGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    currencyId!: number;

    @Field(() => GraphQLDecimal, {nullable:false})
    from!: Decimal;

    @Field(() => GraphQLDecimal, {nullable:false})
    to!: Decimal;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => SalaryCountAggregate, {nullable:true})
    _count?: SalaryCountAggregate;

    @Field(() => SalaryAvgAggregate, {nullable:true})
    _avg?: SalaryAvgAggregate;

    @Field(() => SalarySumAggregate, {nullable:true})
    _sum?: SalarySumAggregate;

    @Field(() => SalaryMinAggregate, {nullable:true})
    _min?: SalaryMinAggregate;

    @Field(() => SalaryMaxAggregate, {nullable:true})
    _max?: SalaryMaxAggregate;
}
