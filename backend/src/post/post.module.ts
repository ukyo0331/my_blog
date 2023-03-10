import { Module } from '@nestjs/common';
import { PostController } from './post.controller';
import { PostService } from './post.service';
import { PrismaModule } from '../prisma/prisma.module';
import { CategoryOnPostModule } from '../category_on_post/category_on_post.module';
import { CategoryModule } from '../category/category.module';
import { CategoryOnPostService } from '../category_on_post/category_on_post.service';
import { CategoryService } from '../category/category.service';

@Module({
  imports: [PrismaModule, CategoryOnPostModule, CategoryModule],
  controllers: [PostController],
  providers: [PostService, CategoryOnPostService, CategoryService],
  exports: [PostModule],
})
export class PostModule {}
