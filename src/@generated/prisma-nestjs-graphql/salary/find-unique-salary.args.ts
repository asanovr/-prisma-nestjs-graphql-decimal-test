import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SalaryWhereUniqueInput } from './salary-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueSalaryArgs {

    @Field(() => SalaryWhereUniqueInput, {nullable:false})
    @Type(() => SalaryWhereUniqueInput)
    where!: SalaryWhereUniqueInput;
}
