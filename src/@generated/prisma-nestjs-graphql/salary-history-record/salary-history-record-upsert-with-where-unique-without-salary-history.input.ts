import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SalaryHistoryRecordWhereUniqueInput } from './salary-history-record-where-unique.input';
import { Type } from 'class-transformer';
import { SalaryHistoryRecordUpdateWithoutSalaryHistoryInput } from './salary-history-record-update-without-salary-history.input';
import { SalaryHistoryRecordCreateWithoutSalaryHistoryInput } from './salary-history-record-create-without-salary-history.input';

@InputType()
export class SalaryHistoryRecordUpsertWithWhereUniqueWithoutSalaryHistoryInput {

    @Field(() => SalaryHistoryRecordWhereUniqueInput, {nullable:false})
    @Type(() => SalaryHistoryRecordWhereUniqueInput)
    where!: SalaryHistoryRecordWhereUniqueInput;

    @Field(() => SalaryHistoryRecordUpdateWithoutSalaryHistoryInput, {nullable:false})
    @Type(() => SalaryHistoryRecordUpdateWithoutSalaryHistoryInput)
    update!: SalaryHistoryRecordUpdateWithoutSalaryHistoryInput;

    @Field(() => SalaryHistoryRecordCreateWithoutSalaryHistoryInput, {nullable:false})
    @Type(() => SalaryHistoryRecordCreateWithoutSalaryHistoryInput)
    create!: SalaryHistoryRecordCreateWithoutSalaryHistoryInput;
}
