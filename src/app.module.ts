import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/entities/user.entity'; // เรียกใช้ Entity ของ "users"
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'nestjs',
      entities: [User],
      synchronize: false, // ตั้งค่าเป็น false เพื่อปิดการสร้างตารางใหม่
    }),
    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

