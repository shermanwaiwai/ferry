import { Module } from "@nestjs/common";
import { ProjectModuleBase } from "./base/project.module.base";
import { ProjectService } from "./project.service";
import { ProjectController } from "./project.controller";

@Module({
  imports: [ProjectModuleBase],
  controllers: [ProjectController],
  providers: [ProjectService],
  exports: [ProjectService],
})
export class ProjectModule {}
