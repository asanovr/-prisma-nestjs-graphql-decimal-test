import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EmployeeCreateWithoutSalaryHistoryInput } from './employee-create-without-salary-history.input';
import { Type } from 'class-transformer';
import { EmployeeCreateOrConnectWithoutSalaryHistoryInput } from './employee-create-or-connect-without-salary-history.input';
import { EmployeeUpsertWithoutSalaryHistoryInput } from './employee-upsert-without-salary-history.input';
import { EmployeeWhereUniqueInput } from './employee-where-unique.input';
import { EmployeeUpdateWithoutSalaryHistoryInput } from './employee-update-without-salary-history.input';

@InputType()
export class EmployeeUncheckedUpdateOneWithoutSalaryHistoryNestedInput {

    @Field(() => EmployeeCreateWithoutSalaryHistoryInput, {nullable:true})
    @Type(() => EmployeeCreateWithoutSalaryHistoryInput)
    create?: EmployeeCreateWithoutSalaryHistoryInput;

    @Field(() => EmployeeCreateOrConnectWithoutSalaryHistoryInput, {nullable:true})
    @Type(() => EmployeeCreateOrConnectWithoutSalaryHistoryInput)
    connectOrCreate?: EmployeeCreateOrConnectWithoutSalaryHistoryInput;

    @Field(() => EmployeeUpsertWithoutSalaryHistoryInput, {nullable:true})
    @Type(() => EmployeeUpsertWithoutSalaryHistoryInput)
    upsert?: EmployeeUpsertWithoutSalaryHistoryInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => EmployeeWhereUniqueInput, {nullable:true})
    @Type(() => EmployeeWhereUniqueInput)
    connect?: EmployeeWhereUniqueInput;

    @Field(() => EmployeeUpdateWithoutSalaryHistoryInput, {nullable:true})
    @Type(() => EmployeeUpdateWithoutSalaryHistoryInput)
    update?: EmployeeUpdateWithoutSalaryHistoryInput;
}
