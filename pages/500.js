export default function Error500() {
    return (
        <div className="w-screen h-screen flex flex-col justify-center items-center">
            <h1 className="font-regular text-sm text-gray-500">
                <span className="text-red-600">500</span> - C'è un errore sul server, mi dispace.
            </h1>
        </div>
    );
}
