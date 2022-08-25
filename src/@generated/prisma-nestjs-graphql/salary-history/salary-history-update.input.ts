import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SalaryHistoryRecordUpdateManyWithoutSalaryHistoryNestedInput } from '../salary-history-record/salary-history-record-update-many-without-salary-history-nested.input';
import { Type } from 'class-transformer';
import { EmployeeUpdateOneWithoutSalaryHistoryNestedInput } from '../employee/employee-update-one-without-salary-history-nested.input';

@InputType()
export class SalaryHistoryUpdateInput {

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

    @Field(() => EmployeeUpdateOneWithoutSalaryHistoryNestedInput, {nullable:true})
    employeeSalaryHistory?: EmployeeUpdateOneWithoutSalaryHistoryNestedInput;
}
