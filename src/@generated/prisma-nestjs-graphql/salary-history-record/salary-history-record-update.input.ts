import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Decimal } from '@prisma/client/runtime';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { transformToDecimal } from 'prisma-graphql-type-decimal';
import { Transform } from 'class-transformer';
import { Type } from 'class-transformer';
import { SalaryHistoryUpdateOneRequiredWithoutHistoryNestedInput } from '../salary-history/salary-history-update-one-required-without-history-nested.input';

@InputType()
export class SalaryHistoryRecordUpdateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Int, {nullable:true})
    year?: number;

    @Field(() => GraphQLDecimal, {nullable:true})
    @Type(() => Object)
    @Transform(transformToDecimal)
    from?: Decimal;

    @Field(() => GraphQLDecimal, {nullable:true})
    @Type(() => Object)
    @Transform(transformToDecimal)
    to?: Decimal;

    @Field(() => SalaryHistoryUpdateOneRequiredWithoutHistoryNestedInput, {nullable:true})
    salaryHistory?: SalaryHistoryUpdateOneRequiredWithoutHistoryNestedInput;
}
