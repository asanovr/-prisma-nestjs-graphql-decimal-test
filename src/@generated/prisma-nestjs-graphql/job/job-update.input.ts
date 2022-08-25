import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { SalaryUpdateOneWithoutJobNestedInput } from '../salary/salary-update-one-without-job-nested.input';
import { Type } from 'class-transformer';

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

    @Field(() => SalaryUpdateOneWithoutJobNestedInput, {nullable:true})
    @Type(() => SalaryUpdateOneWithoutJobNestedInput)
    salary?: SalaryUpdateOneWithoutJobNestedInput;
}
