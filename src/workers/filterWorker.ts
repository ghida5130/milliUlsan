/* eslint-disable no-restricted-globals */
import { MedicalDataTypes } from "../api/fetchMedicalData";

// 병원데이터 필터링 연산 워커로 분리
self.onmessage = function (e: MessageEvent<{ data: MedicalDataTypes[]; keyword: string }>) {
    console.log("Worker received");

    const { data, keyword } = e.data;

    const filtered = data.filter((item) => item.소재지.includes(keyword));

    console.log("Worker filtered complete");

    self.postMessage(filtered);
};

export {};
