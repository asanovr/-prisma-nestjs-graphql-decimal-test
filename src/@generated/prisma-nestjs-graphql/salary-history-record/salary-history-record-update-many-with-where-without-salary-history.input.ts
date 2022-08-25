import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SalaryHistoryRecordScalarWhereInput } from './salary-history-record-scalar-where.input';
import { Type } from 'class-transformer';
import { SalaryHistoryRecordUpdateManyMutationInput } from './salary-history-record-update-many-mutation.input';

@InputType()
export class SalaryHistoryRecordUpdateManyWithWhereWithoutSalaryHistoryInput {

    @Field(() => SalaryHistoryRecordScalarWhereInput, {nullable:false})
    @Type(() => SalaryHistoryRecordScalarWhereInput)
    where!: SalaryHistoryRecordScalarWhereInput;

    @Field(() => SalaryHistoryRecordUpdateManyMutationInput, {nullable:false})
    @Type(() => SalaryHistoryRecordUpdateManyMutationInput)
    data!: SalaryHistoryRecordUpdateManyMutationInput;
}
