import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { DecimalFilter } from '../prisma/decimal-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { HideField } from '@nestjs/graphql';

@InputType()
export class SalaryWhereInput {

    @Field(() => [SalaryWhereInput], {nullable:true})
    AND?: Array<SalaryWhereInput>;

    @Field(() => [SalaryWhereInput], {nullable:true})
    OR?: Array<SalaryWhereInput>;

    @Field(() => [SalaryWhereInput], {nullable:true})
    NOT?: Array<SalaryWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    currencyId?: IntFilter;

    @Field(() => DecimalFilter, {nullable:true})
    from?: DecimalFilter;

    @Field(() => DecimalFilter, {nullable:true})
    to?: DecimalFilter;

    @HideField()
    createdAt?: DateTimeFilter;

    @HideField()
    updatedAt?: DateTimeFilter;
}
