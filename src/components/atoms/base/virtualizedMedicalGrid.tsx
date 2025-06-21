// components/common/VirtualizedMedicalGrid.tsx

import { FixedSizeGrid as Grid } from "react-window";
import styled from "styled-components";
import { useMemo } from "react";
import { MedicalDataTypes } from "../../../api/fetchMedicalData";
import MedicalInfoBox from "../../organisms/mainModules/medical/medicalInfoBox";

interface VirtualizedMedicalGridProps {
    data: MedicalDataTypes[];
}

export default function VirtualizedMedicalGrid({ data }: VirtualizedMedicalGridProps) {
    const columnCount = useMemo(() => {
        const width = window.innerWidth;
        if (width >= 1550) return 5;
        if (width >= 992) return 4;
        if (width >= 768) return 3;
        return 2;
    }, []);

    const itemWidth = 300;
    const itemHeight = 300;
    const rowCount = Math.ceil(data.length / columnCount);

    return (
        <FullWidthGridItem>
            <Grid
                columnCount={columnCount}
                rowCount={rowCount}
                columnWidth={itemWidth}
                rowHeight={itemHeight}
                height={900} // 필요에 따라 조정
                width={columnCount * itemWidth}
            >
                {({ columnIndex, rowIndex, style }) => {
                    const index = rowIndex * columnCount + columnIndex;
                    const item = data[index];
                    if (!item) return null;

                    return (
                        <div style={style}>
                            <MedicalInfoBox key={item.의료기관명} MedicalData={item} />
                        </div>
                    );
                }}
            </Grid>
        </FullWidthGridItem>
    );
}

const FullWidthGridItem = styled.div`
    grid-column: 1 / -1; // 모든 column 차지
    width: 100%;
`;

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    overflow: auto;
    padding: 10px;
`;
