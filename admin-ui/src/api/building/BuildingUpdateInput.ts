import { RoomUpdateManyWithoutBuildingsInput } from "./RoomUpdateManyWithoutBuildingsInput";

export type BuildingUpdateInput = {
  address?: string;
  rooms?: RoomUpdateManyWithoutBuildingsInput;
  title?: string;
};
