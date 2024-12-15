/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Building } from "./Building";
import { BuildingCountArgs } from "./BuildingCountArgs";
import { BuildingFindManyArgs } from "./BuildingFindManyArgs";
import { BuildingFindUniqueArgs } from "./BuildingFindUniqueArgs";
import { CreateBuildingArgs } from "./CreateBuildingArgs";
import { UpdateBuildingArgs } from "./UpdateBuildingArgs";
import { DeleteBuildingArgs } from "./DeleteBuildingArgs";
import { RoomFindManyArgs } from "../../room/base/RoomFindManyArgs";
import { Room } from "../../room/base/Room";
import { BuildingService } from "../building.service";
@graphql.Resolver(() => Building)
export class BuildingResolverBase {
  constructor(protected readonly service: BuildingService) {}

  async _buildingsMeta(
    @graphql.Args() args: BuildingCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Building])
  async buildings(
    @graphql.Args() args: BuildingFindManyArgs
  ): Promise<Building[]> {
    return this.service.buildings(args);
  }

  @graphql.Query(() => Building, { nullable: true })
  async building(
    @graphql.Args() args: BuildingFindUniqueArgs
  ): Promise<Building | null> {
    const result = await this.service.building(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Building)
  async createBuilding(
    @graphql.Args() args: CreateBuildingArgs
  ): Promise<Building> {
    return await this.service.createBuilding({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Building)
  async updateBuilding(
    @graphql.Args() args: UpdateBuildingArgs
  ): Promise<Building | null> {
    try {
      return await this.service.updateBuilding({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Building)
  async deleteBuilding(
    @graphql.Args() args: DeleteBuildingArgs
  ): Promise<Building | null> {
    try {
      return await this.service.deleteBuilding(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => [Room], { name: "rooms" })
  async findRooms(
    @graphql.Parent() parent: Building,
    @graphql.Args() args: RoomFindManyArgs
  ): Promise<Room[]> {
    const results = await this.service.findRooms(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}
