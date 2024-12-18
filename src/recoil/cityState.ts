import { atom } from "recoil";

export type CityNameStateType = "북구" | "남구" | "동구" | "중구" | "울주군";
export type MedicalCategoryStateType =
    | "병원"
    | "종합병원"
    | "의원"
    | "치과병원"
    | "치과의원"
    | "한방병원"
    | "요양병원"
    | "한의원"
    | "부속의원"
    | "정신병원";

export const cityNameState = atom<CityNameStateType>({
    key: "cityState",
    default: "북구",
});

export const medicalCategoryState = atom<MedicalCategoryStateType>({
    key: "categoryState",
    default: "병원",
});
