import { useEffect, useRef, useCallback } from "react";
import { MedicalDataTypes } from "../api/fetchMedicalData";

export function useFilterWorker() {
    const workerRef = useRef<Worker | null>(null);

    // 워커 생성 함수
    const initWorker = useCallback(() => {
        workerRef.current = new Worker(new URL("../workers/filterWorker.ts", import.meta.url));
    }, []);

    // 워커 종료 함수
    const terminateWorker = useCallback(() => {
        workerRef.current?.terminate();
        workerRef.current = null;
    }, []);

    // 컴포넌트 마운트시 워커 생성 및 언마운트시 워커 종료
    useEffect(() => {
        initWorker();
        return () => terminateWorker();
    }, [initWorker, terminateWorker]);

    // 워커 사용
    const postFilterData = useCallback(
        (data: MedicalDataTypes[], keyword: string, onResult: (result: MedicalDataTypes[]) => void) => {
            if (!workerRef.current) return;

            workerRef.current.postMessage({ data, keyword });

            workerRef.current.onmessage = function (e) {
                onResult(e.data);
            };
        },
        []
    );

    return { postFilterData };
}
