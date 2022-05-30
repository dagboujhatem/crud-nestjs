import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ContactsModule } from './contacts/contacts.module';
import { TodosModule } from './todos/todos.module';

@Module({
  imports: [UsersModule, ContactsModule, TodosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
