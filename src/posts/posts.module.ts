import {Module} from "@nestjs/common";
import {PostsService} from './posts.service';
import {PostsResolver} from './posts.resolver';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Post} from "./entities/post.entity";

@Module({
    imports: [
        TypeOrmModule.forFeature([Post])
    ],
    providers: [PostsResolver,PostsService],
    exports: [TypeOrmModule]
})
export class PostsModule {
}
