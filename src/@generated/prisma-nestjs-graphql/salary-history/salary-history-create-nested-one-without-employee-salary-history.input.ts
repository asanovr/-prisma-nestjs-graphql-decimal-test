import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SalaryHistoryCreateWithoutEmployeeSalaryHistoryInput } from './salary-history-create-without-employee-salary-history.input';
import { Type } from 'class-transformer';
import { SalaryHistoryCreateOrConnectWithoutEmployeeSalaryHistoryInput } from './salary-history-create-or-connect-without-employee-salary-history.input';
import { SalaryHistoryWhereUniqueInput } from './salary-history-where-unique.input';

@InputType()
export class SalaryHistoryCreateNestedOneWithoutEmployeeSalaryHistoryInput {

    @Field(() => SalaryHistoryCreateWithoutEmployeeSalaryHistoryInput, {nullable:true})
    @Type(() => SalaryHistoryCreateWithoutEmployeeSalaryHistoryInput)
    create?: SalaryHistoryCreateWithoutEmployeeSalaryHistoryInput;

    @Field(() => SalaryHistoryCreateOrConnectWithoutEmployeeSalaryHistoryInput, {nullable:true})
    @Type(() => SalaryHistoryCreateOrConnectWithoutEmployeeSalaryHistoryInput)
    connectOrCreate?: SalaryHistoryCreateOrConnectWithoutEmployeeSalaryHistoryInput;

    @Field(() => SalaryHistoryWhereUniqueInput, {nullable:true})
    @Type(() => SalaryHistoryWhereUniqueInput)
    connect?: SalaryHistoryWhereUniqueInput;
}
