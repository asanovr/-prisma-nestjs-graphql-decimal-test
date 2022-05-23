import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';

@InputType()
export class SalaryMinAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    currencyId?: true;

    @Field(() => Boolean, {nullable:true})
    from?: true;

    @Field(() => Boolean, {nullable:true})
    to?: true;

    @HideField()
    createdAt?: true;

    @HideField()
    updatedAt?: true;
}
