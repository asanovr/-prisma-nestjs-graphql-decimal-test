import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class SalaryAvgAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    currencyId?: true;

    @Field(() => Boolean, {nullable:true})
    from?: true;

    @Field(() => Boolean, {nullable:true})
    to?: true;
}
