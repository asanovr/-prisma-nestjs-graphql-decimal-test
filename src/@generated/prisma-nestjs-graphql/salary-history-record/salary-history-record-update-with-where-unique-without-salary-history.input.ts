import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SalaryHistoryRecordWhereUniqueInput } from './salary-history-record-where-unique.input';
import { Type } from 'class-transformer';
import { SalaryHistoryRecordUpdateWithoutSalaryHistoryInput } from './salary-history-record-update-without-salary-history.input';

@InputType()
export class SalaryHistoryRecordUpdateWithWhereUniqueWithoutSalaryHistoryInput {

    @Field(() => SalaryHistoryRecordWhereUniqueInput, {nullable:false})
    @Type(() => SalaryHistoryRecordWhereUniqueInput)
    where!: SalaryHistoryRecordWhereUniqueInput;

    @Field(() => SalaryHistoryRecordUpdateWithoutSalaryHistoryInput, {nullable:false})
    @Type(() => SalaryHistoryRecordUpdateWithoutSalaryHistoryInput)
    data!: SalaryHistoryRecordUpdateWithoutSalaryHistoryInput;
}
