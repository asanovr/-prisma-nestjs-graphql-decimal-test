import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SalaryWhereInput } from './salary-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManySalaryArgs {

    @Field(() => SalaryWhereInput, {nullable:true})
    @Type(() => SalaryWhereInput)
    where?: SalaryWhereInput;
}
