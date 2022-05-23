import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SalaryCreateManyInput } from './salary-create-many.input';

@ArgsType()
export class CreateManySalaryArgs {

    @Field(() => [SalaryCreateManyInput], {nullable:false})
    data!: Array<SalaryCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
