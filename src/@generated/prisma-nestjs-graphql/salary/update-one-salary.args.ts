import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SalaryUpdateInput } from './salary-update.input';
import { Type } from 'class-transformer';
import { SalaryWhereUniqueInput } from './salary-where-unique.input';

@ArgsType()
export class UpdateOneSalaryArgs {

    @Field(() => SalaryUpdateInput, {nullable:false})
    @Type(() => SalaryUpdateInput)
    data!: SalaryUpdateInput;

    @Field(() => SalaryWhereUniqueInput, {nullable:false})
    @Type(() => SalaryWhereUniqueInput)
    where!: SalaryWhereUniqueInput;
}
