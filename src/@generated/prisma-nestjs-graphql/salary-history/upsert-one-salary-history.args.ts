import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SalaryHistoryWhereUniqueInput } from './salary-history-where-unique.input';
import { Type } from 'class-transformer';
import { SalaryHistoryCreateInput } from './salary-history-create.input';
import { SalaryHistoryUpdateInput } from './salary-history-update.input';

@ArgsType()
export class UpsertOneSalaryHistoryArgs {

    @Field(() => SalaryHistoryWhereUniqueInput, {nullable:false})
    @Type(() => SalaryHistoryWhereUniqueInput)
    where!: SalaryHistoryWhereUniqueInput;

    @Field(() => SalaryHistoryCreateInput, {nullable:false})
    @Type(() => SalaryHistoryCreateInput)
    create!: SalaryHistoryCreateInput;

    @Field(() => SalaryHistoryUpdateInput, {nullable:false})
    @Type(() => SalaryHistoryUpdateInput)
    update!: SalaryHistoryUpdateInput;
}
