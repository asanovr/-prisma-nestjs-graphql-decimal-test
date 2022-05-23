import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Decimal } from '@prisma/client/runtime';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { HideField } from '@nestjs/graphql';

@InputType()
export class SalaryCreateInput {

    @Field(() => Int, {nullable:false})
    currencyId!: number;

    @Field(() => GraphQLDecimal, {nullable:false})
    from!: Decimal;

    @Field(() => GraphQLDecimal, {nullable:false})
    to!: Decimal;

    @HideField()
    createdAt?: Date | string;

    @HideField()
    updatedAt?: Date | string;
}
