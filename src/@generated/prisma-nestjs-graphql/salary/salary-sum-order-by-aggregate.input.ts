import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class SalarySumOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    currencyId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    from?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    to?: keyof typeof SortOrder;
}