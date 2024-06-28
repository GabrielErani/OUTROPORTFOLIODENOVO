export const Card = ({children}) => {
    return (
        <div className="border border-solid border-1 border-slate-400 p-4 flex flex-col justify-center items-center h-full w-full rounded-xl">
            {children}
        </div>
    );
}

export const CardIcon = ({children}) => {
    return (
        <div className="flex justify-center items-center">
            {children}
        </div>
    );
}

export const CardTitle = ({children}) => {
    return (
        <div className="text-lg font-bold">
            {children}
        </div>
    );
}