import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { SalaryHistory } from '../salary-history/salary-history.model';

@ObjectType()
export class Employee {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:true})
    salaryHistoryId!: string | null;

    @Field(() => SalaryHistory, {nullable:true})
    salaryHistory?: SalaryHistory | null;
}
