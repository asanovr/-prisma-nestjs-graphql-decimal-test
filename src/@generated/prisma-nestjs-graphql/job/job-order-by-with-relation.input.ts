import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { HideField } from '@nestjs/graphql';
import { SalaryOrderByWithRelationInput } from '../salary/salary-order-by-with-relation.input';
import { Type } from 'class-transformer';

@InputType()
export class JobOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    companyId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    salaryId?: keyof typeof SortOrder;

    @HideField()
    description?: keyof typeof SortOrder;

    @HideField()
    createdAt?: keyof typeof SortOrder;

    @HideField()
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SalaryOrderByWithRelationInput, {nullable:true})
    @Type(() => SalaryOrderByWithRelationInput)
    salary?: SalaryOrderByWithRelationInput;
}
