import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Decimal } from '@prisma/client/runtime';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { transformToDecimal } from 'prisma-graphql-type-decimal';
import { Transform } from 'class-transformer';
import { Type } from 'class-transformer';
import { SalaryHistoryCreateNestedOneWithoutHistoryInput } from '../salary-history/salary-history-create-nested-one-without-history.input';

@InputType()
export class SalaryHistoryRecordCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Int, {nullable:false})
    year!: number;

    @Field(() => GraphQLDecimal, {nullable:false})
    @Type(() => Object)
    @Transform(transformToDecimal)
    from!: Decimal;

    @Field(() => GraphQLDecimal, {nullable:false})
    @Type(() => Object)
    @Transform(transformToDecimal)
    to!: Decimal;

    @Field(() => SalaryHistoryCreateNestedOneWithoutHistoryInput, {nullable:false})
    salaryHistory!: SalaryHistoryCreateNestedOneWithoutHistoryInput;
}
