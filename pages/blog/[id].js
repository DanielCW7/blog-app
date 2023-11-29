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
                    
                    <div>
                        <Image src={data?.thumbnail ?? ""} width={1000} height={1000} className="h-48 max-h-48" style={{ objectFit: "cover"}}/>
                        <div className="p-6 text-black">
                            <span className="text-xl font-bold"> {data.topic} </span>
                            <p> {data.content} </p>
                            
                            <small className="flex flex-row justify-between">
                                <span>By: {data.author}</span>
                                <span> {data.date} </span>
                            </small>
                        </div>
                    </div>
                }
        </div>
    )
}

export default PostPage

  