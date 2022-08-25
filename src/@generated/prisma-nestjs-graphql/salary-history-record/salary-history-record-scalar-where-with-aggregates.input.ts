import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { DecimalWithAggregatesFilter } from '../prisma/decimal-with-aggregates-filter.input';

@InputType()
export class SalaryHistoryRecordScalarWhereWithAggregatesInput {

    @Field(() => [SalaryHistoryRecordScalarWhereWithAggregatesInput], {nullable:true})
    @Type(() => SalaryHistoryRecordScalarWhereWithAggregatesInput)
    AND?: Array<SalaryHistoryRecordScalarWhereWithAggregatesInput>;

    @Field(() => [SalaryHistoryRecordScalarWhereWithAggregatesInput], {nullable:true})
    @Type(() => SalaryHistoryRecordScalarWhereWithAggregatesInput)
    OR?: Array<SalaryHistoryRecordScalarWhereWithAggregatesInput>;

    @Field(() => [SalaryHistoryRecordScalarWhereWithAggregatesInput], {nullable:true})
    @Type(() => SalaryHistoryRecordScalarWhereWithAggregatesInput)
    NOT?: Array<SalaryHistoryRecordScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    salaryHistoryId?: StringWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    year?: IntWithAggregatesFilter;

    @Field(() => DecimalWithAggregatesFilter, {nullable:true})
    @Type(() => DecimalWithAggregatesFilter)
    from?: DecimalWithAggregatesFilter;

    @Field(() => DecimalWithAggregatesFilter, {nullable:true})
    @Type(() => DecimalWithAggregatesFilter)
    to?: DecimalWithAggregatesFilter;
}
