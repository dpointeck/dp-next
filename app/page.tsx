import styles from "./index.module.scss";

export const metadata = {
    title: "Daniel Pointecker - software dev",
    description: "Hi there! I'm Daniel a software dev from 🇦🇹. Checkout posts around web development and software engineering plus all kinds of useful resources",
    alternates: {
        canonical: "https://www.daniel-pointecker.net"
    }
}

export default function IndexPage() {
    return (
        <>
            <link
                rel="canonical"
                href="https://www.daniel-pointecker.net"
            />
            <div className="container p-4 md:p-10 mx-auto relative overflow-hidden md:overflow-visible">
                <div className="relative">
                    <h1 className={`${styles.hi} font-mono`}>
                        <span className={styles.hi__wavy}>👋</span>
                        <span className={styles.hi__top}>Hi there I'm</span>
                        <br />
                        <span className={styles.hi__daniel}>daniel</span>
                        <br />
                        <span className={styles.hi__pointecker}>pointecker</span>
                        <div className={styles.bgTile} />
                    </h1>
                </div>
                <div className="max-w-3xl mx-auto mt-10 md:mt-16 relative z-30">
                    <p className="font-mono text-xl md:text-3xl leading-relaxed">
                        I'm a software developer from 🇦🇹 focused on frontend development.
                        This site is meant to be a collection of stuff I constantly forget
                        and have to search every time I need it. If here’s something helpful
                        for you feel free to grab it.
                    </p>
                </div>
            </div>
        </>
    );
}
