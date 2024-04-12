import { RoomCreateNestedManyWithoutBuildingsInput } from "./RoomCreateNestedManyWithoutBuildingsInput";

export type BuildingCreateInput = {
  address: string;
  rooms?: RoomCreateNestedManyWithoutBuildingsInput;
  title: string;
};
