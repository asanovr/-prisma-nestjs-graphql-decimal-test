import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeeUncheckedCreateNestedOneWithoutSalaryHistoryInput } from '../employee/employee-unchecked-create-nested-one-without-salary-history.input';

@InputType()
export class SalaryHistoryUncheckedCreateWithoutHistoryInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    currencyId!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => EmployeeUncheckedCreateNestedOneWithoutSalaryHistoryInput, {nullable:true})
    employeeSalaryHistory?: EmployeeUncheckedCreateNestedOneWithoutSalaryHistoryInput;
}
