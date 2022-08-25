import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SalaryHistoryRecordUpdateManyMutationInput } from './salary-history-record-update-many-mutation.input';
import { Type } from 'class-transformer';
import { SalaryHistoryRecordWhereInput } from './salary-history-record-where.input';

@ArgsType()
export class UpdateManySalaryHistoryRecordArgs {

    @Field(() => SalaryHistoryRecordUpdateManyMutationInput, {nullable:false})
    @Type(() => SalaryHistoryRecordUpdateManyMutationInput)
    data!: SalaryHistoryRecordUpdateManyMutationInput;

    @Field(() => SalaryHistoryRecordWhereInput, {nullable:true})
    @Type(() => SalaryHistoryRecordWhereInput)
    where?: SalaryHistoryRecordWhereInput;
}
