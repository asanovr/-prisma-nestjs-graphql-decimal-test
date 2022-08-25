import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeeCreateWithoutSalaryHistoryInput } from './employee-create-without-salary-history.input';
import { Type } from 'class-transformer';
import { EmployeeCreateOrConnectWithoutSalaryHistoryInput } from './employee-create-or-connect-without-salary-history.input';
import { EmployeeWhereUniqueInput } from './employee-where-unique.input';

@InputType()
export class EmployeeCreateNestedOneWithoutSalaryHistoryInput {

    @Field(() => EmployeeCreateWithoutSalaryHistoryInput, {nullable:true})
    @Type(() => EmployeeCreateWithoutSalaryHistoryInput)
    create?: EmployeeCreateWithoutSalaryHistoryInput;

    @Field(() => EmployeeCreateOrConnectWithoutSalaryHistoryInput, {nullable:true})
    @Type(() => EmployeeCreateOrConnectWithoutSalaryHistoryInput)
    connectOrCreate?: EmployeeCreateOrConnectWithoutSalaryHistoryInput;

    @Field(() => EmployeeWhereUniqueInput, {nullable:true})
    @Type(() => EmployeeWhereUniqueInput)
    connect?: EmployeeWhereUniqueInput;
}
