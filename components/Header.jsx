import Link from "next/link";
// import sprite from "/assets/icons/sprite.svg"

const Home = () => {
    return (
        <header>
            <Link href="/">
                <svg>
                    <use href="" />
                </svg>
                VocabBuilder
            </Link>
        </header>
    )
}

export default Home;