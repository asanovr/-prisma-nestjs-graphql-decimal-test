import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SalaryHistoryUpdateInput } from './salary-history-update.input';
import { Type } from 'class-transformer';
import { SalaryHistoryWhereUniqueInput } from './salary-history-where-unique.input';

@ArgsType()
export class UpdateOneSalaryHistoryArgs {

    @Field(() => SalaryHistoryUpdateInput, {nullable:false})
    @Type(() => SalaryHistoryUpdateInput)
    data!: SalaryHistoryUpdateInput;

    @Field(() => SalaryHistoryWhereUniqueInput, {nullable:false})
    @Type(() => SalaryHistoryWhereUniqueInput)
    where!: SalaryHistoryWhereUniqueInput;
}
