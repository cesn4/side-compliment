import { Building as TBuilding } from "../api/building/Building";

export const BUILDING_TITLE_FIELD = "title";

export const BuildingTitle = (record: TBuilding): string => {
  return record.title?.toString() || String(record.id);
};
