import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeeUncheckedUpdateOneWithoutSalaryHistoryNestedInput } from '../employee/employee-unchecked-update-one-without-salary-history-nested.input';

@InputType()
export class SalaryHistoryUncheckedUpdateWithoutHistoryInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    currencyId?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => EmployeeUncheckedUpdateOneWithoutSalaryHistoryNestedInput, {nullable:true})
    employeeSalaryHistory?: EmployeeUncheckedUpdateOneWithoutSalaryHistoryNestedInput;
}
