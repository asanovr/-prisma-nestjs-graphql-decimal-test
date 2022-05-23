import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SalaryWhereUniqueInput } from './salary-where-unique.input';
import { Type } from 'class-transformer';
import { SalaryCreateWithoutJobInput } from './salary-create-without-job.input';

@InputType()
export class SalaryCreateOrConnectWithoutJobInput {

    @Field(() => SalaryWhereUniqueInput, {nullable:false})
    @Type(() => SalaryWhereUniqueInput)
    where!: SalaryWhereUniqueInput;

    @Field(() => SalaryCreateWithoutJobInput, {nullable:false})
    @Type(() => SalaryCreateWithoutJobInput)
    create!: SalaryCreateWithoutJobInput;
}
