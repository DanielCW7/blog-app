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
        <div className="text-black p-10 m-auto">
                { 
                    isLoading ? <Loader /> : 
                    
                    <section className="max-w-3xl m-auto">
                        <div className="pt-6 text-black">
                            <Image src={data?.thumbnail ?? ""} width={1000} height={1000} className="max-w-full lg:max-w-3xl rounded-xl mb-6 mx-auto" style={{ objectFit: "cover"}}/>
                            <h2 className="text-3xl font-thin"> {data.topic} </h2>
                            
                            <div className="my-6">
                                <div>By: {data.author}</div>
                                <small> {data.date} </small>
                            </div>                            
                            <p> {data.content} </p>
                            {/* need a serizlizer to view rich text */}
                        </div>
                    </section>
                }
        </div>
    )
}

export default PostPage

  