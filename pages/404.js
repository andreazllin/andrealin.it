export default function Error404NotFound() {
    return (
        <div className="w-screen h-screen flex flex-col justify-center items-center">
            <h1 className="font-regular text-sm text-gray-500">
                <span className="text-red-600">404</span> - Pagina non trovata
            </h1>
            <h2 className="font-regular text-sm text-gray-500">
                Puoi tornare alla homepage cliccando{' '}
                <a className="text-black"  href="/">
                    qui
                </a>
            </h2>
        </div>
    );
}
