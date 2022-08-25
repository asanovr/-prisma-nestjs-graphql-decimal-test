import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { StringFilter } from '../prisma/string-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { DecimalFilter } from '../prisma/decimal-filter.input';
import { SalaryHistoryRelationFilter } from '../salary-history/salary-history-relation-filter.input';

@InputType()
export class SalaryHistoryRecordWhereInput {

    @Field(() => [SalaryHistoryRecordWhereInput], {nullable:true})
    @Type(() => SalaryHistoryRecordWhereInput)
    AND?: Array<SalaryHistoryRecordWhereInput>;

    @Field(() => [SalaryHistoryRecordWhereInput], {nullable:true})
    @Type(() => SalaryHistoryRecordWhereInput)
    OR?: Array<SalaryHistoryRecordWhereInput>;

    @Field(() => [SalaryHistoryRecordWhereInput], {nullable:true})
    @Type(() => SalaryHistoryRecordWhereInput)
    NOT?: Array<SalaryHistoryRecordWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    salaryHistoryId?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    year?: IntFilter;

    @Field(() => DecimalFilter, {nullable:true})
    @Type(() => DecimalFilter)
    from?: DecimalFilter;

    @Field(() => DecimalFilter, {nullable:true})
    @Type(() => DecimalFilter)
    to?: DecimalFilter;

    @Field(() => SalaryHistoryRelationFilter, {nullable:true})
    salaryHistory?: SalaryHistoryRelationFilter;
}
