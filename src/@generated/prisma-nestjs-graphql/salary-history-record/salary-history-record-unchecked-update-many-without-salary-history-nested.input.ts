import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SalaryHistoryRecordCreateWithoutSalaryHistoryInput } from './salary-history-record-create-without-salary-history.input';
import { Type } from 'class-transformer';
import { SalaryHistoryRecordCreateOrConnectWithoutSalaryHistoryInput } from './salary-history-record-create-or-connect-without-salary-history.input';
import { SalaryHistoryRecordUpsertWithWhereUniqueWithoutSalaryHistoryInput } from './salary-history-record-upsert-with-where-unique-without-salary-history.input';
import { SalaryHistoryRecordCreateManySalaryHistoryInputEnvelope } from './salary-history-record-create-many-salary-history-input-envelope.input';
import { SalaryHistoryRecordWhereUniqueInput } from './salary-history-record-where-unique.input';
import { SalaryHistoryRecordUpdateWithWhereUniqueWithoutSalaryHistoryInput } from './salary-history-record-update-with-where-unique-without-salary-history.input';
import { SalaryHistoryRecordUpdateManyWithWhereWithoutSalaryHistoryInput } from './salary-history-record-update-many-with-where-without-salary-history.input';
import { SalaryHistoryRecordScalarWhereInput } from './salary-history-record-scalar-where.input';

@InputType()
export class SalaryHistoryRecordUncheckedUpdateManyWithoutSalaryHistoryNestedInput {

    @Field(() => [SalaryHistoryRecordCreateWithoutSalaryHistoryInput], {nullable:true})
    @Type(() => SalaryHistoryRecordCreateWithoutSalaryHistoryInput)
    create?: Array<SalaryHistoryRecordCreateWithoutSalaryHistoryInput>;

    @Field(() => [SalaryHistoryRecordCreateOrConnectWithoutSalaryHistoryInput], {nullable:true})
    @Type(() => SalaryHistoryRecordCreateOrConnectWithoutSalaryHistoryInput)
    connectOrCreate?: Array<SalaryHistoryRecordCreateOrConnectWithoutSalaryHistoryInput>;

    @Field(() => [SalaryHistoryRecordUpsertWithWhereUniqueWithoutSalaryHistoryInput], {nullable:true})
    @Type(() => SalaryHistoryRecordUpsertWithWhereUniqueWithoutSalaryHistoryInput)
    upsert?: Array<SalaryHistoryRecordUpsertWithWhereUniqueWithoutSalaryHistoryInput>;

    @Field(() => SalaryHistoryRecordCreateManySalaryHistoryInputEnvelope, {nullable:true})
    @Type(() => SalaryHistoryRecordCreateManySalaryHistoryInputEnvelope)
    createMany?: SalaryHistoryRecordCreateManySalaryHistoryInputEnvelope;

    @Field(() => [SalaryHistoryRecordWhereUniqueInput], {nullable:true})
    @Type(() => SalaryHistoryRecordWhereUniqueInput)
    set?: Array<SalaryHistoryRecordWhereUniqueInput>;

    @Field(() => [SalaryHistoryRecordWhereUniqueInput], {nullable:true})
    @Type(() => SalaryHistoryRecordWhereUniqueInput)
    disconnect?: Array<SalaryHistoryRecordWhereUniqueInput>;

    @Field(() => [SalaryHistoryRecordWhereUniqueInput], {nullable:true})
    @Type(() => SalaryHistoryRecordWhereUniqueInput)
    delete?: Array<SalaryHistoryRecordWhereUniqueInput>;

    @Field(() => [SalaryHistoryRecordWhereUniqueInput], {nullable:true})
    @Type(() => SalaryHistoryRecordWhereUniqueInput)
    connect?: Array<SalaryHistoryRecordWhereUniqueInput>;

    @Field(() => [SalaryHistoryRecordUpdateWithWhereUniqueWithoutSalaryHistoryInput], {nullable:true})
    @Type(() => SalaryHistoryRecordUpdateWithWhereUniqueWithoutSalaryHistoryInput)
    update?: Array<SalaryHistoryRecordUpdateWithWhereUniqueWithoutSalaryHistoryInput>;

    @Field(() => [SalaryHistoryRecordUpdateManyWithWhereWithoutSalaryHistoryInput], {nullable:true})
    @Type(() => SalaryHistoryRecordUpdateManyWithWhereWithoutSalaryHistoryInput)
    updateMany?: Array<SalaryHistoryRecordUpdateManyWithWhereWithoutSalaryHistoryInput>;

    @Field(() => [SalaryHistoryRecordScalarWhereInput], {nullable:true})
    @Type(() => SalaryHistoryRecordScalarWhereInput)
    deleteMany?: Array<SalaryHistoryRecordScalarWhereInput>;
}
