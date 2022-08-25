import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Decimal } from '@prisma/client/runtime';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';

@ObjectType()
export class SalaryHistoryRecordMaxAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    salaryHistoryId?: string;

    @Field(() => Int, {nullable:true})
    year?: number;

    @Field(() => GraphQLDecimal, {nullable:true})
    from?: Decimal;

    @Field(() => GraphQLDecimal, {nullable:true})
    to?: Decimal;
}
