import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Loader from "../../components/utils/loader";
import { getPost } from "../../sanity/sanity-utils";
import Image from "next/image";
import { PortableText } from "@portabletext/react";

const PostPage = (param) => {

    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState(null);
    const router = useRouter();
    
    console.log(param, router.query.id, data)

    const components = {
        block: {
            h3: ({children}) => <h3 className="font-semibold text-xl mt-10 mb-2">{children}</h3>,
            strong: ({children}) => <strong className="text-bold">{children}</strong>,
            p: ({children}) => <p className="text-red-900">{children}</p>
        },
        // types: {
        //     code: 
        // }
    }

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
                            <h2 className="text-3xl font-bold"> {data.topic} </h2>
                            
                            <div className="my-6 flex flex-row">
                                {/* need a stock profile image just in case */}
                                <div>
                                    <Image src={data?.avatar ?? ""} width={100} height={100} className="profilePic"/>
                                </div>
                                <div className="flex flex-col justify-center m-2">
                                    <p className="text-lg">By: {data.author}</p>
                                    <small> {data.date} </small>                                    
                                </div>

                            </div>                            
                            <PortableText value={data.content} components={components}/>

                        </div>
                    </section>
                }
        </div>
    )
}

export default PostPage

  