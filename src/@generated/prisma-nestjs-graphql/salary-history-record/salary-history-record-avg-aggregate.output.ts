import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { Decimal } from '@prisma/client/runtime';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';

@ObjectType()
export class SalaryHistoryRecordAvgAggregate {

    @Field(() => Float, {nullable:true})
    year?: number;

    @Field(() => GraphQLDecimal, {nullable:true})
    from?: Decimal;

    @Field(() => GraphQLDecimal, {nullable:true})
    to?: Decimal;
}
