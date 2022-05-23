import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SalaryWhereInput } from './salary-where.input';

@ArgsType()
export class DeleteManySalaryArgs {

    @Field(() => SalaryWhereInput, {nullable:true})
    where?: SalaryWhereInput;
}
