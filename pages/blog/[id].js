import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Loader from "../../components/utils/loader";
import { getPost } from "../../sanity/sanity-utils";
import Image from "next/image";

const PostPage = (param) => {

    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState(null);
    const router = useRouter();
    
    console.log(param, router.query.id, data)


    useEffect(() =>  { 
        const fetchData = async () => {
            setLoading(true)
            try {
                const postData = await getPost(router.query.id)
                console.log(postData)

                setData(postData)
            } catch (err) {
                console.error(err)
            } finally {
                setLoading(false)    
            }            
        }

        router.query.id && fetchData() 
    }, [router.query.id])

    return (
        <div className="text-black">
                { 
                    isLoading ? <Loader /> : 
                    
                    <section className="p-12">
                        <Image src={data?.thumbnail ?? ""} width={1000} height={1000} className="max-h-48 rounded-xl" style={{ objectFit: "cover"}}/>
                        <div className="p-6 text-black">
                            <h2 className="text-3xl font-bold"> {data.topic} </h2>
                            <p> {data.content} </p>
                            
                            <small className="flex flex-row justify-between">
                                <span>By: {data.author}</span>
                                <span> {data.date} </span>
                            </small>
                        </div>
                    </section>
                }
        </div>
    )
}

export default PostPage

  