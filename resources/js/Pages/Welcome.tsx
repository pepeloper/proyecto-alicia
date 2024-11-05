import { Head } from '@inertiajs/react';

export default function Welcome() {
    return (
        <>
            <Head title="Welcome" />
            <main className="flex h-screen flex-col items-center justify-center bg-[#003046]">
                <svg
                    className="w-1/3 lg:w-80"
                    viewBox="0 0 38 46"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <g clipPath="url(#clip0_60_32)">
                        <path
                            d="M19.0916 33.0012C19.9848 33.0012 20.7088 32.2772 20.7088 31.384C20.7088 30.4909 19.9848 29.7668 19.0916 29.7668C18.1985 29.7668 17.4744 30.4909 17.4744 31.384C17.4744 32.2772 18.1985 33.0012 19.0916 33.0012Z"
                            fill="#ED8B3E"
                        />
                        <path
                            d="M20.5813 16.0446C22.0312 12.0255 22.9354 8.04227 22.9354 4.40558C22.9354 1.97581 21.2107 -0.00385284 19.0916 -0.00385284C16.9725 -0.00385284 15.2478 1.97183 15.2478 4.40558C15.2478 8.00244 16.144 11.9817 17.5939 16.0207C16.3193 19.3706 14.5786 22.9595 12.4197 26.6639C7.95052 34.3316 2.84801 40.4897 0 42.9672L1.84025 45.0823C6.11027 41.366 14.2679 30.7865 19.0916 19.7729C23.7042 30.3603 31.4078 40.6689 36.1319 44.8951L38 42.8039C33.6145 38.8804 24.8912 27.2972 20.5853 16.0486L20.5813 16.0446ZM18.056 4.40956C18.056 3.46554 18.6017 2.80432 19.0956 2.80432C19.5895 2.80432 20.1352 3.46156 20.1352 4.40956C20.1352 6.51271 19.7767 8.88671 19.0876 11.4599C18.4344 9.01019 18.06 6.62822 18.06 4.40956H18.056Z"
                            fill="#ED8B3E"
                        />
                    </g>
                    <defs>
                        <clipPath id="clip0_60_32">
                            <rect width="38" height="45.0862" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
                <h1 className="mt-12 px-6 text-center text-lg font-bold text-white lg:text-4xl">
                    Alicia nace para ayudar a quienes lo han perdido todo, hoy y
                    mañana.
                </h1>
                <h2 className="mt-6 px-6 text-left text-base text-white lg:text-lg">
                    En estos momentos de dificultad tras la catástrofe de la
                    DANA, queremos ofrecer una manera de dar más allá de lo
                    urgente, porque la ayuda no termina cuando las cámaras se
                    van.
                    <br /> <br />
                    <b>
                        Alicia es un espacio solidario donde puedes donar
                        muebles, enseres y objetos del hogar a quienes han
                        sufrido la devastación en sus casas.
                    </b>
                    <br /> <br />
                    Nos inspiramos en las barracas valencianas para crear un
                    lugar de refugio y reconstrucción, una comunidad que seguirá
                    ahí cuando todo vuelva a la calma.
                    <br />
                </h2>
                <p className="mt-6 px-6 text-center text-base font-bold text-white lg:text-lg">
                    Únete a nosotros y ayúdanos a ayudar. Que nadie quede en el
                    olvido.
                </p>
            </main>
        </>
    );
}
