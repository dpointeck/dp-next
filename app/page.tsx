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
            <div>
                <div>
                    <h1>
                        <span>👋</span>
                        <span>Hi there I'm</span>
                        <br />
                        <span>daniel</span>
                        <br />
                        <span>pointecker</span>
                    </h1>
                </div>
                <div>
                    <p>
                        I'm an software developer from 🇦🇹 focused on frontend development.
                        This site is meant to be a collection of stuff I constantly forget
                        and have to search every time I need it. If here’s something helpful
                        for you feel free to grab it.
                    </p>
                </div>
            </div>
        </>
    );
}
