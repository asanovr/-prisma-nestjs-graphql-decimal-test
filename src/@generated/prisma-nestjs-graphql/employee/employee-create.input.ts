import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SalaryHistoryCreateNestedOneWithoutEmployeeSalaryHistoryInput } from '../salary-history/salary-history-create-nested-one-without-employee-salary-history.input';

@InputType()
export class EmployeeCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => SalaryHistoryCreateNestedOneWithoutEmployeeSalaryHistoryInput, {nullable:true})
    salaryHistory?: SalaryHistoryCreateNestedOneWithoutEmployeeSalaryHistoryInput;
}
