import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SalaryCreateWithoutJobInput } from './salary-create-without-job.input';
import { Type } from 'class-transformer';
import { SalaryCreateOrConnectWithoutJobInput } from './salary-create-or-connect-without-job.input';
import { SalaryUpsertWithoutJobInput } from './salary-upsert-without-job.input';
import { SalaryWhereUniqueInput } from './salary-where-unique.input';
import { SalaryUpdateWithoutJobInput } from './salary-update-without-job.input';

@InputType()
export class SalaryUpdateOneWithoutJobInput {

    @Field(() => SalaryCreateWithoutJobInput, {nullable:true})
    @Type(() => SalaryCreateWithoutJobInput)
    create?: SalaryCreateWithoutJobInput;

    @Field(() => SalaryCreateOrConnectWithoutJobInput, {nullable:true})
    @Type(() => SalaryCreateOrConnectWithoutJobInput)
    connectOrCreate?: SalaryCreateOrConnectWithoutJobInput;

    @Field(() => SalaryUpsertWithoutJobInput, {nullable:true})
    @Type(() => SalaryUpsertWithoutJobInput)
    upsert?: SalaryUpsertWithoutJobInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => SalaryWhereUniqueInput, {nullable:true})
    @Type(() => SalaryWhereUniqueInput)
    connect?: SalaryWhereUniqueInput;

    @Field(() => SalaryUpdateWithoutJobInput, {nullable:true})
    @Type(() => SalaryUpdateWithoutJobInput)
    update?: SalaryUpdateWithoutJobInput;
}
