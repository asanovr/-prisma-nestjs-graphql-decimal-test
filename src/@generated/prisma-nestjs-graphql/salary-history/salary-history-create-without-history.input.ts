import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeeCreateNestedOneWithoutSalaryHistoryInput } from '../employee/employee-create-nested-one-without-salary-history.input';

@InputType()
export class SalaryHistoryCreateWithoutHistoryInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    currencyId!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => EmployeeCreateNestedOneWithoutSalaryHistoryInput, {nullable:true})
    employeeSalaryHistory?: EmployeeCreateNestedOneWithoutSalaryHistoryInput;
}
