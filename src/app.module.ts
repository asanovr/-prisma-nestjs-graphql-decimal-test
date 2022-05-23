import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { SalariesResolver } from './salaries.resolver';

@Module({
  imports: [
    PrismaModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: './src/schema.graphql',
      sortSchema: true,
      introspection: true,
      buildSchemaOptions: {},
      installSubscriptionHandlers: true,
      debug: true,
      playground: true,
      context: ({ req }) => ({ req }),
    }),
  ],
  providers: [AppService, SalariesResolver],
})
export class AppModule {}
