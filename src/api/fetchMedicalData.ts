import { useQuery } from "react-query";
import axios from "axios";

interface FetchMedicalDataProps {
    city: string;
    category: string;
}

export interface MedicalDataTypes {
    [key: string]: string;
}

type MedicalDataResponse = MedicalDataTypes[];

const FetchMedicalData = async ({
    city = "북구",
    category = "병원",
}: FetchMedicalDataProps): Promise<MedicalDataResponse> => {
    const { data } = await axios.get<MedicalDataResponse>(
        `${process.env.REACT_APP_SERVER_URL}/api/ulsanMedical?city=${city}&category=${category}`
    );
    return data;
};

const useFetchMedicalData = ({ city, category }: FetchMedicalDataProps) => {
    const { data, error, isLoading } = useQuery<MedicalDataResponse, Error>(
        ["medical", city, category],
        () => FetchMedicalData({ city, category }),
        { keepPreviousData: true }
    );

    return { data, error, isLoading };
};

export default useFetchMedicalData;
