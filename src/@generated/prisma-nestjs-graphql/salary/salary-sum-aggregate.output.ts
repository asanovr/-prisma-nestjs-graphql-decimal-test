import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Decimal } from '@prisma/client/runtime';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';

@ObjectType()
export class SalarySumAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:true})
    currencyId?: number;

    @Field(() => GraphQLDecimal, {nullable:true})
    from?: Decimal;

    @Field(() => GraphQLDecimal, {nullable:true})
    to?: Decimal;
}
