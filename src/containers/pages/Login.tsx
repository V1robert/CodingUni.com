import {motion} from "framer-motion";
import ExoUniversity from "../../assets/ExoUniversity.png";
import ButtonProdEner from "../components/common/ButtonProdEner.tsx";

export default function Login() {
    return (
        <div
            className="bg-surface font-body text-on-surface min-h-screen selection:bg-primary-fixed selection:text-on-primary-fixed">
            <main className="min-h-screen flex flex-col md:flex-row">

                {/* LEFT */}
                <section
                    className="relative w-full md:w-1/2 lg:w-3/5 bg-surface-container-low overflow-hidden flex items-center justify-center p-12">
                    <div className="absolute inset-0 z-0">
                        <img
                            src={ExoUniversity}
                            alt="ExoUniversity"
                            className="hidden w-full h-full object-cover opacity-90 md:block "
                        />
                        <div className="absolute inset-0 bg-primary/10 mix-blend-multiply"/>
                        <div
                            className="absolute inset-0 bg-gradient-to-tr from-surface via-transparent to-transparent opacity-60"/>
                    </div>

                    <div
                        className="absolute bottom-12 left-12 right-12 text-[10px] uppercase tracking-[0.3em] text-on-surface-variant font-medium">
                        Via Giulio Aristide Sartorio, 30, 00147 Roma RM
                    </div>
                </section>

                {/* RIGHT */}
                <section
                    className="w-full md:w-1/2 lg:w-2/5 bg-surface flex flex-col justify-center px-8 md:px-16 lg:px-24 py-12">
                    <motion.div
                        initial={{opacity: 0, y: 30}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.6, ease: "easeOut"}}
                        className="max-w-md w-full mx-auto"
                    >

                        {/* HEADER */}
                        <header className="mb-12">
                            <h1 className="font-headline text-3xl lg:text-4xl text-on-surface mb-3 italic">
                                Begin Your Learning Journey.
                            </h1>
                            <p className="text-on-surface-variant text-sm font-light leading-relaxed">
                                Welcome to ExoUniversity.
                            </p>
                        </header>

                        {/* FORM */}
                        <form className="space-y-8">
                            <div className="space-y-6">

                                {/* EMAIL */}
                                <Input label="Email" type="email" placeholder="e.student@exouni.edu"
                                       rightLink={undefined}/>

                                {/* PASSWORD */}
                                <Input
                                    label="Password"
                                    type="password"
                                    placeholder="••••••••"
                                    rightLink="Recovery"
                                />

                            </div>

                            {/* LOGIN BUTTON */}
                            <ButtonProdEner title={"Login"} name={"Login"}
                                            className="w-full bg-blue-600 text-white py-4 rounded-5 font-medium text-sm uppercase tracking-[0.15em] shadow-md hover:bg-blue-700 hover:shadow-lg active:scale-[0.98] transition-all"
                            >

                            </ButtonProdEner>

                            {/* DIVIDER */}
                            <div className="relative py-4 flex items-center gap-4">
                                <div className="flex-grow h-[1px] bg-surface-container-high"/>
                                <span
                                    className="text-[10px] uppercase tracking-widest font-medium text-on-surface-variant">
                  OR CONNECT VIA
                </span>
                                <div className="flex-grow h-[1px] bg-surface-container-high"/>
                            </div>

                            {/* GOOGLE */}
                            <div className="flex justify-center">
                                <button
                                    type="button"
                                    className="flex items-center justify-center gap-3 py-4 px-8 rounded-xl bg-surface-container-high hover:bg-surface-container-highest transition-all hover:scale-[1.02]"
                                >
                  <span className="material-symbols-outlined text-[18px]">
                    cloud_queue
                  </span>
                                    <span className="text-[11px] uppercase tracking-wider font-bold">
                    Google
                  </span>
                                </button>
                            </div>

                        </form>

                        {/* FOOTER */}
                        <footer
                            className="mt-16 pt-8 border-t border-surface-container-low flex justify-between items-baseline">
                            <p className="text-[10px] leading-none text-on-surface-variant/60 uppercase tracking-widest">
                                Not yet registered?
                            </p>
                            <a
                                href="#"
                                className="text-[10px] leading-none uppercase tracking-widest font-bold text-primary hover:opacity-70"
                            >
                                Create an account
                            </a>
                        </footer>

                    </motion.div>
                </section>

            </main>
        </div>
    );
}

function Input({label, type, placeholder, rightLink}: any) {
    return (
        <div className="relative group">
            <div className="flex justify-between items-end mb-2 ml-1">
                <label className="text-[10px] uppercase tracking-widest font-bold text-on-surface-variant">
                    {label}
                </label>
                {rightLink && (
                    <a
                        href="#"
                        className="text-[10px] uppercase tracking-widest font-bold text-primary hover:opacity-70"
                    >
                        {rightLink}
                    </a>
                )}
            </div>

            <div className="flex">
                <div className="w-[2px] bg-outline-variant group-focus-within:bg-primary transition-colors"/>
                <input
                    type={type}
                    placeholder={placeholder}
                    className="w-full bg-surface-container-low border-none focus:ring-0 py-4 px-4 text-sm font-medium placeholder:text-slate-400 outline-none"
                />
            </div>
        </div>
    );
}
