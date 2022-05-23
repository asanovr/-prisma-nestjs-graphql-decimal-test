import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { DecimalWithAggregatesFilter } from '../prisma/decimal-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { HideField } from '@nestjs/graphql';

@InputType()
export class SalaryScalarWhereWithAggregatesInput {

    @Field(() => [SalaryScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<SalaryScalarWhereWithAggregatesInput>;

    @Field(() => [SalaryScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<SalaryScalarWhereWithAggregatesInput>;

    @Field(() => [SalaryScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<SalaryScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    currencyId?: IntWithAggregatesFilter;

    @Field(() => DecimalWithAggregatesFilter, {nullable:true})
    from?: DecimalWithAggregatesFilter;

    @Field(() => DecimalWithAggregatesFilter, {nullable:true})
    to?: DecimalWithAggregatesFilter;

    @HideField()
    createdAt?: DateTimeWithAggregatesFilter;

    @HideField()
    updatedAt?: DateTimeWithAggregatesFilter;
}
