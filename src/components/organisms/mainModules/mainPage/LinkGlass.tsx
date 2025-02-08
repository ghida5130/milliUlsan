import GridGlass from "../../../atoms/glass/gridGlass";
import LinkIconBox from "../../../atoms/neumorphism/linkIconBox";

export default function LinkGlass(): JSX.Element {
    return (
        <>
            <GridGlass>
                <LinkIconBox link="https://www.naver.com" src="images/linkIcon/naverIcon.png" />
                <LinkIconBox link="https://millivie.vercel.app/" src="images/linkIcon/millivieIcon.png" />
                <LinkIconBox link="https://www.google.com/" src="images/linkIcon/googleIcon.svg" />
                <LinkIconBox link="https://github.com/" src="images/linkIcon/githubIcon.png" />
            </GridGlass>
        </>
    );
}
