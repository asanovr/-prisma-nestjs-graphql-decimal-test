import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeeWhereUniqueInput } from './employee-where-unique.input';
import { Type } from 'class-transformer';
import { EmployeeCreateWithoutSalaryHistoryInput } from './employee-create-without-salary-history.input';

@InputType()
export class EmployeeCreateOrConnectWithoutSalaryHistoryInput {

    @Field(() => EmployeeWhereUniqueInput, {nullable:false})
    @Type(() => EmployeeWhereUniqueInput)
    where!: EmployeeWhereUniqueInput;

    @Field(() => EmployeeCreateWithoutSalaryHistoryInput, {nullable:false})
    @Type(() => EmployeeCreateWithoutSalaryHistoryInput)
    create!: EmployeeCreateWithoutSalaryHistoryInput;
}
