// app/loading.tsx

export default function Loading() {
    return (
        <div className="fixed inset-0 flex flex-col items-center justify-center bg-white dark:bg-zinc-900 z-50">

            {/* Logo / Nome */}
            <h1 className="text-3xl font-bold text-zinc-800 dark:text-white mb-6">
                EPS Soluções
            </h1>

            {/* Spinner */}
            <div className="relative w-16 h-16">
                <div className="absolute inset-0 rounded-full border-4 border-zinc-200 dark:border-zinc-700"></div>

                <div className="absolute inset-0 rounded-full border-4 border-blue-500 border-t-transparent animate-spin"></div>
            </div>

            {/* Texto */}
            <p className="mt-6 text-zinc-600 dark:text-zinc-400 text-sm tracking-wide">
                Carregando...
            </p>

            


        </div>
    );
}
