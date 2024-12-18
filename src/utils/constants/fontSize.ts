// 반응형 텍스트 사이즈의 통일 및 관리를 위한 폰트사이즈 객체

interface FontTypes {
    [size: string]: string;
}

export const F: FontTypes = {
    SMALLEST: "1.0rem",
    VERY_SMALL: "1.2rem",
    SMALL: "1.4rem",
    MEDIUM: "1.6rem",
    LARGE: "2.0rem",
    VERY_LARGE: "2.3rem",
    LARGEST: "2.6rem",
    MEGA: "3.0rem",
};
