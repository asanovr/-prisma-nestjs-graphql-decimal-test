import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SalaryHistoryRecordCreateInput } from './salary-history-record-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneSalaryHistoryRecordArgs {

    @Field(() => SalaryHistoryRecordCreateInput, {nullable:false})
    @Type(() => SalaryHistoryRecordCreateInput)
    data!: SalaryHistoryRecordCreateInput;
}
