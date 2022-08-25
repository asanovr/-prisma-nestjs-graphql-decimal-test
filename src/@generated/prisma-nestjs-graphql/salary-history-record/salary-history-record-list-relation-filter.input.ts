import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SalaryHistoryRecordWhereInput } from './salary-history-record-where.input';
import { Type } from 'class-transformer';

@InputType()
export class SalaryHistoryRecordListRelationFilter {

    @Field(() => SalaryHistoryRecordWhereInput, {nullable:true})
    @Type(() => SalaryHistoryRecordWhereInput)
    every?: SalaryHistoryRecordWhereInput;

    @Field(() => SalaryHistoryRecordWhereInput, {nullable:true})
    @Type(() => SalaryHistoryRecordWhereInput)
    some?: SalaryHistoryRecordWhereInput;

    @Field(() => SalaryHistoryRecordWhereInput, {nullable:true})
    @Type(() => SalaryHistoryRecordWhereInput)
    none?: SalaryHistoryRecordWhereInput;
}
