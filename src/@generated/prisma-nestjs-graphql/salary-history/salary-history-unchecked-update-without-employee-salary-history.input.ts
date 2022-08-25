import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SalaryHistoryRecordUncheckedUpdateManyWithoutSalaryHistoryNestedInput } from '../salary-history-record/salary-history-record-unchecked-update-many-without-salary-history-nested.input';
import { Type } from 'class-transformer';

@InputType()
export class SalaryHistoryUncheckedUpdateWithoutEmployeeSalaryHistoryInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    currencyId?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => SalaryHistoryRecordUncheckedUpdateManyWithoutSalaryHistoryNestedInput, {nullable:true})
    @Type(() => SalaryHistoryRecordUncheckedUpdateManyWithoutSalaryHistoryNestedInput)
    history?: SalaryHistoryRecordUncheckedUpdateManyWithoutSalaryHistoryNestedInput;
}
