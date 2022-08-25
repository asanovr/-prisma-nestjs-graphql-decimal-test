import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SalaryHistoryUpdateOneWithoutEmployeeSalaryHistoryNestedInput } from '../salary-history/salary-history-update-one-without-employee-salary-history-nested.input';

@InputType()
export class EmployeeUpdateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => SalaryHistoryUpdateOneWithoutEmployeeSalaryHistoryNestedInput, {nullable:true})
    salaryHistory?: SalaryHistoryUpdateOneWithoutEmployeeSalaryHistoryNestedInput;
}
