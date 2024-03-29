import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Decimal } from '@prisma/client/runtime';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { transformToDecimal } from 'prisma-graphql-type-decimal';
import { Transform } from 'class-transformer';
import { Type } from 'class-transformer';
import { HideField } from '@nestjs/graphql';
import { JobUpdateManyWithoutSalaryNestedInput } from '../job/job-update-many-without-salary-nested.input';

@InputType()
export class SalaryUpdateInput {

    @Field(() => Int, {nullable:true})
    currencyId?: number;

    @Field(() => GraphQLDecimal, {nullable:true})
    @Type(() => Object)
    @Transform(transformToDecimal)
    from?: Decimal;

    @Field(() => GraphQLDecimal, {nullable:true})
    @Type(() => Object)
    @Transform(transformToDecimal)
    to?: Decimal;

    @HideField()
    createdAt?: Date | string;

    @HideField()
    updatedAt?: Date | string;

    @Field(() => JobUpdateManyWithoutSalaryNestedInput, {nullable:true})
    job?: JobUpdateManyWithoutSalaryNestedInput;
}
