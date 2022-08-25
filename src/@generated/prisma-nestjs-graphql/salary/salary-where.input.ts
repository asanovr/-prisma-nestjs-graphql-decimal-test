import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { IntFilter } from '../prisma/int-filter.input';
import { DecimalFilter } from '../prisma/decimal-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { HideField } from '@nestjs/graphql';
import { JobListRelationFilter } from '../job/job-list-relation-filter.input';

@InputType()
export class SalaryWhereInput {

    @Field(() => [SalaryWhereInput], {nullable:true})
    @Type(() => SalaryWhereInput)
    AND?: Array<SalaryWhereInput>;

    @Field(() => [SalaryWhereInput], {nullable:true})
    @Type(() => SalaryWhereInput)
    OR?: Array<SalaryWhereInput>;

    @Field(() => [SalaryWhereInput], {nullable:true})
    @Type(() => SalaryWhereInput)
    NOT?: Array<SalaryWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    currencyId?: IntFilter;

    @Field(() => DecimalFilter, {nullable:true})
    @Type(() => DecimalFilter)
    from?: DecimalFilter;

    @Field(() => DecimalFilter, {nullable:true})
    @Type(() => DecimalFilter)
    to?: DecimalFilter;

    @HideField()
    createdAt?: DateTimeFilter;

    @HideField()
    updatedAt?: DateTimeFilter;

    @Field(() => JobListRelationFilter, {nullable:true})
    job?: JobListRelationFilter;
}
