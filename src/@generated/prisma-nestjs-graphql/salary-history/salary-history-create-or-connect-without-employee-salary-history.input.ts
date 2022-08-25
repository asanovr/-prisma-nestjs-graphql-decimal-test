import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SalaryHistoryWhereUniqueInput } from './salary-history-where-unique.input';
import { Type } from 'class-transformer';
import { SalaryHistoryCreateWithoutEmployeeSalaryHistoryInput } from './salary-history-create-without-employee-salary-history.input';

@InputType()
export class SalaryHistoryCreateOrConnectWithoutEmployeeSalaryHistoryInput {

    @Field(() => SalaryHistoryWhereUniqueInput, {nullable:false})
    @Type(() => SalaryHistoryWhereUniqueInput)
    where!: SalaryHistoryWhereUniqueInput;

    @Field(() => SalaryHistoryCreateWithoutEmployeeSalaryHistoryInput, {nullable:false})
    @Type(() => SalaryHistoryCreateWithoutEmployeeSalaryHistoryInput)
    create!: SalaryHistoryCreateWithoutEmployeeSalaryHistoryInput;
}
