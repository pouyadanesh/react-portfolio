interface IProps {
    title: string;
    description: string;
    onRetry?: () => void;
}

export function ErrorState({
    title,
    description,
    onRetry
}: IProps) {
    return (
        <div className="flex flex-col items-center justify-center gap-2">

            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="text-sm text-muted-foreground">{description}</p>
            {onRetry && (
                <button
                    className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    onClick={onRetry}
                >
                    Retry   
                </button>
            )}
        </div>
    );
}