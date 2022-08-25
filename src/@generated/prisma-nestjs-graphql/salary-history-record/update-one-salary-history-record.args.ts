import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SalaryHistoryRecordUpdateInput } from './salary-history-record-update.input';
import { Type } from 'class-transformer';
import { SalaryHistoryRecordWhereUniqueInput } from './salary-history-record-where-unique.input';

@ArgsType()
export class UpdateOneSalaryHistoryRecordArgs {

    @Field(() => SalaryHistoryRecordUpdateInput, {nullable:false})
    @Type(() => SalaryHistoryRecordUpdateInput)
    data!: SalaryHistoryRecordUpdateInput;

    @Field(() => SalaryHistoryRecordWhereUniqueInput, {nullable:false})
    @Type(() => SalaryHistoryRecordWhereUniqueInput)
    where!: SalaryHistoryRecordWhereUniqueInput;
}
