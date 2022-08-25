import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeeUpdateWithoutSalaryHistoryInput } from './employee-update-without-salary-history.input';
import { Type } from 'class-transformer';
import { EmployeeCreateWithoutSalaryHistoryInput } from './employee-create-without-salary-history.input';

@InputType()
export class EmployeeUpsertWithoutSalaryHistoryInput {

    @Field(() => EmployeeUpdateWithoutSalaryHistoryInput, {nullable:false})
    @Type(() => EmployeeUpdateWithoutSalaryHistoryInput)
    update!: EmployeeUpdateWithoutSalaryHistoryInput;

    @Field(() => EmployeeCreateWithoutSalaryHistoryInput, {nullable:false})
    @Type(() => EmployeeCreateWithoutSalaryHistoryInput)
    create!: EmployeeCreateWithoutSalaryHistoryInput;
}
