import { useQuery } from "react-query";
import axios from "axios";

interface FetchMedicalDataProps {
    city: string;
    category: string;
}

interface MedicalDataProps {
    [key: string]: string;
}

type MedicalDataResponse = MedicalDataProps[];

const FetchMedicalData = async ({
    city = "북구",
    category = "병원",
}: FetchMedicalDataProps): Promise<MedicalDataResponse> => {
    const { data } = await axios.get<MedicalDataResponse>(
        `${process.env.REACT_APP_SERVER_URL}:${process.env.REACT_APP_SERVER_PORT}/api/ulsanMedical?city=${city}&category=${category}`
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
