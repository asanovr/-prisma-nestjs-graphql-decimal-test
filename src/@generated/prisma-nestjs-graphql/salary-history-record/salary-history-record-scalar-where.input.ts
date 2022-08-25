import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { StringFilter } from '../prisma/string-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { DecimalFilter } from '../prisma/decimal-filter.input';

@InputType()
export class SalaryHistoryRecordScalarWhereInput {

    @Field(() => [SalaryHistoryRecordScalarWhereInput], {nullable:true})
    @Type(() => SalaryHistoryRecordScalarWhereInput)
    AND?: Array<SalaryHistoryRecordScalarWhereInput>;

    @Field(() => [SalaryHistoryRecordScalarWhereInput], {nullable:true})
    @Type(() => SalaryHistoryRecordScalarWhereInput)
    OR?: Array<SalaryHistoryRecordScalarWhereInput>;

    @Field(() => [SalaryHistoryRecordScalarWhereInput], {nullable:true})
    @Type(() => SalaryHistoryRecordScalarWhereInput)
    NOT?: Array<SalaryHistoryRecordScalarWhereInput>;

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
}
