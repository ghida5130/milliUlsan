import { useQuery } from "react-query";
import axios from "axios";

type DustType = Record<string, string>;

const DustData = async () => {
    const { data } = await axios.get<DustType>(
        `${process.env.REACT_APP_SERVER_URL}:${process.env.REACT_APP_SERVER_PORT}/api/airkorea/dust`
    );
    return data;
};

const useDustData = () => {
    const { data, error, isLoading } = useQuery<DustType, Error>("dust", DustData, {
        keepPreviousData: true,
    });

    return { data, error, isLoading };
};

export default useDustData;
