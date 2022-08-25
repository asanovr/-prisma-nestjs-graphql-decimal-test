import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SalaryHistoryUpdateWithoutEmployeeSalaryHistoryInput } from './salary-history-update-without-employee-salary-history.input';
import { Type } from 'class-transformer';
import { SalaryHistoryCreateWithoutEmployeeSalaryHistoryInput } from './salary-history-create-without-employee-salary-history.input';

@InputType()
export class SalaryHistoryUpsertWithoutEmployeeSalaryHistoryInput {

    @Field(() => SalaryHistoryUpdateWithoutEmployeeSalaryHistoryInput, {nullable:false})
    @Type(() => SalaryHistoryUpdateWithoutEmployeeSalaryHistoryInput)
    update!: SalaryHistoryUpdateWithoutEmployeeSalaryHistoryInput;

    @Field(() => SalaryHistoryCreateWithoutEmployeeSalaryHistoryInput, {nullable:false})
    @Type(() => SalaryHistoryCreateWithoutEmployeeSalaryHistoryInput)
    create!: SalaryHistoryCreateWithoutEmployeeSalaryHistoryInput;
}
