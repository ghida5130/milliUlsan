import { useQuery } from "react-query";
import axios from "axios";

type DustType = Record<string, string>;

const DustData = async () => {
    const { data } = await axios.get<DustType>(`http://175.215.254.39:5000/api/airkorea/dust`);
    return data;
};

const useDustData = () => {
    const { data, error, isLoading } = useQuery<DustType, Error>("dust", DustData, {
        keepPreviousData: true,
    });

    return { data, error, isLoading };
};

export default useDustData;
