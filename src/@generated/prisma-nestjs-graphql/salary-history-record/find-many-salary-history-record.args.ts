import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SalaryHistoryRecordWhereInput } from './salary-history-record-where.input';
import { Type } from 'class-transformer';
import { SalaryHistoryRecordOrderByWithRelationInput } from './salary-history-record-order-by-with-relation.input';
import { SalaryHistoryRecordWhereUniqueInput } from './salary-history-record-where-unique.input';
import { Int } from '@nestjs/graphql';
import { SalaryHistoryRecordScalarFieldEnum } from './salary-history-record-scalar-field.enum';

@ArgsType()
export class FindManySalaryHistoryRecordArgs {

    @Field(() => SalaryHistoryRecordWhereInput, {nullable:true})
    @Type(() => SalaryHistoryRecordWhereInput)
    where?: SalaryHistoryRecordWhereInput;

    @Field(() => [SalaryHistoryRecordOrderByWithRelationInput], {nullable:true})
    @Type(() => SalaryHistoryRecordOrderByWithRelationInput)
    orderBy?: Array<SalaryHistoryRecordOrderByWithRelationInput>;

    @Field(() => SalaryHistoryRecordWhereUniqueInput, {nullable:true})
    @Type(() => SalaryHistoryRecordWhereUniqueInput)
    cursor?: SalaryHistoryRecordWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [SalaryHistoryRecordScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof SalaryHistoryRecordScalarFieldEnum>;
}
