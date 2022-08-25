import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { DecimalWithAggregatesFilter } from '../prisma/decimal-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { HideField } from '@nestjs/graphql';

@InputType()
export class SalaryScalarWhereWithAggregatesInput {

    @Field(() => [SalaryScalarWhereWithAggregatesInput], {nullable:true})
    @Type(() => SalaryScalarWhereWithAggregatesInput)
    AND?: Array<SalaryScalarWhereWithAggregatesInput>;

    @Field(() => [SalaryScalarWhereWithAggregatesInput], {nullable:true})
    @Type(() => SalaryScalarWhereWithAggregatesInput)
    OR?: Array<SalaryScalarWhereWithAggregatesInput>;

    @Field(() => [SalaryScalarWhereWithAggregatesInput], {nullable:true})
    @Type(() => SalaryScalarWhereWithAggregatesInput)
    NOT?: Array<SalaryScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    currencyId?: IntWithAggregatesFilter;

    @Field(() => DecimalWithAggregatesFilter, {nullable:true})
    @Type(() => DecimalWithAggregatesFilter)
    from?: DecimalWithAggregatesFilter;

    @Field(() => DecimalWithAggregatesFilter, {nullable:true})
    @Type(() => DecimalWithAggregatesFilter)
    to?: DecimalWithAggregatesFilter;

    @HideField()
    createdAt?: DateTimeWithAggregatesFilter;

    @HideField()
    updatedAt?: DateTimeWithAggregatesFilter;
}
