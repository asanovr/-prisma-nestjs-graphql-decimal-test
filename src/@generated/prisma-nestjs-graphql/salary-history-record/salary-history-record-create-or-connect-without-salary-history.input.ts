import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SalaryHistoryRecordWhereUniqueInput } from './salary-history-record-where-unique.input';
import { Type } from 'class-transformer';
import { SalaryHistoryRecordCreateWithoutSalaryHistoryInput } from './salary-history-record-create-without-salary-history.input';

@InputType()
export class SalaryHistoryRecordCreateOrConnectWithoutSalaryHistoryInput {

    @Field(() => SalaryHistoryRecordWhereUniqueInput, {nullable:false})
    @Type(() => SalaryHistoryRecordWhereUniqueInput)
    where!: SalaryHistoryRecordWhereUniqueInput;

    @Field(() => SalaryHistoryRecordCreateWithoutSalaryHistoryInput, {nullable:false})
    @Type(() => SalaryHistoryRecordCreateWithoutSalaryHistoryInput)
    create!: SalaryHistoryRecordCreateWithoutSalaryHistoryInput;
}
