import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SalaryHistoryRecordWhereUniqueInput } from './salary-history-record-where-unique.input';
import { Type } from 'class-transformer';
import { SalaryHistoryRecordCreateInput } from './salary-history-record-create.input';
import { SalaryHistoryRecordUpdateInput } from './salary-history-record-update.input';

@ArgsType()
export class UpsertOneSalaryHistoryRecordArgs {

    @Field(() => SalaryHistoryRecordWhereUniqueInput, {nullable:false})
    @Type(() => SalaryHistoryRecordWhereUniqueInput)
    where!: SalaryHistoryRecordWhereUniqueInput;

    @Field(() => SalaryHistoryRecordCreateInput, {nullable:false})
    @Type(() => SalaryHistoryRecordCreateInput)
    create!: SalaryHistoryRecordCreateInput;

    @Field(() => SalaryHistoryRecordUpdateInput, {nullable:false})
    @Type(() => SalaryHistoryRecordUpdateInput)
    update!: SalaryHistoryRecordUpdateInput;
}
