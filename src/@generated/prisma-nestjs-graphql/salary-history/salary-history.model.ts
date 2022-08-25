import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { SalaryHistoryRecord } from '../salary-history-record/salary-history-record.model';
import { Employee } from '../employee/employee.model';
import { SalaryHistoryCount } from '../salary/salary-history-count.output';

@ObjectType()
export class SalaryHistory {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    currencyId!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => [SalaryHistoryRecord], {nullable:true})
    history?: Array<SalaryHistoryRecord>;

    @Field(() => Employee, {nullable:true})
    employeeSalaryHistory?: Employee | null;

    @Field(() => SalaryHistoryCount, {nullable:false})
    _count?: SalaryHistoryCount;
}
