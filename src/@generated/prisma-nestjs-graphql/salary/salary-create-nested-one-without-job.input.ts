import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SalaryCreateWithoutJobInput } from './salary-create-without-job.input';
import { Type } from 'class-transformer';
import { SalaryCreateOrConnectWithoutJobInput } from './salary-create-or-connect-without-job.input';
import { SalaryWhereUniqueInput } from './salary-where-unique.input';

@InputType()
export class SalaryCreateNestedOneWithoutJobInput {

    @Field(() => SalaryCreateWithoutJobInput, {nullable:true})
    @Type(() => SalaryCreateWithoutJobInput)
    create?: SalaryCreateWithoutJobInput;

    @Field(() => SalaryCreateOrConnectWithoutJobInput, {nullable:true})
    @Type(() => SalaryCreateOrConnectWithoutJobInput)
    connectOrCreate?: SalaryCreateOrConnectWithoutJobInput;

    @Field(() => SalaryWhereUniqueInput, {nullable:true})
    @Type(() => SalaryWhereUniqueInput)
    connect?: SalaryWhereUniqueInput;
}
