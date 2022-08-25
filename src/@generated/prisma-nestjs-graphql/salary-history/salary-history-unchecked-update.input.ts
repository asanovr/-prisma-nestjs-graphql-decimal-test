import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SalaryHistoryRecordUncheckedUpdateManyWithoutSalaryHistoryNestedInput } from '../salary-history-record/salary-history-record-unchecked-update-many-without-salary-history-nested.input';
import { Type } from 'class-transformer';
import { EmployeeUncheckedUpdateOneWithoutSalaryHistoryNestedInput } from '../employee/employee-unchecked-update-one-without-salary-history-nested.input';

@InputType()
export class SalaryHistoryUncheckedUpdateInput {

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

    @Field(() => EmployeeUncheckedUpdateOneWithoutSalaryHistoryNestedInput, {nullable:true})
    employeeSalaryHistory?: EmployeeUncheckedUpdateOneWithoutSalaryHistoryNestedInput;
}
