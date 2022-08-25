import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SalaryHistoryCreateWithoutEmployeeSalaryHistoryInput } from './salary-history-create-without-employee-salary-history.input';
import { Type } from 'class-transformer';
import { SalaryHistoryCreateOrConnectWithoutEmployeeSalaryHistoryInput } from './salary-history-create-or-connect-without-employee-salary-history.input';
import { SalaryHistoryUpsertWithoutEmployeeSalaryHistoryInput } from './salary-history-upsert-without-employee-salary-history.input';
import { SalaryHistoryWhereUniqueInput } from './salary-history-where-unique.input';
import { SalaryHistoryUpdateWithoutEmployeeSalaryHistoryInput } from './salary-history-update-without-employee-salary-history.input';

@InputType()
export class SalaryHistoryUpdateOneWithoutEmployeeSalaryHistoryNestedInput {

    @Field(() => SalaryHistoryCreateWithoutEmployeeSalaryHistoryInput, {nullable:true})
    @Type(() => SalaryHistoryCreateWithoutEmployeeSalaryHistoryInput)
    create?: SalaryHistoryCreateWithoutEmployeeSalaryHistoryInput;

    @Field(() => SalaryHistoryCreateOrConnectWithoutEmployeeSalaryHistoryInput, {nullable:true})
    @Type(() => SalaryHistoryCreateOrConnectWithoutEmployeeSalaryHistoryInput)
    connectOrCreate?: SalaryHistoryCreateOrConnectWithoutEmployeeSalaryHistoryInput;

    @Field(() => SalaryHistoryUpsertWithoutEmployeeSalaryHistoryInput, {nullable:true})
    @Type(() => SalaryHistoryUpsertWithoutEmployeeSalaryHistoryInput)
    upsert?: SalaryHistoryUpsertWithoutEmployeeSalaryHistoryInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => SalaryHistoryWhereUniqueInput, {nullable:true})
    @Type(() => SalaryHistoryWhereUniqueInput)
    connect?: SalaryHistoryWhereUniqueInput;

    @Field(() => SalaryHistoryUpdateWithoutEmployeeSalaryHistoryInput, {nullable:true})
    @Type(() => SalaryHistoryUpdateWithoutEmployeeSalaryHistoryInput)
    update?: SalaryHistoryUpdateWithoutEmployeeSalaryHistoryInput;
}
