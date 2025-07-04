import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {Menu} from "@/components/";
import Head from "next/head";

export default function Home() {
    return (
<>
    <Head>
        <title> خانه | فروشگاه اومید</title>
    </Head>
        <main className="container">

            <Header />
            <Menu/>
            <Footer />
        </main>
</>
    );
}
