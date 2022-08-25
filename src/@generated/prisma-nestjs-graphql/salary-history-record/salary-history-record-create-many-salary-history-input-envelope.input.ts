import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SalaryHistoryRecordCreateManySalaryHistoryInput } from './salary-history-record-create-many-salary-history.input';
import { Type } from 'class-transformer';

@InputType()
export class SalaryHistoryRecordCreateManySalaryHistoryInputEnvelope {

    @Field(() => [SalaryHistoryRecordCreateManySalaryHistoryInput], {nullable:false})
    @Type(() => SalaryHistoryRecordCreateManySalaryHistoryInput)
    data!: Array<SalaryHistoryRecordCreateManySalaryHistoryInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
