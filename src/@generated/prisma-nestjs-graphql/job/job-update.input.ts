import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { SalaryUpdateOneWithoutJobInput } from '../salary/salary-update-one-without-job.input';

@InputType()
export class JobUpdateInput {

    @Field(() => Int, {nullable:true})
    companyId?: number;

    @Field(() => String, {nullable:true})
    title?: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @HideField()
    createdAt?: Date | string;

    @HideField()
    updatedAt?: Date | string;

    @Field(() => SalaryUpdateOneWithoutJobInput, {nullable:true})
    salary?: SalaryUpdateOneWithoutJobInput;
}
