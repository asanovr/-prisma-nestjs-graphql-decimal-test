import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeeUpdateOneWithoutSalaryHistoryNestedInput } from '../employee/employee-update-one-without-salary-history-nested.input';

@InputType()
export class SalaryHistoryUpdateWithoutHistoryInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    currencyId?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => EmployeeUpdateOneWithoutSalaryHistoryNestedInput, {nullable:true})
    employeeSalaryHistory?: EmployeeUpdateOneWithoutSalaryHistoryNestedInput;
}
