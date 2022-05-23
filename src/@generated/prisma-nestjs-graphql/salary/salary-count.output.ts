import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class SalaryCount {

    @Field(() => Int, {nullable:false})
    job?: number;
}
