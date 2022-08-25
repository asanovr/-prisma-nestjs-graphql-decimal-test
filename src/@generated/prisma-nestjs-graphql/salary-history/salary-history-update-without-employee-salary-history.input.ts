import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SalaryHistoryRecordUpdateManyWithoutSalaryHistoryNestedInput } from '../salary-history-record/salary-history-record-update-many-without-salary-history-nested.input';
import { Type } from 'class-transformer';

@InputType()
export class SalaryHistoryUpdateWithoutEmployeeSalaryHistoryInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    currencyId?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => SalaryHistoryRecordUpdateManyWithoutSalaryHistoryNestedInput, {nullable:true})
    @Type(() => SalaryHistoryRecordUpdateManyWithoutSalaryHistoryNestedInput)
    history?: SalaryHistoryRecordUpdateManyWithoutSalaryHistoryNestedInput;
}
