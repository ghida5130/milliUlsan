import { useQuery } from "react-query";
import axios from "axios";

interface FestivalDataProps {
    totalCount: string;
    data: FestivalData[];
}

interface FestivalData {
    [key: string]: string;
}

const FetchFestivalData = async (nowMonth: number): Promise<FestivalDataProps> => {
    const { data } = await axios.get<FestivalDataProps>(
        `http://175.215.254.39:5000/api/ulsanFestival?nowMonth=${nowMonth}`
    );
    return data;
};

const useFetchFestivalData = (nowMonth: number) => {
    const { data, error, isLoading } = useQuery<FestivalDataProps, Error>(
        ["festival", nowMonth],
        () => FetchFestivalData(nowMonth),
        { keepPreviousData: true }
    );

    return { data, error, isLoading };
};

export default useFetchFestivalData;
