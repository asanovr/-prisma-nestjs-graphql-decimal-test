import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { SalaryCreateNestedOneWithoutJobInput } from '../salary/salary-create-nested-one-without-job.input';

@InputType()
export class JobCreateInput {

    @Field(() => Int, {nullable:false})
    companyId!: number;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @HideField()
    createdAt?: Date | string;

    @HideField()
    updatedAt?: Date | string;

    @Field(() => SalaryCreateNestedOneWithoutJobInput, {nullable:true})
    salary?: SalaryCreateNestedOneWithoutJobInput;
}
