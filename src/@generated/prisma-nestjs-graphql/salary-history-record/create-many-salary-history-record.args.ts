import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SalaryHistoryRecordCreateManyInput } from './salary-history-record-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManySalaryHistoryRecordArgs {

    @Field(() => [SalaryHistoryRecordCreateManyInput], {nullable:false})
    @Type(() => SalaryHistoryRecordCreateManyInput)
    data!: Array<SalaryHistoryRecordCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
