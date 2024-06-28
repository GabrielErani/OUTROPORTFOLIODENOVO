import { Card, CardIcon, CardTitle } from "../Card";
import {SVGCss, SVGHtml, SVGNodeJs, SVGReact, SVGTailwind } from "../SVGs/Svgs";

const Skills = () => {



    return (
        <div className="2xl:max-w-screen-2xl w-screen h-full ">
            <div className="h-full w-full flex items-center flex-col">
                <h1 className="text-5xl font-bold bg-gradient-to-r from-zinc-400 to-zinc-700 bg-clip-text text-transparent m-4 2xl:text-8xl">Minhas Skills</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 h-fit w-full p-4">
                    <Card >
                        <CardIcon>
                            <SVGHtml/>
                        </CardIcon>
                        <CardTitle>
                            HTML
                        </CardTitle>
                    </Card>
                    <Card >
                        <CardIcon>
                            <SVGReact/>
                        </CardIcon>
                        <CardTitle>
                            React
                        </CardTitle>
                    </Card>
                    <Card >
                        <CardIcon>
                            <SVGTailwind/>
                        </CardIcon>
                        <CardTitle>
                            Tailwind
                        </CardTitle>
                    </Card>
                    <Card >
                        <CardIcon>
                            <SVGCss/>
                        </CardIcon>
                        <CardTitle>
                            CSS
                        </CardTitle>
                    </Card>
                    <Card >
                        <CardIcon>
                            <SVGNodeJs/>
                        </CardIcon>
                        <CardTitle>
                            NodeJs
                        </CardTitle>
                    </Card>
                </div>
            </div>
        </div>
    );
}
export default Skills;