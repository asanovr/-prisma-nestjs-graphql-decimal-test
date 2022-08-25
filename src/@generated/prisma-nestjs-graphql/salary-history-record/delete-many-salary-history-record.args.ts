import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SalaryHistoryRecordWhereInput } from './salary-history-record-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManySalaryHistoryRecordArgs {

    @Field(() => SalaryHistoryRecordWhereInput, {nullable:true})
    @Type(() => SalaryHistoryRecordWhereInput)
    where?: SalaryHistoryRecordWhereInput;
}
