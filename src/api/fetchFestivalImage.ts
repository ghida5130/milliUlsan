import axios from "axios";
import { useQuery } from "react-query";

interface FestivalImageTypes {
    [key: string]: string;
}

export const FetchFestivalImage = async (unqId: number): Promise<FestivalImageTypes> => {
    const { data } = await axios.get<FestivalImageTypes>(
        `${process.env.REACT_APP_SERVER_URL}/api/ulsanFestivalImage?unqId=${unqId}`
    );
    return data;
};

const useFetchFestivalImage = (unqId: number) => {
    const { data, error, isLoading } = useQuery<FestivalImageTypes, Error>(
        ["festivalImage", unqId],
        () => FetchFestivalImage(unqId),
        { keepPreviousData: true }
    );

    return { data, error, isLoading };
};

export default useFetchFestivalImage;
