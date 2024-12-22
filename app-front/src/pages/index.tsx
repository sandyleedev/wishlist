import Home from "@/ui/page/Home"
import { GetServerSideProps } from "next"
import axios from "axios"

export const getServerSideProps: GetServerSideProps = async () => {
    const data = "sample"

    return {
        props: { data: data },
    }
}

export default Home